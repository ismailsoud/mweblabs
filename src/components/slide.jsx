import React from "react";
import star1 from "../assets/images/icons/star1.svg";
import star0 from "../assets/images/icons/star0.svg";
import client0 from "../assets/images/clients/client0.jpg";
import client1 from "../assets/images/clients/client1.jpg";
import client2 from "../assets/images/clients/client2.jpg";
import client3 from "../assets/images/clients/client3.jpg";
import client4 from "../assets/images/clients/client4.jpg";
import client5 from "../assets/images/clients/client5.jpg";
export default function Slide() {
  const screenWidth = window.innerWidth;
  return (
    <div>
      <div class="relative rounded-xl overflow-auto ">
        <div class="relative w-full flex gap-6 snap-x overflow-x-auto pb-14">
          <div class="snap-center shrink-0" style={{ width: `${screenWidth / 7}px` }}>
            <div class="shrink-0 w-4 sm:w-48"></div>
          </div>
          {/* reviews */}
          <div
            className="snap-center shrink-0 flex flex-col justify-center items-center bg-[#050505] p-8 rounded-2xl space-y-5"
            style={{ width: `${screenWidth / 3}px` }}
          >
            <p className="text-center">
              "Working with Mweblabs has been a seamless and professional
              experience! Their communication was consistently clear and timely.
              From the initial planning stages to the final launch, every aspect
              of our website was expertly crafted and executed by their team.
              We're excited about the prospect of collaborating with them
              further down the road"
            </p>
            <div className="flex justify-center w-full space-x-2 ">
              <img src={star1} alt="star" className="w-5 h-5" />
              <img src={star1} alt="star" className="w-5 h-5" />
              <img src={star1} alt="star" className="w-5 h-5" />
              <img src={star1} alt="star" className="w-5 h-5" />
              <img src={star1} alt="star" className="w-5 h-5" />
            </div>
            <div className="flex justify-center items-center flex-col space-x-3 space-y-3">
              <img src={client1} alt="client0" className="rounded-full w-20" />
              <div className="flex flex-col justify-center items-center">
                <p className="text-2xlxl text-slate-100">Allan Gaines</p>
                <p className="text-slate-400 text-md">Real Estat agnet</p>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col snap-center shrink-0 justify-center items-center bg-[#050505] p-8 rounded-2xl space-y-5"
            style={{ width: `${screenWidth / 3}px` }}
          >
            <p className="text-center">
              "The MWebLabs team is very knowledgeable, and listened to our
              vision to bring to life a site that represents the culture and
              services of our company. We highly recommend them."
            </p>
            <div className="flex justify-center w-full space-x-2">
              <img src={star1} alt="star" className="w-5 h-5" />
              <img src={star1} alt="star" className="w-5 h-5" />
              <img src={star1} alt="star" className="w-5 h-5" />
              <img src={star1} alt="star" className="w-5 h-5" />
              <img src={star1} alt="star" className="w-5 h-5" />
            </div>
            <div className="flex justify-center items-center flex-col space-x-3 space-y-3">
              <img src={client1} alt="client0" className="rounded-full w-20" />
              <div className="flex flex-col justify-center items-center">
                <p className="text-2xlxl text-slate-100">Allan Gaines</p>
                <p className="text-slate-400 text-md">Real Estat agnet</p>
              </div>
            </div>
          </div>
          <div
            className="flex snap-center shrink-0 flex-col justify-center items-center bg-[#050505] p-8 rounded-2xl space-y-5"
            style={{ width: `${screenWidth / 3}px` }}
          >
            <p className="text-center">
              "MWebLabs just completed our new site design, and working with
              them was truly exceptional. They maintained clear communication
              with our team throughout the entire process, making it effortless
              for us. We are incredibly satisfied with the final product and
              highly recommend MWebLabs."
            </p>
            <div className="flex justify-center w-full space-x-2">
              <img src={star1} alt="star" className="w-5 h-5" />
              <img src={star1} alt="star" className="w-5 h-5" />
              <img src={star1} alt="star" className="w-5 h-5" />
              <img src={star1} alt="star" className="w-5 h-5" />
              <img src={star1} alt="star" className="w-5 h-5" />
            </div>
            <div className="flex justify-center items-center flex-col space-x-3 space-y-3">
              <img src={client1} alt="client0" className="rounded-full w-20" />
              <div className="flex flex-col justify-center items-center">
                <p className="text-2xlxl text-slate-100">Allan Gaines</p>
                <p className="text-slate-400 text-md">Real Estat agnet</p>
              </div>
            </div>
          </div>
          <div
            className="flex snap-center shrink-0 flex-col justify-center items-center h-full bg-[#050505] p-8 rounded-2xl space-y-5"
            style={{ width: `${screenWidth / 3}px` }}
          >
            <p className="text-center">
              "Not only did we end up with a beautiful website, but we also
              collaborated with an amazing team from MWebLabs. From outlining
              our needs, researching comp sites, and creating something unique
              and special to embrace and highlight what we do and who we are,
              MWebLabs delivered beyond our expectations."
            </p>
            <div className="flex justify-center w-full space-x-2">
              <img src={star1} alt="star" className="w-5 h-5" />
              <img src={star1} alt="star" className="w-5 h-5" />
              <img src={star1} alt="star" className="w-5 h-5" />
              <img src={star1} alt="star" className="w-5 h-5" />
              <img src={star1} alt="star" className="w-5 h-5" />
            </div>
            <div className="flex justify-center items-center flex-col space-x-3 space-y-3">
              <img src={client1} alt="client0" className="rounded-full w-20" />
              <div className="flex flex-col justify-center items-center">
                <p className="text-2xlxl text-slate-100">Allan Gaines</p>
                <p className="text-slate-400 text-md">Real Estat agnet</p>
              </div>
            </div>
          </div>
          <div
          className="flex snap-center shrink-0 flex-col justify-center items-center bg-[#050505] p-8 rounded-2xl space-y-5"
          style={{ width: `${screenWidth / 3}px` }}
        >
          <p className="text-center">
            "Ismail and his team were outstanding to work with. They kept us
            updated with the progress of our site at all times and met or
            exceeded every deadline. Couldn't be happier with the end product."
          </p>
          <div className="flex justify-center w-full space-x-2">
            <img src={star1} alt="star" className="w-5 h-5" />
            <img src={star1} alt="star" className="w-5 h-5" />
            <img src={star1} alt="star" className="w-5 h-5" />
            <img src={star1} alt="star" className="w-5 h-5" />
            <img src={star1} alt="star" className="w-5 h-5" />
          </div>
          <div className="flex justify-center items-center flex-col space-x-3 space-y-3">
            <img src={client1} alt="client0" className="rounded-full w-20" />
            <div className="flex flex-col justify-center items-center">
              <p className="text-2xlxl text-slate-100">Allan Gaines</p>
              <p className="text-slate-400 text-md">Real Estat agnet</p>
            </div>
          </div>
          </div>
          <div class="snap-center shrink-0" style={{ width: `${screenWidth / 7}px` }}>
            <div class="shrink-0 w-4 sm:w-48"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
