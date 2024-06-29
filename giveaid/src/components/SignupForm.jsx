import React from 'react'
import { FaGoogle, FaLinkedinIn, FaApple } from 'react-icons/fa'
import laspema_logo from '../assets/LASPEMA Logo Cropped.jpg' 
import { Link } from 'react-router-dom'

const SignupForm = () => {
  return (

    <div className="bg-gradient-to-r from-slate-300 via-slate-400 to-slate-500 mt-6 mx-auto w-full max-w-md border border-slate-300 rounded-lg shadow-2xl">
        <Link to="/"><img src={laspema_logo} alt='laspema_logo' className="mx-auto w-[50%] h-[50%] border-zinc-500 rounded-full shadow-2xl my-4" /></Link>
        <div className="bg-slate-300 py-8 px-6 shadow rounded-lg sm:px-10">
            <form className="mb-0 space-y-6 bg-slate-300" action="http://localhost:8080/" method="POST">
                <div >
                    <label for="username" className="block text-sm font-medium text-gray-700">Username</label>
                </div>
                <div className="mt-1">
                    <input id="username" name="username" type="text" autoComplete="username" required className="w-full border border-gray-300 px-3 py-2 rounded-lg  focus:outline-none focus:border-[#afeeee] focus:ring-1 focus:ring-[#afeeee] shadow-lg" placeholder=''/>
                </div>
                <div >
                    <label for="email" className="block text-sm font-medium text-gray-700">Email</label>
                </div>
                <div className="mt-1">
                    <input id="email" name="email" type="email" autoComplete="email" required className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:border-[#afeeee] focus:ring-1 focus:ring-[#afeeee] invalid:border-solid invalid:border-2 invalid:border-pink-600 shadow-lg" placeholder='Enter email...'/>
                </div>
                <div >
                    <label for="password" className="block text-sm font-medium text-gray-700">Password</label>
                </div>
                <div className="mt-1">
                    <input id="password" name="password" type="password" autoComplete="password" required className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:border-[#afeeee] focus:ring-1 focus:ring-[#afeeee] shadow-lg" placeholder='must be at least 8 character length'/>
                </div>
                <Link to="/signup/account-setup/personal-info"><button className="bg-[#AFEEEE] text-gray-900 w-[200px] rounded-md font-medium my-6 px-6 py-4 hover:py-5 hover:w-[230px] hover:bg-[#f5ef42] hover:text-black hover:text-lg focus:outline-none focus:border-solid focus:border-2 focus:border-sky-300 ease-in-out duration-300 shadow-lg">Let's go!</button></Link>
            </form>
            <hr className='bg-slate-300 text-slate-900/90 my-12 shadow-2xl'/>
            <div>
                <button className="flex items-center bg-[#AFEEEE] text-gray-900 w-[90%] rounded-md font-medium ml-4 my-6 px-6 py-4 hover:py-5 hover:w-[95%] hover:bg-[#f5ef42] hover:text-black hover:text-lg focus:outline-none focus:border-solid focus:border-2 focus:border-sky-300 ease-in-out duration-300 shadow-lg">Sign up with Google <FaGoogle className="ml-12" size={30}/></button>
            </div>
            <div>
                <button className="flex items-center bg-[#AFEEEE] text-gray-900 w-[90%] rounded-md font-medium ml-4 my-6 px-6 py-4 hover:py-5 hover:w-[95%] hover:bg-[#f5ef42] hover:text-black hover:text-lg focus:outline-none focus:border-solid focus:border-2 focus:border-sky-300 ease-in-out duration-300 shadow-lg">Sign up with LinkedIn<FaLinkedinIn className="ml-12" size={30}/></button>
            </div>
            <div>
                <button className="flex items-center bg-[#AFEEEE] text-gray-900 w-[90%] rounded-md font-medium ml-4 my-6 px-6 py-4 hover:py-5 hover:w-[95%] hover:bg-[#f5ef42] hover:text-black hover:text-lg focus:outline-none focus:border-solid focus:border-2 focus:border-sky-300 ease-in-out duration-300 shadow-lg">Sign up with Apple<FaApple className="ml-12" size={30}/></button>
            </div>
        </div>
    </div>
)
}

export default SignupForm
