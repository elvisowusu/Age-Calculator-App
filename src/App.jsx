import React, { useState } from "react";
import arrowImg from "./assets/icon-arrow.svg";
import "./App.css";

function App() {
  return (
    <div className="flex flex-col justify-center items-center font-Poppins bg-offWhite">
      <div className="bg-white">
        
          <form className="flex" action="">
            <div className="block">
              <label htmlFor="" className="block">DAY</label>
              <input type="number" placeholder="DD" />
            </div>

            <div>
              <label htmlFor="" className="block">MONTH</label>
              <input type="number" placeholder="MM" />
            </div>

            <div>
              <label htmlFor="" className="block">YEAR</label>
              <input type="text" placeholder="YYYY" />
            </div>
          </form>
        
        <div></div>
      </div>
      {/* <img src={arrowImg} alt="" className='bg-Purple hover:bg-offBlack'/> */}
    </div>
  );
}

export default App;
