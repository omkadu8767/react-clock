import React from "react";
import ReactDOM from 'react-dom';
// import "./index.css";


const currDate= new Date().toLocaleDateString();
const currTime= new Date().toLocaleTimeString();



 const head ={
  color: 'blue',
  fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
  fontWeight: 'bolder',
  textAlign: 'center',
  textTransform: 'capitalize',
  textShadow: '0px 2px 4px red',
  fontFamily: '"Josefin Sans", sans-serif',
 };

 const body1={
  display:'flex',
  alignItems:'center',
  justifyContent: 'center',
  height: '200px',
  fontFamily: '"Josefin Sans", sans-serif',
 }

 const body2={
  display:'block',
  alignItems:'center',
  justifyContent: 'center',
  marginLeft: '580px',
  fontFamily: '"Josefin Sans", sans-serif',
 }
 
 const gmt={
  marginLeft: '65px',
  fontFamily: '"Josefin Sans", sans-serif',
 }
ReactDOM.render(
  <>
  <h1 style={head}>Task 3:- To Show Current Date and Time </h1><br/><br/><hr/>
  <div style={body1}>
  <h2>Today's Date is := {currDate} </h2>
  
  </div>
  <div style={body2}>
  <h2>Current Time is := {currTime} </h2>
  <h2 id="gmt">(Indian Standard Time GMT +5:30 Hours)</h2>

  </div>
  </>,
  
    document.getElementById("root")
);

// const img1="https://picsum.photos/200/300"

// ReactDOM.render(
//   <>
//   <h1 contentEditable="true">Om Kadu</h1>
//   <img src={img1} alt="Lorem "/> 
//   <a href="https://www.linkedin.com/in/om-kadu-53305425a" target="_link">
//   <img src="https://picsum.photos/300/300" alt="Lorem "/> </a> 
//    </>
//   ,document.getElementById("root2")
// );


