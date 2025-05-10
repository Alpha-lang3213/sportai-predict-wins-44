
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

interface AboutUsHeroProps {
  onScrollDown: () => void;
}

const AboutUsHero = ({ onScrollDown }: AboutUsHeroProps) => {
  return (
    <section className="relative min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh] flex items-center justify-center overflow-hidden py-12 sm:py-16 lg:py-20">
      {/* Background animation */}
      <div className="absolute inset-0 gradient-bg opacity-60 z-0"></div>
      
      {/* Neural network animation overlay */}
      <div className="absolute inset-0 z-10 opacity-40">
        <div className="absolute h-2 w-2 sm:h-3 sm:w-3 bg-sport-blue-light rounded-full top-1/3 left-1/4 animate-data-flow"></div>
        <div className="absolute h-1 w-1 sm:h-2 sm:w-2 bg-sport-accent rounded-full top-1/2 left-1/3 animate-data-flow" style={{ animationDelay: "1s" }}></div>
        <div className="absolute h-1 w-1 sm:h-2 sm:w-2 bg-sport-blue-medium rounded-full top-2/3 left-1/4 animate-data-flow" style={{ animationDelay: "2s" }}></div>
        <div className="absolute h-2 w-2 sm:h-3 sm:w-3 bg-sport-accent rounded-full top-1/4 right-1/3 animate-data-flow" style={{ animationDelay: "0.5s" }}></div>
        <div className="absolute h-1 w-1 sm:h-2 sm:w-2 bg-sport-blue-light rounded-full top-1/2 right-1/4 animate-data-flow" style={{ animationDelay: "1.5s" }}></div>
      </div>
      
      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 max-w-3xl sm:max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-white">
          <span className="text-gradient">SportAI Predictor:</span> Искусственный интеллект для спортивного анализа
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-10 text-gray-200">
          Мы помогаем пользователям принимать обоснованные решения на основе глубоких данных и AI
        </p>
        <Button 
          onClick={onScrollDown} 
          size="lg" 
          className="bg-sport-blue-medium hover:bg-sport-blue-light text-white px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base group"
        >
          Узнать подробнее
          <ChevronDown className="ml-1 h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-y-1" />
        </Button>
      </div>
    </section>
  );
};

export default AboutUsHero;
