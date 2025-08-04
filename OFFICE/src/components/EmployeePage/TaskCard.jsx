import React from 'react'

function TaskCard({ title, status, time, date }) {
  return (
    <div className="flex justify-center items-center ">
      <div className=" h-[140px] w-[1100px] flex  shadow rounded-lg mt-10">
        <div className='w-[15%] h-full border font-sex italic space-y-2'>
            <h1 className='text-center text-3xl mt-2'>Issued At</h1>
            <p className='text-center  text-2xl'>{date}</p>
            <p className='text-center text-2xl'>{time}</p>
        </div>
        <div className='w-[60%] overflow-scroll flex justify-center items-center font-display h-full border'>
            <p className='px-8 items-center text-center  text-2xl'>{title}</p>
        </div>
        <div className='w-[25%] h-full border font-sex bold'>
            <h1 className='text-center text-5xl mt-10'>Status{' '}{status === 'Pending' ? '🟡' : '🟢'}</h1>
        </div>
      </div>
    </div>
  )
}

export default TaskCard
