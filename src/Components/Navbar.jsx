import React from "react";
import logo from "/Assets/Images/logo-white-2.png";
import navVideo from "/Assets/Videos/navBackgroundVideo.mp4";
import { CiMenuFries } from "react-icons/ci";
import { useState, useRef } from "react";
import { RiCloseLargeLine } from "react-icons/ri";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");

  const menuItems = ["Home", "About", "Contact"];

  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef(null);
  const bgRef = useRef(null);
  const linksRef = useRef(null);
  const closeBtnRef = useRef(null);
  const socialRef = useRef(null);

  // Desktop Navigation Animation

  // Mobile Navigation Animation
  useGSAP(() => {
    const tl = gsap.timeline({ paused: true });

    tl.fromTo(
      bgRef.current,
      { scaleY: 0, transformOrigin: "top center" },
      { scaleY: 1, duration: 0.7, ease: "power4.out" }
    )
      .fromTo(
        linksRef.current.children,
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.4, ease: "elastic.out(1.2, 0.8)" },
        "-=0.3"
      )
      .fromTo(
        closeBtnRef.current,
        { scale: 0, y: -10 },
        { scale: 1, y: 0, duration: 0.1, ease: "back.out(1.7)" },
        "-=0.1"
      )
      .fromTo(
        socialRef.current.children,
        { opacity: 0 },
        { opacity: 1, duration: 0.7, ease: "power2.out" },
        "-=0.3"
      );

    if (isOpen) {
      tl.play();
    } else {
      tl.reverse();
    }
  }, [isOpen]);

  return (
    <header className="h-14 w-full flex justify-between lg:justify-around items-center pt-10 relative">
      <div className="logo">
        <img className="w-56 lg:w-64" src={logo} alt="website-logo" />
      </div>

      {/* Desktop Menu */}
      <nav className="h-14 w-[85%] hidden lg:flex xl:w-[60%] justify-end items-center space-x-10 xl:space-x-20 mr-10">
        <ul className="flex gap-16 text-white text-xl font-montserrat font-semibold">
          {menuItems.map((item) => (
            <li
              key={item}
              className="flex flex-col items-center pt-5 hover:scale-110 transition-all ease-in-out duration-150"
              onClick={() => setActiveLink(item)} //Set active link when clicked
            >
              <a
                href=""
                className="hover:scale-110 transition-all duration-150 px-2 py-2 rounded-lg w-full h-full flex items-center justify-center"
                onClick={(e) => e.currentTarget.parentElement.click()} //Click parent element when link is clicked
              >
                {item}
              </a>
              <span
              className={`bg-white w-2 h-2 rounded-full transition-opacity duration-300 ${
                activeLink === item ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              }`}
            ></span>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu */}
      <nav className="lg:hidden flex">
        <button
          ref={menuRef}
          className="mr-4 mt-2 w-16 h-16 md:w-20 md:h-20 flex z-50 bg-white border-skyBlue transition-all ease-in-out duration-150 border-4 justify-center items-center rounded-full cursor-pointer"
          onClick={(e) => {
            e.currentTarget.classList.toggle("bg-skyBlue");
            e.currentTarget.classList.toggle("scale-110");
            setIsOpen(!isOpen);
          }}
        >
          <CiMenuFries size={30} className="text-black pointer-events-none" />
        </button>

        <div
          className={`fixed inset-0 z-50 transition-all duration-500 ease-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
          <video
            ref={bgRef}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
          >
            <source src={navVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="flex flex-col">
            <button
              ref={closeBtnRef}
              className="absolute top-2 right-4 w-20 h-20 flex z-50 bg-[#4587d7] border-[#131e2b] transition-all ease-in-out duration-150 border-4 justify-center items-center rounded-full cursor-pointer"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <RiCloseLargeLine
                size={30}
                className="text-white pointer-events-none"
              />
            </button>

            <ul
              className="absolute z-10 pt-40 w-full overflow-y-auto items-center flex flex-col gap-16 text-5xl md:text-7xl font-montserrat font-bold"
              ref={linksRef}
            >
              <li>
                <a className="" href="">
                  Home
                </a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
            <div
              ref={socialRef}
              className="absolute z-10 bottom-10 w-full overflow-y-auto font-montserrat font-bold social links flex flex-col gap-4 text-2xl"
            >
              <button className="bg-black/20 border-2 text-white border-gray-400 py-2 px-4 rounded-lg md:w-[70%] w-[90%] mx-auto">
                <a href="">Resume</a>
              </button>
              <button className="bg-black/15 text-white border-2 border-gray-400 py-2 px-4 rounded-md md:w-[70%] w-[90%] mx-auto">
                Github
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
