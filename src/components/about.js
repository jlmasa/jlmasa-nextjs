"use client";
import Image from "next/image";
import React from "react";
import face1 from "../../public/picture.jpg";
import { FaReact } from "react-icons/fa";
import { RiNextjsLine, RiNodejsFill } from "react-icons/ri";
import { FaPhp } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { TbBrandMongodb } from "react-icons/tb";
const About = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="grid grid-cols-2">
          <div className="flex flex-col items-center justify-center p-20">
            <Image src={face1} className="rounded-xl" alt="image" />
          </div>
          <div className="flex flex-col items-start justify-center w-[47dvw]">
            <h1 className="text-3xl">
              I'm been coding for almost 8 years. I'm currently a fullstack
              developer who likes on making responsive websites with awesome
              UI/UX
            </h1>
            <h1 className="text-3xl py-10">
              My prefer weapons of choices when coding are the following:
            </h1>
            <div className="flex flex-col items-center justify-center w-full pt-10">
              <div className="grid grid-cols-2 gap-14">
                <div className="flex flex-col items-center justify-center">
                  <div className="flex flex-row items-center justify-center gap-5">
                    <FaReact className="w-14 h-14 text-blue-500" />
                    <RiNextjsLine className="w-14 h-14" />
                  </div>

                  <h1 className="text-2xl">ReactJS / NextJS</h1>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <div className="flex flex-row items-center justify-center gap-5">
                    <FaPhp className="w-14 h-14 text-violet-500" />
                    <FaLaravel className="w-14 h-14 text-red-500" />
                    <RiNodejsFill className="w-14 h-14 text-green-500" />
                  </div>
                  <h1 className="text-2xl">PHP / Laravel / NodeJS</h1>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <div className="flex flex-row items-center justify-center gap-5">
                    <RiTailwindCssFill className="w-14 h-14  text-blue-500" />
                  </div>
                  <h1 className="text-2xl">TailwindCSS</h1>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <div className="flex flex-row items-center justify-center gap-5">
                    <SiMysql className="w-14 h-14 text-amber-600" />
                    <TbBrandMongodb className="w-14 h-14 text-green-600" />
                  </div>
                  <h1 className="text-2xl">MySQL / Monggo</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
