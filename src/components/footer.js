import Image from "next/image";
import React from "react";
import logowhite from "/public/assets/logo-white.png";
export default function Footer() {
  return (
    <div className="mt-10 bg-black pb-5">
      <div className="flex justify-center text-white pt-10 w-[100%] p-[50px] ">
        <div>
          <Image
            src={logowhite}
            height={300}
            width={300}
            alt="logo"
            className="w-full"
          />
          <p className="max-w-[490px] text-center mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu
            velit tempus erat egestas efficitur. In hac habitasse platea
            dictumst. Fusce a nunc eget ligula suscipit finibus.{" "}
          </p>

          <div className="mt-10 flex justify-evenly">
            <span className="underline underline-offset-8 cursor-pointer hover:text-[blue]">
              Twitter
            </span>
            <span className="underline underline-offset-8  cursor-pointer hover:text-[blue]">
              Linkedin
            </span>
            <span className="underline underline-offset-8  cursor-pointer hover:text-[blue]">
              Facebok
            </span>
          </div>
          <div className="text-center mt-[50px]">
            &copy; All rights reserved
          </div>
        </div>
      </div>
    </div>
  );
}
