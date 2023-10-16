import React, { useState } from "react";
import arrowImg from "./assets/icon-arrow.svg";
import "./App.css";

function App() {
  const [update, setUpdate] = useState("--");

  return (
    <div className="font-Poppins bg-offWhite h-[100vh] flex flex-col justify-center items-center">
      <div className="bg-white p-5">
        <form className="flex gap-2 justify-between items-center mb-[3rem]" action="">
          <div className="block">
            <label htmlFor="" className="block text-xs font-semibold">
              DAY
            </label>
            <input className="w-[5rem] outline-none rounded-md border-lightGrey focus:border-Purple py-2 pl-4 pr-[2.5rem] border font-bold text-[1.3rem] placeholder:text-[1.1rem] placeholder:pr-[1.6rem]" type="number" placeholder="DD" />
          </div>

          <div>
            <label htmlFor="" className="block text-xs font-semibold">
              MONTH
            </label>
            <input className="w-[5rem] outline-none rounded-md border-lightGrey focus:border-Purple py-2 pl-4 pr-[2.5rem] border font-bold text-[1.3rem] placeholder:text-[1.1rem]" type="number" placeholder="MM" />
          </div>

          <div>
            <label htmlFor="" className="block text-xs font-semibold">
              YEAR
            </label>
            <input className="w-[5rem] outline-none rounded-md border-lightGrey focus:border-Purple py-2 pl-4 pr-[1rem] border font-bold text-[1.3rem] placeholder:text-[1.1rem] placeholder:pl-[-10r" type="number" placeholder="YYYY" />
          </div>
        </form>
        <div className="relative flex items-center justify-center mb-12">
          <hr className="border-0 h-[0.1rem] bg-lightGrey w-full"/>
          <img 
           className="absolute bg-Purple rounded-full h-[3rem] w-[3rem] py-3"
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
