
import React from "react";
import { Check, Zap, Shield, Eye } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";

const MissionValues = () => {
  const { ref: sectionRef, hasIntersected } = useIntersectionObserver({
    threshold: 0.2,
  });
  
  return (
    <section className="container max-w-5xl mx-auto px-4 py-8 sm:py-10 md:py-12">
      <div 
        ref={sectionRef}
        className={cn(
          "space-y-12 sm:space-y-16 transition-all duration-700",
          hasIntersected ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}
      >
        {/* Mission statement */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-white">Наша миссия</h2>
          <p className="text-base sm:text-lg md:text-xl max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto">
            Мы стремимся использовать передовые технологии искусственного интеллекта, 
            чтобы демократизировать доступ к точным спортивным прогнозам. 
            Наша цель — обеспечить каждого пользователя инструментами для принятия 
            обоснованных решений, основанных на объективном анализе данных.
          </p>
        </div>
        
        {/* Values */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <ValueCard 
            icon={<Check className="h-8 w-8 sm:h-10 sm:w-10" />} 
            title="Точность" 
            description="Наши алгоритмы постоянно совершенствуются для достижения максимальной точности прогнозов"
            delay={0}
            hasIntersected={hasIntersected}
          />
          <ValueCard 
            icon={<Zap className="h-8 w-8 sm:h-10 sm:w-10" />} 
            title="Скорость" 
            description="Моментальная обработка огромных массивов данных для быстрого принятия решений"
            delay={0.2}
            hasIntersected={hasIntersected}
          />
          <ValueCard 
            icon={<Shield className="h-8 w-8 sm:h-10 sm:w-10" />} 
            title="Надежность" 
            description="Стабильная работа системы с бесперебойной доступностью 24/7"
            delay={0.4}
            hasIntersected={hasIntersected}
          />
          <ValueCard 
            icon={<Eye className="h-8 w-8 sm:h-10 sm:w-10" />} 
            title="Прозрачность" 
            description="Подробное объяснение каждого прогноза и факторов, повлиявших на результат"
            delay={0.6}
            hasIntersected={hasIntersected}
          />
        </div>
      </div>
    </section>
  );
};

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  hasIntersected: boolean;
}

const ValueCard = ({ icon, title, description, delay, hasIntersected }: ValueCardProps) => (
  <div 
    className={cn(
      "bg-sport-blue text-center p-4 sm:p-6 rounded-lg neo-blur transition-all duration-700",
      "border border-sport-blue-medium/30 hover:border-sport-blue-medium/60",
      "transform hover:-translate-y-1 hover:card-glow",
      hasIntersected ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    )}
    style={{ transitionDelay: `${delay}s` }}
  >
    <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-sport-blue-medium/20 mb-3 sm:mb-4">
      {icon}
    </div>
    <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-white">{title}</h3>
    <p className="text-sm sm:text-base text-gray-300">{description}</p>
  </div>
);

export default MissionValues;
