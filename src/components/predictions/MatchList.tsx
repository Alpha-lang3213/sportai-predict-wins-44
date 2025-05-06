import React, { useState, useEffect } from "react";
import MatchCard from "./MatchCard";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";
import { Bookmark, Star } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

// Sample match data
const matchesData = [
  {
    id: 1,
    homeTeam: "Челси",
    awayTeam: "Арсенал",
    date: "15 мая, 22:00 МСК",
    league: "Премьер-лига",
    sport: "football",
    homeWinPercentage: 43,
    drawPercentage: 24,
    awayWinPercentage: 33,
    recommendedBet: "П1 (Челси)",
    averageOdds: 2.18,
    roi: 33.4
  },
  {
    id: 2,
    homeTeam: "Барселона",
    awayTeam: "Реал Мадрид",
    date: "16 мая, 21:30 МСК",
    league: "Ла Лига",
    sport: "football",
    homeWinPercentage: 38,
    drawPercentage: 26,
    awayWinPercentage: 36,
    recommendedBet: "X (Ничья)",
    averageOdds: 3.45,
    roi: 42.6
  },
  {
    id: 3,
    homeTeam: "Бавария",
    awayTeam: "Боруссия Д",
    date: "17 мая, 19:30 МСК",
    league: "Бундеслига",
    sport: "football",
    homeWinPercentage: 57,
    drawPercentage: 20,
    awayWinPercentage: 23,
    recommendedBet: "П1 (Бавария)",
    averageOdds: 1.85,
    roi: 28.7
  },
  {
    id: 4,
    homeTeam: "ПСЖ",
    awayTeam: "Лион",
    date: "18 мая, 22:00 МСК",
    league: "Лига 1",
    sport: "football",
    homeWinPercentage: 52,
    drawPercentage: 28,
    awayWinPercentage: 20,
    recommendedBet: "П1 (ПСЖ)",
    averageOdds: 1.95,
    roi: 31.2
  },
  {
    id: 5,
    homeTeam: "ЦСКА",
    awayTeam: "Динамо",
    date: "14 мая, 19:00 МСК",
    league: "КХЛ",
    sport: "hockey",
    homeWinPercentage: 45,
    drawPercentage: 25,
    awayWinPercentage: 30,
    recommendedBet: "П1 (ЦСКА)",
    averageOdds: 2.25,
    roi: 35.5
  },
  {
    id: 6,
    homeTeam: "Лейкерс",
    awayTeam: "Голден Стейт",
    date: "16 мая, 04:00 МСК",
    league: "НБА",
    sport: "basketball",
    homeWinPercentage: 51,
    drawPercentage: 0,
    awayWinPercentage: 49,
    recommendedBet: "П1 (Лейкерс)",
    averageOdds: 1.90,
    roi: 29.8
  },
  {
    id: 7,
    homeTeam: "Джокович",
    awayTeam: "Надаль",
    date: "15 мая, 15:30 МСК",
    league: "ATP",
    sport: "tennis",
    homeWinPercentage: 55,
    drawPercentage: 0,
    awayWinPercentage: 45,
    recommendedBet: "П1 (Джокович)",
    averageOdds: 1.75,
    roi: 26.3
  }
];

// Map sport names to their IDs
const sportMap = {
  football: 'football',
  hockey: 'hockey',
  basketball: 'basketball',
  tennis: 'tennis'
};

interface IMatchListProps {
  filters?: {
    searchQuery?: string;
    selectedSport?: string;
    selectedDate?: string;
    selectedStatus?: string;
    showExpress?: boolean;
  };
}

const MatchList: React.FC<IMatchListProps> = ({ filters = {} }) => {
  const [savedMatches, setSavedMatches] = useState<number[]>([]);
  const [notifiedMatches, setNotifiedMatches] = useState<number[]>([]);
  const { toast } = useToast();

  // Apply filters to matches data
  const filteredMatches = matchesData.filter(match => {
    // Filter by search query
    if (filters.searchQuery && !`${match.homeTeam} ${match.awayTeam}`.toLowerCase().includes(filters.searchQuery.toLowerCase())) {
      return false;
    }
    
    // Filter by sport
    if (filters.selectedSport && filters.selectedSport !== 'all' && match.sport !== filters.selectedSport) {
      return false;
    }
    
    // Other filters can be implemented as needed
    
    return true;
  });

  const toggleSaveMatch = (matchId: number) => {
    setSavedMatches(prev => {
      if (prev.includes(matchId)) {
        toast({
          title: "Матч удален из избранного",
          description: "Матч больше не отображается в разделе 'Мои ставки'",
        });
        return prev.filter(id => id !== matchId);
      } else {
        toast({
          title: "Матч добавлен в избранное",
          description: "Теперь вы можете найти его в разделе 'Мои ставки'",
        });
        return [...prev, matchId];
      }
    });
  };

  const toggleNotification = (matchId: number) => {
    setNotifiedMatches(prev => {
      if (prev.includes(matchId)) {
        toast({
          title: "Уведомление отменено",
          description: "Вы не получите напоминание о начале матча",
        });
        return prev.filter(id => id !== matchId);
      } else {
        toast({
          title: "Уведомление установлено",
          description: "Мы напомним вам за 30 минут до начала матча",
        });
        return [...prev, matchId];
      }
    });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-8 text-gradient">Ближайшие матчи</h2>
      
      <div className="space-y-6">
        {filteredMatches.length > 0 ? (
          filteredMatches.map((match) => (
            <div key={match.id} className="relative">
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
              <div className="absolute top-4 right-4 flex space-x-2">
                <Button 
                  size="sm" 
                  variant="ghost" 
                  className={`p-1 ${notifiedMatches.includes(match.id) ? 'text-sport-accent' : 'text-gray-400'}`}
                  onClick={() => toggleNotification(match.id)}
                  title="Напомнить за 30 минут до начала"
                >
                  <Star size={18} className={notifiedMatches.includes(match.id) ? 'fill-sport-accent' : ''} />
                </Button>
                <Button 
                  size="sm" 
                  variant="ghost" 
                  className={`p-1 ${savedMatches.includes(match.id) ? 'text-sport-blue-medium' : 'text-gray-400'}`}
                  onClick={() => toggleSaveMatch(match.id)}
                  title="Добавить в избранное"
                >
                  <Bookmark size={18} className={savedMatches.includes(match.id) ? 'fill-sport-blue-medium' : ''} />
                </Button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-10 text-gray-400">
            <p>Нет матчей, соответствующих выбранным фильтрам</p>
          </div>
        )}
      </div>
      
      {/* Pagination */}
      {filteredMatches.length > 0 && (
        <div className="mt-8">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  );
};

export default MatchList;
