
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, Trophy, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";

interface MatchCardProps {
  homeTeam: string;
  awayTeam: string;
  date: string;
  league: string;
  homeWinPercentage: number;
  drawPercentage: number;
  awayWinPercentage: number;
  recommendedBet: string;
  averageOdds: number;
  roi: number;
}

const MatchCard: React.FC<MatchCardProps> = ({
  homeTeam,
  awayTeam,
  date,
  league,
  homeWinPercentage,
  drawPercentage,
  awayWinPercentage,
  recommendedBet,
  averageOdds,
  roi
}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [notifyBeforeMatch, setNotifyBeforeMatch] = useState(false);
  const { toast } = useToast();
  const { user } = useAuth();
  const navigate = useNavigate();

  const toggleFavorite = () => {
    // Check if user is logged in
    if (!user) {
      toast({
        title: "Требуется авторизация",
        description: "Войдите в аккаунт, чтобы добавить матч в избранное",
      });
      navigate("/login", { state: { from: location.pathname } });
      return;
    }
    
    setIsFavorite(!isFavorite);
    if (!isFavorite) {
      toast({
        title: "Добавлено в избранное",
        description: `${homeTeam} vs ${awayTeam} добавлен в избранное`,
      });
    } else {
      toast({
        title: "Удалено из избранного",
        description: `${homeTeam} vs ${awayTeam} удален из избранного`,
      });
    }
  };

  const toggleNotification = () => {
    // Check if user is logged in
    if (!user) {
      toast({
        title: "Требуется авторизация",
        description: "Войдите в аккаунт, чтобы получать уведомления",
      });
      navigate("/login", { state: { from: location.pathname } });
      return;
    }
    
    setNotifyBeforeMatch(!notifyBeforeMatch);
    if (!notifyBeforeMatch) {
      toast({
        title: "Уведомление установлено",
        description: `Вы получите уведомление за 30 минут до начала матча ${homeTeam} vs ${awayTeam}`,
      });
    } else {
      toast({
        title: "Уведомление отменено",
        description: `Вы не получите напоминание о начале матча`,
      });
    }
  };

  const handleDetailedAnalysis = () => {
    if (!user) {
      toast({
        title: "Требуется авторизация",
        description: "Войдите в аккаунт, чтобы просмотреть подробный анализ",
      });
      navigate("/login", { state: { from: location.pathname } });
      return;
    }
    
    if (user.subscription === 'none' || user.subscription === 'basic') {
      toast({
        title: "Недоступно на вашем тарифе",
        description: "Для доступа к подробному анализу необходим тариф Стандарт или Премиум",
      });
      navigate("/pricing");
      return;
    }
    
    toast({
      title: "Подробный анализ",
      description: `Загружаем детальный анализ матча ${homeTeam} vs ${awayTeam}...`,
    });
  };

  return (
    <Card className="bg-sport-blue/80 border-sport-blue-medium/30 text-white neo-blur shadow-lg hover:shadow-xl transition-shadow duration-300 mb-4">
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-sport-blue rounded-full flex items-center justify-center mr-3">
              {/* Placeholder for home team logo */}
              <span className="font-bold text-sm">{homeTeam.substring(0, 2)}</span>
            </div>
            <div>
              <span className="text-xl font-semibold">{homeTeam}</span>
              <span className="text-gray-400 mx-2">vs</span>
              <span className="text-xl font-semibold">{awayTeam}</span>
            </div>
            <div className="w-10 h-10 bg-sport-blue rounded-full flex items-center justify-center ml-3">
              {/* Placeholder for away team logo */}
              <span className="font-bold text-sm">{awayTeam.substring(0, 2)}</span>
            </div>
          </div>
          
          <div>
            <button 
              onClick={toggleFavorite} 
              className="ml-2 p-2 rounded-full hover:bg-sport-blue-medium/30"
              title="Добавить в избранное"
            >
              <Star 
                className={`h-5 w-5 ${isFavorite ? 'text-sport-yellow fill-sport-yellow' : 'text-gray-400'}`} 
              />
            </button>
          </div>
        </div>
        
        <div className="flex items-center mb-4 text-sm text-gray-400">
          <div className="flex items-center mr-6">
            <CalendarIcon className="h-4 w-4 mr-1" />
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <Trophy className="h-4 w-4 mr-1" />
            <span>{league}</span>
          </div>
        </div>
        
        <div className="mb-4">
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm text-gray-400">Вероятность:</span>
            <div className="flex space-x-4">
              <div className="text-right">
                <span className="font-semibold">{homeWinPercentage}%</span>
              </div>
              <div className="text-center">
                <span className="text-gray-400">Ничья: {drawPercentage}%</span>
              </div>
              <div className="text-right">
                <span className="font-semibold">{awayWinPercentage}%</span>
              </div>
            </div>
          </div>
          
          <div className="h-2 bg-sport-blue-dark rounded-full overflow-hidden">
            <div className="flex h-full">
              <div 
                className="bg-sport-green" 
                style={{ width: `${homeWinPercentage}%` }}
              ></div>
              <div 
                className="bg-sport-blue-medium" 
                style={{ width: `${drawPercentage}%` }}
              ></div>
              <div 
                className="bg-sport-accent" 
                style={{ width: `${awayWinPercentage}%` }}
              ></div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="border-l-4 border-sport-green pl-2">
            <div className="text-xs text-gray-400">Рекомендуемая ставка</div>
            <div className="font-bold">{recommendedBet}</div>
          </div>
          <div className="border-l-4 border-sport-blue-medium pl-2">
            <div className="text-xs text-gray-400">Средний коэффициент</div>
            <div className="font-bold">{averageOdds}</div>
          </div>
          <div className="border-l-4 border-sport-yellow pl-2">
            <div className="text-xs text-gray-400">ROI прогноза</div>
            <div className="font-bold text-sport-green">{roi}%</div>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <input 
              type="checkbox"
              id={`notify-${homeTeam}-${awayTeam}`}
              checked={notifyBeforeMatch}
              onChange={toggleNotification}
              className="mr-2"
            />
            <label htmlFor={`notify-${homeTeam}-${awayTeam}`} className="text-xs text-gray-400">
              Напомнить за 30 мин до начала
            </label>
          </div>
          <Button 
            variant="outline" 
            size="sm"
            className="border-sport-blue-medium text-sport-blue-medium hover:bg-sport-blue-medium hover:text-gray-200"
            onClick={handleDetailedAnalysis}
          >
            Подробный анализ
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default MatchCard;
