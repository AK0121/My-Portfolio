import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import contactImg from "/Assets/Images/contact-page-image.jpg";
import { MdArrowForward } from "react-icons/md";
import { FaBolt, FaRocket } from "react-icons/fa";
import { FiTrendingUp } from "react-icons/fi";

const Contact = () => {
  const heroRef = useRef(null);
  const formRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Hero section animation
    gsap.from(heroRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power3.out",
    });

    // Form animation
    gsap.from(formRef.current, {
      opacity: 0,
      x: -30,
      duration: 0.6,
      delay: 0.3,
      ease: "power2.out",
    });

    // Image animation
    gsap.from(imageRef.current, {
      opacity: 0,
      x: 30,
      duration: 0.6,
      delay: 0.5,
      ease: "power2.out",
    });
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#03060D] font-montserrat text-white">
      {/* Hero Section with Dynamic Elements */}
      <div ref={heroRef} className="pt-32 pb-16 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          <div className="flex items-center space-x-2 mb-4">
            <FaBolt className="text-blue-400 w-6 h-6" />
            <span className="text-blue-400 uppercase tracking-wider text-sm font-medium">
              Fast Track Your Success
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bebasNeue font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 mb-6">
            Ready to Accelerate Growth?
          </h1>

          <p className="text-2xl text-slate-300 max-w-2xl text-center mb-8">
            Let's make it happen.
          </p>
        </div>
      </div>

      {/* Contact Form and Image Section */}
      <div className="w-full max-w-7xl mx-auto px-6 pb-24">
        <div className="flex flex-col-reverse md:flex-row-reverse items-center gap-12">
          {/* Right Column - Image */}
          <div
            ref={imageRef}
            className="md:flex md:flex-col md:justify-center w-full md:w-1/2"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700 md:mt-6 md:h-[460px] h-[300px]">
              <img
                src={contactImg}
                alt="Business acceleration"
                className="w-full h-full object-cover md:max-h-[400px]"
              />
            </div>
          </div>

          {/* Left Column - Form */}
          <div ref={formRef} className="w-full md:w-1/2">
            <div className="bg-slate-800/50 backdrop-blur-lg p-8 rounded-2xl border border-slate-700 shadow-xl">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <FiTrendingUp className="mr-2 text-blue-400" />
                Let's Make It Happen
              </h2>

              <form
                action="https://formspree.io/f/mkgjnlkw"
                method="POST"
                className="space-y-6"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-300 mb-1"
                  >
                    Your name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="w-full bg-slate-900/60 border border-slate-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-300 mb-1"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="w-full bg-slate-900/60 border border-slate-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="need"
                    className="block text-sm font-medium text-slate-300 mb-1"
                  >
                    What service do you need?
                  </label>
                  <select
                    name="need"
                    id="need"
                    required
                    className="w-full bg-slate-900/60 border border-slate-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 outline-none"
                  >
                    <option value="">Select a service</option>
                    <option value="Landing page">Landing page</option>
                    <option value="Website">Website</option>
                    <option value="Facebook ads">Facebook ads</option>
                    <option value="AKcelerate package">
                      AKcelerate package
                    </option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center group transition-all duration-300"
                >
                  <span>Accelerate Your Growth</span>
                  <MdArrowForward className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
