import React from 'react'
import './HomePage.css'
import Navbar from './Navbar'


function HomePage() {
    return (<>
    <Navbar/>
        <div className='w-[100%] flex h-[100vh]'>
            <div className='w-[60%] h-[70%] bg-amber-50'>
                <img className='' src='src\assets\Office-design-trends-13-1536x1024.jpg'></img>
            </div>

            <div className='w-[40%] h-[76%] bg-[#f3d28ab6]  '>
                <h1 className=' text-[4em] font-display text-[#2e2105d7] flex justify-center items-center mt-10 '>
                    Hello Work
                </h1>
                <div className='text-2xl text-[#2e2105d7] font-display ml-5'>
                    <p className='mt-6 ml-3'>Hojo offers seamless task management and real-time monitoring services.</p>
                    <p className='mt-6 ml-3'>Easily send messages and stay connected with your team.</p>
                    <p className='mt-6 ml-3'>As an admin, you can efficiently oversee and track employee progress.</p>
                </div>
            </div>

        </div>
        </>
    )
}

export default HomePage
