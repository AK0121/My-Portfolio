import pamphlets1Img from "/Assets/Images/pamphlets-1.svg";
import pamphlets2Img from "/Assets/Images/pamphlets-2.svg";
import facebookImg from "/Assets/Images/facebook-ads.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const AboutServices = () =>
   {
    const buttonRef = useRef(null);

    useEffect(() => {
      buttonRef.current.addEventListener("mouseenter", () => {
        gsap.to(buttonRef.current, {
          scale: 1.05,
          boxShadow: "0 0 20px rgba(103, 232, 249, 0.5)",
          duration: 0.3
        });
      });

      buttonRef.current.addEventListener("mouseleave", () => {
        gsap.to(buttonRef.current, {
          scale: 1,
          boxShadow: "0 0 20px rgba(103, 232, 249, 0.5)",
          duration: 0.3
        });
      });
    }, []);

  return <div className="md:h-screen min-h-max w-full overflow-hidden text-white font-montserrat bg-[rgb(25,51,54)] py-14">
    <div id="painPointSection" className="flex flex-col gap-16">
        <div className="upperSection flex md:flex-row flex-col justify-center items-center w-8/12 mx-auto md:gap-8 gap-14 pt-10">
            <img src={pamphlets1Img} className="lg:w-44 w-24 filter invert" alt="pamphlets-image" />
            <h2 className="lg:text-xl md:text-lg text-sm font-montserrat">In today’s world, businesses are still relying on old-school methods like pamphlets and posters to market themselves. But let’s be honest – how many of those actually get noticed? What you need is a tool that can shout about your business louder than any poster ever could.</h2>
            <img src={pamphlets2Img} className="lg:w-44 w-24 filter invert" alt="pamphlets-image" />
        </div>
        <div className="lowerSection w-8/12 mx-auto">
        <p className="text-2xl leading-relaxed font-montserrat">
        Enter the landing page – your digital megaphone. It’s not just a page; it’s your 24/7 salesperson, your online storefront, and your best marketing tool all rolled into one.
        </p>
        <p className="text-2xl leading-relaxed font-montserrat">
        And the best part? It’s easy to share. Just send a link, and boom – your school, your restaurant, or e-commerce store is just a click away. 
        </p>
        <p className="text-2xl leading-relaxed font-montserrat pt-10">
        Need to scale up? That’s where Facebook ads come in. With billions of users, Facebook ads are the ultimate way to reach more people and grow your business. AKcelerate handle all of this for you – so you can focus on what you do best.
        </p>
        </div>
    </div>

    <div id="partition" className="my-12 h-[0.8px] w-9/12 mx-auto bg-gray-100"></div>

    <div id="servicesSection" className="flex flex-col gap-8 font-montserrat">
        <h1 className="text-5xl font-bold text-center pb-10 md:pb-0">How we help you grow</h1>
        <div className="content md:w-8/12 w-11/12 mx-auto flex flex-col md:flex-row justify-center items-center">
        <div className="text-content w-1/2 md:text-2xl text-xl">
        At AKcelerate, we don’t just create landing pages and run ads. We create tools that help your business grow.
        </div> 
        <div className="image-content w-60 h-60">
          <img src={facebookImg} alt="" />
        </div>
        </div>
        <div className="services-list md:w-6/12 w-11/12 mx-auto">
          <h2 className="text-3xl font-bold">How we do it :</h2>
          <ul className="text-xl list-disc pl-10 py-6 flex flex-col gap-4 md:w-full w-10/12 mx-auto">
            <li>We start by understanding your business and know your goals.</li>
            <li>We design and develop high converting landing pages for the targeted audience.</li>
            <li>We create and manage Facebook ad campaigns that give real results.</li>
            <li>We track performance and optimize for maximum ROI.</li>
          </ul>
          <blockquote className="pb-5 pt-10 text-2xl italic text-center text-blue-100 md:w-full w-10/12 mx-auto">“ We handle all the digital stuff from planning to execution so you can do what you do best ”</blockquote>
        </div>
        <div className="call-to-action md:w-6/12 w-11/12 mx-auto text-lg flex flex-col justify-center items-center gap-7">
          <h3 className="md:w-7/12 w-10/12 mx-auto">Whether you need a stunning landing page or a high-performing ad campaign, we’ve got you covered.</h3>
          <button
            ref={buttonRef}
            className="mt-8 relative overflow-hidden group bg-skyBlue text-white font-bold py-4 px-8 rounded-md text-lg parallax-2"
          >
            <span className="relative z-10">Get Started</span>
            <span
              className="button-gradient absolute inset-0 bg-gradient-to-r from-skyBlue via-brightOrange to-skyBlue z-0"
              style={{ transform: "translateX(-100%)" }}
            />
          </button>
        </div>
    </div>
  </div>;
};

export default AboutServices;