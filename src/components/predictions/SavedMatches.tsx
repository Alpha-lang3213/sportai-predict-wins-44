
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import MatchCard from "./MatchCard";

// Sample saved matches
const savedMatchesData = [
  {
    id: 1,
    homeTeam: "Ливерпуль",
    awayTeam: "Эвертон",
    date: "20 мая, 19:00 МСК",
    league: "Премьер-лига",
    homeWinPercentage: 65,
    drawPercentage: 20,
    awayWinPercentage: 15,
    recommendedBet: "П1 (Ливерпуль)",
    averageOdds: 1.65,
    roi: 24.8
  },
  {
    id: 2,
    homeTeam: "Рома",
    awayTeam: "Лацио",
    date: "21 мая, 21:45 МСК",
    league: "Серия А",
    homeWinPercentage: 35,
    drawPercentage: 40,
    awayWinPercentage: 25,
    recommendedBet: "X (Ничья)",
    averageOdds: 3.10,
    roi: 42.3
  }
];

// Sample months for activity calendar
const months = ["Май", "Июнь", "Июль", "Август"];

// Sample activity data
const activityData = [
  { day: 1, result: null }, // null - no bets
  { day: 2, result: null },
  { day: 3, result: "win" },
  { day: 4, result: null },
  { day: 5, result: "loss" },
  { day: 6, result: null },
  { day: 7, result: null },
  { day: 8, result: "win" },
  { day: 9, result: "win" },
  { day: 10, result: null },
  // ... more days
];

const SavedMatches: React.FC = () => {
  const [activeMonth, setActiveMonth] = useState("Май");
  
  const getActivityColor = (result: string | null) => {
    if (!result) return "bg-sport-blue-dark";
    return result === "win" ? "bg-sport-green" : "bg-sport-accent";
  };
  
  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-8 text-gradient">Мои ставки</h2>
      
      {/* User activity calendar */}
      <Card className="bg-sport-blue/80 border-sport-blue-medium/30 text-white neo-blur mb-8">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Calendar className="h-5 w-5 mr-2 text-sport-blue-medium" />
              <h3 className="text-lg font-semibold">Карта активности</h3>
            </div>
            <div className="flex space-x-2">
              {months.map((month) => (
                <Button 
                  key={month}
                  variant="outline" 
                  size="sm"
                  className={`${activeMonth === month 
                    ? 'bg-sport-blue-medium text-white' 
                    : 'border-sport-blue-medium/30 text-gray-400'}`}
                  onClick={() => setActiveMonth(month)}
                >
                  {month}
                </Button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-7 gap-2">
            {/* Day names */}
            {["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"].map((day) => (
              <div key={day} className="text-center text-xs text-gray-500 py-1">
                {day}
              </div>
            ))}
            
            {/* Activity squares */}
            {activityData.map((data, index) => (
              <div 
                key={index} 
                className={`aspect-square rounded-sm ${getActivityColor(data.result)}`}
                title={data.result ? `День ${data.day}: ${data.result === "win" ? "Выигрыш" : "Проигрыш"}` : `День ${data.day}: Нет ставок`}
              >
                <div className="h-full w-full flex items-center justify-center text-xs">
                  {data.day}
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-4 gap-6">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-sm bg-sport-green mr-2"></div>
              <span className="text-xs text-gray-400">Выигрыш</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-sm bg-sport-accent mr-2"></div>
              <span className="text-xs text-gray-400">Проигрыш</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-sm bg-sport-blue-dark mr-2"></div>
              <span className="text-xs text-gray-400">Нет ставок</span>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Stats summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <Card className="bg-sport-blue/80 border-sport-blue-medium/30 text-white neo-blur">
          <CardContent className="p-4 text-center">
            <div className="text-sm text-gray-400 mb-1">Сохраненных матчей</div>
            <div className="text-2xl font-bold">24</div>
          </CardContent>
        </Card>
        <Card className="bg-sport-blue/80 border-sport-blue-medium/30 text-white neo-blur">
          <CardContent className="p-4 text-center">
            <div className="text-sm text-gray-400 mb-1">Выигрышных</div>
            <div className="text-2xl font-bold text-sport-green">18</div>
          </CardContent>
        </Card>
        <Card className="bg-sport-blue/80 border-sport-blue-medium/30 text-white neo-blur">
          <CardContent className="p-4 text-center">
            <div className="text-sm text-gray-400 mb-1">Успешность</div>
            <div className="text-2xl font-bold text-sport-green">75%</div>
          </CardContent>
        </Card>
        <Card className="bg-sport-blue/80 border-sport-blue-medium/30 text-white neo-blur">
          <CardContent className="p-4 text-center">
            <div className="text-sm text-gray-400 mb-1">Общая прибыль</div>
            <div className="text-2xl font-bold text-sport-green">+1230₽</div>
          </CardContent>
        </Card>
      </div>
      
      {/* Saved matches */}
      <div className="space-y-6">
        {savedMatchesData.length > 0 ? (
          savedMatchesData.map((match) => (
            <MatchCard 
              key={match.id}
              homeTeam={match.homeTeam}
              awayTeam={match.awayTeam}
              date={match.date}
              league={match.league}
              homeWinPercentage={match.homeWinPercentage}
              drawPercentage={match.drawPercentage}
              awayWinPercentage={match.awayWinPercentage}
              recommendedBet={match.recommendedBet}
              averageOdds={match.averageOdds}
              roi={match.roi}
            />
          ))
        ) : (
          <Card className="bg-sport-blue/80 border-sport-blue-medium/30 text-white neo-blur p-8 text-center">
            <div className="text-gray-400 mb-4">
              У вас пока нет сохраненных матчей
            </div>
            <Button 
              className="bg-sport-blue-medium hover:bg-sport-blue-light"
            >
              Перейти к прогнозам
            </Button>
          </Card>
        )}
      </div>
    </div>
  );
};

export default SavedMatches;
