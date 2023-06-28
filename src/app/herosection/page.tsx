import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import AlertDialogDemo from "@/view/about";

const HeroSection = ()=> {
    return(
        <div className="grid grid-cols-2 gap-4 px-3 py-4">
           
           {/* Content */}
           <div className="flex flex-col gap-2 space-y-1">
           <h2 className="scroll-m-20 pb-2 text-3xl font-sans font-bold tracking-tight transition-colors first:mt-0">
            Kazim Hussain
           </h2>
           <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">
            Full Stack Developer
           </h1>
           <h4 className="scroll-m-20 text-lg font-bold tracking-tight">
           "Empowering businesses through end-to-end web solutions as a skilled Full Stack Developer, bridging the gap between front-end elegance and back-end functionality."
           </h4>
           <div>
            <Button>Learn More</Button>
           </div>
           <div className="-ml-5 -mt-3">
           <AlertDialogDemo />
           </div>
           </div>
            
            {/* Image */}
            <div className="mx-4 self-center px-40">
            <Image src="/kazim.jpg" 
            alt="kazimimage"
            width={96}
            height={80}
            className="rounded-full h-[7.80rem] w-[7.50rem]"
            >
            </Image>
            </div>
        </div>
    )
}

export default HeroSection;