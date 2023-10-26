import  { useContext, useEffect } from "react";
import Button from "./Button";
import ScrollReveal from "scrollreveal";
import ScrollBottom from "./ScrollBottom";
import { refContext } from "../App";


const HeaderContainer = () => {

  const {works,contact} = useContext(refContext)

  const bg = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.766) ,rgba(0, 0, 0, 0.963)) ,url('./src/assets/images/bg.jpg')`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  const scrollToSection = (section) => {
    window.scrollTo({
      top: section.current.offsetTop - 55,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const sr = ScrollReveal({
      origin: "left",
      distance: "30px",
      duration: 2000,
      reset: false,
    });

    sr.reveal(".sub-container", {
      // Add specific animation options for this class if needed
    });
  }, []);

  return (
    <div className=" absolute flex w-screen h-[calc(100vh)] top-0" style={bg}>
      <div className="flex items-center flex-1 overflow-x-hidden justify-center md:justify-normal">
        <div className="sub-container w-[45%] min-w-[370px] flex flex-col items-center md:items-baseline 
          gap-[2rem] mx-[7%] mt-[1.5rem] mb-[3.5rem] md:mb-[1.2rem] ">
          <h1 className="relative  font-Ginerin text-[5.4rem] md:text-[6.4rem] text-white select-none">
            Fouad
            <sub
              className="absolute  top-[6rem] left-[5.3rem]  md:top-[7rem] md:left-[6.4rem] font-Wind font-bold
                        text-[#FFBF00] text-[6.4rem]  md:text-[7.4rem]"
              style={{ textShadow: "0 0 1.5px white" }}
            >
              Ounadi
            </sub>
          </h1>
          <p className="text-[#e7e7e789] flex-wrap text-center md:text-left select-none">
          Specializing in web development, I'm committed to creating high-performance websites 
          that prioritize a seamless UI/UX design. My expertise lies in merging technical excellence with captivating 
          user experiences to deliver top-tier websites.
          </p>

          <div className=" flex  gap-5  items-center  rounded-xl cursor-pointer">
            <Button
              onClick={() => scrollToSection(works)}
              style={{
                color: "white",
                borderStyle: "solid",
                borderWidth: "1px",
                borderColor: "white",
                background: "transparent",
              }}
              value={"My Works"}
            />

            <Button onClick={() => scrollToSection(contact)} bold={"font-bold"} background={"bg-white"}  value={"Contact Me"} />
          </div>
        </div>
      </div>

      <ScrollBottom />
    </div>
  );
};

export default HeaderContainer;
