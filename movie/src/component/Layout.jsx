import React from "react";
import { Link, Outlet, NavLink } from "react-router-dom";
import { HomeIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col text-white">
      <header className="bg-black/50 backdrop-blur-md px-10 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/icon.png" alt="logo" className="w-10 h-10" />
          <h1 className="text-2xl font-bold tracking-wide">MovieTicket</h1>
        </div>

        <div className="relative w-72">
          <MagnifyingGlassIcon className="w-5 h-5 text-gray-400  absolute left-3 top-1/2 -translate-y-1/2" />

          <input
            type="text"
            placeholder="Search movies..."
            className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-900/80 border border-gray-600 text-white placeholder-gray-400 "
          />
        </div>

        <nav>
          <ul className="flex gap-6 text-lg font-light ">
            <li className="flex">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center gap-1  ${isActive ? "text-yellow-400 border-b-2 border-yellow-400" : "hover:text-yellow-300"}`
                }
              >
                {" "}
                <HomeIcon className="w-5 h-5" />
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-400 border-b-2 border-yellow-400"
                    : "hover:text-yellow-300 "
                }
              >
                Signup
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-400 border-b-2 border-yellow-400"
                    : "hover:text-yellow-300"
                }
              >
                Login
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-400 border-b-2 border-yellow-400"
                    : "hover:text-yellow-300"
                }
              >
                Contact
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-400 border-b-2 border-yellow-400"
                    : "hover:text-yellow-300"
                }
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/booking"
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-400 border-b-2 border-yellow-400"
                    : "hover:text-yellow-300 "
                }
              >
                My Booking
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <Outlet />

      <footer className="bg-black/70 text-center py-4 text-sm text-gray-300">
        © 2026 MovieTicket. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;
