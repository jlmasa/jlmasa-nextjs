"use client";
import Link from "next/link";
import React from "react";

const Landing = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-white text-5xl pb-10">Hello!</h1>
        <div className="bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent pb-10">
          <h1 className="text-8xl">I am JL masa,</h1>
          <h1 className="text-8xl">A Fullstack Developer</h1>
        </div>
        <h1 className="text-4xl w-[55dvw] text-gray-300 pb-10 text-justify">
          I'm a Developer located in Laguna/makati and I like to build amazing
          UI/UX experiences for people. Currently, I'm Focused on developing
          systems and technologies that will make life easier for peoples as a
          fullstack developer.
        </h1>
        <Link href="https://www.linkedin.com/in/johnmasa/">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Do you want to work with me?
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Landing;
