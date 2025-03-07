import React, { useState } from "react";
import projectImg1 from "/Assets/Images/project-1.png";
import projectImg2 from "/Assets/Images/project-2.png";
import projectImg3 from "/Assets/Images/project-3.png";
import projectImg4 from "/Assets/Images/project-4.png";
import Modal from "react-modal";
import { AiFillCloseCircle } from "react-icons/ai";

Modal.setAppElement("#root"); // Ensures accessibility

const MyWork = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const projects = [
    {
      id: 1,
      title: "Forex Funders",
      description: "An online trading platform.",
      image: projectImg1,
    },
    {
      id: 2,
      title: "Project 2",
      description: "A description of Project 2.",
      image: projectImg2, // Replace with actual image
    },
    {
      id: 3,
      title: "Project 3",
      description: "A description of Project 3.",
      image: projectImg3, // Replace with actual image
    },
    {
      id: 4,
      title: "Project 4",
      description: "A description of Project 4.",
      image: projectImg4, // Replace with actual image
    },
  ];

  return (
    <div className="w-full bg-[black] py-20" >
      <h1 className="text-white text-[5rem] md:text-[7rem] lg:text-[9rem] max-w-[90rem] mx-auto text-center font-michroma font-extrabold relative">
        <span className="absolute top-0 left-0 text-gray-950">Check Out My Work</span>
        <span className="absolute top-2 left-3">Check Out My Work</span>
       <span>Check Out My Work</span>
      </h1>

      <div className="project-container max-w-7xl w-5/6 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative bg-gray-900/40 p-6 rounded-2xl cursor-pointer hover:bg-blue-950/40 group transition-all duration-300 ease-in-out shadow-lg"
          >
            {/* Project Image */}
            <div
              onClick={() => openModal(project.image)}
              className="w-full h-72 bg-cover bg-center overflow-hidden"
            >
              <img
                className="w-full h-full group-hover:scale-95 transition duration-300 ease-in-out"
                src={project.image}
                alt={project.title}
              />
            </div>

            {/* Project Info */}
            <div className="text-center mt-5">
              <h2 className="text-white text-2xl font-montserrat font-semibold group-hover:text-blue-400 transition-all duration-300">
                {project.title}
              </h2>
              <p className="text-gray-300 text-lg group-hover:text-white transition-all duration-300">
                {project.description}
              </p>
            </div>

            {/* View More Button */}
            <div className="flex justify-center mt-4">
              <button className="relative overflow-hidden flex items-center justify-center w-64 rounded-full px-4 py-4 text-lg font-montserrat font-semibold lg:font-bold outline-none bg-skyBlue text-white transition-all duration-200 ease-out group mx-auto">
                {" "}
                {/* Background overlay that expands on hover */}{" "}
                <span className="absolute inset-0 bg-brightOrange w-0 transition-all duration-300 ease-out group-hover:w-full"></span>{" "}
                {/* Text and arrow with higher z-index */}{" "}
                <span className="relative transition-none group-hover:text-white">
                  Read the case study
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Project Image"
        className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm"
        overlayClassName="fixed inset-0 bg-black/70"
      >
        <div className="relative">
          {/* Close Button */}
          <button
            className="absolute -top-10 right-0 lg:-top-5 lg:-right-5 text-white text-5xl font-bold lg:bg-black/60 rounded-full p-2 hover:bg-red-600 transition"
            onClick={closeModal}
          >
            <AiFillCloseCircle />
          </button>

          {/* Modal Image */}
          <img
            src={selectedImage}
            alt="Project Preview"
            className="max-w-full max-h-[90vh] rounded-lg shadow-lg"
          />
        </div>
      </Modal>
    </div>
  );
};

export default MyWork;
