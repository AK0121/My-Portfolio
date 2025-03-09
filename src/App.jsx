import React from "react";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import MyWork from "./Components/MyWork";
import Footer from "./Components/Footer";
import { useState, useRef, useEffect } from "react";
import MenuButton from "./Components/MenuButton";
import About from "./Components/About";

const App = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const scrollContainerRef = useRef(null);
  const triggerPoint = 150; // Your desired trigger point

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = scrollContainerRef.current.scrollTop;
      setIsMenuVisible(scrollPosition > triggerPoint);
    };

    const scrollContainer = scrollContainerRef.current;
    scrollContainer.addEventListener("scroll", handleScroll);

    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={scrollContainerRef}
      style={{ height: "100vh", overflow: "auto" }}
      className="bg-[#b8b6b6]"
    >
      {/* <Hero />
      <Services />
      <MyWork />
      <Footer />
      {isMenuVisible && <MenuButton />} */}
      <About />
    </div>
  );
};

export default App;
