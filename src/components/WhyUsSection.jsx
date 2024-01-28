import React from "react";
import image1 from "../assets/images/1.png";
export default function WhyUsSection() {
  window.scrollTo(0, document.body.scrollHeight);
  return (
    <div className="lg:px-36 mt-5 lg:mt-0 pt-10 lg:pt-0 px-8 text-slate-300 mb-40 border-t-[1px] border-slate-400 lg:border-t-0">
      <div className="flex flex-col lg:flex-row justify-between lg:border-x-[1px] border-slate-400 lg:px-10 lg:pt-40">
        <div className="flex lg:w-1/2">
          <div className="flex flex-col">
            <p className="text-5xl lg:text-6xl font-Righteous">Elevate your business with captivating design.</p>
            <div className="flex flex-col lg:flex-row font-light text-slate-400 pt-4 space-y-1 lg:space-y-0 lg:space-x-7">
                <p>Explore Moroccan Web Labs for cutting-edge websites, strategic SEO, and digital marketing solutions. Our agile workflow, driven by analytics, ensures high-impact digital services tailored for small businesses and startups.</p>
                <p>Enhance your online presence with Moroccan Web Labs. We specialize in innovative website development, effective SEO strategies, and results-driven digital marketing, committed to meeting your unique needs with precision and excellence.</p>    
            </div>
          </div>
        </div>
        <div className="justify-center items-center w-1/2 p-5 hidden lg:flex">
          <img src={image1} alt="khdam M3ana hada hh" className="w-10/12"/>
        </div>
      </div>
    </div>
  );
}
