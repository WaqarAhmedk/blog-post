import Image from "next/image";
import React from "react";
import blogimg from "/public/assets/image1.png";

export default function TopPost() {
  return (
    <div className="max-w-[858px] border-b-2">
      <Image src={blogimg} height={533} width={854} unoptimized />
      <h1 className="text-[20px] sm:text-[30px] lg:text-[53px] font-bold leading-[100%] mt-5 text-center ">
        A few words about this blog platform, Ghost, and how this site was made
      </h1>
      <p className="text-[20px] leading-[170%] font-semi mt-5 text-center ">
        Why Ghost (& Figma) instead of Medium, WordPress or other options?
      </p>
    </div>
  );
}
