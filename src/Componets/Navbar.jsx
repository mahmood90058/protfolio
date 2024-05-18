import React, { useEffect, useState } from "react";
import pic from "../../public/photo.avif";
import { FiMenu } from "react-icons/fi";
import { RiCloseFill } from "react-icons/ri";
import {Link} from "react-scroll"

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const navItems = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "About",
    },
    {
      id: 3,
      text: "Portfolio",
    },
    {
      id: 4,
      text: "Experiance",
    },
    {
      id: 5,
      text: "Contact",
    },
  ];

  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div
        className={`max-w-screen-2xl conatiner mx-auto px-4 md:px-20 shadow-md fixed right-0 left-0 top-0 h-16 bg-white z-50${
          sticky
            ? "sticky-navbar dark:bg-slate-400 dark:text-white transition-all ease-in-out shadow-md"
            : ""
        } `}
      >
        <div className="flex justify-between  items-center">
          <div className="flex space-x-2">
            <img src={pic} className="h-12 w-12 rounded-full" alt="" />
            <h1 className="font-semibold text-xl cursor-pointer">
              Mahmoo<span className="text-green-500 text-2xl">d</span>
              <p className="text-sm">Web Developer</p>
            </h1>
          </div>
          {/* desktop navbar */}
          <div>
            <ul className=" hidden md:flex  space-x-8">

                {
                navItems.map(({id,text})=>(
                    <li className="hover:scale-105 duration-200 cursor-pointer" key={id}>

                      <Link to={text} smooth={true} duration={500}
                      offset={-70} activeClass="active"
                       >
                         {text} </Link>
                      
                      
                    </li>
                )) }
                </ul>
            <div onClick={() => setMenu(!menu)} className="md:hidden">
              {menu ? <RiCloseFill size={24} />  : <FiMenu size={24} />}{" "}
            </div>
          </div>
        </div>

        {/* mobile navbar */}

        {menu && (
          <div className="bg-white">
            <ul className="md:hidden flex flex-col items-center justify-center h-screen space-y-3  text-2xl ">
              {
               navItems.map(({id,text})=>(
                <li className="hover:scale-105 duration-200 cursor-pointer font-bold " key={id}>
                    <Link onClick={() => setMenu(!menu)}
                     to={text} smooth={true} duration={500}
                      offset={-70} activeClass="active"
                       >
                         {text} </Link>
                      
                      
                    </li>


                  
               
            ))
              }
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
