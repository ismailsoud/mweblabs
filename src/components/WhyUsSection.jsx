import React from "react";
import image1 from "../assets/images/1.png";
import Templates from "./Templates";
import Testemonials from "./Testomonials";
import Pricing from "./Pricing";
import TechBlock from "./TechBlock";
export default function WhyUsSection() {
  // window.scrollTo(0, document.body.scrollHeight);
  return (
    <>
      <div className="lg:px-36 mt-5 lg:mt-0 pt-24 lg:pt-0 text-slate-300 mb-40">
        <div className="flex flex-col justify-between lg:border-x-[1px] border-slate-400 lg:pt-40 ">
          <div className="py-16 lg:pt-0 lg:pb-40 w-full items-center space-y-5 lg:border-t-0 border-y-[1px] border-slate-400 lg:px-10 px-8">
            <p className="text-2xl lg:text-6xl font-righteous tracking-tight text-center">
              Why Do I Need a Website ?
            </p>
            <p className="text-xl text-center lg:px-10">
              In an era where the internet is integral for information and
              commerce, owning a website is more crucial than ever. Creating an
              online platform offers enhanced visibility and streamlined
              business operations. Recognizing the signs for needing a website
              is essential for informed decisions in your online journey.
            </p>
            <div className="flex justify-center items-center pt-5">
              <button className="w-48 border-2 border-slate-400 h-20 text-xl hover:bg-black/20 hover:text-white hover:border-white">
                Get Yours Now
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center w-full h-full lg:px-10 lg:py-40 py-16 border-b-[1px] border-slate-400 px-8">
            <div className="flex lg:w-1/2">
              <div className="flex flex-col">
                <p className="text-5xl lg:text-6xl font-righteous tracking-tight">
                  Elevate your business with captivating design.
                </p>
                <div className="flex flex-col tracking-tight lg:flex-row font-light text-slate-400 pt-4 space-y-1 lg:space-y-0 lg:space-x-7">
                  <p>
                    Explore Moroccan Web Labs for cutting-edge websites,
                    strategic SEO, and digital marketing solutions. Our agile
                    workflow, driven by analytics, ensures high-impact digital
                    services tailored for small businesses and startups.
                  </p>
                  <p>
                    Enhance your online presence with Moroccan Web Labs. We
                    specialize in innovative website development, effective SEO
                    strategies, and results-driven digital marketing, committed
                    to meeting your unique needs with precision and excellence.
                  </p>
                </div>
              </div>
            </div>
            <div className="justify-center items-center w-1/2 p-5 hidden lg:flex hover:wiggle">
              <img src={image1} alt="khdam M3ana hada hh" className="w-10/12" />
            </div>
          </div>
          <div className="flex justify-center items-center w-full h-full lg:px-10 lg:py-40 py-24 border-b-[1px] border-slate-400 px-8">
            <div className="w-full h-full">
              <Templates />
            </div>
          </div>
          <div className="w-full h-full lg:px-10 py-16 lg:py-40 border-b-[1px] border-slate-400 px-8">
            <Testemonials />
          </div>
          <div className="hidden lg:inline w-full h-full lg:px-10 lg:pt-20 pb-20 border-y-[1px] border-slate-400 space-y-16">
            <div className="lg:flex justify-center items-center flex-col space-y-6 lg:px-10 hidden">
              <p className="text-3xl lg:text-5xl font-righteous lg:text-center">
                Technologies utilized in our work environment
              </p>
              <p className="text-xl lg:text-3xl text-neutral-400 lg:text-center">
                Our company is dedicated to employing top-notch tools and
                technologies to deliver exceptional services to our clients.
              </p>
            </div>
            <TechBlock />
          </div>
          <div className="w-full h-full lg:px-10 pb-40 lg:border-b-[1px] border-slate-400 px-8">
            <Pricing />
          </div>
        </div>
      </div>
    </>
  );
}
