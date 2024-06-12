"use client";
import Landing from "@/components/landing";
import About from "@/components/about";
import Education from "@/components/education";
import School from "@/components/school";
import Certificates from "@/components/certificates";
import Projects from "@/components/projects";
import ParticlesBackground from "@/components/particlesBackground";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col items-center justify-between bg-slate-950">
        <ParticlesBackground />
        <div className="h-screen overflow-y-scroll min-w-screen snap-y snap-mandatory overflow-x-hidden">
          <div className="snap-start relative">
            <Landing />
          </div>
          <div className="snap-start relative">
            <About />
          </div>
          <div className="snap-start relative">
            <Education />
          </div>
          <div className="snap-start relative">
            <School />
          </div>
          <div className="snap-start relative">
            <Certificates />
          </div>
          <div className="snap-start relative">
            <Projects />
          </div>
        </div>
        <footer>
          <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a
              href="https://www.linkedin.com/in/johnmasa/"
              class="hover:underline"
            >
              John Lorenz Eldon R Masa
            </a>
            . All Rights Reserved.
          </span>
        </footer>
      </main>
    </div>
  );
}
