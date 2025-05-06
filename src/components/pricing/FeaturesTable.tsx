
import React from "react";
import { Check, X } from "lucide-react";

interface Feature {
  name: string;
  basic: boolean;
  standard: boolean;
  premium: boolean;
}

const features: Feature[] = [
  {
    name: "Список матчей без вероятностей",
    basic: true,
    standard: true,
    premium: true
  },
  {
    name: "Прогнозы с вероятностями",
    basic: false,
    standard: true,
    premium: true
  },
  {
    name: "Базовая аналитика",
    basic: false,
    standard: true,
    premium: true
  },
  {
    name: "Углубленная аналитика",
    basic: false,
    standard: false,
    premium: true
  },
  {
    name: "Персональные рекомендации",
    basic: false,
    standard: false,
    premium: true
  },
  {
    name: "Подписка на Telegram-канал",
    basic: true,
    standard: true,
    premium: true
  },
  {
    name: "Email-уведомления",
    basic: false,
    standard: true,
    premium: true
  },
  {
    name: "Персональный менеджер",
    basic: false,
    standard: false,
    premium: true
  }
];

const FeaturesTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-sport-blue/50">
            <th className="p-4 text-left border border-gray-700">Фича</th>
            <th className="p-4 text-center border border-gray-700">Базовый</th>
            <th className="p-4 text-center border border-gray-700">Стандартный</th>
            <th className="p-4 text-center border border-gray-700">Премиум</th>
          </tr>
        </thead>
        <tbody>
          {features.map((feature, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-sport-blue/20' : 'bg-sport-blue/10'}>
              <td className="p-4 border border-gray-700">{feature.name}</td>
              <td className="p-4 text-center border border-gray-700">
                {feature.basic ? (
                  <Check className="mx-auto text-sport-green" size={20} />
                ) : (
                  <X className="mx-auto text-gray-500" size={20} />
                )}
              </td>
              <td className="p-4 text-center border border-gray-700">
                {feature.standard ? (
                  <Check className="mx-auto text-sport-green" size={20} />
                ) : (
                  <X className="mx-auto text-gray-500" size={20} />
                )}
              </td>
              <td className="p-4 text-center border border-gray-700">
                {feature.premium ? (
                  <Check className="mx-auto text-sport-green" size={20} />
                ) : (
                  <X className="mx-auto text-gray-500" size={20} />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FeaturesTable;
