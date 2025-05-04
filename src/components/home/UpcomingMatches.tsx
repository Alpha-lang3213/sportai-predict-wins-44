
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Input } from "@/components/ui/input";

// Mocked match data
const matchesData = [
  {
    id: 1,
    league: "Премьер-лига",
    homeTeam: "Зенит",
    awayTeam: "Спартак",
    time: "2023-05-10T18:00:00",
    aiConfidence: 87,
    homeWinPercentage: 55,
    drawPercentage: 25,
    awayWinPercentage: 20,
    homeForm: ["W", "W", "L", "W", "D"],
    awayForm: ["L", "W", "D", "L", "W"],
  },
  {
    id: 2,
    league: "Ла Лига",
    homeTeam: "Барселона",
    awayTeam: "Реал Мадрид",
    time: "2023-05-11T20:00:00",
    aiConfidence: 92,
    homeWinPercentage: 45,
    drawPercentage: 25,
    awayWinPercentage: 30,
    homeForm: ["W", "W", "W", "D", "W"],
    awayForm: ["W", "L", "W", "W", "D"],
  },
  {
    id: 3,
    league: "Серия А",
    homeTeam: "Ювентус",
    awayTeam: "Милан",
    time: "2023-05-12T19:00:00",
    aiConfidence: 78,
    homeWinPercentage: 40,
    drawPercentage: 30,
    awayWinPercentage: 30,
    homeForm: ["L", "W", "W", "D", "W"],
    awayForm: ["W", "W", "D", "W", "L"],
  },
  {
    id: 4,
    league: "Премьер-лига",
    homeTeam: "Манчестер Юнайтед",
    awayTeam: "Арсенал",
    time: "2023-05-13T16:30:00",
    aiConfidence: 85,
    homeWinPercentage: 35,
    drawPercentage: 30,
    awayWinPercentage: 35,
    homeForm: ["D", "W", "L", "W", "W"],
    awayForm: ["W", "W", "W", "L", "W"],
  },
  {
    id: 5,
    league: "Бундеслига",
    homeTeam: "Бавария",
    awayTeam: "Боруссия Д",
    time: "2023-05-14T19:30:00",
    aiConfidence: 89,
    homeWinPercentage: 60,
    drawPercentage: 25,
    awayWinPercentage: 15,
    homeForm: ["W", "W", "W", "W", "D"],
    awayForm: ["W", "L", "W", "D", "W"],
  },
];

// Helper function to format time until match
const formatTimeUntil = (dateString: string) => {
  const matchDate = new Date(dateString);
  const now = new Date();
  const diffMs = matchDate.getTime() - now.getTime();
  
  if (diffMs <= 0) {
    return "Идет сейчас";
  }
  
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
  
  if (diffHours > 24) {
    const days = Math.floor(diffHours / 24);
    return `${days} д.`;
  }
  
  return `${diffHours}ч ${diffMinutes}м`;
};

const UpcomingMatches = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentTab, setCurrentTab] = useState("today");
  
  const filteredMatches = matchesData.filter(match => 
    match.homeTeam.toLowerCase().includes(searchQuery.toLowerCase()) || 
    match.awayTeam.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getFormColor = (result: string) => {
    switch (result) {
      case "W": return "bg-sport-green";
      case "L": return "bg-sport-accent";
      case "D": return "bg-sport-yellow";
      default: return "bg-gray-300";
    }
  };

  return (
    <section id="matches" className="py-16 px-4 bg-sport-blue-dark">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2 text-gradient">Ближайшие матчи</h2>
        <p className="text-gray-400 text-center mb-8">Изучите предстоящие матчи с нашими AI-прогнозами</p>
        
        <div className="bg-sport-blue/80 rounded-xl shadow-md p-4 mb-6 neo-blur">
          <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
            <Tabs 
              defaultValue="today" 
              className="w-full sm:w-auto"
              onValueChange={setCurrentTab}
            >
              <TabsList className="grid grid-cols-3 w-full sm:w-[400px] bg-sport-blue">
                <TabsTrigger value="today" className="text-gray-300 data-[state=active]:bg-sport-blue-medium data-[state=active]:text-gray-200">Сегодня</TabsTrigger>
                <TabsTrigger value="tomorrow" className="text-gray-300 data-[state=active]:bg-sport-blue-medium data-[state=active]:text-gray-200">Завтра</TabsTrigger>
                <TabsTrigger value="week" className="text-gray-300 data-[state=active]:bg-sport-blue-medium data-[state=active]:text-gray-200">Неделя</TabsTrigger>
              </TabsList>
            </Tabs>
            
            <div className="relative w-full sm:w-64">
              <Input
                type="text"
                placeholder="Поиск команды..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-sport-blue border-sport-blue-medium/30 text-gray-300 placeholder:text-gray-500"
              />
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm text-gray-400 border-b border-sport-blue-medium/20">
                  <th className="pb-2 pl-2">Матч</th>
                  <th className="pb-2">Время</th>
                  <th className="pb-2">AI Уверенность</th>
                  <th className="pb-2">Победа 1</th>
                  <th className="pb-2">Ничья</th>
                  <th className="pb-2">Победа 2</th>
                </tr>
              </thead>
              <tbody>
                {filteredMatches.map(match => (
                  <HoverCard key={match.id}>
                    <HoverCardTrigger asChild>
                      <tr className="border-b border-sport-blue-medium/10 hover:bg-sport-blue/50 cursor-pointer">
                        <td className="py-4 pl-2">
                          <div>
                            <div className="text-xs text-gray-500 mb-1">{match.league}</div>
                            <div className="font-medium text-gray-300">{match.homeTeam} - {match.awayTeam}</div>
                          </div>
                        </td>
                        <td>
                          <div className="flex items-center">
                            <span className="w-2 h-2 bg-sport-blue-medium rounded-full mr-2 animate-pulse"></span>
                            <span className="text-gray-400">{formatTimeUntil(match.time)}</span>
                          </div>
                        </td>
                        <td>
                          <div className="flex items-center">
                            <div className="h-2 w-16 bg-sport-blue-dark rounded-full overflow-hidden mr-2">
                              <div 
                                className="h-full bg-sport-blue-medium" 
                                style={{ width: `${match.aiConfidence}%` }}
                              ></div>
                            </div>
                            <span className="text-gray-400">{match.aiConfidence}%</span>
                          </div>
                        </td>
                        <td className="text-gray-400">{match.homeWinPercentage}%</td>
                        <td className="text-gray-400">{match.drawPercentage}%</td>
                        <td className="text-gray-400">{match.awayWinPercentage}%</td>
                      </tr>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80 p-0 bg-sport-blue border-sport-blue-medium/30 neo-blur">
                      <div className="p-4">
                        <div className="text-sm font-medium mb-2 text-gray-300">{match.homeTeam} - {match.awayTeam}</div>
                        <div className="text-xs text-gray-500 mb-4">{match.league} · {new Date(match.time).toLocaleString()}</div>
                        
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div>
                            <div className="text-xs text-gray-500 mb-1">Форма {match.homeTeam}</div>
                            <div className="flex gap-1">
                              {match.homeForm.map((result, idx) => (
                                <div 
                                  key={idx}
                                  className={`w-6 h-6 ${getFormColor(result)} rounded-full flex items-center justify-center text-gray-800 text-xs font-medium`}
                                >
                                  {result}
                                </div>
                              ))}
                            </div>
                          </div>
                          <div>
                            <div className="text-xs text-gray-500 mb-1">Форма {match.awayTeam}</div>
                            <div className="flex gap-1">
                              {match.awayForm.map((result, idx) => (
                                <div 
                                  key={idx}
                                  className={`w-6 h-6 ${getFormColor(result)} rounded-full flex items-center justify-center text-gray-800 text-xs font-medium`}
                                >
                                  {result}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="text-xs text-gray-500 mb-1">AI Прогноз</div>
                          <div className="h-2 w-full bg-sport-blue-dark rounded-full overflow-hidden mb-2">
                            <div 
                              className="h-full bg-sport-blue-medium" 
                              style={{ width: `${match.aiConfidence}%` }}
                            ></div>
                          </div>
                          <div className="flex justify-between text-xs text-gray-500">
                            <span>Низкая уверенность</span>
                            <span>Высокая уверенность</span>
                          </div>
                        </div>
                      </div>
                      <div className="border-t border-sport-blue-medium/30 p-3 flex justify-between items-center bg-sport-blue/90">
                        <div className="text-xs text-gray-500">Полный анализ доступен в Pro-тарифе</div>
                        <Button size="sm" className="bg-sport-blue-medium hover:bg-sport-blue-light">
                          Подробнее
                        </Button>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                ))}
              </tbody>
            </table>
          </div>
          
          {filteredMatches.length === 0 && (
            <div className="py-8 text-center">
              <p className="text-gray-400">Нет матчей, соответствующих вашему запросу</p>
            </div>
          )}
        </div>
        
        <div className="text-center">
          <Button variant="outline" className="border-sport-blue-medium text-sport-blue-medium hover:bg-sport-blue-medium hover:text-gray-200">
            Показать все матчи
          </Button>
        </div>
      </div>
    </section>
  );
};

export default UpcomingMatches;
