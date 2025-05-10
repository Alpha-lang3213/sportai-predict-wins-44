
import React, { useRef } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ChevronDown, Check, Zap, Shield, Eye, Database, BarChart3, Cloud, ServerCog } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import AboutUsHero from "@/components/about/Hero";
import MissionValues from "@/components/about/MissionValues";
import Technologies from "@/components/about/Technologies";

const AboutUs = () => {
  const techSectionRef = useRef<HTMLDivElement>(null);
  
  const scrollToTech = () => {
    techSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sport-blue-dark to-sport-blue text-gray-300">
      <Header />
      <main className="flex flex-col gap-20 pb-20 w-full overflow-x-hidden">
        <AboutUsHero onScrollDown={scrollToTech} />
        <MissionValues />
        <div ref={techSectionRef} className="w-full">
          <Technologies />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
