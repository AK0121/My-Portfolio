import React, { useState, useEffect, useRef } from "react";
import projectImg1 from "/Assets/Images/project-1.png";
import projectImg2 from "/Assets/Images/project-2.png";
import Modal from "react-modal";
import { AiFillCloseCircle } from "react-icons/ai";
import { FiExternalLink, FiChevronDown, FiChevronsUp, FiCheckCircle } from "react-icons/fi";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

Modal.setAppElement("#root"); // Ensures accessibility

const MyWork = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalImageLoaded, setModalImageLoaded] = useState(false);
  const [expandedCaseStudy, setExpandedCaseStudy] = useState(null);
  const [activeCaseStudyTab, setActiveCaseStudyTab] = useState("overview");

  // Refs for GSAP animations
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const projectsRef = useRef(null);
  const projectRefs = useRef([]);
  const modalContentRef = useRef(null);
  const caseStudyRefs = useRef([]);

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

  // Animation for case study expansion
  useEffect(() => {
    if (expandedCaseStudy !== null && caseStudyRefs.current[expandedCaseStudy]) {
      // Animate case study content
      gsap.fromTo(
        caseStudyRefs.current[expandedCaseStudy],
        { height: 0, opacity: 0 },
        { 
          height: "auto", 
          opacity: 1, 
          duration: 0.5, 
          ease: "power2.out",
          onComplete: () => {
            // Scroll to the expanded case study
            caseStudyRefs.current[expandedCaseStudy].scrollIntoView({ 
              behavior: "smooth", 
              block: "center" 
            });
          }
        }
      );
    }
  }, [expandedCaseStudy]);

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
        onComplete: () => setIsModalOpen(false),
      });
    } else {
      setIsModalOpen(false);
    }
  };

  const toggleCaseStudy = (projectId) => {
    // If clicking the same case study, close it
    if (expandedCaseStudy === projectId) {
      // Animate closing
      if (caseStudyRefs.current[expandedCaseStudy]) {
        gsap.to(caseStudyRefs.current[expandedCaseStudy], {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
          onComplete: () => setExpandedCaseStudy(null)
        });
      } else {
        setExpandedCaseStudy(null);
      }
    } else {
      // If another case study is open, close it first
      if (expandedCaseStudy !== null && caseStudyRefs.current[expandedCaseStudy]) {
        gsap.to(caseStudyRefs.current[expandedCaseStudy], {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: "power2.in"
        });
      }
      
      // Open the clicked case study
      setExpandedCaseStudy(projectId);
      setActiveCaseStudyTab("overview");
    }
  };

  const caseStudies = [
    {
      id: 1,
      title: "Forex Funders",
      subtitle: "High-Performance Trading Platform Transformation",
      overview: "Forex Funders needed a high-speed trading platform to handle massive data influx while providing lightning-fast performance for professional traders. We reimagined their entire UX/UI and built a robust backend that processes thousands of trades per second.",
      challenge: "The primary challenge was creating a latency-free environment that could handle real-time market data while providing an intuitive interface for traders of all experience levels. Additionally, we needed to implement secure payment systems and compliance checks for global regulations.",
      solution: "We developed a custom architecture using React for the frontend with WebSockets for real-time data and Node.js with Redis caching on the backend. The application features advanced charting tools, instant trade execution, and comprehensive analytics dashboards.",
      results: "After launching the new platform, Forex Funders saw a 78% increase in user engagement, 45% reduction in bounce rate, and a remarkable 112% increase in completed trades. The average user session time increased from 23 minutes to 42 minutes, and customer support tickets regarding technical issues decreased by 64%.",
      testimonial: {
        quote: "The performance improvements and intuitive design transformed our business. Our traders can now execute strategies with confidence and speed that was previously impossible."
      },
      technologies: ["React", "Figma", "AWS", "TailwindCSS", "GSAP"]
    },
    {
      id: 2,
      title: "Growth Dashboard",
      subtitle: "Analytics Platform for Marketing Acceleration",
      overview: "Growth Dashboard is an integrated analytics solution designed for marketing teams to track, analyze, and optimize campaign performance across multiple channels. This SaaS platform consolidates data from various sources into actionable insights.",
      challenge: "The client needed a way to unify data from 12+ marketing platforms while providing real-time performance metrics. The dashboard needed to be both comprehensive for CMOs yet intuitive for marketing specialists, with customizable reporting features.",
      solution: "We created a modular dashboard with data integration APIs for all major marketing platforms. The interface features customizable widgets, automated reporting, and predictive analytics powered by machine learning algorithms that suggest optimization opportunities.",
      results: "After implementation, clients reported saving an average of 15 hours per week on reporting tasks. Marketing ROI improved by 32% on average, with some clients seeing up to 47% improvement. The platform now serves over 200 companies with a 94% retention rate.",
      testimonial: {
        quote: "Growth Dashboard changed how we approach marketing strategy. The insights and time-saving automation let us focus on creativity instead of getting lost in spreadsheets."
      },
      technologies: ["React", "Figma", "TypeScript", "TensorFlow", "ChartJS", "Firebase"]
    }
  ];

  const projects = [
    {
      id: 1,
      title: "Forex Funders",
      description:
        "High-speed trading platform with accelerated performance metrics",
      image: projectImg1,
      tags: ["Trading", "Performance", "Web App"],
    },
    {
      id: 2,
      title: "Growth Dashboard",
      description:
        "Analytics platform designed to track and boost marketing acceleration",
      image: projectImg2,
      tags: ["Analytics", "SaaS", "Dashboard"],
    },
  ];

  // Simplified button hover animation
  const handleButtonHover = (index, isEnter) => {
    if (isEnter) {
      gsap.to(`.btn-overlay-${index}`, {
        width: "100%",
        duration: 0.3,
        ease: "power2.out",
      });
    } else {
      gsap.to(`.btn-overlay-${index}`, {
        width: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  return (
    <div
      id="my-work"
      ref={sectionRef}
      className="w-full bg-gradient-to-b from-[#070a1c] to-[#000000] py-16 overflow-hidden"
    >
      {/* Simplified responsive heading */}
      <div ref={titleRef} className="text-center mb-6 px-4">
        <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-skyBlue to-blue-300">
          Accelerated Work
        </h1>
      </div>

      {/* Speed-themed subtitle */}
      <p
        ref={subtitleRef}
        className="text-center text-lg md:text-xl text-gray-300 mt-2 max-w-3xl mx-auto font-montserrat px-4"
      >
        High-velocity web solutions that drive{" "}
        <span className="text-skyBlue font-bold">growth</span> and deliver{" "}
        <span className="text-brightOrange font-bold">results</span>
      </p>

      {/* Project grid with optimized animation */}
      <div
        ref={projectsRef}
        className="project-container max-w-7xl w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mt-12"
      >
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="case-study-container"
          >
            <div
              ref={(el) => (projectRefs.current[index] = el)}
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
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-skyBlue/20 text-skyBlue px-3 py-1 rounded-full font-montserrat"
                  >
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

              {/* Case Study Button */}
              <div className="flex justify-center mt-5">
                <button
                  className="relative overflow-hidden flex items-center justify-center w-full sm:w-48 rounded-full px-4 py-3 text-base font-montserrat font-semibold bg-skyBlue text-white transition-all duration-200 ease-out"
                  onMouseEnter={() => handleButtonHover(index, true)}
                  onMouseLeave={() => handleButtonHover(index, false)}
                  onClick={() => toggleCaseStudy(project.id)}
                >
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span
                      className={`btn-overlay-${index} h-full w-0 bg-brightOrange absolute left-0 top-0`}
                    ></span>
                  </span>

                  <span className="relative z-10 transition-colors duration-300 flex items-center gap-2">
                    {expandedCaseStudy === project.id ? (
                      <>Close case study <FiChevronsUp /></>
                    ) : (
                      <>Read the case study <FiChevronDown /></>
                    )}
                  </span>
                </button>
              </div>
            </div>

            {/* Expandable Case Study Section */}
            <div
              ref={(el) => (caseStudyRefs.current[project.id] = el)}
              className="case-study-expanded overflow-hidden h-0 opacity-0 mt-4 mb-8 rounded-xl bg-gradient-to-br from-gray-900/80 to-blue-950/30 border border-skyBlue/20 shadow-lg shadow-skyBlue/5"
            >
              {caseStudies.filter(study => study.id === project.id).map(caseStudy => (
                <div key={caseStudy.id} className="p-6">
                  {/* Case Study Header */}
                  <div className="mb-6 border-b border-gray-700/50 pb-4">
                    <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-skyBlue to-blue-300">
                      {caseStudy.title}
                    </h2>
                    <p className="text-xl text-gray-300 mt-2">{caseStudy.subtitle}</p>
                  </div>

                  {/* Tab Navigation */}
                  <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-700/50 pb-4">
                    {["overview", "challenge", "solution", "results", "technologies"].map(tab => (
                      <button
                        key={tab}
                        onClick={() => setActiveCaseStudyTab(tab)}
                        className={`px-4 py-2 rounded-full font-medium text-sm transition-all duration-200 ${
                          activeCaseStudyTab === tab
                            ? "bg-skyBlue text-white"
                            : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50"
                        }`}
                      >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                      </button>
                    ))}
                  </div>

                  {/* Tab Content */}
                  <div className="case-study-content mb-6">
                    {activeCaseStudyTab === "overview" && (
                      <div className="space-y-4">
                        <p className="text-gray-200 leading-relaxed">{caseStudy.overview}</p>
                        {/* Testimonial */}
                        <div className="mt-8 bg-gray-800/30 border-l-4 border-skyBlue p-4 rounded-r-lg">
                          <p className="text-gray-300 italic">"{caseStudy.testimonial.quote}"</p>
                          <p className="text-skyBlue mt-2">— {caseStudy.testimonial.author}</p>
                        </div>
                      </div>
                    )}

                    {activeCaseStudyTab === "challenge" && (
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-3">The Challenge</h3>
                        <p className="text-gray-200 leading-relaxed">{caseStudy.challenge}</p>
                      </div>
                    )}

                    {activeCaseStudyTab === "solution" && (
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-3">Our Solution</h3>
                        <p className="text-gray-200 leading-relaxed">{caseStudy.solution}</p>
                      </div>
                    )}

                    {activeCaseStudyTab === "results" && (
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-3">The Results</h3>
                        <p className="text-gray-200 leading-relaxed">{caseStudy.results}</p>
                      </div>
                    )}

                    {activeCaseStudyTab === "technologies" && (
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-3">Technologies Used</h3>
                        <div className="flex flex-wrap gap-3 mt-4">
                          {caseStudy.technologies.map(tech => (
                            <span
                              key={tech}
                              className="px-4 py-2 bg-gray-800 text-skyBlue rounded-full text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex justify-center mt-8">
                    <div className="px-6 py-3 bg-skyBlue/50 rounded-lg font-medium transition-all duration-200 transform hover:scale-95 flex items-center gap-2 text-white">
                      Fast | No-BS | Accelerated Work <FiCheckCircle />
                    </div>
                  </div>
                </div>
              ))}
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
        <div
          ref={modalContentRef}
          className="relative w-11/12 max-w-4xl mx-auto"
        >
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
              className={`w-full h-auto max-h-[80vh] rounded-lg object-contain transition-opacity duration-300 ${
                modalImageLoaded ? "opacity-100" : "opacity-0"
              }`}
              onLoad={() => setModalImageLoaded(true)}
            />
          </div>
        </div>
      </Modal>
      
      <div className="CTA-button flex justify-center items-center">
        <Link to="/contact">
          <button
            className="bg-skyBlue hover:bg-brightOrange hover:scale-95 text-white font-bold py-4 px-32 rounded-lg text-2xl mt-24
         transition-all duration-200 ease-in-out"
          >
            Get in Touch
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MyWork;