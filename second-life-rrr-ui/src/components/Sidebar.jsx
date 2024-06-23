import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { logoutUser } from "../features/authSlice";

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const dispatch = useDispatch();
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsSidebarOpen(false);
    }
  };
  useEffect(() => {
    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  const handleLogout = () => {
    console.log(`logout call`);
    dispatch(logoutUser());
  };
  const sidebardata = [
    {
      name: "Dashboard",
      icon: <i class="fa fa-tachometer" aria-hidden="true"></i>,
      url: "/my-profile",
      onClick: () => {
        toggleSidebar();
      },
    },
    {
      name: "Product List",
      icon: <i class="fa fa-list" aria-hidden="true"></i>,
      url: "/my-profile/shell-product",
      onClick: () => {
        toggleSidebar();
      },
    },
    {
      name: "Kanban",
      icon: <i class="fa fa-th-large" aria-hidden="true"></i>,
      url: "/my-profile",
      onClick: () => {
        toggleSidebar();
      },
    },
    {
      name: "inbox",
      icon: <i class="fa fa-inbox" aria-hidden="true"></i>,
      url: "/my-profile",
      onClick: () => {
        toggleSidebar();
      },
    },
    {
      name: "Change Password",
      icon: <i class="fa fa-key" aria-hidden="true"></i>,
      url: "/my-profile/change-password",
      onClick: () => {
        toggleSidebar();
      },
    },
    {
      name: "products",
      icon: <i class="fa fa-tachometer" aria-hidden="true"></i>,
      url: "/my-profile",
      onClick: () => {
        toggleSidebar();
      },
    },
    {
      name: "logout",
      icon: <i class="fa fa-sign-out" aria-hidden="true text-teal-600"></i>,
      url: "/my-profile",
      onClick: () => {
        handleLogout();
      },
    },
  ];
  return (
    <>
      <div className="mt-44 ">
        <button
          data-drawer-target="sidebar-multi-level-sidebar"
          data-drawer-toggle="sidebar-multi-level-sidebar"
          aria-controls="sidebar-multi-level-sidebar"
          type="button"
          className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          onClick={toggleSidebar}
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              fill-rule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>

        <aside
          ref={sidebarRef}
          id="sidebar-multi-level-sidebar"
          className={`fixed top-[146px] lg:top-[131px] left-0 z-40 w-64 h-screen transition-transform sm:translate-x-0 ${
            isSidebarOpen ? "" : "-translate-x-full"
          }`}
          aria-label="Sidebar"
        >
          <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
            <ul className="space-y-2 font-medium">
              {sidebardata.map((list, index) => (
                <li key={index} onClick={list.onClick}>
                  <NavLink
                    to={list.url}
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    {/* <i class="fa fa-tachometer" aria-hidden="true"></i> */}
                    {list.icon}
                    <span className="ms-3">{list.name}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
}
