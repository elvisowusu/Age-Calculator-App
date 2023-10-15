import React,{ useState } from 'react'
import arrowImg from './assets/icon-arrow.svg'
import './App.css'

function App() {

  return (
    <div className='font-Poppins bg-offWhite h-100vh'>
     <div className='bg-white'>
      <div>
        <input 
         type="text"
        />
        <input
         type="text"
        />
      </div>
      <div>

      </div>
     </div>
     {/* <img src={arrowImg} alt="" className='bg-Purple hover:bg-offBlack'/> */}
    </div>
  )
}

export default App
