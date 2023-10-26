import  { useRef, useEffect, createContext } from "react";

import NavBar from "./components/NavBar";
import Home from "./sections/Home";
import About from "./sections/About";
import Works from "./sections/Works";
import Contact from "./sections/Contact";
import Services from "./sections/Services";
import ScrollTop from "./components/ScrollTop";

export const refContext = createContext(null)

function App() {
  
  const home = useRef(null);
  const about = useRef(null);
  const services = useRef(null);
  const works = useRef(null);
  const contact = useRef(null);




  const background_image = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 1) ,rgba(0, 0, 0, 0.850)) ,url('./src/assets/images/bg-2.jpg')`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  };
  
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, []);


  useEffect(() => {
    const sr = ScrollReveal({
      origin: "center",
      distance: "80px",
      duration: 800,
      reset: true,
    });

    sr.reveal(".zoom-in", {
      opacity: 0.5, // Start with an opacity of 0 (fully transparent)
      scale: 0.5,
    });
  }, []);

  useEffect(() => {
    const sr = ScrollReveal({
      origin: "right",
      distance: "-200px",
      duration: 800,
      reset: true,
    });
    sr.reveal(".fade-left", {
      // Start with an opacity of 0 (fully transparent)
    });
  }, []);

  useEffect(() => {
    const sr = ScrollReveal({
      origin: "right",
      distance: "200px",
      duration: 800,
      reset: true,
    });
    sr.reveal(".fade-right", {
      // Start with an opacity of 0 (fully transparent)
    });
  }, []);

  useEffect(() => {
    const sr = ScrollReveal({
      origin: "center",
      distance: "0px",
      duration: 800,
      reset: true,
    });
    sr.reveal(".zoom-out", {
      scale: 1.2,
      // Start with an opacity of 0 (fully transparent)
    });
  }, []);

  return (
    <>
      <NavBar refs={[home, about, services, works, contact]} />

      <refContext.Provider value={{works,contact}}>
          <Home sectionRef={home} />
      </refContext.Provider>
      <About sectionRef={about} background_image={background_image} />
      <Services sectionRef={services} />
      <Works sectionRef={works} />
      <ScrollTop refs={[about, services, works, contact]} />
      <Contact sectionRef={contact} />

      {/* <Contact sectionRef={contact} /> */}
    </>
  );
}

export default App;
