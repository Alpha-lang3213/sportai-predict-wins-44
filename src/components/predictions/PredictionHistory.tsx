
import React, { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Calendar, Filter } from "lucide-react";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

// Sample historical data
const historyData = [
  {
    id: 1,
    homeTeam: "Манчестер Юнайтед",
    awayTeam: "Тоттенхэм",
    date: "10 мая, 19:30 МСК",
    league: "Премьер-лига",
    prediction: "П1",
    result: "3:1",
    status: "success",
    odds: 2.15,
    profit: "+115"
  },
  {
    id: 2,
    homeTeam: "Ювентус",
    awayTeam: "Наполи",
    date: "9 мая, 21:45 МСК",
    league: "Серия А",
    prediction: "X",
    result: "1:1",
    status: "success",
    odds: 3.40,
    profit: "+240"
  },
  {
    id: 3,
    homeTeam: "Аякс",
    awayTeam: "ПСВ",
    date: "8 мая, 20:00 МСК",
    league: "Эредивизие",
    prediction: "П2",
    result: "0:2",
    status: "success",
    odds: 2.50,
    profit: "+150"
  },
  {
    id: 4,
    homeTeam: "Атлетико Мадрид",
    awayTeam: "Севилья",
    date: "7 мая, 19:00 МСК",
    league: "Ла Лига",
    prediction: "П1",
    result: "0:1",
    status: "fail",
    odds: 1.85,
    profit: "-100"
  }
];

const PredictionHistory: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [dateFilter, setDateFilter] = useState("all");
  const [resultFilter, setResultFilter] = useState("all");
  const [isDatePopoverOpen, setIsDatePopoverOpen] = useState(false);
  const [isResultPopoverOpen, setIsResultPopoverOpen] = useState(false);

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold text-center mb-8 text-gradient">История прогнозов</h2>
      
      {/* Filters */}
      <Card className="bg-sport-blue/80 border-sport-blue-medium/30 text-white neo-blur mb-6">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-sm text-gray-400 block mb-2">Поиск</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Поиск по командам..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-sport-blue border-sport-blue-medium/30 text-gray-300 placeholder:text-gray-500"
                />
              </div>
            </div>
            
            <div>
              <label className="text-sm text-gray-400 block mb-2">Период</label>
              <Popover open={isDatePopoverOpen} onOpenChange={setIsDatePopoverOpen}>
                <PopoverTrigger asChild>
                  <button className="flex items-center justify-between w-full p-2 rounded bg-sport-blue border border-sport-blue-medium/30 text-gray-300">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>
                        {dateFilter === 'all' ? 'Все время' : 
                         dateFilter === 'week' ? 'Последняя неделя' : 
                         dateFilter === 'month' ? 'Последний месяц' : 
                         'Последние 3 месяца'}
                      </span>
                    </div>
                    <span>▼</span>
                  </button>
                </PopoverTrigger>
                <PopoverContent className="bg-sport-blue border-sport-blue-medium/30 text-gray-300 p-0">
                  <div className="flex flex-col">
                    <button
                      className="p-2 hover:bg-sport-blue-medium/20 text-left"
                      onClick={() => {
                        setDateFilter('all');
                        setIsDatePopoverOpen(false);
                      }}
                    >
                      Все время
                    </button>
                    <button
                      className="p-2 hover:bg-sport-blue-medium/20 text-left"
                      onClick={() => {
                        setDateFilter('week');
                        setIsDatePopoverOpen(false);
                      }}
                    >
                      Последняя неделя
                    </button>
                    <button
                      className="p-2 hover:bg-sport-blue-medium/20 text-left"
                      onClick={() => {
                        setDateFilter('month');
                        setIsDatePopoverOpen(false);
                      }}
                    >
                      Последний месяц
                    </button>
                    <button
                      className="p-2 hover:bg-sport-blue-medium/20 text-left"
                      onClick={() => {
                        setDateFilter('3months');
                        setIsDatePopoverOpen(false);
                      }}
                    >
                      Последние 3 месяца
                    </button>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
            
            <div>
              <label className="text-sm text-gray-400 block mb-2">Результат</label>
              <Popover open={isResultPopoverOpen} onOpenChange={setIsResultPopoverOpen}>
                <PopoverTrigger asChild>
                  <button className="flex items-center justify-between w-full p-2 rounded bg-sport-blue border border-sport-blue-medium/30 text-gray-300">
                    <div className="flex items-center">
                      <Filter className="w-4 h-4 mr-2" />
                      <span>
                        {resultFilter === 'all' ? 'Все результаты' : 
                         resultFilter === 'success' ? 'Успешные' : 
                         'Неудачные'}
                      </span>
                    </div>
                    <span>▼</span>
                  </button>
                </PopoverTrigger>
                <PopoverContent className="bg-sport-blue border-sport-blue-medium/30 text-gray-300 p-0">
                  <div className="flex flex-col">
                    <button
                      className="p-2 hover:bg-sport-blue-medium/20 text-left"
                      onClick={() => {
                        setResultFilter('all');
                        setIsResultPopoverOpen(false);
                      }}
                    >
                      Все результаты
                    </button>
                    <button
                      className="p-2 hover:bg-sport-blue-medium/20 text-left"
                      onClick={() => {
                        setResultFilter('success');
                        setIsResultPopoverOpen(false);
                      }}
                    >
                      Успешные
                    </button>
                    <button
                      className="p-2 hover:bg-sport-blue-medium/20 text-left"
                      onClick={() => {
                        setResultFilter('fail');
                        setIsResultPopoverOpen(false);
                      }}
                    >
                      Неудачные
                    </button>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Stats summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <Card className="bg-sport-blue/80 border-sport-blue-medium/30 text-white neo-blur">
          <CardContent className="p-4 text-center">
            <div className="text-sm text-gray-400 mb-1">Всего прогнозов</div>
            <div className="text-2xl font-bold">148</div>
          </CardContent>
        </Card>
        <Card className="bg-sport-blue/80 border-sport-blue-medium/30 text-white neo-blur">
          <CardContent className="p-4 text-center">
            <div className="text-sm text-gray-400 mb-1">Успешные</div>
            <div className="text-2xl font-bold text-sport-green">112</div>
          </CardContent>
        </Card>
        <Card className="bg-sport-blue/80 border-sport-blue-medium/30 text-white neo-blur">
          <CardContent className="p-4 text-center">
            <div className="text-sm text-gray-400 mb-1">Успешность</div>
            <div className="text-2xl font-bold text-sport-green">75.6%</div>
          </CardContent>
        </Card>
        <Card className="bg-sport-blue/80 border-sport-blue-medium/30 text-white neo-blur">
          <CardContent className="p-4 text-center">
            <div className="text-sm text-gray-400 mb-1">Общая прибыль</div>
            <div className="text-2xl font-bold text-sport-green">+2845₽</div>
          </CardContent>
        </Card>
      </div>
      
      {/* History table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-400 border-b border-sport-blue-medium/20">
              <th className="pb-2 pl-4">Матч</th>
              <th className="pb-2">Дата</th>
              <th className="pb-2">Прогноз</th>
              <th className="pb-2">Результат</th>
              <th className="pb-2">Коэф.</th>
              <th className="pb-2 text-right pr-4">Прибыль</th>
            </tr>
          </thead>
          <tbody>
            {historyData.map((item) => (
              <tr key={item.id} className="border-b border-sport-blue-medium/10 hover:bg-sport-blue/50">
                <td className="py-4 pl-4">
                  <div>
                    <div className="font-medium text-gray-300">{item.homeTeam} - {item.awayTeam}</div>
                    <div className="text-xs text-gray-500">{item.league}</div>
                  </div>
                </td>
                <td className="py-4 text-gray-400">{item.date}</td>
                <td className="py-4">
                  <Badge className="bg-sport-blue-medium">{item.prediction}</Badge>
                </td>
                <td className="py-4">
                  <div className="flex items-center">
                    <Badge className={`mr-2 ${item.status === 'success' ? 'bg-sport-green/20 text-sport-green' : 'bg-sport-accent/20 text-sport-accent'}`}>
                      {item.status === 'success' ? 'Успех' : 'Неудача'}
                    </Badge>
                    <span className="text-gray-300">{item.result}</span>
                  </div>
                </td>
                <td className="py-4 text-gray-400">{item.odds}</td>
                <td className={`py-4 text-right pr-4 font-medium ${item.status === 'success' ? 'text-sport-green' : 'text-sport-accent'}`}>
                  {item.profit}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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

export default PredictionHistory;
