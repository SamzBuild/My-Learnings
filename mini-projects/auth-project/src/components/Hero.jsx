import React from "react";

const Hero = () => {
  return (
    <section className="w-full min-h-screen absolute top-0 flex justify-center items-center ">
      <div
        id="hero-container"
        className="w-full px-4 max-w-7xl mx-auto text-center "
      >
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
          Welcome! I'm a Frontend Developer
        </h1>
        <p className="text-sm md:text-xl tracking-wide text-black/70 px-4 mt-8">
          Learn React, Authetication, Popup by building something real.
        </p>
      </div>
    </section>
  );
};

export default Hero;
