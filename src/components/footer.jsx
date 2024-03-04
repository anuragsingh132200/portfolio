import React from "react";
import "./components.css";
const footer = () => {
  return (
    <div data-scroll  className="text-zinc-900 w-full h-screen p-10 pt-32 flex relative top-[-60vh]">
      <div className="w-1/2 flex-col flex h-full justify-between ">
        <div className="heading">
          <h1 className="uppercase text-[8vw] font-italic  leading-none ">
            Eye-
          </h1>
          <h1 className="uppercase text-[6vw] font-bold leading-none ">
            opening
          </h1>
          <h1 className="uppercase text-[3vw] font-extralight leading-none ">
           website
          </h1>
        </div>
        <div>© 2022 Anurag Singh</div>
      </div>
      <div className="w-1/2 flex flex-col justify-around">
        <h1 className="uppercase text-[6vw] font-bold leading-none ">
          social media
        </h1>
        <div>
          <div>
            <i
              className="ri-twitter-line emphasis"
              onClick={() => {
                window.open("https://twitter.com/anurag132200");
              }}
            >
              TWITTER
            </i>
          </div>
          <div>
            <i
              className="ri-twitter-line emphasis"
              onClick={() => {
                window.open("https://twitter.com/anurag132200");
              }}
            >
              FACEBOOK
            </i>
          </div>
          <div>
            <i
              className="ri-twitter-line emphasis"
              onClick={() => {
                window.open("https://twitter.com/anurag132200");
              }}
            >
              GITHUB
            </i>
          </div>
          <div>
            <i
              className="ri-twitter-line emphasis"
              onClick={() => {
                window.open("https://twitter.com/anurag132200");
              }}
            >
              INSTAGRAM
            </i>
          </div>
        </div>
      </div>
      {/* <div className="flex justify-center items-center h-32 bg-[#3f4040] text-white">
        <p>© 2022 Anurag Singh</p>
      </div>
      <div className="flex justify-around items-center h-16 bg-black text-white">
        {/* social media links */}
      {/* 
        <i
          className="ri-instagram-line"
          onClick={() => {
            window.open("https://www.instagram.com/anuragsingh/132200/");
          }}
        >
          INSTAGRAM
        </i>
        <i className="ri-linkedin-line"
        onClick={() => {window.open("https://www.linkedin.com/in/anurag-singh-465462286/")}}>LINKEDIN</i>
        <i className="ri-twitter-line" 
        onClick={() => {window.open("https://twitter.com/anurag132200")}}>
          TWITTER
        </i>
        <i className="ri-github-line"
        onClick={() => {window.open("https://github.com/Anuragsingh132200")}}>
          GITHUB
        </i> */}
      {/* </div> */}
    </div>
  );
};

export default footer;
