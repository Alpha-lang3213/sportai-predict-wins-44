
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
            <div className="inline-block px-3 py-1 mb-6 rounded-full neo-blur text-gray-300">
              <span className="flex items-center text-sm gap-2">
                <span className="w-2 h-2 bg-sport-accent rounded-full animate-pulse"></span>
                Искусственный интеллект для ставок
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-300 leading-tight">
              SportAI Predictor: Ставки на спорт с точностью<span className="text-gradient"> искусственного</span> интеллекта
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
              Наш AI анализирует 1000+ факторов для каждого матча, чтобы повысить ваши шансы на выигрыш
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-sport-accent hover:bg-sport-accent-hover text-gray-200 text-lg px-8">
                Начать 7-дневный пробный период
              </Button>
              
              <Button size="lg" variant="outline" className="border-gray-500 text-gray-300 hover:bg-gray-800/30">
                Узнать больше
              </Button>
            </div>
            
            <div className="mt-12">
              <p className="text-gray-300 mb-4">Следующий важный матч через:</p>
              <div className="flex gap-4 text-center">
                <div className="w-20 h-20 neo-blur rounded-lg flex flex-col items-center justify-center animate-float">
                  <div className="text-2xl font-bold text-gray-300">{formatTime(timeLeft.hours)}</div>
                  <div className="text-xs text-gray-300">часов</div>
                </div>
                <div className="w-20 h-20 neo-blur rounded-lg flex flex-col items-center justify-center animate-float" style={{ animationDelay: "0.2s" }}>
                  <div className="text-2xl font-bold text-gray-300">{formatTime(timeLeft.minutes)}</div>
                  <div className="text-xs text-gray-300">минут</div>
                </div>
                <div className="w-20 h-20 neo-blur rounded-lg flex flex-col items-center justify-center animate-float" style={{ animationDelay: "0.4s" }}>
                  <div className="text-2xl font-bold text-gray-300">{formatTime(timeLeft.seconds)}</div>
                  <div className="text-xs text-gray-300">секунд</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:flex justify-center">
            <div className="relative w-full h-96">
              {/* Neural Network Visualization */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* First row of network nodes */}
                <div className="absolute left-0 top-0 flex flex-col gap-6">
                  {[...Array(5)].map((_, i) => (
                    <div key={`input-${i}`} className={`w-8 h-8 rounded-full bg-sport-blue-medium/80 animate-pulse-light`} 
                         style={{ animationDelay: `${i * 0.2}s` }}></div>
                  ))}
                </div>
                
                {/* Second row of network nodes */}
                <div className="absolute left-[25%] top-4 flex flex-col gap-8">
                  {[...Array(4)].map((_, i) => (
                    <div key={`hidden1-${i}`} className={`w-10 h-10 rounded-full bg-sport-accent/80 animate-pulse-light`}
                         style={{ animationDelay: `${i * 0.3}s` }}></div>
                  ))}
                </div>
                
                {/* Third row of network nodes */}
                <div className="absolute left-[50%] top-8 flex flex-col gap-10">
                  {[...Array(3)].map((_, i) => (
                    <div key={`hidden2-${i}`} className={`w-12 h-12 rounded-full bg-sport-blue-light/80 animate-pulse-light`}
                         style={{ animationDelay: `${i * 0.4}s` }}></div>
                  ))}
                </div>
                
                {/* Connection lines - SVG overlay */}
                <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
                  {/* Connections from first to second row */}
                  {[...Array(5)].map((_, i) => (
                    [...Array(4)].map((_, j) => (
                      <line 
                        key={`line1-${i}-${j}`} 
                        x1="32" 
                        y1={16 + i * 48} 
                        x2={`${0.25 * 384}`} 
                        y2={20 + j * 64}
                        stroke="#8B5CF6"
                        strokeWidth="2"
                        strokeOpacity="0.3"
                        className="animate-pulse-light"
                        style={{ animationDelay: `${(i+j) * 0.1}s` }}
                      />
                    ))
                  ))}
                  
                  {/* Connections from second to third row */}
                  {[...Array(4)].map((_, i) => (
                    [...Array(3)].map((_, j) => (
                      <line 
                        key={`line2-${i}-${j}`} 
                        x1={`${0.25 * 384 + 20}`}
                        y1={20 + i * 64} 
                        x2={`${0.5 * 384 + 24}`}
                        y2={32 + j * 80}
                        stroke="#F97316"
                        strokeWidth="2"
                        strokeOpacity="0.3"
                        className="animate-pulse-light"
                        style={{ animationDelay: `${(i+j) * 0.1 + 0.5}s` }}
                      />
                    ))
                  ))}
                  
                  {/* Connections from third row to final point */}
                  {[...Array(3)].map((_, i) => (
                    <line 
                      key={`line3-${i}`} 
                      x1={`${0.5 * 384 + 24}`}
                      y1={32 + i * 80} 
                      x2={`${0.85 * 384}`}
                      y2="192"
                      stroke="#D946EF"
                      strokeWidth="2"
                      strokeOpacity="0.3"
                      className="animate-pulse-light"
                      style={{ animationDelay: `${i * 0.1 + 1}s` }}
                    />
                  ))}
                </svg>
                
                {/* Final aggregation point */}
                <div className="absolute right-[15%] top-[calc(50%-32px)] w-16 h-16 bg-gradient-to-r from-sport-accent via-sport-blue-medium to-sport-blue-light rounded-xl animate-glow flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-900">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                
                {/* Data flow particles */}
                <div className="absolute left-[7%] top-[10%] w-2 h-2 bg-sport-accent rounded-full animate-data-flow"></div>
                <div className="absolute left-[12%] top-[30%] w-2 h-2 bg-sport-blue-medium rounded-full animate-data-flow" style={{ animationDelay: "0.5s" }}></div>
                <div className="absolute left-[18%] top-[50%] w-2 h-2 bg-sport-blue-light rounded-full animate-data-flow" style={{ animationDelay: "1s" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
