import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import menuIcon from "../assets/images/icons/menu.svg";
import cross from "../assets/images/icons/cross.svg";

export default function Navbar({ getNavHeight }) {
  const [menuState, setMenuState] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navWidth, setNavWidth] = useState(null);
  const navRef = useRef(null);
  const containerRef = useRef(null);

  const toggleMenu = () => {
    setMenuState(!menuState);
  };

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuState(false);
  };

  // disable scrolling
  useEffect(() => {
    if (menuState) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList = "";
    }
  }, [menuState]);

  // getting the scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // getting the nav dimensions
  useEffect(() => {
    const updateNavDimensions = () => {
      if (navRef.current) {
        setNavWidth(navRef.current.offsetWidth);
      }
      if (containerRef.current) {
        getNavHeight?.(containerRef.current.offsetHeight);
      }
    };

    updateNavDimensions();
    window.addEventListener("resize", updateNavDimensions);

    return () => {
      window.removeEventListener("resize", updateNavDimensions);
    };
  }, [getNavHeight]);

  return (
    <div
      className={`px-4 pt-5 lg:px-36 font-extralight fixed top-0 w-screen border-b-[1px] border-slate-500 ${
        scrollPosition === 0 ? "" : "backdrop-blur-xl lg:backdrop-blur-md"
      } bg-backGround/30 z-20`}
      ref={containerRef}
    >
      <div className={`fixed w-screen left-0 top-0 flex justify-center`}>
        <div
          className={`h-full border-b-[1px] border-slate-200`}
          style={{ width: `${scrollPosition}px` }}
        ></div>
      </div>
      <div className={`flex justify-between pb-3 px-7`} ref={navRef}>
        <Link
          to="/"
          className="flexCenter text-xl font-[600]"
          onClick={handleLinkClick}
        >
          <p>
            <span className="text-purple-700">M</span>.WEBLABS
          </p>
        </Link>
        <div
          className={`space-x-16 text-lg hidden justify-center items-center lg:flex`}
        >
          <Link
            to="/"
            className="hover:text-purple-700 transition-colors duration-200"
            onClick={handleLinkClick}
          >
            Home
          </Link>
          <Link
            to="/projects"
            className="hover:text-purple-700 transition-colors duration-200"
            onClick={handleLinkClick}
          >
            Projects
          </Link>
          <Link
            to="/about"
            className="hover:text-purple-700 transition-colors duration-200"
            onClick={handleLinkClick}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="hover:text-purple-700 transition-colors duration-200"
            onClick={handleLinkClick}
          >
            Contact
          </Link>
        </div>
        <Link to="/contact">
        <button onClick={handleLinkClick} className="bg-purple-900 hover:bg-purple-800 transition-colors duration-200 text-white font-roboto hidden w-28 h-14 rounded-full lg:flex justify-center items-center lg:h-12 lg:w-44 text-lg">
          GET STARTED
        </button>
        </Link>
        <div className={`flex items-center space-x-3 lg:hidden z-30`}>
          <button
            onClick={toggleMenu}
            className="p-2 hover:bg-purple-100 rounded-full transition-colors duration-200"
          >
            <img src={menuIcon} alt="Menu Icon" className="h-10" />
          </button>
        </div>
        {/* Mobile menu */}
        <div
          className={`transition-all duration-300 ease-in-out ${
            !menuState
              ? "h-0 overflow-hidden"
              : "h-screen overflow-y-auto overscroll-none"
          } bg-black/95 backdrop-blur-lg absolute w-screen top-0 left-0 z-40`}
        >
          <div className="absolute top-0 right-0 pt-5 pr-4">
            <button
              onClick={toggleMenu}
              className="p-2 hover:bg-white/10 rounded-full transition-colors duration-200"
            >
              <img src={cross} alt="Close Icon" className="h-16" />
            </button>
          </div>
          <div className="flex w-full h-full justify-center pl-16 flex-col space-y-7 text-white">
            <Link
              to="/"
              className="w-min text-3xl hover:text-purple-500 transition-colors duration-200"
              onClick={handleLinkClick}
            >
              Home
            </Link>
            <Link
              to="/projects"
              className="w-min text-3xl hover:text-purple-500 transition-colors duration-200"
              onClick={handleLinkClick}
            >
              Projects
            </Link>
            <Link
              to="/about"
              className="w-min text-3xl hover:text-purple-500 transition-colors duration-200"
              onClick={handleLinkClick}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="w-min text-3xl hover:text-purple-500 transition-colors duration-200"
              onClick={handleLinkClick}
            >
              Contact
            </Link>
            <div className="pt-8">
            <Link to="/contact">
              <button onClick={handleLinkClick} className="bg-purple-900 hover:bg-purple-800 transition-colors duration-200 text-white font-roboto w-48 h-14 rounded-full flex justify-center items-center text-lg">
               GET STARTED
              </button>
              </Link>
            </div>
            <div className="text-sm text-gray-400 pt-8">
              <p>© 2024 M.WEBLABS. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
