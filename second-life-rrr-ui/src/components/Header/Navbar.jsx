// import { NavLink } from "react-router-dom";
// import { useState } from "react";

// function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const navData = [
//     { nabName: "Home", url: "/" },
//     { nabName: "Product", url: "/products" },
//     { nabName: "Add Product", url: "/add-product" },
//     { nabName: "Contact", url: "/contact" },
//     { nabName: "Profile", url: "/my-profile" },
//   ];

//   const handleNavLinkClick = () => {
//     setIsMenuOpen(false);
//   };

//   return (
//     <>
//       <header className="relative flex flex-col overflow-hidden lg:flex-row dark:bg-gray-700 bg-gray-700 pb-10 lg:pb-0">
//         <div className="max-w-screen-xl py-4 mx-auto">
//           <div className="flex items-center">
//             <input
//               type="checkbox"
//               className="peer hidden"
//               id="second-navbar-open"
//               checked={isMenuOpen}
//               onChange={() => setIsMenuOpen(!isMenuOpen)}
//             />
//             <label
//               className="absolute top-5 right-5 cursor-pointer lg:hidden text-white"
//               htmlFor="second-navbar-open"
//             >
//               <svg
//                 class="w-6 h-6"
//                 aria-hidden="true"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   clip-rule="evenodd"
//                   fill-rule="evenodd"
//                   d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
//                 ></path>
//               </svg>
//             </label>
//             <nav
//               aria-label="Header Navigation"
//               className="peer-checked:max-h-60 flex max-h-0 w-full flex-col items-center overflow-hidden transition-all lg:max-h-full lg:flex-row"
//             >
//               <ul className="flex w-full flex-col items-center lg:flex-row lg:justify-center lg:space-y-0 font-medium mt-0 md:space-x-40">
//                 {navData.map((item, index) => (
//                   <li className="lg:mr-12" key={index}>
//                     <NavLink
//                       to={item.url}
//                       className={({ isActive }) =>
//                         `${
//                           isActive ? "text-customYellow border-b" : "text-white"
//                         } block py-2 pr-4 pl-3 duration-200 border-gray-100 lg:hover:bg-transparent hover:text-slate-200 lg:p-0 border-collapse font-medium transition`
//                       }
//                       onClick={handleNavLinkClick}
//                     >
//                       {item.nabName}
//                     </NavLink>
//                   </li>
//                 ))}
//               </ul>
//               <hr className="mt-4 w-full lg:hidden" />
//             </nav>
//           </div>
//         </div>
//       </header>
//     </>
//   );
// }

// export default Navbar;
import { NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const navData = [
    { navName: "Home", url: "/" },
    { navName: "Product", url: "/products" },
    { navName: "Add Product", url: "/add-product" },
    { navName: "Contact", url: "/contact" },
    { navName: "Profile", url: "/my-profile" },
  ];

  const handleNavLinkClick = () => {
    setIsMenuOpen(false);
  };
  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleNavLinkClick);
    } else {
      document.removeEventListener("mousedown", handleNavLinkClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleNavLinkClick);
    };
  }, [isMenuOpen]);

  return (
    <header
      className="fixed top-[74px] left-0 right-0 z-40 flex flex-col overflow-hidden lg:flex-row dark:bg-gray-700 bg-gray-700 pb-10 lg:pb-0"
      ref={menuRef}
    >
      <div className="max-w-screen-xl py-4 mx-auto">
        <div className="flex items-center">
          <input
            type="checkbox"
            className="peer hidden"
            id="second-navbar-open"
            checked={isMenuOpen}
            onChange={() => setIsMenuOpen(!isMenuOpen)}
          />
          <label
            className="absolute top-5 right-5 cursor-pointer lg:hidden text-white"
            htmlFor="second-navbar-open"
          >
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clip-Rule="evenodd"
                fillRule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
              ></path>
            </svg>
          </label>
          <nav
            aria-label="Header Navigation"
            className="peer-checked:max-h-60 flex max-h-0 w-full flex-col items-center overflow-hidden transition-all lg:max-h-full lg:flex-row"
          >
            <ul className="flex w-full flex-col items-center lg:flex-row lg:justify-center lg:space-y-0 font-medium mt-0 md:space-x-40">
              {navData.map((item, index) => (
                <li className="lg:mr-12" key={index}>
                  <NavLink
                    to={item.url}
                    className={({ isActive }) =>
                      `${
                        isActive ? "text-customYellow border-b" : "text-white"
                      } block py-2 pr-4 pl-3 duration-200 border-gray-100 lg:hover:bg-transparent hover:text-slate-200 lg:p-0 border-collapse font-medium transition`
                    }
                    onClick={handleNavLinkClick}
                  >
                    {item.navName}
                  </NavLink>
                </li>
              ))}
            </ul>
            <hr className="mt-4 w-full lg:hidden" />
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
