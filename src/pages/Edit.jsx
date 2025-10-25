import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';



const Edit = () => {
 const [pomodoro, setPomodoro] = useState(25);
 const [rest, setRest] = useState(5);
 const[cheack , setCheaked] = useState(true);

 localStorage.setItem("pomodoro", pomodoro);
localStorage.setItem("rest", rest);
localStorage.setItem("cheack", cheack);

  return (
   <div className="bg-gradient-to-r from-blue-200 to-cyan-200 p-12 rounded-xl ">
<form action="">

    <h1 className=' text-center font-semibold text-gray-600'>SETTING</h1>
        <hr className='border-black m-5 ' />
        <h1 className='font-semibold text-xl' >Time(minutes)</h1>
        <div className='flex mt-3 gap-3'>
            <div className="flex flex-col ">
                <label htmlFor="quantity" className="font-medium text-gray-500">
        Pomdoro
      </label>

      <input
        id="quantity"
        type="number"
        min="0"
        max="100"
        step="1"
        value={pomodoro}
        onChange={(e) => setPomodoro(Number(e.target.value))}
        className="border border-gray-300 rounded p-2 w-24 focus:outline-blue-500"
      />

            </div>
            <div className="flex flex-col">

                 <label htmlFor="quantity" className="font-medium text-gray-500">
        Break
      </label>

      <input
        id="quantity"
        type="number"
        min="0"
        max="100"
        step="1"
        value={rest}
        onChange={(e) => setRest(Number(e.target.value))}
        className="border border-gray-300 rounded p-2 w-24 focus:outline-blue-500"
      />


            </div>
            
        </div>

    <div className="flex gap-3 mt-4 justify-between items-center">
        <h1 className='font-semibold text-xl'>Alarm sound</h1>
        <div className="relative inline-block w-11 h-5">
 <input
  id="switch-component-1"
  type="checkbox"
  className="peer appearance-none w-11 h-5 bg-slate-800 rounded-full checked:bg-green-500 cursor-pointer transition-colors duration-300"
  checked={cheack}
  onChange={() => setCheaked(!cheack)}
/>

  <label htmlFor="switch-component-1" className="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-slate-800 cursor-pointer">
  </label>
</div>


    </div>

    <div className="block relative p-5">

      <Link to={"/"}>
       <button className='absolute left-[30%] top-10 bg-black text-white px-8 py-2 rounded-xl'>ok</button>

      </Link> 
    </div>


</form>
        
      

      
    </div>
  );
}

export default Edit