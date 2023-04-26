import React from "react";

function BlogPost() {
  return (
    <div>
      <article className=" w-72 aspect-video	 blog-card flex  rounded-[10px] max-w-xl flex-col  justify-between">
        <img
          src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
          className=" rounded-[10px] rounded-bl-none rounded-br-[30px]	w-full h-72 object-cover"
        />

        <div className="p-3 w-full">
          <a href="#" className="blog-badge">
            LEARNING
          </a>
          <h1 className=" py-5 text-xl font-semibold text-arseniColor ">
            <a href="#">Blog title</a>
          </h1>

          <div className=" flex items-center gap-x-4">
            <img
              src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
              className="filter drop-shadow-md h-10 w-10 rounded-full bg-gray-50"
            />
            <div>
              <p className="font-bold text-sm text-arseniColor">
                <a href="#">Michael Foster</a>
              </p>
              <time
                dateTime="15th DEC, 2022"
                className="text-xs font-light text-gray-500"
              >
                15<sup>th</sup> DEC, 2022
              </time>
            </div>
          </div>
        </div>
        <a
          href="#"
          className="p-3 readMore block ml-auto  text-xs font-normal tracking-[.145em]"
        >
          READ MORE
        </a>
      </article>
    </div>
  );
}

export default BlogPost;
