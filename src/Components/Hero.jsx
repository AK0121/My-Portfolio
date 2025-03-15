import React, { useRef } from "react";
import rocketImg from "/Assets/Images/rocket.svg";
import mockupImage from "/Assets/Images/mock-up.png";
import landingPageImg2 from "/Assets/Images/landing-page-mock-up-2.png";
import { FaArrowRight } from "react-icons/fa";
import {HashLink} from "react-router-hash-link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { PiCirclesFourLight } from "react-icons/pi";
import { IoLocationOutline } from "react-icons/io5";

gsap.registerPlugin(useGSAP);

const Hero = () => {
  const svgRef = useRef(null);
  const rocketRef = useRef(null);

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
    <section className="h-dvh w-10/12 mx-auto text-white relative overflow-hidden">

      {/* Main content */}
      <main className="w-[98%] mx-auto md:w-[55%] absolute z-50 pt-52 md:pt-72 top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center ">
        <img
          ref={rocketRef}
          className="w-40 md:w-36 lg:w-20 pt-28 lg:pt-0"
          src={rocketImg}
          alt="Rocket"
        />
        <h1 className="heading text-white text-center text-2xl md:text-3xl lg:text-5xl font-montserrat pb-10 font-bold leading-snug lg:tracking-wider">
          <span className="text-skyBlue text-5xl md:text-6xl font-extrabold">
            AKcelerate
          </span>{" "}
          Your Business Growth -{" "}
          <span className="text-brightOrange text-5xl font-extrabold">
            Fast
          </span>
        </h1>

        <h2 className="subheading lg:text-center text-justify sm:text-justify sm:w-full text-xl leading-snug pb-10 font-montserrat font-medium md:text-base sm:text-sm">
          Designing | Developing high-converting landing pages and Facebook ads
          that deliver real results .
        </h2>
        <HashLink smooth to="/#my-work">
        <div className="relative z-10 overflow-hidden flex items-center justify-center gap-2 w-80 rounded-full px-4 py-4 text-lg font-montserrat font-semibold lg:font-bold outline-none bg-brightOrange text-white transition-all duration-200 ease-out group">
          {/* Background overlay that expands on hover */}
          <span className="absolute inset-0 bg-skyBlue w-0 transition-all duration-300 ease-out group-hover:w-full"></span>

          {/* Text and arrow with higher z-index */}
          <span className="relative z-10 transition-none">See Our Work</span>

          <FaArrowRight className="relative z-10 self-center transition-transform duration-300 ease-out group-hover:text-white" />
        </div>
        </HashLink>
      </main>

      {/* Location Box */}
      <div className="absolute bottom-0 right-0 m-4 lg:m-8">
        {/* Location Box (Always visible) */}
        <div className="bg-black/10 backdrop-blur-xl rounded-full py-2 px-4 border border-white/10 overflow-hidden">
          {/* Rotating background icon */}
          <div ref={svgRef} className="absolute inset-0 flex justify-between">
            <PiCirclesFourLight
              size={20}
              className="text-white/10 animate-spin"
            />
            <PiCirclesFourLight
              size={20}
              className="text-white/10 animate-spin"
              style={{ position: "absolute", bottom: -2, right: 20 }}
            />
          </div>

          {/* Location details */}
          <div className="relative z-10 flex items-center">
            <IoLocationOutline className="text-2xl text-white/70 mr-2" />
            <p className="text-sm font-montserrat font-bold text-white/90">
              India <span className="text-brightOrange">|</span> Delivering
              excellence worldwide
            </p>
          </div>
        </div>
      </div>

      {/* Hero Element */}
      <div className="hidden lg:flex absolute -left-[23rem] top-28 z-0">
        {/* Mockup image */}
        <img
          src={mockupImage}
          alt="Hero Element"
          className="md:h-[600px] object-contain relative z-20 -left-[1rem]"
        />

        {/* Landing page inside mockup */}
        <img
          src={landingPageImg2}
          alt="Landing page mock-up"
          className="absolute bottom-14 left-[400px] h-[500px] w-[240px] z-30 border-none rounded-[1.9rem]"
        />
      </div>
    </section>
  );
};

export default Hero;