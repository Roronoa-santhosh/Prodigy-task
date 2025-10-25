import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Home = () => {
   const WORK_TIME = (Number(localStorage.getItem("pomodoro")) || 25)*60 ;
  const BREAK_TIME =  (Number(localStorage.getItem("rest")) || 5)*60; 
  const isAudio = localStorage.getItem("cheack") === "true";

  const [timeLeft, setTimeLeft] = useState(WORK_TIME);

  const [isRunning, setIsRunning] = useState(false);
  const [isWork, setIsWork] = useState(true);

  const timerRef = useRef(null);
  const audioRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }

    return () => clearInterval(timerRef.current);
  }, [isRunning]);

  useEffect(() => {
    if (timeLeft === 0  ) {
        if (isAudio && audioRef.current) {
      audioRef.current.play(); // play alarm
      alert(isWork ? "Work session finished! Take a break." : "Break over! Time to focus.");
      audioRef.current.pause(); // stop alarm immediately
      audioRef.current.currentTime = 0; // reset to start
    }
      
      if (isWork) {
        setIsWork(false);
        setTimeLeft(BREAK_TIME);
      } else {
        setIsWork(true);
        setTimeLeft(WORK_TIME+1);
        handleStop()
      }
    }
  }, [timeLeft, isWork]);
  useEffect(() => {
  const handleBeforeUnload = (e) => {
    if (isRunning) {
      e.preventDefault();
      e.returnValue = ""; // required for Chrome to show the warning
    }
  };

  window.addEventListener("beforeunload", handleBeforeUnload);

  return () => {
    window.removeEventListener("beforeunload", handleBeforeUnload);
  };
}, [isRunning]);


  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setIsWork(true);
    setTimeLeft(WORK_TIME);
  };

  return (
     <div>

        <div className="bg-gradient-to-r from-blue-200 to-cyan-200 border-gray-500 border-8 rounded-3xl p-10 pt-10 ">
<div className="flex justify-between ">
         <h1 className="text-4xl font-semibold flex  justify-center items-center mb-10 ">{isWork ? "Focus Timer" : "Break Time"}</h1>
 <Link to="/edit">
 <div className="mt-2  " >
    <svg   xmlns="http://www.w3.org/2000/svg" width="24 " height="24" fill="red" class="bi bi-gear " viewBox="0 0 16 16">
  <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0"/>
  <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z"/>
</svg>
</div>
 </Link>        

         

</div>

         <hr className="w-8 bg-black " />
      <div className="text-8xl font-mono mb-20">{formatTime(timeLeft)}</div>
      <div className="space-x-4">
        <button
          className="px-6 py-2 block w-full text-black font-semibold border-gray-500 border-[4px]   text-3xl rounded hover:border-gray-800"
          onClick={handleStart}
        >
           Start
        </button>

<div className="flex justify-between mt-5 pr-4">

  <button
          className="px-6 py-2 block  text-black font-semibold border-gray-500 border-[4px]   text-2xl rounded hover:border-gray-800"
          onClick={handleStop}
        >
           Stop
        </button>
 <button
          className="px-6 py-2 block  text-black font-semibold border-gray-500 border-[4px]   text-2xl rounded hover:border-gray-800"
          onClick={handleReset}
        >
          Reset
        </button>

</div>
       
      </div>
      <audio ref={audioRef} src="/perfect_alarm.mp3" />
      </div>
     


    </div>
  )
}

export default Home