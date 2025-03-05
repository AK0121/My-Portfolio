import React, { useEffect, useRef } from "react";
import { PiUserSound } from "react-icons/pi";
import { PiRocketLaunchThin } from "react-icons/pi";

import sitePlanImg from "/Assets/Images/site-plan.svg";
import siteDesignImg from "/Assets/Images/design-site.svg";
import siteDevelopmentImg from "/Assets/Images/develop-site.svg";
import AdCreationImg from "/Assets/Images/Ad-creation.svg";
import AnalyitcsImg from "/Assets/Images/analytics.svg";
import CampaignImg from "/Assets/Images/campaign-management.svg";

import { useGSAP } from "@gsap/react";
import gsap from "gsap/gsap-core";


gsap.registerPlugin(useGSAP);

const ServicesPage = () => {
  const canvasRef = useRef(null);
  const textRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Make canvas fill the entire section
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Create stars
    const stars = [];
    const starCount = 200;
    const speed = 0.5;

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        speedX: (Math.random() - 0.5) * speed,
        speedY: Math.random() * speed,
      });
    }

    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw stars
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
        ctx.fill();

        // Update position - slight movement to right to create directional flow
        star.x += star.speedX;
        star.y -= star.speedY;

        // If star moves off screen, reset it
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;
      });

      requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

    useGSAP(() => {
      const text = textRef.current;

      gsap.to(text, {
        x: () => -(text.scrollWidth - window.innerWidth),
        ease: "linear",
        duration: 15,
        repeat: -1,
        yoyo: true,
      });
    }, []);


  return (
    <div className="relative bg-gradient-to-b from-black via-[#112458] to-[#04081b] min-h-screen text-white pt-28 pb-16 overflow-hidden">
      {/* Moving stars canvas */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-0"
        style={{ opacity: 0.7 }}
      />

      {/* Continuously moving text */}
      <div className="relative overflow-hidden mb-16">
        <div className="whitespace-nowrap w-11/12 mx-auto">
          <h1 ref={textRef} className="text-[4rem] md:text-[8rem] lg:text-[14rem] font-bold font-montserrat">
          <span className="text-brightOrange">Boost</span> Your Online Presence -
            <span className="text-skyBlue">Accelerate</span> Your Growth.
          </h1>
        </div>
      </div>

      <div className="container mx-auto w-11/12 md:w-5/6 xl:w-11/12 text-center relative z-20 my-20">
        <p className="text-xl lg:text-4xl mb-20 font-montserrat font-semibold">
          Your one-stop solution for all your online needs. From design to
          development, we've got you covered.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="p-6 bg-gray-900 bg-opacity-80 rounded-lg border border-gray-800 shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <img className="mx-auto w-56" src={sitePlanImg} alt="" />
            <h3 className="text-2xl font-semibold mb-2 pt-10 font-montserrat">
              Site Planning
            </h3>
            <p className="text-gray-300 font-montserrat">
              We create wireframes, site maps, and user flows to bring your
              vision to life.
            </p>
          </div>
          {/* Service 2 */}
          <div className="p-6 bg-gray-900 bg-opacity-80 rounded-lg border border-gray-800 shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <img className="mx-auto w-48" src={siteDesignImg} alt="" />
            <h3 className="text-2xl font-semibold mt-6 mb-2 font-montserrat">
              Custom Design
            </h3>
            <p className="text-gray-300 font-montserrat">
              We design stunning, brand-aligned UIs that convert visitors into
              customers.
            </p>
          </div>
          {/* Service 3 */}
          <div className="p-6 bg-gray-900 bg-opacity-80 rounded-lg border border-gray-800 shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <img className="mx-auto w-56" src={siteDevelopmentImg} alt="" />
            <h3 className="text-2xl font-semibold mb-2 pt-10 font-montserrat">
              Development
            </h3>
            <p className="text-gray-300 font-montserrat">
              We develop responsive, high-performance websites and landing
              pages.
            </p>
          </div>
        </div>
        <button className="relative overflow-hidden flex items-center justify-center gap-2 w-80 rounded-full px-4 py-4 text-lg font-montserrat font-semibold lg:font-bold outline-none bg-brightOrange text-white transition-all duration-200 ease-out group my-24 mx-auto">
          {/* Background overlay that expands on hover */}
          <span className="absolute inset-0 bg-skyBlue w-0 transition-all duration-300 ease-out group-hover:w-full"></span>

          {/* Text and arrow with higher z-index */}
          <span className="relative z-10 transition-none group-hover:text-white">
            Get Your Landing Page
          </span>

          <PiRocketLaunchThin
            size={30}
            className="relative z-10 self-center transition-transform duration-300 ease-out group-hover:scale-75"
          />
        </button>
      </div>

      {/* Section 2: Facebook Ads & Digital Marketing */}
      <div className="container mx-auto w-11/12 md:w-5/6 xl:w-11/12 pt-10 text-center relative z-20">
        <h2 className="text-6xl md:text-8xl lg:text-10xl font-extrabold mb-6 mt-12 font-montserrat">
          Drive Results with High-Converting{" "}
          <span className="text-blue-500 text-7xl md:text-9xl lg:text-11xl">
            Facebook Ads
          </span>
          .
        </h2>
        <p className="text-xl mb-10 font-montserrat">
          We create and manage ad campaigns that deliver real ROI – no
          guesswork, just results.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="p-6 bg-gray-900 bg-opacity-80 rounded-lg border border-gray-800 shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <img className="mx-auto w-56" src={AdCreationImg} alt="" />
            <h3 className="text-2xl font-semibold mt-6 mb-2 font-montserrat">
              Ad Creation
            </h3>
            <p className="text-gray-300 mt-4 font-montserrat">
              We design eye-catching ads and write compelling copy to grab
              attention.
            </p>
          </div>
          {/* Service 2 */}
          <div className="p-6 bg-gray-900 bg-opacity-80 rounded-lg border border-gray-800 shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold mb-2 font-montserrat">
              Campaign Management
            </h3>
            <p className="text-gray-300 mt-4 mb-12 font-montserrat">
              We run A/B tests and optimize campaigns for maximum performance.
            </p>
            <img className="mx-auto w-56" src={AnalyitcsImg} alt="" />
          </div>
          {/* Service 3 */}
          <div className="p-6 bg-gray-900 bg-opacity-80 rounded-lg border border-gray-800 shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <img className="mx-auto w-56" src={CampaignImg} alt="" />
            <h3 className="text-2xl font-semibold mt-16 mb-2 font-montserrat">
              Analytics & Optimization
            </h3>
            <p className="text-gray-300 mt-4 font-montserrat">
              We track results and continuously improve your campaigns for
              better ROI.
            </p>
          </div>
        </div>
        <button className="relative overflow-hidden flex items-center justify-center gap-2 w-80 rounded-full px-4 py-4 text-lg font-montserrat font-semibold lg:font-bold outline-none bg-skyBlue text-white transition-all duration-200 ease-out group my-16 mx-auto">
          {/* Background overlay that expands on hover */}
          <span className="absolute inset-0 bg-brightOrange w-0 transition-all duration-300 ease-out group-hover:w-full"></span>

          {/* Text and arrow with higher z-index */}
          <span className="relative z-10 transition-none group-hover:text-white">
            Start Your Ad Campaign
          </span>

          <PiUserSound
            size={20}
            className="relative z-10 self-center transition-transform duration-300 ease-out group-hover:scale-125"
          />
        </button>
      </div>
    </div>
  );
};

export default ServicesPage;
