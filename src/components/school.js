"use client";
import React from "react";
import face1 from "../../public/college.webp";
import Image from "next/image";

const School = () => {
  return (
    <section>
      <div className="flex items-center justify-center min-h-screen">
        <div className="grid grid-cols-2">
          <div className="flex flex-col items-start justify-center px-20">
            <h1 className="text-3xl py-5 text-green-400">EDUCATION</h1>
            <h1 className="text-5xl font-bold ">
              Colegio de San Juan de Letran - Calamba
            </h1>
            <h1 className="text-2xl text-justify py-5">
              I've started my college day in Colegio de San Juan de Letran -
              Calamba Located in Bucal Calamba Laguna.
            </h1>
            <h1 className="text-2xl text-justify py-5">
              And here are the courses I've Taken:
            </h1>
            <h1 className="text-xl font-bold pt  -5">
              Bachelor of Science in Entertainment and Multimedia Computing
              Major in Digital Art
            </h1>
            <h1>2015 - 2016</h1>
            <h1 className="text-xl font-bold pt-5">
              Bachelor of Science in Information Technology
            </h1>
            <h1>2016 - 2020</h1>
          </div>
          <div className="flex flex-col items-center justify-center p-14">
            <Image src={face1} className="rounded-xl" alt="image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default School;
