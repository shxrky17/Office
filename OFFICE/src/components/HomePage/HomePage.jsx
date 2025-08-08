import React from 'react'
import './HomePage.css'
import Navbar from './Navbar'
import SearchIcon from '@mui/icons-material/Search';

function HomePage() {
    return (<>
        <Navbar  />
        <div className='w-[100%] flex h-[100vh]'>

            <div style={{
                background: '#f6f9ff',
            }}
                className='w-[50%] h-[100vh] pl-20 pt-20'>
                <p className='font-sex text-[4rem] text-[#240e72e7]'>Got Work</p>
                <p className='font-sex text-[3rem]  text-[#4c3991e7]'>Need To Get it Done</p>
                <p className='font-poppins text-xl ml-2 mr-41 mt-5'>Got some queries feel free to reach us by submitting your email we will reach you out soon</p>
                <div
                    type="textbox"
                    className="w-[600px] text-[2rem] h-[7vh] shadow-xl mt-3 mr-2 bg-white rounded-[3rem] border flex items-center px-6 "
                >
                    <SearchIcon className="w-8 h-8 text-[#4c3991e7] mr-4" />
                    
                    <input
                        type="text"
                        placeholder="Email..."
                        className="flex-1 outline-none text-[1.5rem] ml-1 text-gray-700 bg-transparent"
                    />
                    <button className="bg-[#4c3991e7] ml-30 text-white px-8 h-full rounded-[3rem] text-[1.5rem] font-semibold">
                        submit
                    </button>
                </div>
            </div>

            <div className='w-[50%]  h-[100vh]'>
                <img src='src/assets/1.jpg' className='w-[100%] h-[100%] object-cover ' />
            </div>

        </div>
        <div className='w-[100%] flex h-[30vh]   px-25 rounded-4xl mt-10 space-x-10'>
            <div className='w-[50%] flex bg-[#f6f9ff] shadow-2xl rounded-4xl '>
                <div className='w-[70%]  h-full ml-10'>
                    <p className='font-display text-[#534f64e7] text-[2rem] ml-4 mt-5 '>For Employers</p>
                    <p className='font-poppins text-l px-5 mt-1 text-[#0c0a13e7]'>Get Your Admin id today and assign your employees with the task you wish and monitor the activity of them </p>
                    <button className='w-[100px] py-2 [h-300px] bg-blue-400 text-white rounded-3xl text-xl items-center ml-3 mt-2 font-semibold hover:bg-blue-500 transition duration-300'>
                        Click Here
                    </button>
                </div>
                <div className='flex w-[30%] items-center  h-full'>
                    <img className=' w-full h-full object-cover  ' src='src\assets\Adobe Express - file.png'></img>
                </div>

            </div>


            <div className='w-[50%] flex bg-[#f6f9ff] shadow-2xl rounded-4xl '>
                <div className='w-[70%]  h-full ml-10'>
                    <p className='font-display text-[#534f64e7] text-[2rem] ml-4 mt-5 '>For Employees</p>
                    <p className='font-poppins text-l px-5 mt-1 text-[#0c0a13e7]'>Get Your Admin id today and assign your employees with the task you wish and monitor the activity of them </p>
                    <button className='w-[100px] py-2 [h-300px] bg-blue-400 text-white rounded-3xl text-xl items-center ml-3 mt-2 font-semibold hover:bg-blue-500 transition duration-300'>
                        Click Here
                    </button>
                </div>
                <div className='flex w-[30%] items-center  h-full'>
                    <img className=' w-full h-full object-cover  ' src='src\assets\employee.jpg'></img>
                </div>

            </div>
        </div>

        <div className='w-[100px] h-[40vh]'>

        </div>
    </>
    )
}

export default HomePage
