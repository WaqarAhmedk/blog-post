import { Posts } from "@/mocks/mock";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import PostedBy from "./postedby";

export default function AllArticles() {
  const router = useRouter();
  return (
    <div className="">
      <div className="flex justify-center">
        <h2 className=" text-[20px] sm:text-[30px] lg:text-[53px] font-bold">
          All Articles
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 ">
        {Posts.map((post, index) => {
          return (
            <div
              onClick={() => {
                router.push("/article/" + post.id);
              }}
              key={index}
              className=" flex justify-center p-7 cursor-pointer hover:bg-[#c5c1c14a] hover:text-[blue] "
            >
              <div className="align-middle text-center w-full lg:w-350  ">
                <PostedBy
                  avatar={post?.postedBy?.avatar}
                  userName={post?.postedBy?.userName}
                  datePosted={post?.datePosted}
                  Action={<div>Follow</div>}
                />

                <div>
                  <Image
                    src={post?.imageUrl}
                    height={350}
                    width={350}
                    alt={post?.title}
                    className="w-full lg:w-[350px] h-[350px] object-cover"
                  />
                  <h2 className="text-[22px] font-medium w-[full] lg:w-[350px] text-center">
                    {post?.title}
                  </h2>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
