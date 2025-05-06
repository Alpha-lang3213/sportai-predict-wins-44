
import React from "react";
import { Check, X } from "lucide-react";
import { pricingFeatures } from "@/constants/pricing";

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
          {pricingFeatures.map((feature, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-sport-blue/20' : 'bg-sport-blue/10'}>
              <td className="p-4 border border-gray-700">{feature.title}</td>
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
