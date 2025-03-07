import React, { useRef, useEffect } from "react";
import { CiMenuFries } from "react-icons/ci";
import { RiCloseLargeLine } from "react-icons/ri";
import { useState } from "react";
import navVideo from "/Assets/Videos/navBackgroundVideo.mp4";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const MenuButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = ["Home", "About", "Contact"];
  const closeBtnRef = useRef(null);
  const socialRef = useRef(null);
  const menuRef = useRef(null);
  const bgRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ paused: true });

    tl.fromTo(
      bgRef.current,
      { scaleY: 0, transformOrigin: "top center" },
      { scaleY: 1, duration: 0.7, ease: "power4.out" }
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
    <div>
      <button
        ref={menuRef}
        className={`fixed w-16 h-16 md:w-24 md:h-24 z-50 top-4 right-6 bg-white border-skyBlue hover:bg-skyBlue transition-all ease-in-out duration-150 border-4 justify-center items-center rounded-full cursor-pointer flex`}
        onClick={(e) => {
          e.currentTarget.classList.toggle("bg-skyBlue");
          e.currentTarget.classList.toggle("scale-110");
          setIsOpen(!isOpen);
        }}
      >
        <CiMenuFries size={30} className="text-black pointer-events-none" />
      </button>

      <div
        className={`fixed top-0 right-0 z-50 transition-all duration-500 ease-out h-screen w-full bg-black bg-opacity-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="absolute top-0 left-0 w-full h-full z-10">
          <video
            ref={bgRef}
            autoPlay
            muted
            loop
            playsInline
            className="object-cover w-full h-full"
          >
            <source src={navVideo} type="video/mp4" />
          </video>
        </div>
        <div className="flex flex-col h-full justify-start items-center space-y-12 relative z-20">
          <button
            ref={closeBtnRef}
            className="absolute top-4 right-6 w-16 h-16 md:w-24 md:h-24 flex z-50 bg-[#4587d7] border-[#131e2b] transition-all ease-in-out duration-150 border-4 justify-center items-center rounded-full cursor-pointer"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <RiCloseLargeLine
              size={30}
              className="text-white pointer-events-none"
            />
          </button>
          <ul className="flex flex-col space-y-10 text-white text-5xl md:text-7xl pt-20 font-michroma font-semibold">
            {menuItems.map((item) => (
              <li key={item} className="flex">
                <a
                  href=""
                  className="hover:scale-110 transition-all duration-150 px-2 py-2 rounded-lg w-full h-full flex items-center justify-center"
                  onClick={(e) => {
                    e.currentTarget.parentElement.click();
                    setIsOpen(false);
                  }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <div
            ref={socialRef}
            className="absolute z-10 bottom-28 md:bottom-10 w-full overflow-y-auto font-montserrat font-bold social links flex flex-col gap-4 text-2xl"
          >
            <button className="text-white bg-skyBlue py-2 px-4 rounded-lg w-96 mx-auto">
              <a href="">Resume</a>
            </button>
            <button className="text-white bg-skyBlue py-2 px-4 rounded-lg w-96 mx-auto">
              Github
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuButton;
