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
    DD:yup
      .number('Requires numeric values')
      .typeError('Required')
      .required('This field is required'),

    MM:yup
      .number('Requires numeric values')
      .typeError('Required')
      .required('This field is required'),

    YYYY:yup
      .number('Requires numeric values')
      .typeError('Required')
      .required('This field is required'),
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
      <div className="bg-white p-6 sm:px-8 rounded-3xl rounded-br-[5.5rem] sm:rounded-br-[8rem] md:rounded-br-[9rem]">
        <form onSubmit={handleSubmit(onSubmit)} >
          <div
           className="flex gap-2 sm:gap-3 md:gap-6 justify-between sm:justify-start items-center mt-5 "   
          >

          <div className="block">
            <label htmlFor="" className={`block text-xs ${errors.DD?'text-lightRed':''} text-smokeyGrey font-semibold mb-1 tracking-widest`}>
              DAY
            </label>
            <input 
              className={`w-[5rem] sm:w-[6.5rem] md:w-[7.6rem] outline-none rounded-md ${errors.DD?'border-lightRed focus:border-lightRed':''} border-lightGrey text-offBlack focus:border-Purple py-2 sm:py-[0.4rem] md:py-[0.2rem] pl-3 pr-[1.5rem] sm:pr-[2.8rem] md:pr-[3.7rem] border font-bold text-[1.3rem] sm:text-[1.6rem] md:text-[1.9rem]  placeholder:text-[1.1rem] placeholder:pr-[1.6rem]`}
              type="number"
              placeholder="DD"
              onInput={(e) => {
                let value = parseInt(e.target.value);
                
                if (isNaN(value) || value < 1 || value >= 32) {
                  value = '';
                } else if (value === Math.floor(value)) {
                  // If it's a whole number, remove the .0
                  value = value.toString();
                }
              
                e.target.value = value;
              }}
              {...register("DD")}
            />
            <p className="text-[0.5rem] sm:text-[0.7rem] text-lightRed w-[5rem] sm:w-[7rem] italic pt-1">{errors.DD?.message}</p>
          </div>

          <div>
            <label htmlFor="" className={`block text-xs ${errors.MM?'text-lightRed':''} text-smokeyGrey font-semibold mb-1 tracking-widest`}>
              MONTH
            </label>
            <input 
              className={`w-[5rem] sm:w-[6.5rem] md:w-[7.6rem] outline-none rounded-md ${errors.MM?'border-lightRed focus:border-lightRed':''} border-lightGrey text-offBlack focus:border-Purple py-2 sm:py-[0.4rem] md:py-[0.2rem] pl-3 pr-[1.5rem] sm:pr-[2.8rem] md:pr-[3.7rem] border font-bold text-[1.3rem] sm:text-[1.6rem] md:text-[1.9rem] placeholder:text-[1.1rem] placeholder:pr-[2rem]`}
              type="number"
              placeholder="MM"
              onInput={(e)=>{
                let value = parseInt(e.target.value);
                if (isNaN(value) || value < 1 || value >=13){
                  value = '';
                } else if (value === Math.floor(value)){
                  //if it's a whole number, remove the .0
                  value = value.toString();
                }
                e.target.value = value;
              }}

              {...register("MM")}
            />
            <p className="text-[0.5rem] sm:text-[0.7rem] text-lightRed w-[5rem] sm:w-[7rem] italic pt-1">{errors.MM?.message}</p>
          </div>

          <div>
            <label htmlFor="" className={`block text-xs ${errors.YYYY?'text-lightRed':''} text-smokeyGrey font-semibold mb-1 tracking-widest`}>
              YEAR
            </label>
            <input 
              className={`w-[5.1rem] sm:w-[6.5rem] md:w-[7.6rem] outline-none rounded-md ${errors.YYYY?'border-lightRed focus:border-lightRed':''} border-lightGrey text-offBlack focus:border-Purple py-2 sm:py-[0.4rem] md:py-[0.2rem] pl-3 pr-0 sm:pr-5 md:pr-6 border font-bold text-[1.3rem] sm:text-[1.6rem] md:text-[1.9rem] placeholder:text-[1.1rem] sm:placeholder:text-[1.1rem]`}
              type="number"
              placeholder="YYYY"
              onInput={(e)=>{
                let value = parseInt(e.target.value);
                if (isNaN(value)||value <1||value >=2023){
                  value = '';
                } else if(value === Math.floor(value)){
                  value = value.toString();
                }
                e.target.value = value
              }}
              {...register("YYYY")}
            />
            <p className="text-[0.5rem] sm:text-[0.7rem] text-lightRed w-[5rem] sm:w-[8rem] italic pt-1">{errors.YYYY?.message}</p>
          </div>
          </div>
        
        <div className="relative flex items-center justify-center mt-[2rem] mb-12 sm:justify-end sm:w-[29rem] md:w-[33rem]">
          <hr className="border-0 h-[0.1rem] bg-lightGrey w-full"/>
          <button 
            className="absolute bg-Purple rounded-full hover:bg-offBlack active:bg-Purple focus:bg-offBlack"
            >
              <img 
                className={`rounded-full h-[3rem] sm:h-[3.4rem] md:h-[3.8rem] w-[3rem] sm:w-[3.4rem] md:w-[3.8rem] py-3 `}
                src={arrowImg}
                alt=""
              />
          </button>
        </div>
        </form>
        <div className="text-[3rem] sm:text-[4rem] md:text-[5rem] leading-[3.2rem] sm:leading-[4.4rem] md:leading-[5.4rem] italic font-black mb-[1.5rem] text-offBlack">
          <p><span className="text-Purple">{year}</span> {year<2?'year':'years'}</p>
          <p><span className="text-Purple">{month}</span> months</p>
          <p><span className="text-Purple">{day }</span> days</p>
        </div>
      
      </div>
    </div>
  );
}

export default App;
