import React, { useRef } from "react";
import heroImg from "/Assets/Images/hero.jpg";
import Navbar from "./Navbar";
import { FaArrowRight } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { PiCirclesFourLight } from "react-icons/pi";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

const Hero = () => {
  const svgRef = useRef(null);

  useGSAP(() => {
    gsap.to(svgRef.current, {
      rotation: 360,
      ease: "linear",
      repeat: -1,
      duration: 10,
    });
  }, []);

  return (
    <section
      className="h-[120vh] w-full text-white relative"
      style={{
        backgroundImage: `url(${heroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 lg:bg-opacity-30 backdrop-blur-md"></div>
      <Navbar />

      {/* Main content */}
      <main className="absolute pt-24 top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center gap-14 lg:gap-10">
        <h1 className="heading text-center text-4xl lg:text-6xl font-montserrat font-bold leading-snug lg:tracking-wider">
          High-Converting Landing Pages And Facebook Ads — Fast.
        </h1>

        <h2 className="subheading text-center text-xl text-balance leading-snug font-montserrat font-medium">
          Get more customers with landing pages and ads designed to convert.
        </h2>
        <button className="flex items-center justify-center gap-2 w-80 rounded-full px-2 py-4 text-lg font-montserrat font-semibold lg:font-bold bg-white/60 text-black transition-all duration-200 ease-in-out hover:bg-black/50 hover:text-white">
          Let&apos;s Grow Your Business <FaArrowRight />
        </button>
      </main>

      {/* Location icon + info box (Always visible) */}
      <div className="flex flex-col items-end absolute right-0 bottom-20 lg:bottom-36 m-auto">
        {/* Location icon (Always visible) */}
        <div className="w-20 h-20 rounded-tl-full rounded-bl-full bg-white/10 flex items-center justify-center animate-pulse">
          <IoLocationOutline size={20} className="text-white" />
        </div>

        {/* Location Box (Always visible) */}
        <div className="relative bg-black/30 backdrop-blur-xl p-8 rounded-tl-full rounded-bl-full border border-white/10 overflow-hidden">
          {/* Rotating background icon */}
          <div className="absolute top-5 right-2 text-white/5 rotate-12 transition-all duration-700">
            <PiCirclesFourLight ref={svgRef} size={80} />
          </div>

          {/* Location header */}
          <div className="flex items-center mb-2 relative z-10">
            <h3 className="text-xl font-montserrat font-bold tracking-wider">
              LOCATION
            </h3>
          </div>

          {/* Location details */}
          <div className="relative z-10">
            <p className="text-xl font-montserrat font-bold mb-1">
              Located in India
            </p>
            <p className="text-white/70 font-montserrat text-sm">
              Delivering excellence worldwide
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
