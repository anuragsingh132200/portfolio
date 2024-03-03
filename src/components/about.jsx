import React from "react";
const about = () => {
  return (
    <div className="about w-full">
      <div className="abouttop pl-5 pt-16 pb-10">
        <h4>
          I am <span className="emphasis">Anurag singh</span> a first year
          undergraduate student at{" "}
        </h4>
        <h4>
          <span className="emphasis">
            Indian Institute of Technology, Kharagpur
          </span>
          . I am a <span className="emphasis">web developer</span>{" "}
        </h4>
        <h4>
          and a <span className="emphasis">competitive programmer</span>.
        </h4>
      </div>
      <div className="line mt-5 bg-black w-full"></div>
      <div className="aboutbottom pl-5 pt-10 pb-10 flex justify-between">
        <div className="aboutbottomleft pl-10">My Skills:</div>
        <div className="aboutbottomright mr-20">
          <div className="emphasis vera">HTML/CSS</div>
          <div className="emphasis vera">Javascript</div> 
          <div className="emphasis vera">MERN STACK</div>
          <div className="emphasis vera"> GSAP and LocomotiveJS</div>
          <div className="emphasis vera">TAILWIND</div>
          <div className="emphasis vera">MATERIAL UI AND CHAKRA UI</div>
          <div className="emphasis vera">REDUX</div>
          <div className="emphasis vera">WEB SOCKECTS</div>
          <div className="emphasis vera">DATA STRUCTURES AND ALGORITHMS</div>
          <div className="emphasis vera">SYSTEM DESIGN</div>
          <div className="emphasis vera">CONTAINERIZATION</div>
          <div className="vera">and many more....</div>
        </div>
      </div>
    </div>
  );
};

export default about;
