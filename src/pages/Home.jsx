import React from "react";
import Hero from "../components/Hero";
import Templates from "../components/Templates";
import Testemonials from "../components/Testomonials";
import TechBlock from "../components/TechBlock";
import Pricing from "../components/Pricing";
import image1 from "../assets/images/1.png";
import WhyUsSection from "../components/WhyUsSection";
import ContactForm from "../components/ContactForm";
import Technologies from "../components/Technologies";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="lg:px-36 mt-5 lg:mt-0 pt-24 lg:pt-0 text-slate-300">
        <div className="flex flex-col justify-between lg:border-x-[1px] border-slate-400 lg:pt-40 ">
          <WhyUsSection />
          <div className="flex justify-center items-center w-full h-full lg:px-10 lg:py-40 py-24 border-b-[1px] border-slate-400 px-8">
            <div className="w-full h-full">
              <Templates />
            </div>
          </div>
          <div className="w-full h-full lg:px-10 py-16 lg:py-40 border-b-[1px] border-slate-400 px-8">
            <Testemonials />
          </div>
          <div className="hidden lg:inline w-full h-full lg:px-10 lg:pt-20 pb-20 border-y-[1px] border-slate-400 space-y-16">
            <Technologies />
          </div>
          <div className="w-full h-full lg:px-10 lg:pb-40 border-b-[1px] border-slate-400 px-8">
            <Pricing />
          </div>
          <div className="w-full h-full lg:px-10 py-16 lg:py-40 border-slate-400 px-8 ">
            <h1 className="text-4xl font-bold text-center mb-8 ">Contact Us</h1>
            <ContactForm />
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
