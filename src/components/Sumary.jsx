import React from 'react'
import '../App.css'
import data from '../data.json';
import SumaryItem from './SumaryItem.jsx';


const Sumary = () => {

  const datos = [...data];
 
  return (
    <div className='font-hanken flex flex-col bg-white rounded-3xl shadow-xl
                    sm:flex-row sm:w-[735px]
                    '>
        
        <div className='flex flex-col gap-3  py-9 items-center justify-center bg-gradient w-screen h-[55lvh] rounded-b-3xl  text-white
        sm:h-[510px] sm:w-[370px] sm:rounded-t-3xl'>

          <h3 className='text-xl color-lavander font-base'>Your Result</h3>
          <div className='flex flex-col justify-center gap-1 items-center w-[150px] h-[150px] circle-gradient rounded-full
            '>
              <p className=' text-6xl font-bold '> 76 </p>
              <p className='text-sm text-gray-300'> of 100 </p>
          </div>
          <h2 className='font-bold text-2xl'> Great </h2>
          <p className='color-lavander px-14 text-center'> You scored higher than 65% of the people who have taken this tests.</p>


        </div>
        
        <div className='p-8 flex flex-col gap-4  flex-1 '>
          <h2 className='font-bold text-xl'>Summary</h2>
          <ul className=' flex flex-col gap-3'>
            {datos.map((it, index) => <SumaryItem key={index} items={it} />)}  
          </ul>
          <button className='w-full bg-[#303B59] hover-btn text-white py-3 rounded-3xl my-3'> Continue </button>
        </div>
        
        

    </div>
  )
}

export default Sumary;