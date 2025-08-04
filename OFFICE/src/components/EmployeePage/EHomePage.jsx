
import React, { useState, useEffect } from 'react';

function EHomePage() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {

    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);


    return () => clearInterval(interval);
  }, []);


  const formatTime = (time) => {
    return time.toLocaleTimeString();
  };

  const getGreeting = () => {
    const hour = time.getHours();
    if (hour >= 5 && hour < 12) return 'Good Morning';
    else if (hour >= 12 && hour < 17) return 'Good Afternoon';
    else return 'Good Evening';
  };
  return (
    <div  className='w-[100%] flex h-[100vh] bg-[#ecf3fb]'>
        <div  className='w-[50%] h-auto '>
          <div  className='text-[5rem]  font-display mt-20 text-center'>
            <h1 className='text-[#54858d]'>{getGreeting()}</h1>
          </div>
          <div>
            <h1 className='text-[4rem] text-[#283a3dec] font-display italic text-center'>Employee</h1>
          </div>
          <div className='text-2xl  ml-15 mt-4 space-y-6 overflow-scroll h-[50%]'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde perspiciatis ab itaque ut expedita odit adipisci non veniam natus sequi sapiente rerum, mollitia est ipsam, eum consequatur suscipit eveniet. Quis 
            </p>
            
            <p className='nt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde perspiciatis ab itaque ut expedita odit adipisci non veniam natus sequi sapiente rerum, mollitia est ipsam, eum consequatur suscipit eveniet. Quis 
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde perspiciatis ab itaque ut expedita odit adipisci non veniam natus sequi sapiente rerum, mollitia est ipsam, eum consequatur suscipit eveniet. Quis 
            </p>
          </div>
          <div>

          </div>
        </div>

        <div className='w-[50%] h-[60%] mt-60 '>
          <img className='w-full h-full'  src='src\assets\Screenshot 2025-08-03 234808.png'></img>
        </div>
    </div>


  )
}

export default EHomePage
