import  { useState, useEffect } from 'react';
import * as React from 'react';
import ENavbar from './ENavbar';
import TaskCard from './TaskCard';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';


function EHomePage() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState('');
  const [userName, setuserName] = useState([]);
  const [time, setTime] = useState(new Date());
const [date, setDate] = useState(null);

  // ✅ 1. Fetch tasks
  useEffect(() => {
    const fetchTasks = async () => {
      const token = localStorage.getItem('token');
      const email = localStorage.getItem('email');

      if (!token || !email) {
        setError('Not logged in');
        return;
      }

      try {
        const response = await fetch(`http://localhost:8080/api/tasks?email=${email}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });

        if (response.ok) {
          const data = await response.json();
          setTasks(data);
        } else {
          const errorData = await response.json();
          setError(errorData.message || 'Failed to fetch tasks');
        }
      } catch (err) {
        console.error('Error fetching tasks:', err);
        setError('Something went wrong');
      }
    };

    fetchTasks();
  }, []);

  useEffect(() => {
    const fetchUsername = async () => {
     
const token = localStorage.getItem('token');
      const email = localStorage.getItem('email');
      try {
        const response = await fetch(`http://localhost:8080/api/det?email=${email}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });

        if (response.ok) {
          const userName = await response.json();
          setuserName(userName);
        } else {
          const errorData = await response.json();
          setError(errorData.message || 'Failed to fetch tasks');
        }
      } catch (err) {
        console.error('Error fetching tasks:', err);
        setError('Something went wrong');
      }
    };

    fetchUsername();
  }, []);

  // ✅ 2. Clock logic
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

  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <>
      <ENavbar />
      <div className='w-[100%] h-[auto]  px-10 bg-[#dfeafc] '>
        <div className='w-full h-[40%]  flex'>
          <div className='w-[70%] flex mt-5 bg-white h-full  rounded-4xl shadow-2xl'>
              <div className='w-[30%] h-full mt-2 '>
                <img className='h-[80%] w-[80%] ml-5 rounded-3xl' src='src\assets\v.jpeg'></img>
              </div>
              <div className='text-[1.85rem] font-poppins text-[#6c6a70] w-[70%] mt-3 space-y-1 h-[100%]'>
                <p className=''>Full Name:  <span  className='text-purple-900 '>{userName.firstName}</span></p>
                  <p>Username:  <span className='text-purple-900'>{userName.userName}</span></p>
                  <p>Email: <span className='text-purple-900'>{userName.email}</span></p>
                  <p>Phone Number: <span className='text-purple-900'>{userName.phoneNumber}</span></p>
                  <div className='flex  space-x-2 mt-3'>
                  <InstagramIcon/>
                  <LinkedInIcon/>
                  <GitHubIcon/>
                  <FacebookIcon/>
                  </div>
              </div>
          </div>
          <div className='w-[30%] mt-5 ml-10 bg-white border rounded-4xl shadow-2xl h-full'>
            <p className='text-center text-[2rem] mt-4' >{formatTime(time)}</p>
          <p className='text-center text-[2.5rem]'>{getGreeting()} <span className='ml-2'>{userName.firstName}</span></p>
          <div><img src='src\assets\song.png' className='h-[170px]  mt-4 w-full rounded-4xl'></img></div>
          </div>
        </div>

        <div className='w-full h-[auto] mt-10 bg-white rounded-4xl shadow-2xl p-6 '>
          <h1 className="text-4xl font-bold mb-6 text-center">Your Tasks</h1>
          {tasks.length === 0 ? (
            <p className="text-center text-lg">No tasks assigned yet.</p>
          ) : (
            tasks.map((task) => (
              <TaskCard 
                key={task.id}
                title={task.description}
                status={task.status}
                time={task.issuedAtTime}
                date={task.issuedAtDate}
              />
            ))
          )}
        </div>
        
      </div>
              
{/*  
      <div className='w-[100%] h-[100vh] bg-[#f0f0f0] flex flex-col items-center'>
        <div className='w-[100%] h-[20vw] flex  '>
          <div className='w-[20%] h-[10%] text-[2rem]  px-5 py-5 '>
            <h1 className='font-display'>{formatTime(time)}</h1>
          </div>

          <div className='w-[75%] h-[65%] font-display '>
            <h1 className='  text-[3rem] mt-3 text-center'>{getGreeting()} Employee</h1>
            <div className='overflow-y-scroll text-center   h-[100%] space-y-6  px-5 border  text-[2rem] mt-4'>
              <p className=''>{tasks.map((task) => (
                <p key={task.id} className='border mt-5 gap-x-4 '>{task.title}</p>
              ))}</p>
            </div>
          </div>

          <div className='w-[15%] h-[10%] text-[2rem] px-5 py-5 '>
            <h1>
                <p className=' space-y-5 mt-5' >{userName.userName}</p>
              </h1>
          </div>
        </div>

        <div className="w-[100%] h-[auto] bg-gray-100 p-6">
          <h1 className="text-4xl font-bold mb-6 text-center">Your Tasks</h1>
          {tasks.length === 0 ? (
            <p className="text-center text-lg">No tasks assigned yet.</p>
          ) : (
            tasks.map((task) => (
              <TaskCard 
                key={task.id}
                title={task.description}
                status={task.status}
                time={task.issuedAtTime}
                date={task.issuedAtDate}
              />
            ))
          )}
        </div>
      </div>
      */}
    </>
  );
}

export default EHomePage;
