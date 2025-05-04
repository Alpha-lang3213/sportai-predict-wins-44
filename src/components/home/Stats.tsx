
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Mock data for different sports
const statsData = {
  all: {
    accuracy: 78,
    roi: 21.4,
    predictions: 4826,
    chartData: [
      { month: 'Янв', roi: 14 },
      { month: 'Фев', roi: 18 },
      { month: 'Мар', roi: 16 },
      { month: 'Апр', roi: 19 },
      { month: 'Май', roi: 15 },
      { month: 'Июн', roi: 21 },
      { month: 'Июл', roi: 25 },
      { month: 'Авг', roi: 22 },
      { month: 'Сен', roi: 18 },
      { month: 'Окт', roi: 20 },
      { month: 'Ноя', roi: 23 },
      { month: 'Дек', roi: 21.4 },
    ]
  },
  football: {
    accuracy: 82,
    roi: 24.7,
    predictions: 2350,
    chartData: [
      { month: 'Янв', roi: 16 },
      { month: 'Фев', roi: 20 },
      { month: 'Мар', roi: 19 },
      { month: 'Апр', roi: 22 },
      { month: 'Май', roi: 18 },
      { month: 'Июн', roi: 23 },
      { month: 'Июл', roi: 27 },
      { month: 'Авг', roi: 25 },
      { month: 'Сен', roi: 21 },
      { month: 'Окт', roi: 23 },
      { month: 'Ноя', roi: 26 },
      { month: 'Дек', roi: 24.7 },
    ]
  },
  basketball: {
    accuracy: 76,
    roi: 19.2,
    predictions: 1290,
    chartData: [
      { month: 'Янв', roi: 12 },
      { month: 'Фев', roi: 16 },
      { month: 'Мар', roi: 14 },
      { month: 'Апр', roi: 17 },
      { month: 'Май', roi: 13 },
      { month: 'Июн', roi: 18 },
      { month: 'Июл', roi: 22 },
      { month: 'Авг', roi: 20 },
      { month: 'Сен', roi: 17 },
      { month: 'Окт', roi: 18 },
      { month: 'Ноя', roi: 21 },
      { month: 'Дек', roi: 19.2 },
    ]
  },
  hockey: {
    accuracy: 74,
    roi: 17.8,
    predictions: 843,
    chartData: [
      { month: 'Янв', roi: 11 },
      { month: 'Фев', roi: 14 },
      { month: 'Мар', roi: 12 },
      { month: 'Апр', roi: 15 },
      { month: 'Май', roi: 11 },
      { month: 'Июн', roi: 16 },
      { month: 'Июл', roi: 19 },
      { month: 'Авг', roi: 17 },
      { month: 'Сен', roi: 15 },
      { month: 'Окт', roi: 16 },
      { month: 'Ноя', roi: 18 },
      { month: 'Дек', roi: 17.8 },
    ]
  },
  tennis: {
    accuracy: 81,
    roi: 23.1,
    predictions: 343,
    chartData: [
      { month: 'Янв', roi: 15 },
      { month: 'Фев', roi: 19 },
      { month: 'Мар', roi: 17 },
      { month: 'Апр', roi: 20 },
      { month: 'Май', roi: 16 },
      { month: 'Июн', roi: 22 },
      { month: 'Июл', roi: 26 },
      { month: 'Авг', roi: 23 },
      { month: 'Сен', roi: 19 },
      { month: 'Окт', roi: 21 },
      { month: 'Ноя', roi: 24 },
      { month: 'Дек', roi: 23.1 },
    ]
  },
};

const StatCard = ({ title, value, description, color }: { title: string, value: string, description: string, color: string }) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Card className="p-6 bg-sport-blue-dark/70 border-sport-blue-medium/30 neo-blur cursor-pointer">
          <div className="text-sm text-gray-400 mb-1">{title}</div>
          <div className={`text-3xl font-bold ${color} mb-1`}>{value}</div>
          <div className="text-xs text-gray-400">Нажмите для подробностей</div>
        </Card>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 bg-sport-blue-dark border-sport-blue-medium/30">
        <div className="space-y-2">
          <h4 className="font-semibold text-gray-200">{title}</h4>
          <p className="text-sm text-gray-400">{description}</p>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

const Stats = () => {
  const [activeSport, setActiveSport] = useState("all");
  const currentStats = statsData[activeSport as keyof typeof statsData];
  
  return (
    <section id="stats" className="py-16 px-4 bg-sport-blue-dark">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-white">Статистика & ROI-график</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Полная прозрачность наших результатов. Просматривайте статистику по всем видам спорта или фильтруйте по отдельным дисциплинам.
          </p>
        </div>
        
        <div className="mb-8">
          <Tabs 
            defaultValue="all"
            onValueChange={(value) => setActiveSport(value)}
            className="w-full"
          >
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-5 w-full max-w-xl bg-sport-blue/50">
                <TabsTrigger value="all" className="data-[state=active]:bg-sport-blue-medium">Все</TabsTrigger>
                <TabsTrigger value="football" className="data-[state=active]:bg-sport-blue-medium">Футбол</TabsTrigger>
                <TabsTrigger value="basketball" className="data-[state=active]:bg-sport-blue-medium">Баскетбол</TabsTrigger>
                <TabsTrigger value="hockey" className="data-[state=active]:bg-sport-blue-medium">Хоккей</TabsTrigger>
                <TabsTrigger value="tennis" className="data-[state=active]:bg-sport-blue-medium">Теннис</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value={activeSport} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <StatCard 
                  title="Средняя точность"
                  value={`${currentStats.accuracy}%`}
                  description="Процент правильных прогнозов из общего числа. Мы считаем прогноз правильным, если исход события соответствует нашему предсказанию с вероятностью более 60%."
                  color="text-sport-blue-medium"
                />
                
                <StatCard 
                  title="ROI (Возврат инвестиций)"
                  value={`${currentStats.roi}%`}
                  description="Средний процент прибыли, который пользователи получают, следуя нашим рекомендациям. Рассчитывается как (Общая прибыль / Общая сумма ставок) * 100%."
                  color="text-sport-green"
                />
                
                <StatCard 
                  title="Количество прогнозов"
                  value={currentStats.predictions.toLocaleString()}
                  description="Общее количество прогнозов, сделанных нашим AI за все время. Мы анализируем только те события, по которым доступно достаточно данных для точного прогноза."
                  color="text-sport-accent"
                />
              </div>
              
              <Card className="p-6 bg-sport-blue-dark/70 border-sport-blue-medium/30 neo-blur">
                <h3 className="text-lg font-semibold mb-4 text-white">Динамика ROI за последние 12 месяцев</h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={currentStats.chartData}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#1A1F2C" />
                      <XAxis dataKey="month" stroke="#888888" />
                      <YAxis stroke="#888888" />
                      <Tooltip contentStyle={{ backgroundColor: '#1A1F2C', borderColor: '#8B5CF6', color: '#fff' }} />
                      <Legend />
                      <Line 
                        type="monotone" 
                        dataKey="roi" 
                        name="ROI %" 
                        stroke="#8B5CF6" 
                        strokeWidth={3}
                        activeDot={{ r: 8 }} 
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="text-xs text-gray-500 mt-2 text-center">
                  * График показывает средний ROI при использовании стратегии флэт (одинаковые ставки).
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Stats;
