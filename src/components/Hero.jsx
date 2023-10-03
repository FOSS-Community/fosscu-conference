import React from "react";
import bgImg from "../assets/second.jpg";
import { useLottie } from "lottie-react";
import { useSpring, animated } from "react-spring";
import "@lottiefiles/lottie-player";
import animationData from "../lotties/animate.json";
import { FaChevronDown } from "react-icons/fa"; // Import the scroll-down icon

const Hero = () => {
  const options = {
    animationData: animationData,
    loop: true,
  };

  const { View } = useLottie(options);

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  return (
    <div
      className="bg-[#000300] h-[94vh] flex items-center relative"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-center items-center text-center h-full">
          {" "}
          {/* Centered content vertically */}
          <animated.div className="w-full  z-10 cursor-grab" style={fadeIn}>
            <h1 className="text-3xl sm:text-6xl md:text-7xl font-Montserrat font-extrabold tracking-tight leading-none mb-4 text-gray-900 ">
              <span className="bubble-animation">
                <animated.span className="bubble-animation-up">F</animated.span>
                <animated.span className="bubble-animation-down">
                  O
                </animated.span>
                <animated.span className="bubble-animation-up">S</animated.span>
                <animated.span className="bubble-animation-down">
                  S
                </animated.span>
                <animated.span className="bubble-animation-up">C</animated.span>
                <animated.span className="bubble-animation-down">
                  U
                </animated.span>
              </span>
              <span> CONFERENCE 2023</span> {/* Added conference year */}
            </h1>
            <p className="text-xl sm:text-2xl font-Montserrat font-bold text-gray-900 tracking-wider ">
              EXPLORING THE WORLD OF OPEN SOURCE: JOIN OUR CONFERENCE TODAY!
            </p>
          </animated.div>
          <div
            className="mt-4 text-center z-20 cursor-pointer"
            onClick={() => scrollToSection("about")}
          >
            {" "}
            {/* Centered and added margin for scroll-down indicator */}
            <FaChevronDown className="text-gray-900 text-4xl animate-bounce" />
          </div>
          <div className="w-full absolute bottom-0 right-0 left-0 text-center">
            {" "}
            {/* Positioned animation at the bottom */}
            {View}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
