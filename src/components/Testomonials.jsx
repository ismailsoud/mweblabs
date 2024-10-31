import React from "react";
import star1 from "../assets/images/icons/star1.svg";
import star0 from "../assets/images/icons/star0.svg";
import client0 from "../assets/images/clients/client5.jpg";
import client1 from "../assets/images/clients/client1.jpg";
import client2 from "../assets/images/clients/client2.jpg";
import client3 from "../assets/images/clients/client3.jpg";
import client4 from "../assets/images/clients/client4.jpg";

export default function Testemonials() {
  return (
    <div className="overflow-hidden lg:px-10">
      <div className="flex justify-center items-center pb-16">
        <p className="text-5xl lg:text-7xl font-righteous">Testemonials</p>
      </div>
      <div
        className="flex justify-between overflow-x-auto pb-10 scrollStyle2 space-x-10"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {/* Testimonials */}
        <Testimonial
          text="Working with Mweblabs has been a seamless and professional experience! Their communication was consistently clear and timely. From the initial planning stages to the final launch, every aspect of our website was expertly crafted and executed by their team. We're excited about the prospect of collaborating with them further down the road"
          stars={5}
          clientImage={client1}
          clientName="John Doe"
          clientRole="Business Owner"
        />
        <Testimonial
          text="The MWebLabs team is very knowledgeable, and listened to our vision to bring to life a site that represents the culture and services of our company. We highly recommend them."
          stars={5}
          clientImage={client2}
          clientName="Jane Smith"
          clientRole="Marketing Director"
        />
        <Testimonial
          text="MWebLabs just completed our new site design, and working with them was truly exceptional. They maintained clear communication with our team throughout the entire process, making it effortless for us. We are incredibly satisfied with the final product and highly recommend MWebLabs."
          stars={4}
          clientImage={client3}
          clientName="Michael Johnson"
          clientRole="CEO"
        />
        <Testimonial
          text="Not only did we end up with a beautiful website, but we also collaborated with an amazing team from MWebLabs. From outlining our needs, researching comp sites, and creating something unique and special to embrace and highlight what we do and who we are, MWebLabs delivered beyond our expectations."
          stars={5}
          clientImage={client4}
          clientName="Emily Davis"
          clientRole="Project Manager"
        />
        <Testimonial
          text="MWebLabs transformed our online presence beyond our expectations! Their team understood our vision, tackled every challenge creatively, and delivered a stunning, highly functional website ahead of schedule. We've seen a boost in engagement and sales already—highly recommend them!"
          stars={4}
          clientImage={client0}
          clientName="Emma Collins"
          clientRole="Marketing Director"
        />
      </div>
    </div>
  );
}

function Testimonial({ text, stars, clientImage, clientName, clientRole }) {
  return (
    <div
      className="border-[1px] flex flex-col justify-between border-slate-400 flex-shrink-0 bg-[#0a0a0a] p-8 rounded-2xl w-full sm:w-1/3 lg:mx-2"
      style={{ scrollSnapAlign: "center" }}
    >
      <p className="text-left flex items-center h-full">{text}</p>
      <div className="flex flex-col">
        <div className="flex justify-center mt-4">
          {[...Array(stars)].map((_, index) => (
            <img key={index} src={star1} alt="star" className="w-6 h-6" />
          ))}
          {[...Array(5 - stars)].map((_, index) => (
            <img key={index} src={star0} alt="star" className="w-6 h-6" />
          ))}
        </div>
        <div className="flex flex-col justify-center items-center mt-4 space-y-2">
          <img src={clientImage} alt="client" className="rounded-full w-20" />
          <div className="ml-4 flex flex-col items-center">
            <p className="text-2xlxl text-slate-100">{clientName}</p>
            <p className="text-slate-400 text-md">{clientRole}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
