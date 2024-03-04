import React from "react";
import Navbar from "./components/navbar";
import Landing from "./components/landing";
import Roller from "./components/roller";
import About from "./components/about";
import Footer from "./components/footer";
import { BrowserRouter as Router } from "react-router-dom";
import Project from "./components/projects";
import Eyes from "./components/eyes";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <Router>
      <div className="w-full h-screen  text-white bg-black">
        <Navbar />
        <Landing />
        <Roller />
        <About />
        <Eyes />
        <Project />
        <Footer />
      </div>
    </Router>
  );
}
export default App;
