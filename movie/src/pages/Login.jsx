import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    gsap.from(".Login-box", {
      y: 60,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();


    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

   
    localStorage.setItem("isLogin", true);
    localStorage.setItem(
      "currentUser",
      JSON.stringify({ email })
    );

    navigate("/Home");
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden">
      
      <div className="absolute inset-0 bg-[url('/movie.jpg')] bg-cover bg-center scale-110"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90"></div>

      
      <div className="Login-box relative z-10 w-full max-w-md mx-4 bg-black/60 backdrop-blur-xl 
        border border-white/10 p-8 rounded-2xl shadow-2xl shadow-red-500/20">

        <h2 className="text-3xl font-extrabold text-center mb-2">
          Welcome Back 🎬
        </h2>
        <p className="text-center text-gray-400 mb-8 text-sm">
          Book movies. Feel cinema.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label className="block mb-2 text-sm text-gray-300">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-black/70 border border-gray-700 
              focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-sm text-gray-300">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-black/70 border border-gray-700 
              focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 text-black font-bold py-3 
            rounded-xl transition duration-300 shadow-lg shadow-red-500/40"
          >
            Login
          </button>
        </form>

        <p className="text-center mt-6 text-sm text-gray-400">
          Don’t have an account?{" "}
          <a href="/signup" className="text-red-500 hover:underline font-semibold">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
