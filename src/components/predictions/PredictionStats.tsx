
import React from "react";
import { Card } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Circle, Zap, DollarSign, HelpCircle } from "lucide-react";

const PredictionStats: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Total Predictions Stats */}
      <Card className="bg-sport-blue/80 border-sport-blue-medium/30 text-white neo-blur p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-gray-400 text-sm font-medium mb-2">Статистика предиктов</h3>
            <div className="text-5xl font-bold mb-4">2884</div>
            <div className="text-sm text-gray-400">Всего матчей</div>
          </div>
          <div className="bg-sport-blue-medium/20 p-3 rounded-full">
            <Circle className="h-6 w-6 text-sport-accent" />
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-2">
          <div className="border-l-4 border-sport-green pl-2">
            <div className="text-2xl font-bold">1645</div>
            <div className="text-xs text-gray-400">Рекомендованные</div>
          </div>
          
          <div className="border-l-4 border-sport-accent pl-2">
            <div className="text-2xl font-bold">1239</div>
            <div className="text-xs text-gray-400">Рискованные</div>
          </div>
        </div>
      </Card>

      {/* Recommended matches stats */}
      <Card className="bg-sport-blue/80 border-sport-blue-medium/30 text-white neo-blur p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-gray-400 text-sm font-medium mb-2">Рекомендованные матчи</h3>
            <div className="text-5xl font-bold mb-4">100</div>
            <div className="text-sm text-gray-400">Из последних</div>
          </div>
          <div className="bg-sport-blue-medium/20 p-3 rounded-full">
            <Zap className="h-6 w-6 text-sport-accent" />
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-2">
          <div className="border-l-4 border-sport-yellow pl-2">
            <div className="text-2xl font-bold">80</div>
            <div className="text-xs text-gray-400">Зашли</div>
          </div>
          
          <div className="flex items-center">
            <div>
              <div className="text-2xl font-bold">1.49</div>
              <div className="text-xs text-gray-400">Средний лайв кэф</div>
            </div>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <HelpCircle className="h-4 w-4 ml-2 text-gray-500" />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-xs">Средний коэффициент выигравших ставок</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </Card>

      {/* Live coefficient stats */}
      <Card className="bg-sport-blue/80 border-sport-blue-medium/30 text-white neo-blur p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-gray-400 text-sm font-medium mb-2">Лайв кэф за последние 100 матчей</h3>
            <div className="text-5xl font-bold mb-4">14.00</div>
            <div className="text-sm text-gray-400">Лучший кэф</div>
          </div>
          <div className="bg-sport-blue-medium/20 p-3 rounded-full">
            <DollarSign className="h-6 w-6 text-sport-accent" />
          </div>
        </div>

        <div className="mt-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-sport-blue flex items-center justify-center overflow-hidden mr-2">
                <img src="/lovable-uploads/317cb34f-92ff-41ef-9a64-5c62fc19e00e.png" alt="Team logo" className="w-6 h-6" />
              </div>
              <span>Соколы</span>
            </div>
            <div className="text-sport-green font-bold">14.00 ↑</div>
            <div className="flex items-center">
              <span className="text-sport-green">2</span>
              <span>:</span>
              <span className="text-sport-accent">1</span>
            </div>
            <div className="text-sport-accent">1.01 ↓</div>
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-sport-blue flex items-center justify-center overflow-hidden mr-1">
                <span className="text-xs">NV</span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PredictionStats;
