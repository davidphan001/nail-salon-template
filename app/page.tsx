import Gallery from "@/components/gallery";
import Navbar from "@/components/nav-bar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Gallery />
    </div>
  );
}
