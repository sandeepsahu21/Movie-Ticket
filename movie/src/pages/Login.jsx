import React from 'react'
import { Form } from 'react-router-dom'
import {useEffect} from 'react'
import { gsap } from "gsap";

const Login = () => {

  useEffect(() => {
    gsap.from(".Login-box", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
    });
  }, []);

  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-[url('/bg.jpg')] bg-cover bg-center">
    <div className="Login-box max-w-md mx-auto my-30  bg-black/60 backdrop-blur-md  p-8 rounded-lg text-white">
      <form >
        <h2 className="text-2xl font-bold mb-6 text-center">Login to Your Account</h2>
        <div className="mb-4">
          <label className="block mb-2 text-sm">Email</label>
          <input type="email" name="Email" className="w-full px-4 py-2 rounded-lg bg-gray-900/80 border border-gray-600 focus:outline-none focus:border-yellow-400" placeholder="Enter your email"/>
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm">Password</label>
          <input type="password" name="password" className="w-full px-4 py-2 rounded-lg bg-gray-900/80 border border-gray-600 focus:outline-none focus:border-yellow-400" placeholder="Enter your password"/>
        </div>
        <button type="submit" className="w-full bg-yellow-400 text-black font-semibold py-2 rounded-lg hover:bg-yellow-500 transition duration-300">Login</button>
      </form>
      <p className="text-center mt-4">
        Don't have an account? <a href="/signup" className="text-yellow-400 hover:underline">Sign Up</a>
      </p>
      </div>
      </div>
    </>
  )
}

export default Login
