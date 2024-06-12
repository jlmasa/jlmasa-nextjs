"use client";
import React from "react";
import face1 from "../../public/gradpic.webp";
import Image from "next/image";
const Education = () => {
  return (
    <section>
      <div className="flex items-center justify-center min-h-screen">
        <div className="grid grid-cols-2">
          <div className="flex flex-col items-start justify-center px-20">
            <h1 className="text-3xl py-5 text-green-400">HELLO AND WELCOME</h1>
            <h1 className="text-3xl font-bold ">
              I'm John Lorenz Eldon R. Masa
            </h1>
            <h1 className="text-2xl text-justify py-5">
              I'm a Graduate of Bachelor of Science in Information Technology.
              And ever since I first got my own computer unit at the age of 8, I
              was able to Enjoy a lot of things and It came to a point where I
              ask myself how does a computer works? How does a computer
              understand our inputs and that is where I decided to pursue this
              path of Technology. I'm Also a former Member of the student body
              back in my college years. Where I was Elected As Public Relations
              Officer back in 2016 for a year mainly focus on being the voice of
              the students. I was also Elected As Vice President of the Student
              body back in 2017 for a year focus on creating events for the
              students to enjoy their stay during their college years.
            </h1>
          </div>
          <div className="flex flex-col items-center justify-center p-14">
            <Image src={face1} className="rounded-xl" alt="image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
