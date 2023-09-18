import AllBlogs from "@/components/allarticles";
import Footer from "@/components/footer";
import TopPost from "@/components/toppost";
import React from "react";

export default function HomePage() {
  return (
    <>
      <div className="flex justify-center mt-11 ">
        <div>
          <TopPost />
          <AllBlogs />
        </div>
      </div>
    </>
  );
}
