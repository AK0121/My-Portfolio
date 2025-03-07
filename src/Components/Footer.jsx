import React, { useRef } from "react";
import globeImg from "/Assets/Images/globe.svg";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {

  return (
    <div className="h-screen min-h-max w-full bg-[#000000]">
      <div className="w-11/12 mx-auto max-w-7xl upper-section flex flex-col lg:flex-row md:flex-row items-center">
        <div className="globeImg lg:w-1/2 md:w-1/2 w-full h-96">
          <img className="h-full w-full" src={globeImg} alt="" />
        </div>

        <div className="text-section lg:w-1/2 md:w-1/2 w-5/6 mx-auto text-center lg:text-left line-height:2">
          <h1 className="text-white font-montserrat font-extrabold text-7xl lg:text-8xl">
            Let&rsquo;s Work
          </h1>
          <h1 className="text-white font-montserrat font-extrabold text-7xl lg:text-8xl ">
            together
          </h1>
        </div>
      </div>

      <div
        className="border-b border-gray-300 border-opacity-50 my-14 md:my-20 w-10/12 mx-auto"
        style={{ borderWidth: "0.5px" }}
      ></div>

      <div className="lower-section">
        <div className="flex flex-col md:flex-row lg:flex-row md:justify-center md:gap-8 items-center">
          <a
            className="rounded-md px-10 py-4 hover:scale-105 transition-all duration-300"
            href="mailto:akcelerate.digital@gmail.com"
          >
            <button className="flex items-center justify-center w-96 gap-3 p-3 rounded-md border-[1px]">
              <IoMdMail className="text-white text-lg md:text-xl" />
              <span className="text-white text-lg">akcelerate.digital@gmail.com</span>
            </button>
          </a>
          <a
            className="rounded-md px-10 py-4 transition-all duration-300 mt-8 md:mt-0 hover:scale-105"
            href="tel:+91 8619959350"
          >
            <button className="flex items-center justify-center w-96 gap-3 p-3 rounded-md border-[1px]">
              <IoCall className="text-white text-lg md:text-xl" />
              <span className="text-white text-lg">+91 8619959350</span>
            </button>
          </a>
        </div>
        <div className="footer-end max-w-7xl mx-auto pt-16 pb-5 md:py-2 md:pt-20 md:pl-4 font-montserrat flex justify-between items-center md:flex-row lg:flex-row flex-col gap-4">
          <h1 className="copyright text-white text-xl md:text-2xl font-montserrat font-bold md:text-left text-center">
            2025 &copy; Edition
          </h1>
          <div className="socials flex flex-col md:flex-row lg:flex-row gap-4 items-center justify-center md:justify-end">
            
            <ul className="flex gap-6 items-center justify-center md:pr-4">
              <li>
                <a href="">
                  <FaWhatsapp size={30} color="white" />
                </a>
              </li>
              <li>
                <a href="">
                  <FaXTwitter size={30} color="white" />
                </a>
              </li>
              <li>
                <a href="">
                  <FaGithub size={30} color="white" />
                </a>
              </li>
              <li>
                <a href="">
                  <FaLinkedinIn size={30} color="white" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
