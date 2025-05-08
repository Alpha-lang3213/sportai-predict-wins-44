
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

interface AboutUsHeroProps {
  onScrollDown: () => void;
}

const AboutUsHero = ({ onScrollDown }: AboutUsHeroProps) => {
  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 gradient-bg opacity-60 z-0"></div>
      
      {/* Neural network animation overlay */}
      <div className="absolute inset-0 z-10 opacity-40">
        <div className="absolute h-3 w-3 bg-sport-blue-light rounded-full top-1/3 left-1/4 animate-data-flow"></div>
        <div className="absolute h-2 w-2 bg-sport-accent rounded-full top-1/2 left-1/3 animate-data-flow" style={{ animationDelay: "1s" }}></div>
        <div className="absolute h-2 w-2 bg-sport-blue-medium rounded-full top-2/3 left-1/4 animate-data-flow" style={{ animationDelay: "2s" }}></div>
        <div className="absolute h-3 w-3 bg-sport-accent rounded-full top-1/4 right-1/3 animate-data-flow" style={{ animationDelay: "0.5s" }}></div>
        <div className="absolute h-2 w-2 bg-sport-blue-light rounded-full top-1/2 right-1/4 animate-data-flow" style={{ animationDelay: "1.5s" }}></div>
      </div>
      
      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
          <span className="text-gradient">SportAI Predictor:</span> Искусственный интеллект для спортивного анализа
        </h1>
        <p className="text-xl md:text-2xl mb-10 text-gray-200">
          Мы помогаем пользователям принимать обоснованные решения на основе глубоких данных и AI
        </p>
        <Button 
          onClick={onScrollDown} 
          size="lg" 
          className="bg-sport-blue-medium hover:bg-sport-blue-light text-white px-8 group"
        >
          Узнать подробнее
          <ChevronDown className="ml-1 h-5 w-5 transition-transform duration-300 group-hover:translate-y-1" />
        </Button>
      </div>
    </section>
  );
};

export default AboutUsHero;
