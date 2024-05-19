import ParticlesContainer from "@/components/Elements/Particles";
import Transition from "@/components/Elements/Transition";
import HeroSection from "@/components/Home/HeroSection";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <Transition/>
      <HeroSection/>
    </main>
  )
}