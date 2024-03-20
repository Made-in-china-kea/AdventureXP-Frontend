// Subpage.js
import React from "react";
import { Button } from "./Button";
import "./Subpage.css"; // Importing CSS for styling

const Subpage = ({ title, content }) => {
  return (
    <div className="subpage-container">
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
};

export default Subpage;
