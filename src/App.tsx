import { Route, Routes } from 'react-router-dom' // Corrected imports
import './App.css'
import Login from './security/Login'
import Logout from './security/Logout'
import ReservationForm from './components/common/reservationForm'
import Layout from './Layout'

import Home from './components/pages/Home'
import Biking from './components/pages/activityPages/biking'
import Minigolf from './components/pages/activityPages/minigolf.tsx';
import Gokart from './components/pages/activityPages/gokart.tsx';
import Sumo from './components/pages/activityPages/sumo.tsx';
import Paintball from './components/pages/activityPages/paintball.tsx';

function App() {
  return (
    <Layout>
      <Routes>
    
        
        <Route path="/" element={<Home />} />
    
         <Route path="/minigolf" element={<Minigolf />} />
          <Route path="/gokart" element={<Gokart />} />
          <Route path="/paintball" element={<Paintball />} />
          <Route path="/sumo" element={<Sumo />} /> 
        <Route path="/biking" element={<Biking />} />
        <Route path="/reservation" element={<ReservationForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<h2>Not Found</h2>} />
      </Routes>
    </Layout>
  )
}

export default App
