import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { ReactTyped, Typed } from "react-typed";
import pic from "../../public/photo.avif";

const Home = () => {
  return (
    <>
      <div name="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 w-full mt-12 md:mt-24 space-y-2 order-2 md:order-1  ">
            <span className="text-xl">Welcome in my Feed</span>
            <div className="flex space-x-1 text-2xl md:4xl">
              <h1>Hello , I'm a </h1>
              {/* <span className='text-red-700 font-bold'>Developer</span> */}
              <ReactTyped
                className="text-red-700 font-bold text-2xl"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              ex molestiae rem a saepe. Provident aliquid quae sequi delectus.
              Veritatis! Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Beatae voluptas optio soluta?
            </p>
            <br />
            {/* social icons */}
            <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 justify-between ">
              <div className="space-y-2">
                <h1 className="font-bold">Avialble on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a href="https://www.facebook.com/ " target="_blank">
                    <FaFacebookSquare className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                  <a href=" https://www.linkedin.com/feed/ " target="_blank">
                    <FaLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <FaYoutube className="text-2xl cursor-pointer" />
                  </li>
                  <li>
                    <FaTelegram className="text-2xl cursor-pointer" />
                  </li>
                </ul>
              </div>

              {/* currently */}

              <div className="space-y-2">
                <h1 className="font-bold">Crrently Working</h1>
                <div className="flex space-x-5">
                  <DiMongodb className="text-xl md:3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <SiExpress className="text-xl md:3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaReact className="text-xl md:3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaNodeJs className="text-xl md:3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 w-full md:ml-48 md:mt-20 order-1 mt-8 ">
            <img src={pic} className="rounded-full md:w-[450px] md: h-[450px]" alt="" />

          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
