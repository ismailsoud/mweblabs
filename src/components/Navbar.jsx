import React, { useEffect, useRef, useState } from 'react';
import menuIcon from '../assets/images/icons/menu.svg';
import cross from '../assets/images/icons/cross.svg';

export default function Navbar({getNavHeight}) {
  const [menuState, setMenuState] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0)
  const [navWidth, setNavWidth] = useState(null)
  const [navHeight, setNavHeight] = useState(null)
  const navRef = useRef(null)
  const containerRef = useRef(null)
  const toggleMenu = () => {
    setMenuState(!menuState);
  };
  // disable scrolling 
  useEffect(()=>{
    if(menuState){
      document.body.classList.add("no-scroll")
    }else{
      document.body.classList = ""
    }
  },[menuState])
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
  // geting the navWidth
  useEffect(() => {
    if (navRef.current) {
      setNavWidth(navRef.current.offsetWidth);
    }
    if(containerRef.current){
      setNavHeight(containerRef.current.offsetHeight)
    }
  }, []);
  getNavHeight(navHeight)
  return (
    <div className={`px-4 pt-5 lg:px-36 font-extralight fixed top-0 w-screen border-b-[1px] border-slate-500 ${scrollPosition===0?'':'backdrop-blur-xl lg:backdrop-blur-md'} bg-backGround/30 z-20`} ref={containerRef}> 
      <div className={`fixed w-screen left-0 top-0 flex justify-center`}>
        <div className={`h-full border-b-[1px] border-slate-200`} style={{ width: `${scrollPosition}px` }}></div>
      </div>        
      <div className={`flex justify-between pb-3 px-7 `} ref={navRef}>
        <div className='flexCenter text-xl font-[600]'>
          <p><span className='text-purple-700'>M</span>.WEBLABS</p>
        </div>
        <div className={`space-x-16 text-lg hidden justify-center items-center lg:flex`}>
          <a href="./home">Home</a>
          <a href="./projects">Projects</a>
          <a href="./about">About</a>
          <a href="./contact">Contact</a>
        </div>
        <button className='bg-purple-800 text-slate-200  hidden w-28 h-14 rounded-full lg:flex justify-center items-center lg:h-12 lg:w-44 text-lg'>
          GET STARTED
        </button>
        <div className={`flex items-center space-x-3 lg:hidden z-30`}>
          <button onClick={toggleMenu}>
            <img src={menuIcon} alt="Menu Icon" className='h-10' />
          </button>
        </div>
        {/* Mobile menu */}
        <div
          className={`transition-all duration-300 ease-in-out  ${
            !menuState ? 'h-0 overflow-hidden' : 'h-[30rem] overflow-y-auto overscroll-none'
          } bg-black absolute w-screen top-0 left-0 z-40`}
        >
          <div className='absolute top-0 right-0 pt-5 pr-4'>
            <button onClick={toggleMenu}>
              <img src={cross} alt="Close Icon" className='h-16' />
            </button>
          </div>
          <div className='flex w-full h-full justify-center pl-16 flex-col text-3xl space-y-7 border-b'>
            <a href="./home" className='w-min'>Home</a>
            <a href="./projects" className='w-min'>Projects</a>
            <a href="./about" className='w-min'>About</a>
            <a href="./contact" className='w-min'>Contact</a>
          </div>
        </div>
      </div>
    </div>
  );
}