import React, { useEffect, useState } from "react";
import { Link, Outlet, NavLink, useNavigate } from "react-router-dom";
import { HomeIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const Layout = () => {
  const getInitialEmail = () => {
    const isLogin = localStorage.getItem("isLogin");
    const user = JSON.parse(localStorage.getItem("currentUser"));
    return isLogin && user?.email ? user.email : "";
  };

  const [userEmail, setUserEmail] = useState(getInitialEmail);
  const navigate = useNavigate();

  useEffect(() => {
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    setUserEmail("");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col text-white">
      
      <header className="bg-black/50 backdrop-blur-md px-10 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/movie logo3.png" alt="logo" className="w-40 h-11" />
        </div>

        
        <div className="relative w-72">
          <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search movies..."
            className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-900/80 border border-gray-600 text-white placeholder-gray-400"
          />
        </div>

      
        <nav>
          <ul className="flex gap-6 text-lg font-medium items-center">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center gap-1 ${
                    isActive
                      ? "text-red-500 border-b-2 border-red-500"
                      : "hover:text-red-400"
                  }`
                }
              >
                <HomeIcon className="w-5 h-5" />
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/contact" className="hover:text-red-400">
                Contact
              </NavLink>
            </li>

            <li>
              <NavLink to="/about" className="hover:text-red-400">
                About
              </NavLink>
            </li>

            <li>
              <NavLink to="/booking" className="hover:text-red-400">
                My Booking
              </NavLink>
            </li>

           
            {userEmail ? (
              <>
                <li className="text-sm bg-red-500/20 px-4 py-1 rounded-full">
                  {userEmail}
                </li>

                <li>
                  <button
                    onClick={handleLogout}
                    className="text-sm text-red-400 hover:text-red-500"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/signup" className="hover:text-red-400">
                    Signup
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/login" className="hover:text-red-400">
                    Login
                  </NavLink>
                </li>
              </>
            )}

            <li>
              <NavLink to="/BookNow">
                <span className="px-3 py-1.5 bg-red-500 rounded-lg hover:bg-red-600">
                  BookNow
                </span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <Outlet />

      
    </div>
  );
};

export default Layout;
