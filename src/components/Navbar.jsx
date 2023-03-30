import React, { useState } from "react";
import { GiAirplaneDeparture } from "react-icons/gi";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";
function Navbar() {
  const [open, setOpen] = useState(false);
  const openTheMenu = () => {
    setOpen(true);
  };
  const closeTheMenu = () => {
    setOpen(false);
  };
  let navigations = [
    { name: "Home", id: "jkd2839" },
    { name: "Trip", id: "jkf3DD39" },
    { name: "Destination", id: "je34ofd2839" },
    { name: "Hotel", id: "jds82339" },
    { name: "Help", id: "e2d24s839" },
    { name: "Sign-Up", id: "d2d24s8099" },
    { name: "Sign-In", id: "2d2g4s839" },
  ];
  return (
    <div className="bg-green-400">
      <div className="py-2 w-11/12 m-auto md:flex justify-between items-center ">
        <div className="logo">
          <GiAirplaneDeparture
            size={60}
            color="white"
            className="cursor-pointer"
          />
          <div className="menu_function md:hidden">
            {open ? (
              <AiOutlineCloseCircle
                className="text-white"
                size={50}
                onClick={closeTheMenu}
              />
            ) : (
              <AiOutlineMenu
                className="text-white"
                size={50}
                onClick={openTheMenu}
              />
            )}
          </div>
        </div>
        <div className="navigation ">
          <ul className="md:flex mobile__view  ">
            {navigations.map((x) => (
              <a href={`#${x.name}`}>
                <li
                  key={x.id}
                  className="m-2 xl:m-4  xl:text-2xl text-white cursor-pointer md:font-semibold"
                >
                  {x.name}
                </li>
              </a>
            ))}
          </ul>
          {/* mobile  view */}
          {open && (
            <ul className="mobile_visiblity">
              {navigations.map((x) => (
                <a key={x.id} href={`#${x.name}`} onClick={closeTheMenu}>
                  <li className="text-white font-bold my-4 bg-green-600 rounded p-4 hover:bg-green-300">
                    {x.name}
                  </li>
                </a>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
