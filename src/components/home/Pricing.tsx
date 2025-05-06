
import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { pricingFeatures, pricingPlans } from "@/constants/pricing";
import { useAuth } from "@/contexts/AuthContext";

interface PlanFeature {
  title: string;
  basic: boolean;
  standard: boolean;
  premium: boolean;
}

const PricingCard = ({ 
  title, 
  price, 
  description, 
  popular = false,
  buttonText = "Выбрать план",
  onSelect
}: { 
  title: string; 
  price: string; 
  description: string; 
  popular?: boolean;
  buttonText?: string;
  onSelect: () => void;
}) => {
  const planKey = title.toLowerCase() as keyof typeof pricingFeatures[0];
  
  return (
    <Card className={`relative p-6 flex flex-col h-full border-2 ${popular ? 'border-sport-blue-medium bg-sport-blue/20' : 'border-gray-800 bg-sport-blue-dark/40'} backdrop-blur-sm`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-sport-blue-medium text-white text-xs font-semibold py-1 px-3 rounded-full">
          Популярный выбор
        </div>
      )}
      
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
        <div className="mb-2">
          <span className="text-3xl font-bold text-white">{price}</span>
          <span className="text-gray-400 ml-1">/мес</span>
        </div>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
      
      <div className="flex-grow">
        <ul className="space-y-3 mb-6">
          {pricingFeatures.map((feature, index) => (
            <li key={index} className="flex items-center">
              {feature[planKey] ? (
                <Check size={18} className="text-sport-green mr-2 flex-shrink-0" />
              ) : (
                <X size={18} className="text-gray-500 mr-2 flex-shrink-0" />
              )}
              <span className={`text-sm ${feature[planKey] ? 'text-gray-200' : 'text-gray-500'}`}>
                {feature.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      
      <Button 
        className={`w-full ${popular 
          ? 'bg-sport-blue-medium hover:bg-sport-blue-light text-white' 
          : 'bg-transparent text-sport-blue-medium border-2 border-sport-blue-medium hover:bg-sport-blue-medium/10'}`}
        onClick={onSelect}
      >
        {buttonText}
      </Button>
    </Card>
  );
};

const Pricing = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  
  const handlePlanSelection = (plan: string) => {
    if (!user) {
      // Redirect to login with return path
      navigate('/login', { state: { from: '/pricing', selectedPlan: plan } });
    } else {
      // Redirect to payment page with plan info
      navigate('/payment', { state: { plan } });
    }
  };

  return (
    <section id="pricing" className="py-16 px-4 bg-sport-blue-dark">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-white">Тарифные планы</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Выберите план, который соответствует вашим потребностям. Все планы включают 7-дневный бесплатный пробный период.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <PricingCard 
            title="Базовый"
            price={pricingPlans.basic.price}
            description={pricingPlans.basic.description}
            buttonText="Бесплатно 7 дней"
            onSelect={() => handlePlanSelection('basic')}
          />
          
          <PricingCard 
            title="Стандарт"
            price={pricingPlans.standard.price}
            description={pricingPlans.standard.description}
            popular={true}
            buttonText="Бесплатно 7 дней"
            onSelect={() => handlePlanSelection('standard')}
          />
          
          <PricingCard 
            title="Премиум"
            price={pricingPlans.premium.price}
            description={pricingPlans.premium.description}
            buttonText="Бесплатно 7 дней"
            onSelect={() => handlePlanSelection('premium')}
          />
        </div>
        
        <div className="text-center mt-10 max-w-lg mx-auto">
          <p className="text-gray-400 text-sm">
            Все планы включают бесплатную отмену в течение пробного периода. Оплачивайте удобным способом: картой, электронным кошельком или через мобильного оператора.
          </p>
          <Link to="/pricing">
            <Button variant="outline" className="mt-6 border-sport-blue-medium text-sport-blue-medium hover:bg-sport-blue-medium hover:text-gray-200">
              Подробнее о тарифах
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
