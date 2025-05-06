
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Calendar, Flag, ActivitySquare, Dumbbell, Trophy, CircleDot } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const MatchFilters: React.FC<{
  onFilterChange?: (filters: any) => void;
}> = ({ onFilterChange }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSport, setSelectedSport] = useState("all");
  const [selectedDate, setSelectedDate] = useState("today");
  const [selectedStatus, setSelectedStatus] = useState("upcoming");
  const [showExpress, setShowExpress] = useState(false);

  // Update filters when any value changes
  const updateFilters = (key: string, value: any) => {
    const newState: any = { 
      searchQuery, 
      selectedSport, 
      selectedDate, 
      selectedStatus, 
      showExpress 
    };
    newState[key] = value;

    if (key === 'searchQuery') setSearchQuery(value);
    if (key === 'selectedSport') setSelectedSport(value);
    if (key === 'selectedDate') setSelectedDate(value);
    if (key === 'selectedStatus') setSelectedStatus(value);
    if (key === 'showExpress') setShowExpress(value);

    if (onFilterChange) {
      onFilterChange(newState);
    }
  };

  return (
    <div className="mb-8 bg-sport-blue/80 rounded-xl p-6 neo-blur">
      <h2 className="text-xl font-semibold text-white mb-4">Фильтры</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Sport filter */}
        <div className="space-y-2">
          <label className="text-sm text-gray-400">Виды спорта</label>
          <div className="flex space-x-2">
            <Button 
              variant={selectedSport === "all" ? "default" : "outline"}
              size="sm"
              className={`px-3 ${selectedSport === "all" ? "bg-sport-blue-medium" : "border-sport-blue-medium text-gray-400"}`}
              onClick={() => updateFilters('selectedSport', 'all')}
            >
              Все
            </Button>
            <Button 
              variant={selectedSport === "football" ? "default" : "outline"}
              size="sm"
              className={`px-3 ${selectedSport === "football" ? "bg-sport-blue-medium" : "border-sport-blue-medium text-gray-400"}`}
              onClick={() => updateFilters('selectedSport', 'football')}
            >
              <Trophy className="w-4 h-4 mr-1" /> Футбол
            </Button>
            <Button 
              variant={selectedSport === "hockey" ? "default" : "outline"}
              size="sm"
              className={`px-3 ${selectedSport === "hockey" ? "bg-sport-blue-medium" : "border-sport-blue-medium text-gray-400"}`}
              onClick={() => updateFilters('selectedSport', 'hockey')}
            >
              <ActivitySquare className="w-4 h-4 mr-1" /> Хоккей
            </Button>
          </div>
          <div className="flex space-x-2">
            <Button 
              variant={selectedSport === "basketball" ? "default" : "outline"}
              size="sm"
              className={`px-3 ${selectedSport === "basketball" ? "bg-sport-blue-medium" : "border-sport-blue-medium text-gray-400"}`}
              onClick={() => updateFilters('selectedSport', 'basketball')}
            >
              <CircleDot className="w-4 h-4 mr-1" /> Баскетбол
            </Button>
            <Button 
              variant={selectedSport === "tennis" ? "default" : "outline"}
              size="sm"
              className={`px-3 ${selectedSport === "tennis" ? "bg-sport-blue-medium" : "border-sport-blue-medium text-gray-400"}`}
              onClick={() => updateFilters('selectedSport', 'tennis')}
            >
              <Dumbbell className="w-4 h-4 mr-1" /> Теннис
            </Button>
          </div>
        </div>

        {/* Date filter */}
        <div>
          <label className="text-sm text-gray-400 block mb-2">Дата</label>
          <Select 
            defaultValue={selectedDate}
            value={selectedDate}
            onValueChange={(value) => updateFilters('selectedDate', value)}
          >
            <SelectTrigger className="bg-sport-blue border-sport-blue-medium/30 text-gray-300 w-full">
              <Calendar className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Выберите период" />
            </SelectTrigger>
            <SelectContent className="bg-sport-blue border-sport-blue-medium/30 text-gray-300 w-[200px] z-50">
              <SelectItem value="today">Сегодня</SelectItem>
              <SelectItem value="tomorrow">Завтра</SelectItem>
              <SelectItem value="week">Неделя</SelectItem>
              <SelectItem value="month">Месяц</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Status filter */}
        <div>
          <label className="text-sm text-gray-400 block mb-2">Статус</label>
          <Select 
            defaultValue={selectedStatus}
            value={selectedStatus}
            onValueChange={(value) => updateFilters('selectedStatus', value)}
          >
            <SelectTrigger className="bg-sport-blue border-sport-blue-medium/30 text-gray-300 w-full">
              <Flag className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Выберите статус" />
            </SelectTrigger>
            <SelectContent className="bg-sport-blue border-sport-blue-medium/30 text-gray-300 w-[200px] z-50">
              <SelectItem value="upcoming">Предстоящие</SelectItem>
              <SelectItem value="completed">Завершенные</SelectItem>
              <SelectItem value="hot">Горячие</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Search */}
        <div>
          <label className="text-sm text-gray-400 block mb-2">Поиск команды</label>
          <div className="flex items-center space-x-2">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Название команды..."
                value={searchQuery}
                onChange={(e) => updateFilters('searchQuery', e.target.value)}
                className="pl-10 bg-sport-blue border-sport-blue-medium/30 text-gray-300 placeholder:text-gray-500"
              />
            </div>
          </div>
          <div className="mt-2 flex items-center">
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="express-checkbox" 
                checked={showExpress} 
                onCheckedChange={(checked) => updateFilters('showExpress', checked)}
              />
              <Label htmlFor="express-checkbox" className="text-sm text-gray-400">
                Показать экспрессы
              </Label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchFilters;
