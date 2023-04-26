import React from "react";
import SubScripNewsletter from "./SubScripNewsletter";
import BlogPost from "./BlogPost";
import Arrow from "./components/Arrow";
function LivaatBlog() {
  return (
    <div className="container mx-auto px-6  py-14">
      <div className="text-center mb-10  flex flex-col justify-center items-center ">
        <h1 className="text-arseniColor font-bold text-4xl">
          LIVAAT <span className="text-magentaColor"> BLOG</span>
        </h1>
        <div className="sectionUnderLine mt-3"></div>
      </div>
      <div className="flex  justify-between gap-10">
        <div className="flex flex-col mb-32  space-y-12 md:max-w-md">
          <h1 className="text-arseniColor font-bold text-4xl	">
            Discover <span className="text-magentaColor"> Livaat’s</span> latest
            news & articles!
          </h1>
          <p className="text-base tex-black">
            Stay up to date with Livaat’s product updates, partnerships, use
            cases, news, announcements & much more!
          </p>
          <div>
            <p className="font-bold text-arseniColor text-lg mb-2.5">
              Subscribe to our newsletter
            </p>
            <SubScripNewsletter />
          </div>
        </div>
        <div className="BlogPosts p-5 flex gap-6 items-center overflow-x-auto ">
          <BlogPost />
          <BlogPost />
          <BlogPost />
          <BlogPost />
          <BlogPost />
          <BlogPost />
        </div>
      </div>
      <Arrow spanText={"READ MORE"} />
    </div>
  );
}

export default LivaatBlog;
