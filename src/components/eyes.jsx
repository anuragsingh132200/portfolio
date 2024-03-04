import React, { useEffect, useState } from "react";

const eyes = () => {
  const [a, setA] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      let deltaX = e.clientX - window.innerWidth / 2;
      let deltaY = e.clientY - window.innerHeight / 2;
      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setA(angle - 180);
    });
  });
  return (
    <div data-scroll data-scroll-speed="-0.2" className="w-full h-auto overflow-hidden bg-slate-200 z-[-99] relative  -mt-[10vh] -top-[30vh]">
      <div className="images h-0">
        <img src="https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg" className=""/>
      </div>
      <div className="w-full h-screen mb-36 overflow-hidden flex justify-center pt-[15vw]">
        <div className="w-[15vw] h-[15vw] bg-zinc-100 rounded-full flex justify-center items-center m-[6px] ">
          <div className="w-[7vw] h-[7vw] bg-black rounded-full mx-auto relative">
            <div
              style={{ transform: `translate(-50%,-50%) rotate(${a}deg)` }}
              className="w-[7vw] h-[3vw] top-1/2 left-1/2  absolute -translate-x-[50%] -translate-y-[50%] "
            >
              <div className="w-[1vw] h-[1vw] m-[3px] bg-white rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="w-[15vw] h-[15vw] bg-zinc-100 rounded-full flex justify-center items-center m-[6px] ">
          <div className="w-[7vw] h-[7vw] bg-black rounded-full mx-auto relative">
            <div
              style={{ transform: `translate(-50%,-50%) rotate(${a}deg)` }}
              className="w-[7vw] h-[3vw] top-1/2 left-1/2  absolute -translate-x-[50%] -translate-y-[50%] "
            >
              <div className="w-[1vw] h-[1vw] m-[3px] bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default eyes;
