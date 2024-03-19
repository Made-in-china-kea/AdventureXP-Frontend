import React from 'react';
import '.assets/styles/Sidebar.css'; 

function Sidebar({ isOpen }) {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <h2>Sidebar Menu</h2>
      <ul>
        <li>Home</li>
        <li>Paintball</li>
        <li>Biking</li>
        <li>sumo wrestling</li>
        <li>hjælp</li>
        <li>Services</li>
        <li>Contact</li>
        <li>Login</li>
      </ul>
    </div>
  );
}

export default Sidebar;
