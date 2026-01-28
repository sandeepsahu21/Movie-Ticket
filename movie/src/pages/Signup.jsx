import React, { useState,useEffect} from 'react'
import { gsap } from "gsap";

const Signup = () => {
    useEffect(() => {
    gsap.from(".signup-box", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
    });
  }, []);

  let [Form, setForm] = useState({
    name: '',
    Email: '',
    Phoneno: '',
    password: '',
    confirmpassword: '',
  })

  let handlechange = (e) => {
    setForm({ ...Form, [e.target.name]: e.target.value })
  }

  let handlesubmit = (e) => {
    e.preventDefault()

    let valid = true

    if (Form.name.trim() === '') {
      alert('please enter name')
      valid = false
    } else if (isNaN(Form.Phoneno)) {
      alert('please enter number only')
      valid = false
    } else if (!Form.Email.includes('@')) {
      alert('please enter valid email')
      valid = false
    } else if (Form.password.length < 6) {
      alert('password must be at least 6 characters')
      valid = false
    } else if (Form.password !== Form.confirmpassword) {
      alert('passwords do not match')
      valid = false
    }

    if (valid) {
      let users = JSON.parse(localStorage.getItem('users')) || []
      let alreadyExists = users.find((e) => e.Email === Form.Email)

      if (alreadyExists) {
        alert('user already exists')
        return
      } else {
        users.push(Form)
        localStorage.setItem('users', JSON.stringify(users))
        alert('signup successful')
      }
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('/movie.jpg')] bg-cover bg-center">

      <div className="signup-box bg-black/70 backdrop-blur-lg p-8 rounded-2xl w-full max-w-md text-white shadow-2xl">

        <h1 className="text-3xl font-bold text-center mb-6">Create Account</h1>

        <form onSubmit={handlesubmit} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm">Name</label>
            <input type="text" name="name" value={Form.name} onChange={handlechange}
              className="w-full px-4 py-2 rounded-lg bg-gray-900/80 border border-gray-600 focus:outline-none focus:border-yellow-400"
              placeholder="Enter your name"/>
          </div>
          
          <div>
            <label className="block mb-1 text-sm">Email</label>
            <input type="email" name="Email" value={Form.Email} onChange={handlechange}
              className="w-full px-4 py-2 rounded-lg bg-gray-900/80 border border-gray-600 focus:outline-none focus:border-yellow-400"
              placeholder="Enter your email"/>
          </div>

          <div>
            <label className="block mb-1 text-sm">Phone Number</label>
            <input type="tel" name="Phoneno" value={Form.Phoneno} onChange={handlechange}
              className="w-full px-4 py-2 rounded-lg bg-gray-900/80 border border-gray-600 focus:outline-none focus:border-yellow-400"
              placeholder="Enter phone number"/>
          </div>

          <div>
            <label className="block mb-1 text-sm">Password</label>
            <input type="password" name="password" value={Form.password} onChange={handlechange}
              className="w-full px-4 py-2 rounded-lg bg-gray-900/80 border border-gray-600 focus:outline-none focus:border-yellow-400"
              placeholder="Enter password"/>
          </div>

          <div>
            <label className="block mb-1 text-sm">Confirm Password</label>
            <input type="password" name="confirmpassword" value={Form.confirmpassword} onChange={handlechange}
              className="w-full px-4 py-2 rounded-lg bg-gray-900/80 border border-gray-600 focus:outline-none focus:border-yellow-400"
              placeholder="Confirm password"/>
          </div>

          <button type="submit"
            className="w-full bg-yellow-400 text-black font-semibold py-2 rounded-lg hover:bg-yellow-500 transition duration-300" > Signup
          </button>

        </form>
        <p className="text-center mt-4">
          Already have an account? <a href="/login" className="text-yellow-400 hover:underline">Login</a>
        </p>
      </div>
    </div>
  )
}

export default Signup
