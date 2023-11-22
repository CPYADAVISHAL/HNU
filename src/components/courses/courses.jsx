import React from 'react';
import "./courses.css";
function Courses(props){
    return <div className='course_props'>{props.name}</div>
   
}
export default function courses(props) {
  return (
    <div className='course_flex'>
  <div>  <Courses name="Btech" /> </div>
  <div> <Courses name="BSc" /> </div>
  <div><Courses name="BED" /> </div>
  <div> <Courses name="Btech" /> </div>
  <div>  <Courses name="Btech" /> </div>
  <div> <Courses name="BSc" /> </div>
  <div><Courses name="BED" /> </div>
  <div> <Courses name="Btech" /> </div>
    </div>
  )
}
