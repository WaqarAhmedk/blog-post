import Image from "next/image";
import React from "react";

export default function PostedBy({ avatar, userName, datePosted, Action }) {
  return (
    <div className=" flex justify-between mr-4 mb-4 align-middle text-center">
      <div className="flex justify-around">
        <Image
          src={avatar}
          height={50}
          width={50}
          alt="avatar"
          className="rounded-full w-[3rem] h-[3rem] mr-5"
        />
        <div className="flex flex-col align-middle text-center  justify-center">
          <h2>{userName}</h2>

          <span>{datePosted}</span>
        </div>
      </div>
      {Action}
    </div>
  );
}
