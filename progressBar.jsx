import React from "react";
import { useState } from "react";

function progressBar() {


  const [val, setVal] = useState(0);

  const container = {
    width: '70%',
    margin: 'auto',

  }
  const progressBarBox = {
    height: '30px',
    width: '100%',
    background: '#f0f0f0',
    marginBottom: '10px',
    borderRadius: '10px',
    position: 'relative',
    top: 0,
    left: 0,
    overflow: 'hidden',
  }
  const progressBar = {
    width: `${val}%`,
    height: '100%',
    background: 
      val < 40 ? 'red' : val < 80 ? 'orange' : 'green'
    ,
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
    transition: 'width 0.3s ease-in-out',
  }
  const progressText = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    zIndex: 2,
  }
  const btn = {
    width: '40px',
    margin: '0 10px 0 0 ',
    padding: '5px',
    borderRadius: '4px',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
  const inc = () => {
    setVal(prev => Math.min(prev + 10, 100))
  }
  const dec = () => {
    setVal(prev => Math.max(prev - 10, 0))
  }
  console.log(val);

  return (
    <div style={container}>
      <h1>Progress Bar</h1>
      <div style={progressBarBox}>
        <div style={progressBar}></div>
        <h3 style={progressText}> {val} %</h3>
      </div>
      <div style={{ display: 'flex', height: '20px' }}>
        <button style={btn}
          onClick={inc}
        >
          +10%
        </button>
        <button style={btn}
          onClick={dec}
        >
          -10%
        </button>
      </div>
    </div>
  );
}

export default progressBar;
