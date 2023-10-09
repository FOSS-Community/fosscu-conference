import React from "react";
import { motion } from "framer-motion";
import nikita from "../assets/nikita.jpg";
import Tushar from "../assets/tushar.jpg";
import TusharGupta from "../assets/TusharGupta.jpg";
// import Divya from "../assets/Divya.jpg";
import Jatin from "../assets/Jatin.jpg";

const Speakers = () => {
  const speakersData = [
    {
      name: "Nikita Sobolev ( Никита Соболев )",
      title: "CTO, wemake.services",
      image: nikita,
      description:
        "Nikita Sobolev, a versatile CTO, mentor, and advocate for open source, with a passion for spreading knowledge and organizing conferences",
    },
    {
      name: "Tushar Sadhwani",
      title: "SDE II at DeepSource",
      image: Tushar,
      description:
        "Long term Python developer, author, technical reviewer and speaker. Writing static analysis tools @ DeepSource.",
    },
    {
      name: "Tushar Gupta",
      title: "SDE @Samagra",
      image: TusharGupta,
      description:
        "SDE at Samagra, GitHub Campus Ambassador, MLH Fellow for Fall'22, and Summer Fellow'22 at Processing Foundation.",
    },
    // {
    //   name: "Divya Mohan",
    //   title: "Open Source Cat Herder",
    //   image: Divya,
    //   description:
    //     "SUSE Senior Tech Evangelist, Women Who Code's Top 100 Technologists to Watch, Kubernetes docs maintainer, CNCF Ambassador",
    // },
    {
      name: "Jatin K Malik",
      title: "Principle Software Engineer @Atlassian",
      image: Jatin,
      description:
        "Previous Positions Software Architect at Uber, Lead Software Engineer at Uber, SDE III at Synaptic, SDE II at Shuttl and SDE at Adobe.",
    },
  ];

  const sectionAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const speakerAnimation = {
    initial: { scale: 1 },
    hover: { scale: 1.05 },
    transition: { duration: 0.3 },
  };

  const keynoteSpeakerAnimation = {
    initial: { scale: 0.5 },
    hover: { scale: 1.2 },
    transition: { duration: 0.3 },
  };

  return (
    <motion.section
      className="bg-gradient-to-b pb-24 from-gray-800 via-gray-700 to-gray-900 py-16"
      variants={sectionAnimation}
      initial="initial"
      animate="animate"
    >
      <div className="container mx-auto text-center">
        <h2
          className="text-indigo-400 text-5xl font-extrabold glowing-line mb-12"
          style={{
            color: "#fff",
            textTransform: "uppercase",
            letterSpacing: "2px",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
          Keynotes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakersData.map((speaker, index) => (
            <motion.div
              key={index}
              className={`bg-gray-900 p-6 rounded-lg shadow-lg ${
                speaker.isKeynote ? "keynote" : ""
              }`}
              variants={speakerAnimation}
              whileHover="hover"
            >
              <div className="speaker-image-container">
                <motion.img
                  src={speaker.image || nikita}
                  alt={speaker.name}
                  className="mx-auto mb-4 w-[28rem]"
                />
              </div>
              <h3 className="text-white text-xl font-semibold mb-2">
                {speaker.name || "Speaker Name"}
              </h3>
              <p className="text-gray-400 mb-2">{speaker.title || "Title"}</p>
              <p className="text-gray-300 text-sm leading-6">
                {speaker.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Speakers;
