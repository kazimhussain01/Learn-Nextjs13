"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Hero = () => {
    return(
    <div className="grid grid-cols-2 px-4 py-3">
      <div className="mx-4 order-last self-center px-40">
        <Image
          src="/kazim.jpg"
          alt="image"
          width={96}
          height={80}
          className="rounded-full h-24 w-24"
        />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="font-bold font-mono">Kazim Hussain</h1>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Full stack Developer
        </h1>
        <p className="justify-between font-black">
        "Empowering businesses through end-to-end web solutions as a skilled Full Stack 
        Developer, bridging the gap between front-end elegance and back-end functionality."
        </p>
        <div>
          <Button>Learn More</Button>
        </div>
      </div>
    </div>
  );
};


export default Hero;