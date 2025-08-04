
import React, { useState, useEffect } from 'react';
import ENavbar from './ENavbar';
import TaskCard from './TaskCard';

function EHomePage() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Replace this with actual API call
    const dummyTasks = [
      {
        id: 1,
        title: 'Submit performance review',
        status: 'Pending',
        date: '2025-08-03',
        time: '10:30 AM',
      },
      {
        id: 2,
        title: 'Complete frontend UI for task manager',
        status: 'Completed',
        date: '2025-08-02',
        time: '4:45 PM',
      },
      
    ];

    setTasks(dummyTasks);
  }, []);
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
  return (<>
    <ENavbar />
    <div className='w-[100%] h-[100vh] bg-[#f0f0f0] flex flex-col items-center'>
      <div className='w-[100%] h-[20vw] flex  '>
        <div className='w-[20%] h-[10%] text-[2rem]  px-5 py-5 '>
          <h1 className='font-display'>{formatTime(time)}</h1>
        </div>

        <div className='w-[75%] h-[65%] '>
          <h1 className='font-display  text-[3rem] mt-3 text-center'>{getGreeting()} Employee</h1>
          <div className='overflow-y-scroll h-[100%] space-y-6 font-sex px-5 border  text-[2rem] mt-4'>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam commodi tempora non, adipisci nisi consequuntur totam nesciunt pariatur debitis facilis odit, obcaecati modi alias voluptate, doloribus sed! Mollitia, ratione suscipit?</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam commodi tempora non, adipisci nisi consequuntur totam nesciunt pariatur debitis facilis odit, obcaecati modi alias voluptate, doloribus sed! Mollitia, ratione suscipit?</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam commodi tempora non, adipisci nisi consequuntur totam nesciunt pariatur debitis facilis odit, obcaecati modi alias voluptate, doloribus sed! Mollitia, ratione suscipit?</p>
          </div>
        </div>

        <div className='w-[15%] h-[10%] text-[2rem] px-5 py-5 '>
          <h1>Username</h1>
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
            title={task.title}
            status={task.status}
            time={task.time}
            date={task.date}
            
          />
        ))
      )}
    </div>

    </div>
  </>
  )
}

export default EHomePage
