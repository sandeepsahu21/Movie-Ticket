import React from "react";
import { Link, Outlet, NavLink } from "react-router-dom";
import { HomeIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col text-white">
      <header className="bg-black/50 backdrop-blur-md px-10 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/logo movie 2.png" alt="logo" className="w-40 h-13" />
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
          <ul className="flex gap-6 text-lg font-medium ">
            <li className="flex">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center gap-1  ${isActive ? "text-red-500 border-b-2 border-red-500" : "hover:text-red-400"}`
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
                    ? "text-red-500 border-b-2 border-red-500"
                    : "hover:text-red-400 "
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
                    ? "text-red-500 border-b-2 border-red-500"
                    : "hover:text-red-400"
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
                    ? "text-red-500 border-b-2 border-red-500"
                    : "hover:text-red-400"
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
                    ? "text-red-500 border-b-2 border-red-500"
                    : "hover:text-red-400"
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
                    ? "text-red-500 border-b-2 border-red-500"
                    : "hover:text-red-400 "
                }
              >
                My Booking
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/BookNow"
                className={({ isActive }) =>
                  isActive
                    ? "text-red-500 border-b-2 border-red-500"
                    : "hover:text-red-400 "
                }
              >
                <span className=" px-3 py-1.5 bg-red-500 text-white rounded-lg  hover:bg-red-500">
                  BookNow
                </span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <Outlet />

      <footer className="bg-black text-gray-300 pt-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">🎟 MovieBook</h2>
            <p className="text-sm text-gray-400">
              Book movie tickets online easily. Latest movies, best seats,
              instant booking.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">Movies</li>
              <li className="hover:text-white cursor-pointer">Theatres</li>
              <li className="hover:text-white cursor-pointer">Offers</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">Help Center</li>
              <li className="hover:text-white cursor-pointer">
                Terms & Conditions
              </li>
              <li className="hover:text-white cursor-pointer">
                Privacy Policy
              </li>
              <li className="hover:text-white cursor-pointer">Contact Us</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Newsletter
            </h3>
            <p className="text-sm text-gray-400 mb-3">
              Get updates on latest movies & offers
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter email"
                className="w-full px-3 py-2 rounded-l-md bg-gray-800 text-white outline-none"
              />
              <button className="bg-red-600 px-4 rounded-r-md text-white hover:bg-red-700">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 py-4 text-center text-sm text-gray-500">
          © 2026 MovieBook. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
