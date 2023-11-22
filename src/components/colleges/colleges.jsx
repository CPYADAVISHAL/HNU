import React from "react";
import "./colleges.css";
function College(props) {
  return (
    <div className="college_card">
      <div className="college_image_circle">
        <img src={props.img}  className="college_image"/>
      </div>
      <div className="college_image_head">{props.name}</div>
      <div className="college_image_head">{props.no}</div>
      <div className="college_msg">"{props.msg}"</div>
    </div>
  );
}
export default function college(props) {
  return (
    <div className="collegepage">
    <div className="college_mainhead"> College</div>
      <div>
        <College 
           img = "../image/aatma.jpeg"
           name="AATMA PRAKASH AADARSH MAHAVIDAYALAY " 
            no="XXXXXXXXX"
            msg="life is strugle,strugle is life"
           />
            <College 
           img = "../image/chaudary.jpeg"
           name="CHAUDARI CHARAN SINGH MAHAVIDYALAY" 
            no="XXXXXXXXX"
            msg="life is strugle,strugle is life"
           />
            <College 
           img = "../image/malti.jpeg"
           name="MALTI MAHILA MAHAVIDYALAY" 
            no="XXXXXXXXX"
            msg="life is strugle,strugle is life"
           />
            <College 
           img = "../image/aatma.jpeg"
           name="HARI NARAYAN COLLEGE" 
            no="XXXXXXXXX"
            msg="life is strugle,strugle is life life is strugle,strugle is life"
           />
               <College 
           img = "../image/aatma.jpeg"
           name="SHREE SARVAJEET SINGH INTER COLLEGE" 
            no="XXXXXXXXX"
            msg="life is strugle,strugle is life life is strugle,strugle is life"
           />
           
      </div>
    </div>
  );
}
