import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'

// Define your components/pages
import Home from './components/pages/Home'
import Navbar from './NavHeader';
// import Biking from './components/pages/activityPages/biking.tsx';
// import Minigolf from './components/pages/activityPages/Minigolf.tsx';
// import gokart from './components/pages/activityPages/gokart.tsx';
// import sumo from './components/pages/activityPages/sumo.tsx';
// import Paintball from './components/pages/activityPages/paintball.tsx';

//import Sumo from './components/pages/activityPages/sumo.tsx'

function App() {
  return (
  <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/minigolf" element={<Minigolf />} />
        <Route path="/gokart" element={<GoKart />} />
        <Route path="/Paintball" element={<Paintball />} />
        <Route path="/sumo" element={<Sumo />} />
        <Route path="/biking" element={<Biking />} /> */}
        {/* <Route path="/booking" element={<Booking />} /> */}
        
       </Routes>
   </>
  )
}

export default App
