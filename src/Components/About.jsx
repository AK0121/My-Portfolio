import React, { useEffect, useRef } from "react";
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
  // References for GSAP animations
  const heroRef = useRef(null);
  const textRefs = useRef([]);
  const rocketRef = useRef(null);
  const bgOrbsRef = useRef([]);
  const cardRefs = useRef([]);
  const buttonRef = useRef(null);
  const scrollIndicatorRef = useRef(null);
  
  // Add to textRefs
  const addToTextRefs = (el) => {
    if (el && !textRefs.current.includes(el)) {
      textRefs.current.push(el);
    }
  };
  
  // Add to cardRefs
  const addToCardRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };
  
  // Add to bgOrbsRef
  const addToBgOrbsRef = (el) => {
    if (el && !bgOrbsRef.current.includes(el)) {
      bgOrbsRef.current.push(el);
    }
  };

  useEffect(() => {
    // Create timeline for initial animations
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    
    // Text animations
    tl.from(textRefs.current, {
      y: 50,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8
    });
    
    // Rocket animation
    tl.from(rocketRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 1
    }, "-=0.5");
    
    // Background orbs
    tl.from(bgOrbsRef.current, {
      opacity: 0,
      scale: 0.5,
      duration: 1.5,
      stagger: 0.2
    }, "-=1");
    
    // Cards animation
    tl.from(cardRefs.current, {
      y: 30,
      opacity: 0,
      stagger: 0.15,
      duration: 0.6
    }, "-=0.8");
    
    // Button animation
    tl.from(buttonRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.6
    }, "-=0.4");
    
    // Scroll indicator
    tl.from(scrollIndicatorRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.6
    });
    
    // Floating animations for text and rocket
    gsap.to(".brand-name", {
      y: -10,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
    
    gsap.to(".creator-name", {
      y: -6,
      duration: 1.8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 0.3
    });
    
    // Rocket floating animation
    gsap.to(rocketRef.current, {
      y: -20,
      rotation: 3,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
    
    // Rocket glow animation
    gsap.to(".rocket-glow", {
      opacity: 0.3,
      width: "70%",
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
    
    // Scroll indicator animation
    gsap.to(scrollIndicatorRef.current, {
      y: 10,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
    
    // Particle animations
    gsap.utils.toArray(".star-particle").forEach(star => {
      gsap.to(star, {
        opacity: gsap.utils.random(0.1, 0.8),
        scale: gsap.utils.random(1, 1.5),
        duration: gsap.utils.random(2, 4),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: gsap.utils.random(0, 2)
      });
    });
    
    // Parallax effect on scroll
    gsap.to(".parallax-1", {
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      },
      y: -80,
      ease: "none"
    });
    
    gsap.to(".parallax-2", {
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      },
      y: -120,
      ease: "none"
    });
    
    gsap.to(bgOrbsRef.current[0], {
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      },
      x: 100,
      y: -50,
      ease: "none"
    });
    
    gsap.to(bgOrbsRef.current[1], {
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      },
      x: -80,
      y: 60,
      ease: "none"
    });
    
    // Text highlight animations
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
    
    // Icon hover animations
    cardRefs.current.forEach(card => {
      const icon = card.querySelector(".icon");
      
      card.addEventListener("mouseenter", () => {
        gsap.to(icon, {
          scale: 1.2,
          rotation: 5,
          duration: 0.3,
          ease: "back.out"
        });
      });
      
      card.addEventListener("mouseleave", () => {
        gsap.to(icon, {
          scale: 1,
          rotation: 0,
          duration: 0.3,
          ease: "back.out"
        });
      });
    });
    
    // Button hover effect
    buttonRef.current.addEventListener("mouseenter", () => {
      gsap.to(buttonRef.current, {
        scale: 1.05,
        boxShadow: "0 0 20px rgba(103, 232, 249, 0.5)",
        duration: 0.3
      });
      
      gsap.to(".button-gradient", {
        x: "100%",
        duration: 0.8,
        ease: "sine.inOut"
      });
    });
    
    buttonRef.current.addEventListener("mouseleave", () => {
      gsap.to(buttonRef.current, {
        scale: 1,
        boxShadow: "0 0 0px rgba(103, 232, 249, 0)",
        duration: 0.3
      });
      
      gsap.to(".button-gradient", {
        x: "-100%",
        duration: 0.8,
        ease: "sine.inOut"
      });
    });
    
    // Cleanup function
    return () => {
      // Kill all animations
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      gsap.killTweensOf(".brand-name");
      gsap.killTweensOf(".creator-name");
      gsap.killTweensOf(rocketRef.current);
      gsap.killTweensOf(".rocket-glow");
      gsap.killTweensOf(scrollIndicatorRef.current);
      gsap.killTweensOf(".star-particle");
      gsap.killTweensOf(".parallax-1");
      gsap.killTweensOf(".parallax-2");
      gsap.killTweensOf(bgOrbsRef.current);
      gsap.killTweensOf(".text-highlight");
      gsap.killTweensOf(".orange-highlight");
      textRefs.current = [];
      cardRefs.current = [];
      bgOrbsRef.current = [];
    };
  }, []);

  return (
    <div className="about-page w-full min-h-max lg:h-full overflow-hidden font-montserrat bg-gradient-to-br from-[#354961] to-[#061335]">

      {/* Enhanced Hero Section */}
      <div ref={heroRef} className="about-hero-section relative md:h-[120vh]  min-h-max w-full overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            ref={el => addToBgOrbsRef(el)}
            className="absolute top-0 right-0 w-96 h-96 rounded-full bg-skyBlue blur-3xl opacity-10"
          />
          <div 
            ref={el => addToBgOrbsRef(el)}
            className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-brightOrange blur-3xl opacity-15"
          />
          
          {/* Particle/star effect */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="star-particle absolute w-1 h-1 bg-white rounded-full opacity-70"
              style={{ 
                left: `${Math.random() * 100}%`, 
                top: `${Math.random() * 100}%`
              }}
            />
          ))}
        </div>

        <div className="relative flex flex-col lg:flex-row justify-around items-center gap-0 lg:gap-5 h-full w-10/12 mx-auto pt-32">
          <div className="textContent text-[#CADCFC] flex flex-col items-center justify-center gap-8 lg:items-start z-10">
            <div ref={addToTextRefs} className="overflow-hidden">
              <h1 className="text-5xl md:text-6xl font-bold py-4 text-center lg:text-left leading-tight">
                Welcome to <br />
                <span className="brand-name text-skyBlue text-6xl md:text-7xl inline-block">
                  <span className="text-highlight">AKcelerate</span>
                </span>
              </h1>
            </div>
            
            <div ref={addToTextRefs} className="overflow-hidden">
              <h2 className="text-3xl md:text-4xl font-semibold text-center lg:text-left">
                Crafted by <span className="creator-name text-brightOrange text-4xl md:text-5xl inline-block">
                  <span className="orange-highlight">Abhishek</span>
                </span>
              </h2>
            </div>

            <p 
              ref={addToTextRefs}
              className="text-lg md:text-xl text-center lg:text-left w-full md:w-10/12 leading-relaxed parallax-1"
            >
              We accelerate your business growth with creative, high-converting
              landing pages and targeted ad campaigns.
            </p>

            <div 
              ref={addToTextRefs}
              className="flex flex-wrap justify-center lg:justify-start gap-6 mt-4 w-full parallax-1"
            >
              <div ref={el => addToCardRefs(el)} className="flex items-center gap-3 bg-[#1d2e48] p-4 rounded-lg max-w-xs cursor-pointer hover:bg-[#263b5e] transition-colors duration-300">
                <div className="icon text-skyBlue">
                  <FaRocket size={30} />
                </div>
                <span className="text-sm">Lightning-fast website development</span>
              </div>
              
              <div ref={el => addToCardRefs(el)} className="flex items-center gap-3 bg-[#1d2e48] p-4 rounded-lg max-w-xs cursor-pointer hover:bg-[#263b5e] transition-colors duration-300">
                <div className="icon text-brightOrange">
                  <FaChartLine size={30} />
                </div>
                <span className="text-sm">Data-driven digital marketing</span>
              </div>
              
              <div ref={el => addToCardRefs(el)} className="flex items-center gap-3 bg-[#1d2e48] p-4 rounded-lg max-w-xs cursor-pointer hover:bg-[#263b5e] transition-colors duration-300">
                <div className="icon text-yellow-400">
                  <FaLightbulb size={30} />
                </div>
                <span className="text-sm">Innovative digital strategies</span>
              </div>
            </div>

            <HashLink to="#servicesSection">
            <div 
              ref={buttonRef}
              className="mt-8 relative overflow-hidden group bg-skyBlue text-white font-bold py-4 px-8 rounded-md text-lg parallax-2"
            >
              <span className="relative z-10">Learn How We Help Businesses Grow</span>
              <span 
                className="button-gradient absolute inset-0 bg-gradient-to-r from-skyBlue via-brightOrange to-skyBlue z-0"
                style={{ transform: "translateX(-100%)" }}
              />
            </div>
            </HashLink>
          </div>

          <div 
            ref={rocketRef}
            className="illustration relative z-10 parallax-2"
          >
            <div className="relative">
              <Lottie
                animationData={rocketAnimation}
                loop={true}
                className="w-80 h-80 md:w-96 md:h-96"
              />
              <div
                className="rocket-glow absolute -bottom-10 -left-10 right-0 mx-auto w-64 h-12 bg-skyBlue opacity-10 blur-xl rounded-full"
              />
            </div>
          </div>
        </div>
        
        {/* Scroll down indicator */}
        <div 
          ref={scrollIndicatorRef}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-[#CADCFC] opacity-70"
        >
          <p className="text-sm mb-2">Scroll Down</p>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 20L12 4M12 20L6 14M12 20L18 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      <div id="vision-section" className="vision-section w-full md:h-screen min-h-max bg-[#a8bfde] flex flex-col items-center font-bebasNeue pt-10">
        {/* Rest of your code remains the same */}
        <h1 className="flex justify-center items-center gap-6">
          <span className="heading-text md:text-9xl text-6xl font-bold">Our Vision</span>
          <span className="heading-icon"><BiSolidBinoculars className="text-8xl" /></span>
        </h1>
        <div className="content w-8/12 mx-auto flex lg:flex-row flex-col-reverse justify-center items-center lg:gap-12">
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