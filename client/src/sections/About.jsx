import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import img from "../assets/images/77108000_133044601466386_5568512050876907520_n.jpg";
import Skills from "../components/Skills";

import resume from '../cv.pdf'


const About = ({ sectionRef }) => {


  useEffect(() => {
    const sr = ScrollReveal({
      origin: "right",
      distance: "120px",
      duration: 1000,
      reset: true,
    });
    sr.reveal(".right-to-left", {
      // Start with an opacity of 0 (fully transparent)
    });
  }, []);

  useEffect(() => {
    const sr = ScrollReveal({
      origin: "bottom",
      distance: "100px",
      duration: 1000,
      reset: false,
    });

    sr.reveal(".skill", {
      opacity: 0.5,
    });
  }, []);


  return (
    <section>
      <div
        ref={sectionRef}
        className="  overflow-hidden  relative flex flex-col  h-auto py-[5rem]  mt-[calc(100vh-3.47rem)] items-center justify-center  gap-[5rem]  "
      >
        <div className="background-image absolute top-0 place-self-start h-[60%] w-full rotate-180" />

        <h1 className="zoom-out z-40 text-white text-center text-3xl  ">
          About Me
        </h1>

        <span className="fade-left absolute  bg-[#FFBF00] h-[1px] w-[21%] md:w-[35%] top-[6.2rem] left-[6.8%] md:left-[6.4%]"></span>
        <span className="fade-right absolute bg-white h-[1px] w-[21%] md:w-[35%] top-[6.2rem] right-[6.8%] md:right-[6.4%] "></span>

        {/* <div className='z-10 absolute bottom-0 place-self-start h-[25rem] w-full ' style={headerStyles} /> */}
        <div className="zoom-in z-40 h-auto bg-background-gray w-[88%] rounded-lg shadow-2xl p-2 flex gap-2 flex-col md:flex-row">
          <div className="hidden md:block bg-white p-2 md:min-h-full    md:w-1/5 w-full  rounded-md">
            <img
              loading="lazy"
              role="presentation"
              sizes="(max-width:800px) 100vw 50vw"
              decoding="async"
              src={img}
              alt=""
              className="h-full  w-full  rounded-md object-center object-cover  "
            />
          </div>

          <div className=" overflow-hidden bg-white flex flex-col justify-between flex-1  rounded-md p-8">
            <h2 className="text-3xl mb-2">
              <b>Hi I am</b> <b className="text-[#FFBF00] ">Fouad Ounadi</b>{" "}
              <b>, Web Developer</b> <br />
            </h2>
            <p className="text-lg mb-6">
              Hello, I'm Fouad Ounadi, a web developer dedicated to crafting
              outstanding web experiences. With a strong focus on sleek design
              and peak performance, I create websites that seamlessly blend
              aesthetics and functionality. Let's collaborate to bring your web
              project to life, with a commitment to top-tier performance at
              every step.
            </p>
            <h3 className="text-xl mb-1">
              <b>Contact Me</b>
            </h3>

            <div className="flex relative   justify-between ">
              <ul className="flex  h-full items-end  self-end gap-4 text-[#aaaaaa] text-[14.5px]">
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=100042825400985"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.telegram.com/yourhandle"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-telegram"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/2fou_ou/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
              </ul>

              <button className="bg-[#FFBF00] font-bold w-fit py-1 px-4 text-sm rounded-md h-[2rem]">
              <a href={resume} target="_blank" rel="noreferrer">Check my CV</a>
              </button>
                
              
            </div>
          </div>
        </div>
      </div>

      <Skills />
    </section>
  );
};

export default About;
