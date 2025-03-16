import React from "react";
import Hero from "./Hero";
import Services from "./Services";
import MyWork from "./MyWork";
import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  
  return (
    <div className="min-h-screen w-full overflow-y-auto">
      <Hero />
      <Services />
      <MyWork />
    </div>
  );
};

export default HomePage;
