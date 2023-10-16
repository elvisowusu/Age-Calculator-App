import React, { useState,useReducer } from "react";
import arrowImg from "./assets/icon-arrow.svg";
import "./App.css";

function App() {

  const [day,setDay]=useState('--');
  const [month,setMonth] = useState('--');
  const [year, setYear] = useState('--');
  const handleDay=(e)=>{
    setDay(26-(e.target.value));
  }
  const handleMonth=(e)=>{
    setMonth(10-(e.target.value));
  }
  const handleYear=(e)=>{
    setYear(2023-(e.target.value));
  }


  return (
    <div className="font-Poppins bg-offWhite h-[100vh] flex flex-col justify-center items-center">
      <div className="bg-white p-6 rounded-3xl rounded-br-[5.5rem]">
        <form className="flex gap-2 justify-between items-center mb-[3rem] mt-5" action="">
          <div className="block">
            <label htmlFor="" className="block text-xs text-smokeyGrey font-semibold mb-1 tracking-widest">
              DAY
            </label>
            <input 
              className="w-[5rem] outline-none rounded-md border-lightGrey text-offBlack focus:border-Purple py-2 pl-4 pr-[2.5rem] border font-bold text-[1.3rem] placeholder:text-[1.1rem] placeholder:pr-[1.6rem]"
              type="number" 
              placeholder="DD"
              onChange={handleDay}
            />
          </div>

          <div>
            <label htmlFor="" className="block text-xs text-smokeyGrey font-semibold mb-1 tracking-widest">
              MONTH
            </label>
            <input 
              className="w-[5rem] outline-none rounded-md border-lightGrey text-offBlack focus:border-Purple py-2 pl-4 pr-[2.5rem] border font-bold text-[1.3rem] placeholder:text-[1.1rem] placeholder:pr-[2rem]"
              type="number"
              placeholder="MM"
              onChange={handleMonth}
            />
          </div>

          <div>
            <label htmlFor="" className="block text-xs text-smokeyGrey font-semibold mb-1 tracking-widest">
              YEAR
            </label>
            <input 
              className="w-[5rem] outline-none rounded-md border-lightGrey text-offBlack focus:border-Purple py-2 pl-4 pr-[1rem] border font-bold text-[1.3rem] placeholder:text-[1.1rem]" 
              type="number"
              placeholder="YYYY"
              onChange={handleYear}
            />
          </div>
        </form>
        <div className="relative flex items-center justify-center mb-12">
          <hr className="border-0 h-[0.1rem] bg-lightGrey w-full"/>
          <button className="absolute bg-Purple rounded-full hover:bg-offBlack active:bg-Purple focus:bg-offBlack">
          <img 
           className={`rounded-full h-[3rem] w-[3rem] py-3 `}
           src={arrowImg}
           alt=""
          />
          </button>
        </div>
        <div className="text-[3rem] leading-[3.2rem] italic font-black mb-[1.5rem] text-offBlack">
          <p><span className="text-Purple">{year}</span> years</p>
          <p><span className="text-Purple">{month}</span> months</p>
          <p><span className="text-Purple">{day}</span> days</p>
        </div>
      
      </div>
    </div>
  );
}

export default App;
