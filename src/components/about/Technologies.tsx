
import React from "react";
import { Database, BarChart3, Cloud, ServerCog } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";

const Technologies = () => {
  const { ref: sectionRef, hasIntersected } = useIntersectionObserver({
    threshold: 0.2,
  });
  
  return (
    <section className="container mx-auto px-4 py-10">
      <div 
        ref={sectionRef}
        className={cn(
          "space-y-12 transition-all duration-700",
          hasIntersected ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}
      >
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Мощные технологии за простыми прогнозами</h2>
          <p className="text-lg md:text-xl text-gray-300">
            Наш подход сочетает передовые технологии искусственного интеллекта, 
            обработку больших данных и высоконадежную инфраструктуру
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TechCard 
            title="AI и машинное обучение" 
            icon={<BarChart3 className="h-10 w-10" />}
            technologies={["TensorFlow", "PyTorch"]}
            features={[
              "Нейронные сети",
              "Обучение на 1M+ матчей"
            ]}
            delay={0}
            hasIntersected={hasIntersected}
          />
          
          <TechCard 
            title="Обработка больших данных" 
            icon={<Database className="h-10 w-10" />}
            technologies={["Hadoop", "Spark"]}
            features={[
              "Обработка 100+ TB данных",
              "Исторические статистики"
            ]}
            delay={0.3}
            hasIntersected={hasIntersected}
          />
          
          <TechCard 
            title="Облачная инфраструктура" 
            icon={<Cloud className="h-10 w-10" />}
            technologies={["AWS", "Kubernetes"]}
            features={[
              "99.9% uptime",
              "Масштабирование под нагрузки",
              "Защита данных"
            ]}
            delay={0.6}
            hasIntersected={hasIntersected}
          />
        </div>
      </div>
    </section>
  );
};

interface TechCardProps {
  title: string;
  icon: React.ReactNode;
  technologies: string[];
  features: string[];
  delay: number;
  hasIntersected: boolean;
}

const TechCard = ({ title, icon, technologies, features, delay, hasIntersected }: TechCardProps) => {
  return (
    <div 
      className={cn(
        "bg-sport-blue rounded-xl overflow-hidden neo-blur transition-all duration-700",
        "border border-sport-blue-medium/20 hover:border-sport-blue-medium/40",
        hasIntersected ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="mr-3 flex-shrink-0">
            <div className="w-12 h-12 rounded-full bg-sport-blue-medium/20 flex items-center justify-center">
              {icon}
            </div>
          </div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech) => (
            <span 
              key={tech}
              className="px-3 py-1 bg-sport-blue-medium/20 rounded-full text-sm font-medium text-sport-blue-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <ul className="space-y-2">
          {features.map((feature) => (
            <li key={feature} className="flex items-start">
              <span className="mr-2 text-sport-accent">•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="h-1 bg-gradient-to-r from-sport-blue-medium to-sport-blue-light"></div>
    </div>
  );
};

export default Technologies;
