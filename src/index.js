import React from "react";
import ReactDOM from 'react-dom';
import "./index.css";


const currDate= new Date().toLocaleDateString();
const currTime= new Date().toLocaleTimeString();

ReactDOM.render(
  <>
  <h1 className="head">Task 3:- To Show Current Date and Time </h1><br/><br/><hr/>
  <div className="body1">
  <h2>Today's Date is := {currDate} </h2>
  
  </div>
  <div className="body2">
  <h2>Current Time is := {currTime} </h2>
  <h2 id="gmt">(Indian Standard Time GMT +5:30 Hours)</h2>

  </div>
  </>,
  
    document.getElementById("root")
);



// ReactDOM.render(
//   <>
//   <h1 contentEditable="true">Om Kadu</h1>
//   <img src="https://picsum.photos/200/300" alt="Lorem "/> 
//   <a href="https://www.linkedin.com/in/om-kadu-53305425a" target="_link">
//   <img src="https://picsum.photos/300/300" alt="Lorem "/> </a> 
//    </>
//   ,document.getElementById("root2")
// );


