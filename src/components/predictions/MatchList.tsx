
import React from "react";
import MatchCard from "./MatchCard";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

// Sample match data
const matchesData = [
  {
    id: 1,
    homeTeam: "Челси",
    awayTeam: "Арсенал",
    date: "15 мая, 22:00 МСК",
    league: "Премьер-лига",
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
    homeWinPercentage: 52,
    drawPercentage: 28,
    awayWinPercentage: 20,
    recommendedBet: "П1 (ПСЖ)",
    averageOdds: 1.95,
    roi: 31.2
  }
];

const MatchList: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-8 text-gradient">Ближайшие матчи</h2>
      
      <div className="space-y-6">
        {matchesData.map((match) => (
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
        ))}
      </div>
      
      {/* Pagination */}
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
    </div>
  );
};

export default MatchList;
