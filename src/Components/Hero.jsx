import React, { useRef } from "react";
import Navbar from "./Navbar";
import rocketImg from "/Assets/Images/rocket.svg";
import { FaArrowRight } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { PiCirclesFourLight } from "react-icons/pi";
import { BsChevronDown } from "react-icons/bs";
import { useGSAP } from "@gsap/react";
import gsap from "gsap"

gsap.registerPlugin(useGSAP);

const Hero = () => {
  
  const svgRef = useRef(null);
  const rocketRef = useRef(null);
  const scrollRef = useRef(null);

  useGSAP(() => {
    gsap.to(scrollRef.current, {
    y: "-=15px",
    yoyo: true,
    repeat: -1,
    duration: 0.5,
    ease: "power1.inOut",
    });
  })

  useGSAP(() => {
    // Set the initial position (diagonal, near text)
    gsap.set(rocketRef.current, {
      x: -10,
      y: -40,
      rotation: -20,
    });
  
    // Vibration Effect (Rapid shaking to simulate acceleration)
    gsap.to(rocketRef.current, {
      x: "-=2",
      y: "-=2",
      rotation: "-=1",
      repeat: -1,
      yoyo: true,
      duration: 0.1,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <section
      className="h-dvh min-h-[calc(100vh-10rem)] w-full text-white relative "
      style={{
        backgroundImage: "linear-gradient(135deg, #000, #032B44)"
      }}
    >
      <div className="absolute inset-0 bg-blue-900 bg-opacity-20 backdrop-blur-md">
      </div>
      <Navbar />

      {/* Main content */}
      <main className="absolute pt-52 lg:pt-52 top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center ">
        <img
        ref={rocketRef}
          className="w-14 md:w-20 pt-28 lg:pt-0"
          src={rocketImg}
          alt="Rocket"
        />
        <h1 className="heading text-white text-center text-2xl md:text-3xl lg:text-5xl font-montserrat pb-10 font-bold leading-snug lg:tracking-wider">
         <span className="text-skyBlue text-6xl font-extrabold">AKcelerate</span> Your Business Growth - <span className="text-brightOrange text-5xl font-extrabold">Fast</span> 
        </h1>

        <h2 className="subheading lg:text-center text-justify sm:text-justify sm:w-full text-xl leading-snug pb-10 font-montserrat font-medium md:text-base sm:text-sm">
          Designing | Developing high-converting landing pages and Facebook ads
          that deliver real results .
        </h2>
        <button className="relative z-10 overflow-hidden flex items-center justify-center gap-2 w-80 rounded-full px-4 py-4 text-lg font-montserrat font-semibold lg:font-bold outline-none bg-brightOrange text-white transition-all duration-200 ease-out group">
          {/* Background overlay that expands on hover */}
          <span className="absolute inset-0 bg-skyBlue w-0 transition-all duration-300 ease-out group-hover:w-full"></span>

          {/* Text and arrow with higher z-index */}
          <span className="relative z-10 transition-none">
          See Our Work
          </span>

          <FaArrowRight className="relative z-10 self-center transition-transform duration-300 ease-out group-hover:text-white" />
        </button>
      </main>

      {/* Location icon + info box (Always visible) */}
      <div className="hidden lg:flex flex-col items-center lg:items-start absolute left-1/2 lg:left-0 bottom-20 lg:bottom-14 transform -translate-x-1/2 lg:translate-x-0">
        {/* Location Box (Always visible) */}
        <div className="relative lg:bg-black/5 bg-white/5 backdrop-blur-xl py-8 px-24 lg:p-8 lg:rounded-tr-full lg:rounded-br-full border border-white/10 overflow-hidden">
          {/* Rotating background icon */}
          <div
            ref={svgRef}
            className="absolute inset-0 flex justify-between"
          >
            <PiCirclesFourLight size={50} className="text-white/5 animate-spin" />
            <PiCirclesFourLight
              size={50}
              className="text-white/5 animate-spin"
              style={{ position: "absolute", bottom: -8, right: 70 }}
            />
          </div>

          {/* Location header */}
          <div className="flex items-center mb-2 relative z-10">
            <h3 className="text-xl font-montserrat font-bold tracking-wider">
              LOCATION
            </h3>
            <div className="w-8 h-8 ml-2 rounded-full bg-gray-500/15 bg-opacity-20 backdrop-blur-md flex items-center justify-center">
              <IoLocationOutline
                size={20}
                className="text-white animate-pulse"
              />
            </div>
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

      {/* Scroll indicator (right side) */}
      <div 
        ref={scrollRef}
        className="flex flex-col items-center absolute lg:right-10 right-0 lg:bottom-28 bottom-24 group z-0 "
      >
        <div className="relative bg-white/30 backdrop-blur-xl p-3 lg:p-6 rounded-full border border-white/10 overflow-hidden mb-3 transition-all duration-300 group-hover:bg-brightOrange/20">
          <BsChevronDown  
            className="text-white md:w-5 md:h-5 w-1 h-1 transition-all duration-300 group-hover:text-skyBlue" 
          />
        </div>
        <div className="flex flex-col items-center">
          <div className="h-16 w-px bg-gradient-to-b from-white/40 to-transparent"></div>
          <p className="text-white/70 font-montserrat font-medium tracking-widest text-sm rotate-90 origin-left translate-y-4 transform transition-all duration-300 group-hover:text-skyBlue">
            SCROLL
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;