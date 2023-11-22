import React from 'react'
import { useState } from "react";
import "./Navbar.css";
import MENU from "../../components/hambergermenu/menu";
export default function Navbar() {
    const [btnState,setBtnState] = useState(false);
    const hambergermenu = () => {
    
     setBtnState(btnState => !btnState);
   
    };
    const handleClose = () => {
      setBtnState(btnState => !btnState);
    }
     let toggleClassCheck = btnState ? 'show_hmmenu_show': 'null';

  return (
    <div>
      <div className="navbar_flex">
          <div className="landingpage_logo">
            <img src="/image/hnlogo.png" alt="logo" className="lp_logo" />
          </div>
          <div className="navbar_heading">HN UNIVERSITY</div>
          <div
           className="hmmenu"
            id="cpmagic" 
            onClick={hambergermenu}>
            <MENU />
          </div>
        </div>
        <div className={`show_hmmenu ${toggleClassCheck}`}>
          <div className='resp_navbar'>HOME</div>
          <div className='resp_navbar'>ABOUT</div>
          <div className='resp_navbar'>ATAMA PRAKASH</div>
          <div className='resp_navbar'>MALTI</div>
          <div className='resp_navbar'>CHAUDARI</div>
          <div  className='resp_navbar'onClick={handleClose}>X</div>
        </div>
    </div>
  )
}
