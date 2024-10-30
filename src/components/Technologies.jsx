import React from "react";
import TechBlock from "./TechBlock";

export default function Technologies() {
  return (
    <>
      <div className="lg:flex justify-center items-center flex-col space-y-6 lg:px-10 hidden">
        <p className="text-3xl lg:text-5xl font-righteous lg:text-center">
          Technologies utilized in our work environment
        </p>
        <p className="text-xl lg:text-3xl text-neutral-400 lg:text-center">
          Our company is dedicated to employing top-notch tools and technologies
          to deliver exceptional services to our clients.
        </p>
      </div>
      <TechBlock />
    </>
  );
}
