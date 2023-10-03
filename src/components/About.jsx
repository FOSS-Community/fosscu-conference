import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import abouticon from "../assets/about.png";
import register from "../assets/register.png";
import schedule from "../assets/schedule.png";
import submit from "../assets/submit.png";
import imgData from "../data/imgData.json";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  const renderCustomPrevArrow = (onClickHandler, hasPrev, label) => {
    if (!hasPrev) {
      return null;
    }
    return (
      <button
        className="carousel-arrow carousel-prev-arrow l z-20 absolute transform left-0 top-1/2 -translate-x-3"
        onClick={onClickHandler}
        title={label}
      >
        <div
          className="z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none "
          data-carousel-prev
        >
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-[#000300]/30  group-focus:ring-4 group-focus:ring-white  group-focus:outline-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5   sm:w-6 sm:h-6 "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </span>
        </div>
      </button>
    );
  };

  const renderCustomNextArrow = (onClickHandler, hasNext, label) => {
    if (!hasNext) {
      return null;
    }
    return (
      <button
        className="carousel-arrow carousel-next-arrow z-20 absolute right-0  transform top-1/2 translate-x-3"
        onClick={onClickHandler}
        title={label}
      >
        <div
          className="z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-[#000300]/30  group-focus:ring-4 group-focus:ring-white  group-focus:outline-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5  sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </span>
        </div>
      </button>
    );
  };

  return (
    <section id="about" className="pt-12 xl:pt-36" data-aos="fade-right">
      <div className=" flex flex-col-reverse px-4 lg:flex-row items-center justify-center w-full  mx-auto">
        <div className="lg:w-[600px] md:w-[800px] mx-2 lg:pt-0 pt-10">
          <div className="shadow-lg  rounded ">
            <Carousel
              showThumbs={false}
              autoPlay={true}
              showStatus={false}
              showIndicators={false}
              renderArrowPrev={renderCustomPrevArrow}
              h-full
              renderArrowNext={renderCustomNextArrow}
              infiniteLoop
              interval={3500}
            >
              {imgData.map((item) => (
                <div>
                  <img src={item.link} alt="Image 1" />
                </div>
              ))}
            </Carousel>{" "}
          </div>
          <div className="w-full bg-[#000300] border border-gray-200 rounded-lg shadow ">
            {/* Tab buttons code */}
          </div>
        </div>
        <div className="flex justify-center items-center w-full  lg:w-[60%] p-2">
          <div className="flex flex-col justify-between w-full xl:ml-12 lg:px-8 xl:w-[70%]">
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-center flex items-center md:text-left text-[#0dff1c]  font-semibold text-2xl sm:text-3xl">
                <span className="pr-1 font-Montserrat">
                  <img src={abouticon} className="w-7" alt="" />
                </span>
                ABOUT THE CONFERENCE
              </h3>
              <p className="font-Roboto text-justify text-md sm:text-lg lg:text-xl pt-2 font-gray-800">
                Uniting Developers, Tech Enthusiasts, and Open-Source Advocates:
                The Inaugural FOSSCU Conference Delhi
              </p>
              <p className="font-Roboto text-md sm:text-lg lg:text-xl pt-2 font-gray-800">
                We are excited to bring together developers, tech enthusiasts,
                and open-source advocates for the first-ever FOSSCU Conference
                in Delhi. This one-day event is designed to be a melting pot of
                innovation, learning, and collaboration in the realm of
                open-source technology.
              </p>
              <p className=" font-Roboto text-md sm:text-lg lg:text-xl pt-2 font-gray-800 mt-4 mb-2">
                We kindly request all participants to adhere to our Code of
                Conduct, which will be strictly enforced throughout the event.
              </p>

              <div className="flex flex-wrap sm:flex-wrap-none">
                <button
                  onClick={() => scrollToSection("register")}
                  className="mt-4 flex justify-between mr-2  rounded border-2 uppercase  border-gray-400 hover:border-blue-500 text-sm sm:text-md font-semibold text-blue-500 py-3 px-4 items-center"
                >
                  <div className="mr-1">
                    <img src={register} className="w-6 " alt="" />
                  </div>
                  <span>Register</span>
                </button>
                <button
                  onClick={() => scrollToSection("schedule")}
                  className="mt-4 flex justify-between ml-2 rounded border-2 uppercase  border-gray-400 hover:border-blue-500 text-sm sm:text-md font-semibold text-blue-500 py-3 px-4 items-center"
                >
                  <div className="mr-1">
                    <img src={schedule} className="w-6 " alt="" />
                  </div>
                  <span>See Event Schedule</span>
                </button>
                <button className="mt-4 flex items-center justify-between ml-4  rounded border-2 uppercase  border-gray-400 hover:border-blue-500 text-sm sm:text-md font-semibold text-blue-500 py-3 px-4">
                  <div className="mr-1">
                    <img src={submit} className="w-7" alt="" />
                  </div>
                  <a
                    href=""
                    className="cursor-grab"
                    target="blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    Submit Proposal
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
