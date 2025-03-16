import React, { useEffect, useState, useRef } from "react";
import logo from "/Assets/Images/logo-white-2.png";
import { CiMenuFries } from "react-icons/ci";
import { RiCloseLargeLine } from "react-icons/ri";
import { FaInstagram, FaLinkedinIn, FaFacebook } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FaXTwitter } from "react-icons/fa6";

gsap.registerPlugin(useGSAP);

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const location = useLocation();
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const path = location.pathname;
    if (path === "/") setActiveLink("Home");
    else if (path === "/about") setActiveLink("About");
    else if (path === "/contact") setActiveLink("Contact");
  }, [location]);

  const menuRef = useRef(null);
  const overlayRef = useRef(null);
  const linksRef = useRef(null);
  const socialRef = useRef(null);

  // GSAP Animation for Mobile Menu
  useGSAP(() => {
    if (isOpen) {

      const tl = gsap.timeline();

      // Animate the full-screen menu sliding in from left
      tl.fromTo(
        overlayRef.current,
        { x: "-100%" },
        {
          x: "0%",
          duration: 0.5,
          ease: "power3.out",
        }
      );

      // Simple fade in for grid background
      tl.fromTo(
        ".grid-background",
        { opacity: 0 },
        { 
          opacity: 0.15,
          duration: 0.3
        },
        "-=0.3"
      );

      // Animate links with a staggered effect - prioritize these animations
      tl.fromTo(
        linksRef.current.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.1,
          ease: "back.out(1.7)",
        },
        "-=0.2"
      );

      // Animate social icons
      tl.fromTo(
        socialRef.current.children,
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.1,
          ease: "power2.out",
        },
        "-=0.2"
      );
    }
  }, [isOpen]);

  // Close menu animation
  const closeMenu = () => {
    gsap.to(overlayRef.current, {
      x: "-100%",
      duration: 0.4,
      ease: "power2.inOut",
      onComplete: () => setIsOpen(false),
    });
  };

  return (
    <header className="fixed z-[999] top-4 left-1/2 transform -translate-x-1/2 w-[95%] md:w-[90%] lg:w-[80%] flex justify-between items-center bg-black/40 rounded-full border-[0.3px] border-gray-200/30 py-2 md:py-4 px-4 md:px-8">
      {/* Logo */}
      <div className="logo relative overflow-hidden group">
        <img
          className="w-32 md:w-40 lg:w-48 transition-all duration-300 group-hover:scale-110"
          src={logo}
          alt="website-logo"
        />
      </div>

      {/* Desktop Navigation */}
      <nav className="h-14 hidden lg:flex justify-end items-center">
        <div className="bg-black/40 rounded-full px-3 py-1">
          <ul className="flex gap-2 text-white text-lg font-montserrat font-medium">
            {menuItems.map((item) => (
              <li key={item.name} className="relative">
                <Link
                  to={item.path}
                  className={`px-6 py-2 rounded-full transition-all duration-300 flex items-center justify-center ${
                    activeLink === item.name
                      ? "bg-gradient-to-r from-blue-600 to-cyan-400 text-white"
                      : "hover:bg-white/10"
                  }`}
                  onClick={() => setActiveLink(item.name)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <nav className="lg:hidden flex items-center">
        <button
          ref={menuRef}
          className="mr-1 mt-1 w-12 h-12 md:w-14 md:h-14 flex z-50 bg-gradient-to-r from-blue-600 to-cyan-500 transition-all ease-in-out duration-150 justify-center items-center rounded-full cursor-pointer shadow-lg shadow-blue-500/20"
          onClick={() => setIsOpen(true)}
        >
          <CiMenuFries size={24} className="text-white pointer-events-none" />
        </button>

        {/* Full-Screen Mobile Menu */}
        <div
          ref={overlayRef}
          className="fixed top-0 right-0 w-full h-screen z-50 bg-gradient-to-b from-black via-blue-950/95 to-black overflow-hidden"
          style={{ transform: isOpen ? "translateX(0)" : "translateX(-120%)" }}
        >
          {/* Clean Grid SVG Background */}
          <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
            <svg className="grid-background w-full h-full opacity-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
              {/* Perspective Grid Lines */}
              {/* Horizontal lines */}
              {Array.from({ length: 12 }).map((_, i) => (
                <line
                  key={`h-${i}`}
                  x1="0"
                  y1={i * 8}
                  x2="100"
                  y2={i * 8}
                  stroke="url(#grid-gradient)"
                  strokeWidth="0.15"
                />
              ))}
              {/* Vertical lines */}
              {Array.from({ length: 12 }).map((_, i) => (
                <line
                  key={`v-${i}`}
                  x1={i * 8}
                  y1="0"
                  x2={i * 8}
                  y2="100"
                  stroke="url(#grid-gradient)"
                  strokeWidth="0.15"
                />
              ))}
              
              {/* Diagonal accent lines (only a few, positioned mostly at edges) */}
              <line x1="0" y1="100" x2="100" y2="0" stroke="url(#accent-gradient)" strokeWidth="0.2" />
              <line x1="0" y1="50" x2="50" y2="0" stroke="url(#accent-gradient)" strokeWidth="0.2" />
              <line x1="50" y1="100" x2="100" y2="50" stroke="url(#accent-gradient)" strokeWidth="0.2" />
              
              {/* Gradients definitions */}
              <defs>
                <linearGradient id="grid-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#4299e1" stopOpacity="0.1" />
                  <stop offset="50%" stopColor="#4299e1" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#4299e1" stopOpacity="0.1" />
                </linearGradient>
                <linearGradient id="accent-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00e1ff" stopOpacity="0.1" />
                  <stop offset="50%" stopColor="#00e1ff" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#00e1ff" stopOpacity="0.1" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Menu Content */}
          <div className="relative w-full h-full flex flex-col items-center justify-between py-24">
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 w-12 h-12 md:w-14 md:h-14 flex z-50 bg-gradient-to-r from-red-500 to-pink-500 justify-center items-center rounded-full cursor-pointer shadow-lg shadow-red-500/20 hover:scale-110 transition-transform duration-200"
              onClick={closeMenu}
            >
              <RiCloseLargeLine size={24} className="text-white" />
            </button>

            {/* Navigation Links */}
            <ul ref={linksRef} className="flex flex-col items-center justify-center gap-12 mt-24">
              {menuItems.map((item) => (
                <li key={item.name} className="text-center">
                  <Link
                    to={item.path}
                    className="relative text-7xl md:text-6xl font-montserrat font-semibold text-white transition-all duration-300 inline-block"
                    onClick={() => {
                      setActiveLink(item.name);
                      closeMenu();
                    }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Media Icons */}
            <div ref={socialRef} className="socials flex flex-col md:flex-row lg:flex-row gap-4 items-center justify-center md:justify-end">
            <ul className="flex gap-6 items-center justify-center md:pr-4">
              <li>
                <a href="https://www.instagram.com/akcelerate_official/" target="blank" rel="noopener noreferrer">
                  <FaInstagram size={30} color="white" />
                </a>
              </li>
              <li>
                <a href="">
                  <FaFacebook size={30} color="white" />
                </a>
              </li>
              <li>
                <a href="https://x.com/akcelerateHQ" target="blank" rel="noopener noreferrer">
                  <FaXTwitter size={30} color="white" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/akcelerate-hq-77b526356/" target="blank" rel="noopener noreferrer">
                  <FaLinkedinIn size={30} color="white" />
                </a>
              </li>
            </ul>
          </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;