import React, { useState, useEffect } from 'react';
import ENavbar from './ENavbar';
import TaskCard from './TaskCard';

function EHomePage() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState('');
  const [userName, setuserName] = useState([]);
  const [time, setTime] = useState(new Date());

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
    </>
  );
}

export default EHomePage;
