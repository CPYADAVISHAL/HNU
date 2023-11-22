import React from "react";
import { useTypewriter, Cursor } from 'react-simple-typewriter';

import "./About.css";
import '@fontsource/roboto/400.css';
import ButtonUsage from "../../components/Button/Button";

function About(props) {
  const [typeEffect] = useTypewriter({
    words: ['React Dev', 'Mobile Dev', 'Next js Dev'],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40
  })
  return (
    <>
      <h1>
        I am a
        <span>
          {
            typeEffect
          }
        </span>
      </h1>
      <div className="about_card">

        <div className="about_image_circle">
          <img src={props.img} className="about_image" />
        </div>
        <div className="about_image_head">{props.name}</div>
        <div className="about_image_head">{props.desg}</div>
        <div className="about_image_head">{props.no}</div>

        <div className="about_msg">"{props.msg}"</div>
      </div>
    </>
  );
        }
  export default function about(props) {

    return (
      <div className="aboutpage">
        <div className="about_mainhead"> ABOUT</div>


        <div>
          <About
            img="../image/hnsingh.jpeg"
            name="HARI NARAYAN SINGH YADAV"
            desg="CHAIRMAN"
            no="XXXXXXXXX"
            msg="life is strugle,strugle is life"
          />
          <About
            img="../image/hnsingh.jpeg"
            name="RAM NARAYAN SINGH YADAV"
            desg="DIRECTER"
            no="XXXXXXXXX"
            msg="life is strugle,strugle is life"
          />
          <About
            img="../image/pappu.jpeg"
            name="SATYA PRAKASH SINGH YADAV"
            desg="MANAGING DIRECTER "
            no="XXXXXXXXX"
            msg="life is strugle,strugle is life"
          />
          <About
            img="../image/abhi.jpeg"
            name="ABHISHEK SINGH YADAV"
            desg="MANAGING DIRECTER"
            no="XXXXXXXXX"
            msg="life is strugle,strugle is life"
          />
          <About
            img="../image/prem.jpeg"
            name="PREM PRAKASH SINGH YADAV"

            no="XXXXXXXXX"
            msg="life is strugle,strugle is life life is strugle,strugle is life"
          />

        </div>
      </div>
    );
  }
