import Image from "next/image";
import Header from "../components/header";
import Landing from "@/components/landing";
import About from "@/components/about";

export default function Home() {
  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Landing />
        <About />
      </main>
    </div>
  );
}
