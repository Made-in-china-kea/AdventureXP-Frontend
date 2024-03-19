
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Login from "./security/Login";
import Logout from "./security/Logout";
import ReservationForm from "./components/common/reservationForm";
import Layout from "./Layout";

import Home from './components/pages/Home'
import Navbar from './NavHeader';
// import Biking from './components/pages/activityPages/biking.tsx';
// import Minigolf from './components/pages/activityPages/Minigolf.tsx';
// import gokart from './components/pages/activityPages/gokart.tsx';
// import sumo from './components/pages/activityPages/sumo.tsx';
// import Paintball from './components/pages/activityPages/paintball.tsx';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home/>} />


        <Route path="/reservation" element={<ReservationForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<h2>Not Found</h2>} />
      </Routes>
    </Layout>
  );
}

export default App
