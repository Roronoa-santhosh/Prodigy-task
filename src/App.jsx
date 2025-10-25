import React from 'react'
import Home from './pages/home';
import Edit from './pages/Edit';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


const App = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-amber-200 to-yellow-500">
      <Router>
    
       

      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edit" element={<Edit />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App
