import About from "@/components/About";
import Landing from "@/components/Landing";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-color3 poppins">
      <Landing />
      <About />
    </main>
  );
}
