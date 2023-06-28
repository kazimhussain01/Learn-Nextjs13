import Image from 'next/image'
import Link from 'next/link'
import Hero from "@/view/hero";
import AboutMe from '@/view/about';
import HeroSection from '@/app/herosection/page';

export default function Home() {
  return (
    <div>
      
      <Hero />
      <AboutMe />
    </div>
  )
}