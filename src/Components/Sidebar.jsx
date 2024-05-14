import { Link } from "react-router-dom";
import { BiHomeAlt2 } from "react-icons/bi";
import { PiChatsCircle } from "react-icons/pi";
import { FaBlog } from "react-icons/fa";
import { useState } from "react";
import { VscChromeClose } from "react-icons/vsc";
import { FaClipboardList } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";

export const Sidebar = () => {
  const [displayNav, setDisplayNav] = useState(false);
  //   const [isOpenHome, setIsOpenHome] = useState(false);
  //   const [isOpenProjects, setIsOpenProjects] = useState(false);
  //   const [isOpenAbout, setIsOpenAbout] = useState(false);
  //   const [isOpenContacts, setIsOpenContacts] = useState(false);
  //   const [isOpenBlog, setIsOpenBlog] = useState(false);
  //   const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleDisplayNav = () => {
    setDisplayNav((prev) => !prev);
    // setIsOpenMenu((prev) => !prev);
  };

  //   const handleMouseEnterHome = () => {
  //     setIsOpenHome(true);
  //   };

  //   const handleMouseLeaveHome = () => {
  //     setIsOpenHome(false);
  //   };

  //   const handleMouseEnterAbout = () => {
  //     setIsOpenAbout(true);
  //   };

  //   const handleMouseLeaveAbout = () => {
  //     setIsOpenAbout(false);
  //   };
  //   const handleMouseEnterContacts = () => {
  //     setIsOpenContacts(true);
  //   };

  //   const handleMouseLeaveContacts = () => {
  //     setIsOpenContacts(false);
  //   };
  //   const handleMouseEnterBlog = () => {
  //     setIsOpenBlog(true);
  //   };

  //   const handleMouseLeaveBlog = () => {
  //     setIsOpenBlog(false);
  //   };

  //   const handleMouseEnterProjects = () => {
  //     setIsOpenProjects(true);
  //   };

  //   const handleMouseLeaveProjects = () => {
  //     setIsOpenProjects(false);
  //   };

  //   const handleMouseEnterMenu = () => {
  //     setIsOpenMenu(true);
  //   };

  //   const handleMouseLeaveMenu = () => {
  //     setIsOpenMenu(false);
  //   };

  return (
    <nav className=" flex flex-col items-center justify-center bg-indigo-950 border rounded-full p-2 fixed top-10 lg:right-20 right-2">
      {/* <ul> */}
      <div
        onClick={() => handleDisplayNav()}
        className="p-2 flex flex-row relative"
        // onMouseEnter={handleMouseEnterMenu}
        // onMouseLeave={handleMouseLeaveMenu}
      >
        <div className="">
          <VscChromeClose className="fill-blue-500 " />
        </div>
        {displayNav && (
          <div className="absolute right-10 top-0 bg-orange-500 text-indigo-950 p-2 rounded-xl mr-2 mb-1">
            Menu
          </div>
        )}
      </div>

      {displayNav && (
        <div className="flex flex-col gap-8 text-2xl mt-2 pt-2">
          <Link to="/home">
            <div
              className="flex flex-row relative"
              //   onMouseEnter={handleMouseEnterHome}
              //   onMouseLeave={handleMouseLeaveHome}
            >
              <BiHomeAlt2 className="text-white rounded hover:fill-orange-500" />
              {displayNav && (
                <div className="absolute right-10 bg-indigo-950 text-orange-500 p-2 rounded-xl">
                  Home
                </div>
              )}
            </div>
          </Link>
          <Link to="/explore">
            <div
              className="flex flex-row relative"
              //   onMouseEnter={handleMouseEnterProjects}
              //   onMouseLeave={handleMouseLeaveProjects}
            >
              <FaClipboardList className="text-white rounded hover:fill-orange-500" />
              {displayNav && (
                <div className="absolute right-10 bg-indigo-950 text-orange-500 p-2 rounded-xl">
                  Projects
                </div>
              )}
            </div>
          </Link>
          <Link>
            <div
              className="flex flex-row relative"
              //   onMouseEnter={handleMouseEnterAbout}
              //   onMouseLeave={handleMouseLeaveAbout}
            >
              <FaUser className=" text-white hover:fill-orange-500 rounded" />
              {displayNav && (
                <div className="absolute right-10 bg-indigo-950 text-orange-500 p-2 rounded-xl">
                  About
                </div>
              )}
            </div>
          </Link>
          <Link to="/bookmark">
            <div
              className="flex flex-row relative"
              //   onMouseEnter={handleMouseEnterContacts}
              //   onMouseLeave={handleMouseLeaveContacts}
            >
              <PiChatsCircle className="text-white hover:fill-orange-500 rounded" />
              {displayNav && (
                <div className="absolute right-10 bg-indigo-950 text-orange-500 p-2 rounded-xl">
                  Contacts
                </div>
              )}
            </div>
          </Link>
          <Link to="/bookmark">
            <div
              className="flex flex-row relative pb-6"
              //   onMouseEnter={handleMouseEnterBlog}
              //   onMouseLeave={handleMouseLeaveBlog}
            >
              <FaBlog className="text-white hover:fill-orange-500 rounded" />
              {displayNav && (
                <div className="absolute right-10 bg-indigo-950 text-orange-500 p-2 rounded-xl">
                  Blog
                </div>
              )}
            </div>
          </Link>
        </div>
      )}
      {/* </ul> */}
    </nav>
  );
};
