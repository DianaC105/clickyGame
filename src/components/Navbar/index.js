import React from "react";
import "./style.css";

const Navbar = props => (
   
    <nav className="f6 fw6 ttu tracked">
      
      {/* <p className="" >Status: {props.status}</p> */}
      <p className="score" title="Score">Score: {props.currentScore}</p>
      <p className="topScore" title="Contact">Top Score: {props.topScore}</p>
    </nav>
  
)



export default Navbar;
