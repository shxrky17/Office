import React, { useState } from 'react'

import axios from 'axios'


export default function SignUp() {
    const [formData, setFormData] = useState({
        username: '',
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:8080/api/auth/signup', formData);
            alert('User registered successfully');
            console.log(res.data);
        } catch (err) {
            console.error('Error registering user:', err);
            alert('Failed to register user');
        }
    }
    return (
        <>
            <section className="bg-gray-50 h-[100vh] relative  dark:bg-gray-900">
                <div className="w-[100%] flex justify-center items-center h-[100%] ">
                    <div class="border border-white p-5 bg-gray-800">
                            <h1  class="py-10 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Create an account
                            </h1>
                            <form onSubmit={handleSubmit} class="space-y-4 md:space-y-6" action="#">
                                <div className='flex gap-10 '>
                                <div>
                                    <label  for="firstName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                                    <input class="bg-gray-50 p-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />

                                </div>
                                <div>
                                    <label  for="lastName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                                    <input class="bg-gray-50 p-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />

                                </div>
                                </div>

                                <div className='flex gap-10'>
                                <div>
                                    <label  for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                                    <input class="bg-gray-50 p-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} required />

                                </div>
                                <div>
                                    <label  for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your phone</label>
                                    <input class="bg-gray-50 p-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
                                </div>
                                </div>
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
                                <div class="flex items-start">
                                    <div class="flex items-center h-5">
                                        <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                    </div>
                                    <div class="ml-3 text-sm">
                                        <label for="terms" class="font-light text-gray-500 dark:text-gray-300">I accept the <a class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                                    </div>
                                </div>
                                <button type="submit" class="w-full bg-blue-600 text-white py-2 px-4 roundedl  bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Already have an account? <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                                </p>
                            </form>
                        </div>
                </div>
            </section>
        </>
    )
}


