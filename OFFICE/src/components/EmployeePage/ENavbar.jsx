import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

 function ENavbar() {
  const navigate = useNavigate();
  function handleClick() {
    navigate('/'); // Redirect to home page after logout
  }
  return (
    <div className='  h-[60px] w-[100%] text-xl bg-black flex justify-between items-center'>
        <button className='  font-display h-[auto] w-[20%] text-xl text-white ml-10 '>
          <Link to="/">
         
            <h1 onClick={window.location.reload} className='hover:text-cyan-500 transition-colors duration-200 text-3xl w-[90px]'>Hojo</h1>
            </Link>
        </button>
        
        <div className=' font-sex h-[auto]  w-[60%] text-xl text-white gap-10  flex ml-80 '>
            <a  className='hover:text-cyan-500 transition-colors duration-200'>Services</a>
            <a className='hover:text-cyan-500 transition-colors duration-200'>Employees</a>
            <a className='hover:text-cyan-500 transition-colors duration-200'>Tasks</a>
            <a className='hover:text-cyan-500 transition-colors duration-200'>Contact</a>
        </div>
        <div className='w-[20%] flex justify-end items-center gap-4 mr-20'>
           
            
            
            <button onClick={handleClick} className='bg-cyan-500 rounded-2xl text-white px-2 py-2  hover:bg-cyan-600 transition-colors duration-200'>
                Sign Out
            </button>
            
        </div>
      
    </div>
  )
}

export default ENavbar
