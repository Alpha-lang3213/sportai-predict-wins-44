
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import MatchCard from "./MatchCard";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";

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

// Sample activity data
const activityData = [
  { date: new Date(2023, 4, 1), result: "win" },
  { date: new Date(2023, 4, 3), result: "win" },
  { date: new Date(2023, 4, 5), result: "loss" },
  { date: new Date(2023, 4, 8), result: "win" },
  { date: new Date(2023, 4, 9), result: "win" },
  { date: new Date(2023, 4, 12), result: "loss" },
  { date: new Date(2023, 4, 15), result: "win" },
  { date: new Date(2023, 4, 18), result: "loss" },
  { date: new Date(2023, 4, 20), result: "win" },
];

const SavedMatches: React.FC = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const { user } = useAuth();
  const navigate = useNavigate();
  
  if (!user) {
    return (
      <Card className="bg-sport-blue/80 border-sport-blue-medium/30 text-white neo-blur p-8 text-center">
        <div className="text-gray-400 mb-4">
          Необходимо войти в аккаунт для просмотра сохраненных матчей
        </div>
        <Button 
          className="bg-sport-blue-medium hover:bg-sport-blue-light"
          onClick={() => navigate("/login", { state: { from: '/predictions' } })}
        >
          Войти
        </Button>
      </Card>
    );
  }
  
  // Function to get modifiers for the calendar
  const getDayClassNames = (day: Date) => {
    const matchingActivity = activityData.find(
      activity => activity.date.getDate() === day.getDate() && 
                 activity.date.getMonth() === day.getMonth() && 
                 activity.date.getFullYear() === day.getFullYear()
    );
    
    if (!matchingActivity) return {};
    
    return {
      className: matchingActivity.result === "win" 
        ? "bg-sport-green/20 text-sport-green font-bold rounded-md" 
        : "bg-sport-accent/20 text-sport-accent font-bold rounded-md"
    };
  };
  
  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-8 text-gradient">Мои ставки</h2>
      
      {/* User activity calendar */}
      <Card className="bg-sport-blue/80 border-sport-blue-medium/30 text-white neo-blur mb-8">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <Calendar className="h-5 w-5 mr-2 text-sport-blue-medium" />
              <h3 className="text-lg font-semibold">Календарь активности</h3>
            </div>
          </div>
          
          <div className="flex justify-center">
            <CalendarComponent
              mode="single"
              selected={date}
              onSelect={setDate}
              className="border border-sport-blue-medium/30 rounded-md bg-sport-blue/50"
              modifiers={{
                win: activityData.filter(day => day.result === "win").map(day => day.date),
                loss: activityData.filter(day => day.result === "loss").map(day => day.date),
              }}
              modifiersClassNames={{
                win: "bg-sport-green/20 text-sport-green font-bold",
                loss: "bg-sport-accent/20 text-sport-accent font-bold",
              }}
            />
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
              onClick={() => navigate("/predictions")}
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
