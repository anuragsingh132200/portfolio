import React from "react";
import "./components.css";
import Box from "./box";
const projects = () => {
  return (
    <div data-scroll data-scroll-speed="0.3" className="w-full py-32 text-black bg-zinc-200  relative -top-[50vh]">
      <div className="w-full px-10 border-b-[1px] pb-16 border-zinc-800">
        <h1 className="text-6xl tracking tight">Featured Projects</h1>
      </div>
      <div className="w-full flex justify-around">
        <div className="rightsec ">
          <li className="text-xl mt-[4vw] mb-1vw font-light pb-4">CHAT APP</li>
          <img
            src="https://i.ytimg.com/vi/otaQKODEUFs/maxresdefault.jpg"
            className="w-[40vw] mb-[5vw] rounded-2xl transition-[1s]"
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
            onClick={() => {
              window.open("https://github.com/anuragsingh132200/chat-app");
            }}
          />
        </div>
        <div className="leftsec ">
          <li className="text-xl mt-[4vw] mb-1vw font-light pb-4">Instagram Clone</li>
          <img
            src="https://lh3.googleusercontent.com/WedHsceKdercIzGR5Agcq-_hzorGNEcL3jI-WirzdL7p6xyPhRVcqqQJrQF0n4NCx52Yu_efzWmbtO3rZvlT4CtXuyU=w640-h400-e365-rj-sc0x00ffffff"
            className="w-[40vw] mb-[5vw] rounded-2xl transition-[1s]"
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
            onClick={() => {
              window.open("https://instagram-woad-theta.vercel.app/");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default projects;
