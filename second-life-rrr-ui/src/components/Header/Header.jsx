import "@fortawesome/fontawesome-free/css/all.min.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  logoutUser,
  selectIsLoggedIn,
  selectUserDetails,
} from "../../features/authSlice";
import { useNavigate } from "react-router-dom";
import DropDownList from "./DropDownList";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userDetails = useSelector(selectUserDetails);

  const handleLogin = () => {
    navigate("/login");
  };
  const handleLogout = () => {
    console.log(`logout call`);
    dispatch(logoutUser());
  };

  return (
    <>
      <header className="  pt-3 pb-3 container bg-customYellow relative mx-auto flex flex-col overflow-hidden px-4 lg:flex-row lg:items-center navbar">
        <NavLink
          to="/"
          className="flex items-center whitespace-nowrap font-black"
        >
          <div
            className="mr-2 w-8 items-center flex"
            style={{ height: "50px", width: "200px" }}
          >
            <img
              src={`${process.env.PUBLIC_URL}/Second_Life_Logo.png`}
              alt="Logo"
              className="lg:h-16 lg:w-40 h-12"
            />
          </div>
        </NavLink>

        <input
          type="checkbox"
          className="peer hidden w-32 border border-gray-300"
          id="navbar-open"
        />

        <nav
          aria-label="Header Navigation"
          className="peer-checked:pt-8 peer-checked:max-h-60 flex max-h-0 w-full flex-col items-center overflow-hidden transition-all lg:ml-24 lg:max-h-full lg:flex-row"
        >
          <div className="my-4 flex flex-col items-center space-y-2 lg:my-0 lg:ml-auto lg:flex-row lg:space-x-8 lg:space-y-0 w-80">
            <div className="relative w-full lg:w-auto">
              <input
                type="search"
                name="Search"
                placeholder="search ......"
                className="w-full py-2 pl-10 pr-4 rounded-md focus:outline-none dark:bg-gray-100 dark:text-gray-800 focus:bg-white lg:w-64 border"
              />
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <svg
                  fill="currentColor"
                  viewBox="0 0 512 512"
                  className="w-4 h-4 dark:text-gray-800"
                >
                  <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                </svg>
              </span>
            </div>
          </div>
        </nav>

        {/* FOR MOBILE */}
        <div className="absolute top-5 right-4 flex items-center lg:hidden space-x-3">
          <button
            type="button"
            className="relative p-2 rounded-full bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 hover:bg-gray-300 text-sm"
          >
            <i className="fas fa-bell text-teal-600"></i>
            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
              20
            </div>
          </button>
          <button
            type="button"
            className="relative p-2 rounded-full bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 hover:bg-gray-300 text-sm"
          >
            <i className="fas fa-shopping-cart text-teal-600"></i>
            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
              20
            </div>
          </button>
          <label
            className="top-5 bg-gray-200 right-20 cursor-pointer lg:hidden rounded-full focus:ring-offset-2 hover:bg-gray-300 focus:ring-2 p-2 text-sm"
            htmlFor="navbar-open"
          >
            <i className="fas fa-search text-teal-600"></i>
          </label>

          {isLoggedIn ? (
            <div>
              <button
                id="dropdownUserAvatarButton"
                onClick={toggleDropdown}
                className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                type="button"
              >
                <span className="sr-only">Open user menu</span>
                <img
                  src={`${process.env.PUBLIC_URL}/sohan.jpg`}
                  className="w-8 h-8 rounded-full"
                  alt="user photo"
                />
              </button>

              {/* <!-- Dropdown menu --> */}
            </div>
          ) : (
            <button
              onClick={handleLogin}
              className="px-6 py-2 font-semibold rounded bg-[#22631B] text-gray-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 hover:bg-[green]"
            >
              login
            </button>
          )}
        </div>

        {/* FOR PC */}
        <div className="hidden lg:flex lg:items-center lg:space-x-8 pl-10">
          <button
            type="button"
            className="relative p-2 rounded-full bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 hover:bg-gray-300"
          >
            <i className="fas fa-bell text-teal-600 animate-wiggle"></i>
            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
              20
            </div>
          </button>

          <button
            type="button"
            className="relative p-2 rounded-full bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 hover:bg-gray-300"
          >
            <i className="fas fa-shopping-cart text-teal-600"></i>
            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
              20
            </div>
          </button>
          {isLoggedIn ? (
            <div>
              <button
                id="dropdownUserAvatarButton"
                onClick={toggleDropdown}
                className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                type="button"
              >
                <img
                  className="w-8 h-8 rounded-full"
                  src="/docs/images/people/profile-picture-3.jpg"
                  // src={`${process.env.PUBLIC_URL}/sohan.jpg`}
                  alt="user photo"
                />
              </button>

              {/* <!-- Dropdown menu --> */}
            </div>
          ) : (
            <button
              onClick={handleLogin}
              className="px-6 py-2 font-semibold rounded bg-[#22631B] text-gray-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 hover:bg-[green] whitespace-nowrap"
            >
              log in
            </button>
          )}
        </div>
      </header>
      {isOpen && (
        <div className="relative">
          <div
            id="dropdownAvatar"
            className="z-10 absolute flex right-0 top-0 rounded-lg shadow w-44 items-center justify-center bg-fuchsia-950"
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200 w-full items-center justify-center text-center "
              aria-labelledby="dropdownUserAvatarButton "
            >
              {[
                {
                  tab: userDetails?.name || "",
                  url: userDetails?.email || "",
                  onClick: () => {
                    toggleDropdown();
                  },
                },
                {
                  tab: "Profile",
                  url: "#",
                  onClick: () => {
                    toggleDropdown();
                  },
                },
                {
                  tab: "Settings",
                  url: "#",
                  onClick: () => {
                    toggleDropdown();
                  },
                },
                {
                  tab: "Sign out",
                  url: "#",
                  onClick: () => {
                    handleLogout();
                  },
                }, // Add onClick handler
              ].map((item, index) => (
                <li className="">
                  <NavLink
                    to={item.url}
                    onClick={item.onClick} // Attach onClick handler
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    // onClick={toggleDropdown}
                  >
                    {item.tab}
                  </NavLink>
                </li>
              ))}

              {/* <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Earnings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Sign out
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
