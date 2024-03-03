import React from "react";
import "./components.css";
const projects = () => {
  return (
    <div className="projects">
      <h1 className="m-16 mb-2">Featured projects</h1>
      <hr />
      <hr />
      <hr />
      <hr />
      <div className="projectcontainer flex justify-around m-20">
        <div className="project1 w-[40vw] h-[80vh] ml-[10vw] mr-[10vw] ">
          <li className="text-xl font-light">FULL STACK CHAT APP</li>
          <iframe src="https://talk-a-tive-7fgq.onrender.com/chats" className="w-[40vw] h-[80vh]"/>
          <img />
        </div>
        <div className="project1 w-[40vw] h-[80vh] mr-[10vw] ">
          <li className="text-xl font-light">Instagram Clone</li>
          <img />
        </div>
      </div>
      <div className="projectcontainer flex justify-around m-20">
        <div className="project1 w-[40vw] h-[80vh] ml-[10vw] mr-[10vw] ">
          <li className="text-xl font-light">GOOGLE KEEP Clone</li>
          <img />
        </div>
        <div className="project1 w-[40vw] h-[80vh]  mr-[10vw] ">
          <li className="text-xl font-light">Blogging website</li>
          <img />
        </div>
      </div>
    </div>
  );
};

export default projects;
