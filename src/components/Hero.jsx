import React, { useState } from "react";
import image2 from "../assets/images/girlImage.jpg";
import image3 from "../assets/images/squaredGirlImage.jpg";
import Logo from "../assets/images/logo/agencyLogo.gif";
import Navbar from "./Navbar";
import TechBlock from "./TechBlock";

export default function Hero() {
  const [navHeight, setNavHeight] = useState(null);

  return (
    <div
      className="lg:h-screen w-full flex flex-col lg:px-17 text-slate-300 lg:border-b-[1px] border-slate-400"
      style={{ marginTop: navHeight ? `${navHeight}px` : "0px" }}
    >
      <Navbar getNavHeight={setNavHeight} />
      <div className="flex-col h-full lg:flex-row flex items-center justify-center lg:px-36  border-slate-400">
        <div className="hidden h-full lg:flex flex-col justify-center items-center">
          <div className="h-2/3 flex items-center justify-center p-10">
            <img
              src={image2}
              alt="Professional web developer working on digital solutions"
              className="w-[27rem] h-min"
              loading="lazy"
            />
          </div>
          <div className="w-full h-1/2 flexCenter leading-[1.4] uppercase pr-10">
            <p className="text-center whitespace-nowrap text-2xl">
              <span className="font-Orbitron text-7xl">14+</span>
              <br />
              EXPERIENCED STAFF
            </p>
          </div>
        </div>
        <div className="h-full lg:w-3/5 w-full flex flex-col lg:justify-center lg:border-x-[1px] border-slate-400 space-y-5 px-5 lg:px-0 pt-14 lg:pt-0">
          <h1 className="text-5xl lg:text-6xl lg:leading-[1.2] font-Righteous text lg:font-roboto lg:font-[800] font-[400] lg:px-16">
            Your<span className="text-purple-800"> Website</span> is
            <br />
            Your Online Presence.
            <br />
            Our Expertise,
            <br />
            Ensures Your Online Success.
          </h1>
          <div>
            <p className="lg:hidden text-xl font-light">
              Welcome to M.weblabs. Elevate your brand with our innovative
              websites and strategic solutions. Experience excellence online!
            </p>
          </div>
          <div className="w-full pt-6 lg:pl-16 lg:pt-0">
            <button className="bg-purple-900 hover:bg-purple-800 transition-colors duration-200 text-white  font-roboto w-44 h-14 rounded-full hidden lg:flex flexCenter lg:h-12 lg:w-44 text-lg">
              GET STARTED
            </button>
          </div>
          <div className="py-10 lg:border-t-[1px] border-slate-400 items-center">
            <TechBlock />
          </div>
          <div className="flex flex-col items-center justify-center lg:hidden space-y-8">
            <img
              src={image3}
              alt="M.weblabs team member showcasing web development expertise"
              className="w-full h-min"
              loading="lazy"
            />
            <div className="w-full h-max flex flex-col items-center leading-[1.4] uppercase lg:border-b-[1px] pb-16 lg:pb-56 justify-between space-y-8">
              <div className="flex flex-row justify-around w-full">
                <p className="text-center whitespace-nowrap text-sm">
                  <span className="font-Orbitron text-4xl">146+</span>
                  <br />
                  HAPPY CLIENTS
                </p>
                <p className="text-center whitespace-nowrap text-sm">
                  <span className="font-Orbitron text-4xl">14+</span>
                  <br />
                  EXPERIENCED STAFF
                </p>
              </div>
              <div className="flex flex-row justify-around w-full">
                <p className="text-center whitespace-nowrap text-sm">
                  <span className="font-Orbitron text-4xl">68+</span>
                  <br />
                  PROJECTS DONE
                </p>
                <p className="text-center whitespace-nowrap text-sm">
                  <span className="font-Orbitron text-4xl">26+</span>
                  <br />
                  CURRENT CLIENTS
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden h-full lg:flex flex-col justify-center items-center">
          <div className="w-full h-1/2 flexCenter leading-[1.4] uppercase pl-8">
            <p className="text-center whitespace-nowrap text-3xl">
              <span className="font-Orbitron text-7xl">240+</span>
              <br />
              HAPPY CLIENTS
            </p>
          </div>
          <div className="h-1/2 flex justify-center items-center pl-8">
            <img 
              src={Logo} 
              alt="M.weblabs company logo" 
              className="w-11/12 h-min"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
