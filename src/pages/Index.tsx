
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import UpcomingMatches from "@/components/home/UpcomingMatches";
import Tools from "@/components/home/Tools";
import Stats from "@/components/home/Stats";
import Pricing from "@/components/home/Pricing";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const { toast } = useToast();
  
  // Function to be called when "Показать все матчи" button is clicked
  const handleShowAllMatches = () => {
    // Navigate to Predictions page
    window.location.href = "/predictions";
  };
  
  // Register callback for UpcomingMatches
  const showAllMatchesCallback = () => {
    handleShowAllMatches();
  };
  
  return (
    <div className="min-h-screen bg-sport-blue-dark text-gray-300">
      <Header />
      <main>
        <Hero />
        <UpcomingMatches onShowAllMatches={showAllMatchesCallback} />
        <Tools />
        <Stats />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
