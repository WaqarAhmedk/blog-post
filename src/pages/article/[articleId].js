import PostedBy from "@/components/postedby";
import SocialLinks from "@/components/socialLinks";
import { Posts } from "@/mocks/mock";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import testimg from "/public/assets/image3.jpg";
import eyes from "/public/assets/icons/eyes.svg";
export default function Article() {
  const router = useRouter();
  const [selectedArticle, setSelectedArticle] = useState(null);
  const articleid = router.query.articleId;
  useEffect(() => {
    if (articleid) {
      const article = Posts.find((post) => post.id == articleid);
      console.log("Article found", article);
      setSelectedArticle(article);
    }
  });
  return (
    <>
      <div className="flex justify-center ">
        <div className="">
          <div className="max-w-[858px] border-b-2">
            <h1 className="text-[20px] sm:text-[30px] lg:text-[53px] font-bold leading-[100%] mt-5 text-center ">
              {selectedArticle?.title}
            </h1>
            <p className="text-[20px] leading-[170%] font-semi mt-5 text-center ">
              Why Ghost (& Figma) instead of Medium, WordPress or other options?
            </p>
          </div>
          <div className="w-full bg-black">
            <Image
              src={selectedArticle?.imageUrl}
              height={500}
              width={500}
              className="w-full max-h-[500px] object-cover"
            />
          </div>

          <div className="align-middle text-center w-full lg:w-350  px-2 sm:px-4ssss mt-5">
            <PostedBy
              avatar={selectedArticle?.postedBy?.avatar}
              userName={selectedArticle?.postedBy?.userName}
              datePosted={selectedArticle?.datePosted}
              Action={<SocialLinks size={20} />}
            />
          </div>

          <div className="max-w-[858px] mx-3 lg:mx-0">
            <p className="text-[20px] font-normal leading-8">
              Underwater photography is a breathtaking art form that allows us
              to explore the hidden treasures of the ocean. In this post, we'll
              dive into the marvels of underwater photography, from coral reefs
              to elusive marine creatures.
            </p>
            <h1 className="text-[32px] font-bold leading-[51px] mt-3 mb-3">
              The Marvels of Underwater Photography
            </h1>
            <Image
              src={testimg}
              height={300}
              width={300}
              className="w-full max-h-[500px] object-cover px-5 mb-5"
            />
            <p className="text-[20px] font-normal leading-8">
              Underwater photography is a breathtaking art form that allows us
              to explore the hidden treasures of the ocean. In this post, we'll
              dive into the marvels of underwater photography, from coral reefs
              to elusive marine creatures.
            </p>
            <h1 className="text-[32px] font-bold leading-[51px] mt-3 mb-3">
              The Marvels of Underwater Photography
            </h1>{" "}
            <p className="text-[20px] font-normal leading-8">
              Underwater photography is a breathtaking art form that allows us
              to explore the hidden treasures of the ocean. In this post, we'll
              dive into the marvels of underwater photography, from coral reefs
              to elusive marine creatures.
            </p>
            <h1 className="text-[32px] font-bold leading-[51px] mt-3 mb-3">
              The Marvels of Underwater Photography
            </h1>
          </div>
          <div className="max-w-[858px] mx-3 lg:mx-0">
            <SocialLinks size={30} footer={true} />
            <div className="flex justify-start mt-3">
              <h2 className="font-[16px]  mr-3">Tags:</h2>
              <span className="font-[16px]  underline">Gaming </span>,
              <span className="font-[16px]  underline"> proggem</span>
            </div>
            <div className="border-b-4 border-dotted mt-4 mb-4"></div>
            <div className=" flex ">
              <Image
                src={selectedArticle?.postedBy?.avatar}
                height={50}
                width={50}
                alt="avatar"
                className="rounded-full w-[6rem] h-[4rem]"
              />
              <p className="font-[16px] ml-4">
                <b>{selectedArticle?.postedBy?.userName}</b> is a Design Founder
                & Advisor, Berlin School of Creative Leadership Executive MBA
                participant, Zippie advisor, Wolt co-founder, and Nordic Rose
                stakeholder.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t-2 border-black mt-12 mb-12 relative">
        <Image
          src={eyes}
          className="absolute top-[-21px] left-[50%]"
          height={60}
          width={60}
          alt="eyes"
        />
      </div>
      <div className="flex justify-center ">
        <div>
          <div>
            <h1 className="text-[44px] sm:text-[30px] lg:text-[53px] font-bold leading-[100%] mt-5 text-center ">
              What to read Next
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 w-fit ">
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
                          className="w-full lg:w-[300px] h-[176px] object-cover"
                        />
                        <h2 className="text-[22px] font-medium w-[full] lg:w-[300px] text-center">
                          {post?.title}
                        </h2>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex justify-center border border-t-8 border-black mx-0  sm:mx-[150px] mt-6">
            <div className="py-10 w-[300px] sm:w-[500px]">
              {" "}
              <h1 className="text-center text-[20px] sm:text-[36px] font-bold leading-[28px] ">
                SignUp for NewsLetter
              </h1>
              <p className=" text-[20px] text-center mt-3">
                If you want relevant updates occasionally, sign up for the
                private newsletter. Your email is never shared.{" "}
              </p>
              <div className="flex  mt-4">
                <input
                  type="text"
                  className="h-[50px] border-2 border-black w-[65%] pl-5 text-black"
                  placeholder="Enter your Email"
                />
                <button className="h-[50px] bg-black w-[30%] text-[white] text-[20px] font-semi-bold">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
