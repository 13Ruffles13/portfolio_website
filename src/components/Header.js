import React from "react";
// Function string array
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="header-warper">
      <div className="main-info">
        <h1>web developer and websites promotions</h1>
        <Typed
          className="typed-text"
          strings={[
            "Software Engineer",
            "Software Developer",
            "Front-End Developer",
            "Web Development",
            "Web Design",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <a href="#" className="btn-main-offer"> Contact me</a>
      </div>
    </div>
  );
};

export default Header;
