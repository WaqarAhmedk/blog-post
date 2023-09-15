import { pages } from "@/mocks/mock";
import Image from "next/image";
import React, { useState } from "react";
import bars from "/public/assets/icons/bars.svg";
import logo from "/public/assets/logo.png";

export default function AppBar() {
  const [showMenu, setShowMenu] = useState(false);
  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="flex justify-between px-2 sm:px-14 min-h-[50px] items-center relative border-b">
      <div
        className={`absolute bg-white right-1 top-10  border min-w-[150px]  justify-center ${
          showMenu ? "flex sm:hidden" : "hidden"
        }`}
      >
        <ul className="w-full">
          {pages.map((page, index) => {
            return (
              <li
                key={index}
                className="m-1  align-middle flex justify-center cursor-pointer fon hover:bg-[#c5c1c14a] hover:text-[blue] rounded-md"
              >
                {page.name}
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <Image src={logo} height={200} width={200} alt="logo" />
      </div>
      <div className=" w-[300px] cursor-pointer ">
        <div
          className="  sm:hidden flex justify-end "
          onClick={handleMenuClick}
        >
          <Image src={bars} height={30} width={30} alt="menu-bars" />
        </div>
        <ul className=" hidden sm:flex justify-between ">
          {pages.map((page, index) => {
            return (
              <li
                key={index}
                className="hover:bg-[#c5c1c14a] p-2 hover:text-[blue]"
              >
                {page.name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
