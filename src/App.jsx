import React, { useState } from "react";
import arrowImg from "./assets/icon-arrow.svg";
import "./App.css";

function App() {
  const [update, setUpdate] = useState("--");

  return (
    <div className="font-Poppins bg-offWhite h-[100vh] flex flex-col justify-center items-center">
        <div className="bg-white">
        <form className="flex" action="">
          <div className="block">
            <label htmlFor="" className="block">
              DAY
            </label>
            <input className="w-2" type="number" placeholder="DD" />
          </div>

          <div>
            <label htmlFor="" className="block">
              MONTH
            </label>
            <input className="w-2" type="number" placeholder="MM" />
          </div>

          <div>
            <label htmlFor="" className="block">
              YEAR
            </label>
            <input className="w-2" type="number" placeholder="YYYY" />
          </div>
        </form>
        <div className="relative flex items-center justify-center">
          <hr className="border-0 h-[0.1rem] bg-lightGrey w-full"/>
          <img 
           className="absolute bg-Purple rounded-full h-10 w-10 py-3"
           src={arrowImg}
           alt=""
          />
        </div>
        <div className="text-[2rem]">
          <p><span>{update}</span>years</p>
          <p><span>{update}</span>months</p>
          <p><span>{update}</span>days</p>
        </div>
      
        </div>
    </div>
  );
}

export default App;
