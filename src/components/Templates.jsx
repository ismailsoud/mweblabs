import React, { useEffect, useRef, useState } from "react";
import bakery from "../assets/images/templatesImages/backery.png";
import HealthCare from "../assets/images/templatesImages/doctor.png";
import ecomerce from "../assets/images/templatesImages/ecomerce.png";
import event from "../assets/images/templatesImages/event.png";
import gym from "../assets/images/templatesImages/gym.png";
import layer from "../assets/images/templatesImages/layer.png";
import realEstat from "../assets/images/templatesImages/realEstat.png";
import shool from "../assets/images/templatesImages/shool.png";
import travel from "../assets/images/templatesImages/travel.png";
import leftArrow from "../assets/images/icons/leftArrow.svg";
import rightArrow from "../assets/images/icons/rightArrow.svg";
export default function Templates() {
  const templates = [
    {
      name: "Bakery",
      path: bakery,
    },
    {
      name: "HealthCare",
      path: HealthCare,
    },
    {
      name: "E-comerce",
      path: ecomerce,
    },
    {
      name: "Events",
      path: event,
    },
    {
      name: "Gym",
      path: gym,
    },
    {
      name: "Lawyer",
      path: layer,
    },
    {
      name: "Real Estat",
      path: realEstat,
    },
    {
      name: "School",
      path: shool,
    },
    {
      name: "Travel Agency",
      path: travel,
    },
  ];
  const [imagePath, setImagePath] = useState(templates[0].path);
  const [targetScroll, setTargetScroll] = useState(0);
  const [endScroll, setEndScroll] = useState(0);
  const containerRef = useRef(null);

  const handleScroll = (scrollAmount) => {
    if (containerRef.current) {
      const maxScrollWidth = containerRef.current.scrollWidth - containerRef.current.clientWidth;
      setEndScroll(maxScrollWidth);
      const newTargetScroll = containerRef.current.scrollLeft + scrollAmount;

      if (newTargetScroll < 0) {
        setTargetScroll(0);
      } else if (newTargetScroll > maxScrollWidth) {
        setTargetScroll(maxScrollWidth);
      } else {
        setTargetScroll(newTargetScroll);
      }
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth',
      });
    }
  }, [targetScroll]);

  return (
    <div className="flex flex-col space-y-8">
      <div className="flex justify-center">
        <p className="text-4xl lg:text-6xl font-righteous uppercase text-center">Improve your business</p>
      </div>
      <div className="flex justify-center lg:py-10">
        <div className="relative w-full max-w-[600px]">
          <button
            onClick={() => handleScroll(-150)}
            className={`absolute left-0 top-0 pr-5 lg:pr-10 h-full bg-gradient-to-r from-backGround to-transparent cursor-pointer ${targetScroll === 0 ? 'hidden' : ''}`}
          >
            <img src={leftArrow} alt="left arrow" className="w-5 lg:w-7" />
          </button>
          <button
            onClick={() => handleScroll(150)}
            className={`absolute right-0 top-0 h-full pl-5 lg:pl-10 bg-gradient-to-r from-transparent to-backGround cursor-pointer`}
          >
            <img src={rightArrow} alt="right arrow" className="w-5 lg:w-7" />
          </button>
          <div
            ref={containerRef}
            className="flex space-x-3 w-full px-5 overflow-x-scroll overflow-y-hidden scroll-m-6 scrollStyle"
            style={{ scrollBehavior: "smooth" }}
          >
            {templates.map((template, index) => (
              <button
                onClick={() => setImagePath(template.path)}
                key={index}
                className="px-3 sm:px-5 h-10 whitespace-nowrap flex-grow bg-[rgb(7,7,7)] rounded-full text-slate-400 text-sm sm:text-md hover:bg-black/60 hover:text-slate-300"
              >
                {template.name}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-full h-full">
          <div className="relative mx-auto border-gray-800 dark:border-black bg-black border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
            <div className="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-black">
              <img
                src={imagePath}
                className="hidden dark:block h-[156px] md:h-[278px] w-full rounded-lg"
                alt=""
              />
            </div>
          </div>
          <div className="relative mx-auto bg-gray-900 dark:bg-gray-800 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
            <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-700"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
