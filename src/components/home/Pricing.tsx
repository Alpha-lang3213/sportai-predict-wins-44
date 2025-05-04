
import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, X } from "lucide-react";

interface PlanFeature {
  title: string;
  basic: boolean;
  standard: boolean;
  premium: boolean;
}

const features: PlanFeature[] = [
  {
    title: "AI-прогнозы (ограниченные)",
    basic: true,
    standard: true,
    premium: true
  },
  {
    title: "Базовая статистика",
    basic: true,
    standard: true,
    premium: true
  },
  {
    title: "Калькулятор прибыли",
    basic: true,
    standard: true,
    premium: true
  },
  {
    title: "AI-прогнозы (полные)",
    basic: false,
    standard: true,
    premium: true
  },
  {
    title: "Подробный анализ матчей",
    basic: false,
    standard: true,
    premium: true
  },
  {
    title: "Симулятор стратегий",
    basic: false,
    standard: true,
    premium: true
  },
  {
    title: "Персональные консультации",
    basic: false,
    standard: false,
    premium: true
  },
  {
    title: "VIP-прогнозы",
    basic: false,
    standard: false,
    premium: true
  },
  {
    title: "Приоритетная поддержка",
    basic: false,
    standard: false,
    premium: true
  }
];

const PricingCard = ({ 
  title, 
  price, 
  description, 
  features, 
  popular = false,
  buttonText = "Выбрать план" 
}: { 
  title: string; 
  price: string; 
  description: string; 
  features: boolean[];
  popular?: boolean;
  buttonText?: string;
}) => {
  return (
    <Card className={`relative p-6 flex flex-col h-full border-2 ${popular ? 'border-sport-blue-medium' : 'border-gray-100'}`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-sport-blue-medium text-white text-xs font-semibold py-1 px-3 rounded-full">
          Популярный выбор
        </div>
      )}
      
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="mb-2">
          <span className="text-3xl font-bold">{price}</span>
          <span className="text-gray-500 ml-1">/мес</span>
        </div>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
      
      <div className="flex-grow">
        <ul className="space-y-3 mb-6">
          {features.map((hasFeature, index) => (
            <li key={index} className="flex items-center">
              {hasFeature ? (
                <Check size={18} className="text-sport-green mr-2 flex-shrink-0" />
              ) : (
                <X size={18} className="text-gray-300 mr-2 flex-shrink-0" />
              )}
              <span className={`text-sm ${hasFeature ? 'text-gray-700' : 'text-gray-400'}`}>
                {features[index].title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      
      <Button 
        className={`w-full ${popular 
          ? 'bg-sport-blue-medium hover:bg-sport-blue' 
          : 'bg-white text-sport-blue-medium border-2 border-sport-blue-medium hover:bg-sport-blue-light/10'}`}
      >
        {buttonText}
      </Button>
    </Card>
  );
};

const Pricing = () => {
  return (
    <section id="pricing" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Тарифные планы</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Выберите план, который соответствует вашим потребностям. Все планы включают 7-дневный бесплатный пробный период.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <PricingCard 
            title="Базовый"
            price="990 ₽"
            description="Идеальное решение для начинающих игроков"
            features={features.map((feature) => feature.basic)}
            buttonText="Бесплатно 7 дней"
          />
          
          <PricingCard 
            title="Стандарт"
            price="2 490 ₽"
            description="Полный доступ к AI-прогнозам и инструментам"
            features={features.map((feature) => feature.standard)}
            popular={true}
            buttonText="Бесплатно 7 дней"
          />
          
          <PricingCard 
            title="Премиум"
            price="4 990 ₽"
            description="Максимальные возможности для профессионалов"
            features={features.map((feature) => feature.premium)}
            buttonText="Бесплатно 7 дней"
          />
        </div>
        
        <div className="text-center mt-10 max-w-lg mx-auto">
          <p className="text-gray-500 text-sm">
            Все планы включают бесплатную отмену в течение пробного периода. Оплачивайте удобным способом: картой, электронным кошельком или через мобильного оператора.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
