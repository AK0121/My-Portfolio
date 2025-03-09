import React, { useEffect, useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { RiCloseLargeLine } from "react-icons/ri";
import navVideo from "/Assets/Videos/navBackgroundVideo.mp4";
import logoImg from "/Assets/Images/logo-white-2.png";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const MenuButton = () => {
  // Only two states needed - menu open and hover state
  const [isOpen, setIsOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const menuItems = ["Home", "About", "Contact"];

  useEffect(() => {})

  return (
    <div className="lg:flex md:flex hidden">
      {/* Glass Overlay - Only visible on hover or when menu is open */}
      <div
        className={`fixed inset-0 bg-black/80 backdrop-blur-3xl z-40 pointer-events-none transition-opacity duration-300 ${
          isHovering || isOpen ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Logo (always positioned in overlay) */}
        <div className="absolute left-5 md:left-10 top-3 md:top-6 z-50">
          <img className="w-72 pointer-events-none" src={logoImg} alt="Logo" />
        </div>

        {/* Navigation content - only rendered when menu is open */}
        {isOpen && (
          <div className="w-full h-full relative pointer-events-auto">
            {/* Video Background */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="w-full h-full">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="object-cover w-full h-full"
                >
                  <source src={navVideo} type="video/mp4" />
                </video>
              </div>
            </div>

            {/* Menu Content */}
            <div className="relative z-20 w-full h-full flex flex-col justify-center items-center">
              <ul className="flex flex-col space-y-10 text-white text-5xl md:text-7xl font-michroma font-semibold">
                {menuItems.map((item) => (
                  <li key={item} className="flex">
                    <a
                      href="#"
                      className="hover:scale-110 transition-all duration-150 px-2 py-2 rounded-lg w-full h-full flex items-center justify-center"
                      onClick={(e) => {
                        e.preventDefault();
                        setIsOpen(false);
                      }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div className="absolute z-20 bottom-28 md:bottom-10 w-full font-montserrat font-bold flex flex-col gap-4 text-2xl">
            <ul className="flex gap-6 items-center justify-center md:pr-4">
              <li>
                <a href="" className="hover:scale-110 transition-all duration-150 cursor-pointer">
                  <FaWhatsapp size={30} color="white" />
                </a>
              </li>
              <li>
                <a href="" className="hover:scale-110 transition-all duration-150 cursor-pointer">
                  <FaXTwitter size={30} color="white" />
                </a>
              </li>
              <li>
                <a href="" className="hover:scale-110 transition-all duration-150 cursor-pointer">
                  <FaGithub size={30} color="white" />
                </a>
              </li>
              <li>
                <a href="" className="hover:scale-110 transition-all duration-150 cursor-pointer">
                  <FaLinkedinIn size={30} color="white" />
                </a>
              </li>
            </ul>
            </div>
          </div>
        )}
      </div>

      {/* Toggle Button - Always visible, changes based on state */}
      <div className="fixed top-4 right-6 z-50">
        {!isOpen ? (
          <button
            className={`w-16 h-16 md:w-24 md:h-24 bg-white border-skyBlue hover:bg-skyBlue transition-all ease-in-out duration-150 border-4 justify-center items-center rounded-full cursor-pointer flex group`}
            onClick={() => setIsOpen(true)}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <CiMenuFries size={30} className="text-black pointer-events-none group-hover:text-white transition-all ease-in-out duration-150" />
          </button>
        ) : (
          <button
            className="w-16 h-16 md:w-24 md:h-24 flex bg-[#4587d7] border-[#131e2b] transition-all ease-in-out duration-150 border-4 justify-center items-center rounded-full cursor-pointer"
            onClick={() => setIsOpen(false)}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <RiCloseLargeLine
              size={30}
              className="text-white pointer-events-none"
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default MenuButton;