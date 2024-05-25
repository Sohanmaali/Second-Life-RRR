import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { userLogin } from "../features/authSlice";
export default function HomeNavbar() {
  const dispatch = useDispatch();
  return (
    <>
      <nav className=" dark:bg-gray-700 bg-gray-700  ">
        <div className="max-w-screen-xl py-4 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 md:space-x-40 space-x-7 rtl:space-x-reverse text-sm mx-auto">
              <li>
                {/* import {NavLink} from 'react-router-dom'; // Usage */}
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-customYellow border-b" : "text-white"
                    } block py-2 pr-4 pl-3 duration-200 border-gray-100  lg:hover:bg-transparent  hover:text-slate-200 lg:p-0 border-collapse`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products"
                  // className="text-gray-900 dark:text-white hover:underline"
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-customYellow border-b" : "text-white"
                    } block py-2 pr-4 pl-3 duration-200 border-gray-100  lg:hover:bg-transparent  hover:text-slate-200 lg:p-0 border-collapse`
                  }
                >
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/add-product"
                  // className="text-gray-900 dark:text-white hover:underline"
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-customYellow border-b" : "text-white"
                    } block py-2 pr-4 pl-3 duration-200 border-gray-100  lg:hover:bg-transparent  hover:text-slate-200 lg:p-0 border-collapse`
                  }
                >
                  Scrap
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  // className="text-gray-900 dark:text-white hover:underline"
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-customYellow border-b" : "text-white"
                    } block py-2 pr-4 pl-3 duration-200 border-gray-100  lg:hover:bg-transparent  hover:text-slate-200 lg:p-0 border-collapse`
                  }
                >
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
