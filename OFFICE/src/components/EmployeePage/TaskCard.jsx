import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function TaskCard({ title, status, time, date }) {
  
  
  return (
    <div className="flex justify-center  rounded-4xl ">
      <div className=" h-[140px]  w-[2100px] flex  shadow  mt-5 mb-5 rounded-4xl bg-[#ebe2fa]">
        <div className='w-[15%]  h-full  font-sex italic space-y-2'>
            <h1 className='text-center text-3xl mt-2'>Issued At</h1>
            <p className='text-center  text-2xl'>{date}</p>
            <p className='text-center text-2xl'>{time}</p>
        </div>
        <div className='w-[60%] overflow-scroll  flex justify-center items-center font-poppins h-full border'>
            <p className='px-8 items-center text-center  text-2xl'>{title}</p>
        </div>
        <div className='w-[25%] h-full  font-sex bold'>
            <h1 className='text-center text-5xl mt-10'>Status{' '}{status === 'Pending' ? '🟡' : '🟢'}</h1>
        </div>
      </div>
    </div>
  )
}

export default TaskCard
