import React, { useState } from 'react';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="bg-gray-50 h-[100vh] relative  dark:bg-gray-900">
                <div className="w-[100%] flex justify-center items-center h-[100%] ">
                    <div class="border border-white p-5 bg-gray-800">
                            <h1  class="py-10 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Login to your account
                            </h1>
                            <form onSubmit={handleSubmit} class="space-y-4 md:space-y-6" action="#">
                                
                                <div className='flex gap-10'>
                                <div>
                                    <label  for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input value={formData.email} onChange={handleChange} type="email" name="email" id="email" class="bg-gray-50 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                                </div>
                                <div>
                                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input value={formData.password} onChange={handleChange} type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                </div>
                                </div>
                            
                                <button type="submit" class="w-full bg-blue-600 text-white py-1 px-1 roundedl  bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Login</button>
                                
                            </form>
                        </div>
                </div>
            </section>
  );
}

export default Login;
