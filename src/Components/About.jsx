import React, { useEffect } from "react";
import Lottie from "lottie-react";
import rocketAnimation from "../assets/Animations/Animation-rocket-launch.json";
import { BiSolidBinoculars } from "react-icons/bi";
import { FaRocket, FaChartLine, FaLightbulb } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import visionImg from "/Assets/Images/vision.png";
import AboutServices from "./AboutServices";
import { HashLink } from "react-router-hash-link";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Create minimal animations context
    const ctx = gsap.context(() => {
      // Simple entrance animations for hero section
      gsap.from(".hero-text > *", {
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.2,
        ease: "power2.out"
      });
      
      // Text highlight animations - keeping these as requested
      gsap.to(".text-highlight", {
        textShadow: "0 0 15px rgba(103, 232, 249, 0.6)",
        color: "#67e8f9",
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
      
      gsap.to(".orange-highlight", {
        textShadow: "0 0 15px rgba(249, 115, 22, 0.6)",
        color: "#f97316",
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.5
      });
      
      // Simple scroll animations for vision section
      gsap.from("#vision-section h1", {
        scrollTrigger: {
          trigger: "#vision-section",
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8
      });
      
      gsap.from("#vision-section .content > *", {
        scrollTrigger: {
          trigger: "#vision-section .content",
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        stagger: 0.3,
        duration: 0.8
      });
    });
    
    // Cleanup function
    return () => {
      ctx.revert(); // Clean up all animations in one go
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="about-page w-full min-h-max lg:h-full overflow-y-auto font-montserrat bg-gradient-to-br from-[#354961] to-[#061335]">

      {/* Hero Section - Simplified */}
      <div className="about-hero-section relative md:h-[120vh] min-h-max w-full overflow-hidden">
        {/* Background elements - static now */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-skyBlue blur-3xl opacity-10" />
          <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-brightOrange blur-3xl opacity-15" />
          
          {/* Minimal particles - static now */}
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-70"
              style={{ 
                left: `${Math.random() * 100}%`, 
                top: `${Math.random() * 100}%`
              }}
            />
          ))}
        </div>

        <div className="relative flex flex-col lg:flex-row justify-around items-center gap-0 lg:gap-5 h-full w-10/12 mx-auto pt-32">
          <div className="hero-text text-[#CADCFC] flex flex-col items-center justify-center gap-8 lg:items-start z-10">
            <div className="overflow-hidden">
              <h1 className="text-5xl md:text-6xl font-bold py-4 text-center lg:text-left leading-tight">
                Welcome to <br />
                <span className="text-skyBlue text-6xl md:text-7xl inline-block">
                  <span className="text-highlight">AKcelerate</span>
                </span>
              </h1>
            </div>
            
            <div className="overflow-hidden">
              <h2 className="text-3xl md:text-4xl font-semibold text-center lg:text-left">
                Crafted by <span className="text-brightOrange text-4xl md:text-5xl inline-block">
                  <span className="orange-highlight">Abhishek</span>
                </span>
              </h2>
            </div>

            <p className="text-lg md:text-xl text-center lg:text-left w-full md:w-10/12 leading-relaxed">
              We accelerate your business growth with creative, high-converting
              landing pages and targeted ad campaigns.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-4 w-full">
              <div className="flex items-center gap-3 bg-[#1d2e48] p-4 rounded-lg max-w-xs cursor-pointer hover:bg-[#263b5e] transition-colors duration-300">
                <div className="icon text-skyBlue">
                  <FaRocket size={30} />
                </div>
                <span className="text-sm">Lightning-fast website development</span>
              </div>
              
              <div className="flex items-center gap-3 bg-[#1d2e48] p-4 rounded-lg max-w-xs cursor-pointer hover:bg-[#263b5e] transition-colors duration-300">
                <div className="icon text-brightOrange">
                  <FaChartLine size={30} />
                </div>
                <span className="text-sm">Data-driven digital marketing</span>
              </div>
              
              <div className="flex items-center gap-3 bg-[#1d2e48] p-4 rounded-lg max-w-xs cursor-pointer hover:bg-[#263b5e] transition-colors duration-300">
                <div className="icon text-yellow-400">
                  <FaLightbulb size={30} />
                </div>
                <span className="text-sm">Innovative digital strategies</span>
              </div>
            </div>

            <HashLink to="#servicesSection">
              <div className="mt-8 relative overflow-hidden group bg-skyBlue hover:bg-brightOrange text-white font-bold py-4 md:px-8 px-4 rounded-md text-lg transition-colors duration-300">
                Learn How We Help Businesses Grow
              </div>
            </HashLink>
          </div>

          <div className="illustration relative z-10">
            <div className="relative">
              <Lottie
                animationData={rocketAnimation}
                loop={true}
                className="w-80 h-80 md:w-96 md:h-96"
              />
            </div>
          </div>
        </div>
        
        {/* Scroll indicator - simple static version */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-[#CADCFC] opacity-70">
          <p className="text-sm mb-2">Scroll Down</p>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 20L12 4M12 20L6 14M12 20L18 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      <div id="vision-section" className="vision-section w-full md:h-screen min-h-max bg-[#a8bfde] flex flex-col items-center font-bebasNeue pt-10">
        <h1 className="flex justify-center items-center gap-6">
          <span className="heading-text md:text-9xl text-6xl font-bold">Our Vision</span>
          <span className="heading-icon"><BiSolidBinoculars className="text-8xl" /></span>
        </h1>
        <div className="content w-8/12 mx-auto flex lg:flex-row flex-col-reverse justify-center items-center lg:gap-12 gap-0">
          <div className="text-content flex-1">
            <div className="md:text-2xl flex flex-col gap-7 font-montserrat font-medium py-20 text-center md:text-left leading-snug">
              <h2 className="md:text-5xl text-3xl font-bold">
                At AKeclerate - We help businesses grow digitally – <span className="text-4xl">fast and without the tech headaches.</span> 
              </h2>
              <p className="md:text-xl text-lg font-medium leading-snug">
                I've always been fascinated by the power of the web and how it can transform businesses. That's why I created AKcelerate – to help businesses surf the digital world like pros. We take care of the digital heavy lifting, so you can focus on what you do best. No fluff, no delays, just results. Think of us as your digital pit crew – we fine-tune your online presence so you can race ahead of the competition.
              </p>
              <p className="md:text-xl text-lg font-medium leading-snug text-right animate-pulse">
                - Abhishek 
              </p>
            </div>
          </div>
          <div className="image-content flex-1">
            <img src={visionImg} className="w-full h-full object-cover" alt="vision image" />
          </div>
        </div>
      </div>

      <AboutServices />
    </div>
  );
};

export default About;