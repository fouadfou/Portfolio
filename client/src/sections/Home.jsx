import React from "react";

import HeaderContainer from "../components/HeaderContainer";
import Shape from "../components/Shape";

const Home = ({ sectionRef }) => {
  return (
    <header ref={sectionRef} className="overflow-x-hidden">
      <HeaderContainer />
      <Shape />
    </header>
  );
};

export default Home;
