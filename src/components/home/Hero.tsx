
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set a future date for an important match
    const matchTime = new Date();
    matchTime.setHours(matchTime.getHours() + 5); // 5 hours from now

    const timer = setInterval(() => {
      const now = new Date();
      const difference = matchTime.getTime() - now.getTime();
      
      if (difference <= 0) {
        clearInterval(timer);
        return;
      }
      
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      setTimeLeft({ hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (value: number) => {
    return value < 10 ? `0${value}` : value;
  };

  return (
    <div className="gradient-bg min-h-[90vh] pt-24 pb-16 px-4 flex items-center relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[10%] top-[20%] w-64 h-64 bg-sport-blue-medium/20 rounded-full blur-3xl"></div>
        <div className="absolute right-[15%] bottom-[10%] w-72 h-72 bg-sport-blue-light/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-block px-3 py-1 mb-6 rounded-full neo-blur text-white">
              <span className="flex items-center text-sm gap-2">
                <span className="w-2 h-2 bg-sport-accent rounded-full animate-pulse"></span>
                Искусственный интеллект для ставок
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              SportAI Predictor: Ставки на спорт с точностью<span className="text-gradient"> искусственного</span> интеллекта
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
              Наш AI анализирует 1000+ факторов для каждого матча, чтобы повысить ваши шансы на выигрыш
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-sport-accent hover:bg-sport-accent-hover text-white text-lg px-8">
                Начать 7-дневный пробный период
              </Button>
              
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Узнать больше
              </Button>
            </div>
            
            <div className="mt-12">
              <p className="text-gray-300 mb-4">Следующий важный матч через:</p>
              <div className="flex gap-4 text-center">
                <div className="w-20 h-20 neo-blur rounded-lg flex flex-col items-center justify-center animate-float">
                  <div className="text-2xl font-bold text-white">{formatTime(timeLeft.hours)}</div>
                  <div className="text-xs text-gray-300">часов</div>
                </div>
                <div className="w-20 h-20 neo-blur rounded-lg flex flex-col items-center justify-center animate-float" style={{ animationDelay: "0.2s" }}>
                  <div className="text-2xl font-bold text-white">{formatTime(timeLeft.minutes)}</div>
                  <div className="text-xs text-gray-300">минут</div>
                </div>
                <div className="w-20 h-20 neo-blur rounded-lg flex flex-col items-center justify-center animate-float" style={{ animationDelay: "0.4s" }}>
                  <div className="text-2xl font-bold text-white">{formatTime(timeLeft.seconds)}</div>
                  <div className="text-xs text-gray-300">секунд</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:flex justify-center">
            <div className="relative">
              <div className="w-96 h-96 neo-blur rounded-2xl p-6 transform rotate-3 shadow-xl card-glow">
                <div className="bg-white/10 h-24 w-full rounded-lg mb-4 animate-pulse-light"></div>
                <div className="bg-white/10 h-12 w-full rounded-lg mb-4"></div>
                <div className="bg-white/10 h-48 w-full rounded-lg mb-4"></div>
                <div className="flex justify-end">
                  <div className="bg-sport-accent h-8 w-24 rounded-lg"></div>
                </div>
              </div>
              
              <div className="absolute -bottom-10 -left-10 w-64 h-64 neo-blur rounded-2xl p-6 transform -rotate-6 shadow-xl">
                <div className="bg-white/10 h-16 w-full rounded-lg mb-4"></div>
                <div className="bg-white/10 h-32 w-full rounded-lg animate-pulse-light"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
