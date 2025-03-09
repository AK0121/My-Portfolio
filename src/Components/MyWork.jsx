import React, { useState, useEffect, useRef } from "react";
import projectImg1 from "/Assets/Images/project-1.png";
import projectImg2 from "/Assets/Images/project-2.png";
import projectImg3 from "/Assets/Images/project-3.png";
import projectImg4 from "/Assets/Images/project-4.png";
import Modal from "react-modal";
import { AiFillCloseCircle } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

Modal.setAppElement("#root"); // Ensures accessibility

const MyWork = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalImageLoaded, setModalImageLoaded] = useState(false);
  
  // Refs for GSAP animations
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const projectsRef = useRef(null);
  const projectRefs = useRef([]);
  const modalContentRef = useRef(null);

  // Reset image loaded state when modal closes
  useEffect(() => {
    if (!isModalOpen) {
      setModalImageLoaded(false);
    }
  }, [isModalOpen]);



  // Animation for modal - only runs when modal is open AND ref exists
  useEffect(() => {
    if (isModalOpen && modalContentRef.current) {
      gsap.fromTo(
        modalContentRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" }
      );
    }
  }, [isModalOpen, modalContentRef.current]);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    // Only animate if ref exists
    if (modalContentRef.current) {
      gsap.to(modalContentRef.current, {
        opacity: 0, 
        scale: 0.95, 
        duration: 0.2, 
        ease: "power2.in",
        onComplete: () => setIsModalOpen(false)
      });
    } else {
      setIsModalOpen(false);
    }
  };

  const projects = [
    {
      id: 1,
      title: "Forex Funders",
      description: "High-speed trading platform with accelerated performance metrics",
      image: projectImg1,
      tags: ["Trading", "Performance", "Web App"]
    },
    {
      id: 2,
      title: "Growth Dashboard",
      description: "Analytics platform designed to track and boost marketing acceleration",
      image: projectImg2,
      tags: ["Analytics", "SaaS", "Dashboard"]
    },
    {
      id: 3,
      title: "Ad Campaign Launcher",
      description: "Facebook ads specialist platform for rapid campaign scaling",
      image: projectImg3,
      tags: ["Facebook Ads", "Marketing", "Growth"]
    },
    {
      id: 4,
      title: "Velocity Landing Page",
      description: "High-conversion landing page with optimized speed metrics",
      image: projectImg4,
      tags: ["Landing Page", "Optimization", "Design"]
    },
  ];

  // Simplified button hover animation
  const handleButtonHover = (index, isEnter) => {
    if (isEnter) {
      gsap.to(`.btn-overlay-${index}`, {
        width: "100%",
        duration: 0.3,
        ease: "power2.out"
      });
    } else {
      gsap.to(`.btn-overlay-${index}`, {
        width: 0,
        duration: 0.3,
        ease: "power2.out"
      });
    }
  };

  return (
    <div ref={sectionRef} className="w-full bg-gradient-to-b from-[#070a1c] to-[#000000] py-16 overflow-hidden">
      {/* Simplified responsive heading */}
      <div ref={titleRef} className="text-center mb-6 px-4">
        <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-skyBlue to-blue-300">
          Accelerated Work
        </h1>
      </div>
        
      {/* Speed-themed subtitle */}
      <p ref={subtitleRef} className="text-center text-lg md:text-xl text-gray-300 mt-2 max-w-3xl mx-auto font-montserrat px-4">
        High-velocity web solutions that drive <span className="text-skyBlue font-bold">growth</span> and deliver <span className="text-brightOrange font-bold">results</span>
      </p>

      {/* Project grid with optimized animation */}
      <div ref={projectsRef} className="project-container max-w-7xl w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mt-12">
        {projects.map((project, index) => (
          <div
            key={project.id}
            ref={el => (projectRefs.current[index] = el)}
            className="relative bg-gray-900/40 p-5 rounded-xl transition-all duration-300 ease-in-out shadow-lg border border-gray-800/50 hover:border-skyBlue/50 hover:bg-blue-950/30"
          >
            {/* Project Image with simplified hover effect */}
            <div
              onClick={() => openModal(project.image)}
              className="w-full h-64 overflow-hidden rounded-lg relative cursor-pointer group"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 z-10 flex items-end justify-center pb-4 transition-opacity duration-300">
                <span className="text-white flex items-center gap-2">
                  <FiExternalLink /> View Project On Full Screen
                </span>
              </div>
              <img
                className="w-full h-full object-cover object-center transition-all duration-500 ease-in-out group-hover:scale-105"
                src={project.image}
                alt={project.title}
                loading="lazy"
              />
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tags.map(tag => (
                <span key={tag} className="text-xs bg-skyBlue/20 text-skyBlue px-3 py-1 rounded-full font-montserrat">
                  {tag}
                </span>
              ))}
            </div>

            {/* Project Info */}
            <div className="mt-3">
              <h2 className="text-white text-xl font-montserrat font-semibold">
                {project.title}
              </h2>
              <p className="text-gray-300 text-base mt-1">
                {project.description}
              </p>
            </div>

            {/* Simplified Button */}
            <div className="flex justify-center mt-5">
              <button 
                className="relative overflow-hidden flex items-center justify-center w-full sm:w-48 rounded-full px-4 py-3 text-base font-montserrat font-semibold bg-skyBlue text-white transition-all duration-200 ease-out"
                onMouseEnter={() => handleButtonHover(index, true)}
                onMouseLeave={() => handleButtonHover(index, false)}
              >
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className={`btn-overlay-${index} h-full w-0 bg-brightOrange absolute left-0 top-0`}></span>
                </span>
                
                <span className="relative z-10 transition-colors duration-300">
                  Read the case study
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Improved Modal with ref-based animations */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Project Image"
        className="fixed inset-0 flex items-center justify-center z-50"
        overlayClassName="fixed inset-0 bg-black/90 backdrop-blur-md z-50"
      >
        <div ref={modalContentRef} className="relative w-11/12 max-w-4xl mx-auto">
          {/* Close Button */}
          <button
            className="absolute -top-10 -right-2 text-white text-4xl hover:text-red-500 transition-colors z-10"
            onClick={closeModal}
          >
            <AiFillCloseCircle />
          </button>

          {/* Loading indicator */}
          {!modalImageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 border-3 border-skyBlue border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}

          {/* Modal Image with consistent sizing */}
          <div className="bg-gray-900/60 p-2 rounded-lg">
            <img
              src={selectedImage}
              alt="Project Preview"
              className={`w-full h-auto max-h-[80vh] rounded-lg object-contain transition-opacity duration-300 ${modalImageLoaded ? 'opacity-100' : 'opacity-0'}`}
              onLoad={() => setModalImageLoaded(true)}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default MyWork;

