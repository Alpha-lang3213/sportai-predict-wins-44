
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Flame } from "lucide-react";
import MatchCard from "./MatchCard";

// Sample hot matches
const hotMatches = [
  {
    id: 1,
    homeTeam: "Манчестер Сити",
    awayTeam: "Ливерпуль",
    date: "16 мая, 18:00 МСК",
    league: "Премьер-лига",
    homeWinPercentage: 48,
    drawPercentage: 27,
    awayWinPercentage: 25,
    recommendedBet: "П1 (Манчестер Сити)",
    averageOdds: 2.05,
    roi: 38.2
  },
  {
    id: 2,
    homeTeam: "Интер",
    awayTeam: "Милан",
    date: "17 мая, 21:45 МСК",
    league: "Серия А",
    homeWinPercentage: 40,
    drawPercentage: 33,
    awayWinPercentage: 27,
    recommendedBet: "X (Ничья)",
    averageOdds: 3.20,
    roi: 45.8
  }
];

const HotPredictions: React.FC = () => {
  return (
    <div>
      <div className="flex items-center justify-center mb-8">
        <Flame className="h-6 w-6 text-sport-accent mr-2" />
        <h2 className="text-2xl font-bold text-gradient">Горячие прогнозы</h2>
      </div>
      
      {/* VIP banner */}
      <Card className="mb-8 bg-gradient-to-r from-sport-blue-medium to-sport-blue-dark border border-sport-blue-medium/50 text-white">
        <CardContent className="p-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Получите доступ к нашим лучшим прогнозам</h3>
              <p className="text-gray-300">
                Горячие прогнозы доступны только для пользователей с VIP-подпиской.
                Точность нашей аналитики превышает 80%.
              </p>
            </div>
            <Button 
              className="bg-sport-accent hover:bg-sport-accent/90 text-white"
            >
              Оформить VIP подписку
            </Button>
          </div>
        </CardContent>
      </Card>
      
      {/* Blurred matches */}
      <div className="space-y-6 relative">
        {hotMatches.map((match) => (
          <div key={match.id} className="relative">
            <div className="filter blur-sm pointer-events-none">
              <MatchCard 
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
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Button 
                className="bg-sport-accent hover:bg-sport-accent/90 text-white"
              >
                Разблокировать VIP-доступ
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotPredictions;
