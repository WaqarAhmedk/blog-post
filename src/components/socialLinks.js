import React from "react";
import facebook from "/public/assets/icons/facebooklogo.svg";
import twittericon from "/public/assets/icons/twitterlogo.svg";
import Image from "next/image";

export default function SocialLinks({ size, links, footer }) {
  return (
    <div
      className={`flex border px-5 ${
        footer ? "justify-around" : "justify-between"
      }`}
    >
      <div
        className={`mr-4 flex justify-between text-center items-center ${
          footer ? "py-5" : ""
        }`}
      >
        <Image src={facebook} height={size} width={size} />
        {footer && (
          <p className="align-middle text-[16px] font-semibold ml-4">
            Share on Facebook
          </p>
        )}
      </div>
      <div className="border-e mr-4"></div>
      <div
        className={` flex justify-center text-center items-center ${
          footer ? "py-5" : ""
        }`}
      >
        <Image src={twittericon} height={size} width={size} className="" />
        {footer && (
          <p className="align-middle text-[16px] font-semibold ml-5">
            Share on Twitter
          </p>
        )}{" "}
      </div>
    </div>
  );
}
