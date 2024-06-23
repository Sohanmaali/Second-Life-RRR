import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser, selectUserDetails } from "../../features/authSlice";
import { NavLink } from "react-router-dom";

export default function DropDownList() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const dispatch = useDispatch();

  const userDetails = useSelector(selectUserDetails);

  const toggleDropdown = useCallback((event) => {
    event.preventDefault();
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }, []);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };
  const handleLogout = () => {
    dispatch(logoutUser());
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);
  const dropDownData = [
    {
      tab: userDetails?.name || "",
      url: "#",
      onClick: () => {
        toggleDropdown();
      },
    },
    {
      tab: "Profile",
      url: "/my-profile",
      icon: <i class="fa fa-user" aria-hidden="true"></i>,
      onClick: () => {
        toggleDropdown();
      },
    },
    {
      tab: "Settings",
      url: "#",
      icon: <i class="fa fa-cog" aria-hidden="true text-teal-600"></i>,
      onClick: () => {
        toggleDropdown();
      },
    },
    {
      tab: "Sign out",
      url: "#",
      icon: <i class="fa fa-sign-out" aria-hidden="true text-teal-600"></i>,
      onClick: () => {
        handleLogout();
      },
    },
  ];
  return (
    <>
      <div
        id="dropdownAvatar"
        className="z-10 absolute flex right-0 top-0 rounded-xl shadow w-44 items-center justify-center dark:bg-gray-700 bg-gray-700"
      >
        <ul
          className=" text-sm text-green-700 dark:text-gray-200 w-full items-center justify-center text-center"
          aria-labelledby="dropdownUserAvatarButton "
        >
          {dropDownData.map((item, index) => (
            <li className="" key={index}>
              <NavLink
                to={item.url}
                onClick={item.onClick} // Attach onClick handler
                className={`${
                  index === 0
                    ? "bg-customYellow font-bold dark:text-black text-black"
                    : "hover:bg-[#e1fade]  dark:hover:bg-[#e1fade] hover:font-medium gap-4"
                } flex items-center justify-center py-2  rounded-2xl  dark:hover:text-black  relative w-full`}
              >
                {item.tab}
                {item?.icon || ""}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
