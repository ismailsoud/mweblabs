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
      name: "Travel Agency",
      path: travel,
      description: "Professional website template for travel agencies and tour operators"
    },
    {
      name: "Bakery",
      path: bakery,
      description: "Custom website design for bakeries and pastry shops"
    },
    {
      name: "Healthcare",
      path: HealthCare,
      description: "Medical and healthcare professional website template"
    },
    {
      name: "E-commerce",
      path: ecomerce,
      description: "Full-featured online store website template"
    },
    {
      name: "Events",
      path: event,
      description: "Event planning and management website template"
    },
    {
      name: "Gym",
      path: gym,
      description: "Fitness center and gym website template"
    },
    {
      name: "Legal Services",
      path: layer,
      description: "Professional law firm website template"
    },
    {
      name: "Real Estate",
      path: realEstat,
      description: "Property listing and real estate agency website template"
    },
    {
      name: "School",
      path: shool,
      description: "Educational institution website template"
    },
  ];
  const [imagePath, setImagePath] = useState(templates[0].path);
  const [selectedTemplate, setSelectedTemplate] = useState(templates[0]);
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
    <section className="flex flex-col space-y-8" aria-label="Website Templates">
      <div className="flex justify-center">
        <h2 className="text-4xl lg:text-6xl font-righteous uppercase text-center">Improve your business</h2>
      </div>
      <div className="flex justify-center lg:py-10">
  <div className="relative w-full max-w-[600px]">
    <button
      onClick={() => handleScroll(-150)}
      className={`absolute left-0 top-0 pr-5 lg:pr-10 h-full bg-gradient-to-r from-backGround to-transparent cursor-pointer ${targetScroll === 0 ? 'hidden' : ''}`}
      aria-label="Scroll templates left"
    >
      <img src={leftArrow} alt="Navigate to previous templates" className="w-5 lg:w-7" />
    </button>
    <button
      onClick={() => handleScroll(150)}
      className={`absolute right-0 top-0 h-full pl-5 lg:pl-10 bg-gradient-to-r from-transparent to-backGround cursor-pointer`}
      aria-label="Scroll templates right"
    >
      <img src={rightArrow} alt="Navigate to next templates" className="w-5 lg:w-7" />
    </button>
    <div
      ref={containerRef}
      className="flex space-x-3 w-full px-5 overflow-x-scroll overflow-y-hidden scroll-m-6 scrollStyle"
      style={{ scrollBehavior: "smooth" }}
      role="tablist"
      aria-label="Website template categories"
    >
      {templates.map((template, index) => (
        <button
          onClick={() => {
            setImagePath(template.path);
            setSelectedTemplate(template);
          }}
          key={index}
          className="px-3 sm:px-5 h-10 whitespace-nowrap flex-grow bg-[rgb(7,7,7)] rounded-full text-slate-400 text-sm sm:text-md hover:bg-black/60 hover:text-slate-300"
          role="tab"
          aria-selected={selectedTemplate.name === template.name}
          aria-controls={`template-${template.name.toLowerCase().replace(' ', '-')}`}
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
                alt={selectedTemplate.description}
                role="tabpanel"
                id={`template-${selectedTemplate.name.toLowerCase().replace(' ', '-')}`}
              />
            </div>
          </div>
          <div className="relative mx-auto bg-gray-900 dark:bg-gray-800 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
            <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-700"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
