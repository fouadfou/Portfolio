import React, { useState, useEffect } from "react";

const ScrollTop = () => {
  

  const scrollToTop = () => {

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    
  };


  useEffect(() => {
    const scrollTop = document.querySelector(".scrollTop");

    const handleScroll = () => {
      if (window.scrollY >= window.innerHeight - 100) {
        scrollTop.style.cssText = `  opacity:1; cursor:pointer; transform:none;`;
      } else {
        scrollTop.style.cssText = ` opacity:0; cursor:default; transform : translateX(20px); `;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <>


      {
    /* console.log(indexSection)
 */
      }
      <div
        style={{
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
        }}
        className={`scrollTop opacity-0 flex duration-300  z-40 bg-[#FFBF00] h-[40px] w-[40px] fixed  items-center justify-center bottom-3 right-3 rounded-xl `}
        onClick={scrollToTop}
      >
        <i className="fa fa-4x fa-angle-up  text-xl text-white"></i>
      </div>


    </>
  );
};

export default ScrollTop;
