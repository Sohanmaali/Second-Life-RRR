// import BasicMenu from "./LoginDrop";
// import "./css/Navbar.css";

import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <header className="relative  flex flex-col overflow-hidden  lg:flex-row dark:bg-gray-700 bg-gray-700 pb-10 lg:pb-0">
        <div className="max-w-screen-xl py-4 mx-auto">
          <div className="flex items-center  ">
            <input
              type="checkbox"
              className="peer hidden "
              id="second-navbar-open"
            />
            <label
              className="absolute top-5 right-5 cursor-pointer lg:hidden text-white"
              htmlFor="second-navbar-open"
            >
              <svg
                className="h-7 w-7"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
            <nav
              aria-label="Header Navigation"
              className="peer-checked:pt-8 peer-checked:max-h-60 flex max-h-0 w-full flex-col items-center overflow-hidden transition-all  lg:max-h-full lg:flex-row  "
            >
              <ul className="flex w-full flex-col items-center space-y-2 lg:flex-row lg:justify-center lg:space-y-0  font-medium mt-0 md:space-x-40    ">
                <li className="lg:mr-12">
                  {/* import {NavLink} from 'react-router-dom'; // Usage */}
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `${
                        isActive ? "text-customYellow border-b" : "text-white"
                      } block py-2 pr-4 pl-3 duration-200 border-gray-100  lg:hover:bg-transparent  hover:text-slate-200 lg:p-0 border-collapse font-medium   transition`
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li className="lg:mr-12">
                  <NavLink
                    to="/products"
                    // className="text-gray-900 dark:text-white hover:underline"
                    className={({ isActive }) =>
                      `${
                        isActive ? "text-customYellow border-b" : "text-white"
                      } block py-2 pr-4 pl-3 duration-200 border-gray-100  lg:hover:bg-transparent  hover:text-slate-200 lg:p-0 border-collapse font-medium transition`
                    }
                  >
                    Products
                  </NavLink>
                </li>
                <li className="lg:mr-12">
                  <NavLink
                    to="/add-product"
                    // className="text-gray-900 dark:text-white hover:underline"
                    className={({ isActive }) =>
                      `${
                        isActive ? "text-customYellow border-b" : "text-white"
                      } block py-2 pr-4 pl-3 duration-200 border-gray-100  lg:hover:bg-transparent  hover:text-slate-200 lg:p-0 border-collapse font-medium`
                    }
                  >
                    Add Scrap
                  </NavLink>
                </li>
                <li className="lg:mr-12 font-medium">
                  <NavLink
                    to="/contact"
                    // className="text-gray-900 dark:text-white hover:underline"
                    className={({ isActive }) =>
                      `${
                        isActive ? "text-customYellow border-b" : "text-white"
                      } block py-2 pr-4 pl-3 duration-200 border-gray-100  lg:hover:bg-transparent  hover:text-slate-200 lg:p-0 border-collapse font-medium`
                    }
                  >
                    About
                  </NavLink>
                </li>
                <li className="lg:mr-12 font-medium">
                  <NavLink
                    to="/"
                    // className="text-gray-900 dark:text-white hover:underline"
                    className={({ isActive }) =>
                      `${
                        isActive ? "text-customYellow border-b" : "text-white"
                      } block py-2 pr-4 pl-3 duration-200 border-gray-100  lg:hover:bg-transparent  hover:text-slate-200 lg:p-0 border-collapse font-medium`
                    }
                  >
                    Help
                  </NavLink>
                </li>
              </ul>
              <hr className="mt-4 w-full lg:hidden" />
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
