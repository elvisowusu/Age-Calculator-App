import React, { useState } from "react";
import arrowImg from "./assets/icon-arrow.svg";
import "./App.css";

function App() {
  const [update, setUpdate] = useState("--");

  return (
    <div className="font-Poppins bg-offWhite h-[100vh] flex flex-col justify-center items-center">
      <div className="bg-white p-5">
        <form className="flex gap-2 justify-between items-center mb-4" action="">
          <div className="block">
            <label htmlFor="" className="block text-xs font-semibold">
              DAY
            </label>
            <input className="w-[6rem] outline-none rounded-md border-lightGrey focus:border-Purple py-1 pl-4 pr-[3.1rem] border font-bold text-[1.6rem] placeholder:text-[1.3rem]" type="number" placeholder="DD" />
          </div>

          <div>
            <label htmlFor="" className="block text-xs font-semibold">
              MONTH
            </label>
            <input className="w-[6rem] outline-none rounded-md border-lightGrey focus:border-Purple py-1 pl-4 pr-[3.1rem] border font-bold text-[1.6rem] placeholder:text-[1.3rem]" type="number" placeholder="MM" />
          </div>

          <div>
            <label htmlFor="" className="block text-xs font-semibold">
              YEAR
            </label>
            <input className="w-[6rem] outline-none rounded-md border-lightGrey focus:border-Purple py-1 pl-4 pr-5 border font-bold text-[1.6rem] placeholder:text-[1.3rem]" type="number" placeholder="YYYY" />
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
