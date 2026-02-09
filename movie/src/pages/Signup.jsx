import React, { useState, useEffect } from "react";
import { gsap } from "gsap";

const Signup = () => {
  useEffect(() => {
    gsap.from(".signup-box", {
      y: 60,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  const [Form, setForm] = useState({
    name: "",
    Email: "",
    Phoneno: "",
    password: "",
    confirmpassword: "",
  });

  const handlechange = (e) => {
    setForm({ ...Form, [e.target.name]: e.target.value });
  };

  const handlesubmit = (e) => {
    e.preventDefault();

    let valid = true;

    if (Form.name.trim() === "") {
      alert("please enter name");
      valid = false;
    } else if (isNaN(Form.Phoneno)) {
      alert("please enter number only");
      valid = false;
    } else if (!Form.Email.includes("@")) {
      alert("please enter valid email");
      valid = false;
    } else if (Form.password.length < 6) {
      alert("password must be at least 6 characters");
      valid = false;
    } else if (Form.password !== Form.confirmpassword) {
      alert("passwords do not match");
      valid = false;
    }

    if (valid) {
      let users = JSON.parse(localStorage.getItem("users")) || [];
      let alreadyExists = users.find((e) => e.Email === Form.Email);

      if (alreadyExists) {
        alert("user already exists");
        return;
      } else {
        users.push(Form);
        localStorage.setItem("users", JSON.stringify(users));
        alert("signup successful");
      }
    }
  };

  return (
    <>
   
      <div className="min-h-screen relative flex items-center justify-center overflow-hidden">
        
        
        <div className="absolute inset-0 bg-[url('/movie.jpg')] bg-cover bg-center scale-110"></div>

      
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90"></div>

      
        <div className="signup-box relative z-10 w-full max-w-md mx-4 bg-black/60 backdrop-blur-xl
        border border-white/10 p-8 rounded-2xl shadow-2xl shadow-red-500/20 text-white">

       
          <h1 className="text-3xl font-extrabold text-center mb-2">
            Create Account 🎟️
          </h1>
          <p className="text-center text-gray-400 mb-8 text-sm">
            Join & book movies instantly
          </p>

          <form onSubmit={handlesubmit} className="space-y-4">

         
            <div>
              <label className="block mb-1 text-sm text-gray-300">Name</label>
              <input
                type="text"
                name="name"
                value={Form.name}
                onChange={handlechange}
                placeholder="Enter Your name"
                className="w-full px-4 py-3 rounded-xl bg-black/70 border border-gray-700
                focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
              />
            </div>

          
            <div>
              <label className="block mb-1 text-sm text-gray-300">Email</label>
              <input
                type="email"
                name="Email"
                value={Form.Email}
                onChange={handlechange}
                placeholder=" Enter your email"
                className="w-full px-4 py-3 rounded-xl bg-black/70 border border-gray-700
                focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
              />
            </div>

        
            <div>
              <label className="block mb-1 text-sm text-gray-300">Phone</label>
              <input
                type="tel"
                name="Phoneno"
                value={Form.Phoneno}
                onChange={handlechange}
                placeholder=" Enter your number"
                className="w-full px-4 py-3 rounded-xl bg-black/70 border border-gray-700
                focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
              />
            </div>

        
            <div>
              <label className="block mb-1 text-sm text-gray-300">Password</label>
              <input
                type="password"
                name="password"
                value={Form.password}
                onChange={handlechange}
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl bg-black/70 border border-gray-700
                focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
              />
            </div>

           
            <div>
              <label className="block mb-1 text-sm text-gray-300">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmpassword"
                value={Form.confirmpassword}
                onChange={handlechange}
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl bg-black/70 border border-gray-700
                focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
              />
            </div>

         
            <button
              type="submit"
              className="w-full bg-red-500 hover:bg-red-600 text-black font-bold py-3
              rounded-xl transition shadow-lg shadow-red-500/40"
            >
              Sign Up
            </button>
          </form>

        
          <p className="text-center mt-6 text-sm text-gray-400">
            Already have an account?{" "}
            <a href="/login" className="text-red-500 hover:underline font-semibold">
              Login
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;
