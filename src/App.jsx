import React, { useState,useReducer, useEffect } from "react";
import {useForm} from 'react-hook-form';
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import arrowImg from "./assets/icon-arrow.svg";
import "./App.css";

function App() {

  const [day,setDay]=useState('--');
  const [month,setMonth] = useState('--');
  const [year, setYear] = useState('--');
  const [currentDate,setCurrentDate] =useState(new Date);

  const schema =yup.object().shape({
    DD:yup.number().positive().integer().min(0).max(31).required(),
    MM:yup.number().positive().integer().min(1).max(12).required(),
    YYYY:yup.number().positive().integer().min(0).max(2023).required(),
  })
  const {register,handleSubmit,formState:{errors}}=useForm({
    resolver: yupResolver(schema),
  });
  

  const onSubmit=(data)=>{
    setCurrentDate(new Date());
    setDay(currentDate.getDate()-data.DD);
    setMonth(currentDate.getMonth()-data.MM);
    setYear(currentDate.getFullYear()-data.YYYY)
    // console.log(data.DD);
    // console.log(data.MM);
    // console.log(data.YYYY);
    // console.log(currentDate.getDate());
    // console.log(currentDate.getMonth()+1);
    // console.log(currentDate.getFullYear());
  }

  return (
    <div className="font-Poppins bg-offWhite h-[100vh] flex flex-col justify-center items-center">
      <div className="bg-white p-6 rounded-3xl rounded-br-[5.5rem]">
        <form onSubmit={handleSubmit(onSubmit)} >
          <div
           className="flex gap-2 justify-between items-center mb-[3rem] mt-5"   
          >

          <div className="block">
            <label htmlFor="" className="block text-xs text-smokeyGrey font-semibold mb-1 tracking-widest">
              DAY
            </label>
            <input 
              className="w-[5rem] outline-none rounded-md border-lightGrey text-offBlack focus:border-Purple py-2 pl-3 pr-[1.65rem] border font-bold text-[1.3rem] placeholder:text-[1.1rem] placeholder:pr-[1.6rem]"
              type="number"
              placeholder="DD"
              {...register("DD")}
            />
            <p>{errors.DD?.message}</p>
          </div>

          <div>
            <label htmlFor="" className="block text-xs text-smokeyGrey font-semibold mb-1 tracking-widest">
              MONTH
            </label>
            <input 
              className="w-[5rem] outline-none rounded-md border-lightGrey text-offBlack focus:border-Purple py-2 pl-3 pr-[1.7rem] border font-bold text-[1.3rem] placeholder:text-[1.1rem] placeholder:pr-[2rem]"
              type="number"
              placeholder="MM"
              {...register("MM")}
            />
            <p>{errors.MM?.message}</p>
          </div>

          <div>
            <label htmlFor="" className="block text-xs text-smokeyGrey font-semibold mb-1 tracking-widest">
              YEAR
            </label>
            <input 
              className="w-[5rem] outline-none rounded-md border-lightGrey text-offBlack focus:border-Purple py-2 pl-3 pr-[0.2zaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaarem] border font-bold text-[1.3rem] placeholder:text-[1.1rem]" 
              type="number"
              placeholder="YYYY"
              {...register("YYYY")}
            />
            <p>{errors.YYYY?.message}</p>
          </div>
          </div>
        
        <div className="relative flex items-center justify-center mb-12">
          <hr className="border-0 h-[0.1rem] bg-lightGrey w-full"/>
          <button 
            className="absolute bg-Purple rounded-full hover:bg-offBlack active:bg-Purple focus:bg-offBlack"
            >
              <img 
                className={`rounded-full h-[3rem] w-[3rem] py-3 `}
                src={arrowImg}
                alt=""
              />
          </button>
        </div>
        </form>
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
