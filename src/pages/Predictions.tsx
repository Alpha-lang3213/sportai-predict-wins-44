
import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PredictionStats from "@/components/predictions/PredictionStats";
import MatchFilters from "@/components/predictions/MatchFilters";
import MatchList from "@/components/predictions/MatchList";
import HotPredictions from "@/components/predictions/HotPredictions";
import PredictionHistory from "@/components/predictions/PredictionHistory";
import SavedMatches from "@/components/predictions/SavedMatches";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Predictions: React.FC = () => {
  const [filters, setFilters] = useState({
    searchQuery: "",
    selectedSport: "all",
    selectedDate: "today",
    selectedStatus: "upcoming",
    showExpress: false
  });

  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters);
  };

  return (
    <div className="min-h-screen flex flex-col bg-sport-blue-dark">
      <Header />
      <div className="flex-1">
        <div className="container mx-auto px-4 py-8">
          {/* Stats section */}
          <PredictionStats />
          
          {/* Content tabs */}
          <div className="mt-10">
            <Tabs defaultValue="upcoming" className="w-full">
              <TabsList className="grid grid-cols-4 mb-8 w-full sm:w-auto bg-sport-blue">
                <TabsTrigger 
                  value="upcoming" 
                  className="text-gray-300 data-[state=active]:bg-sport-blue-medium data-[state=active]:text-gray-200"
                >
                  Ближайшие матчи
                </TabsTrigger>
                <TabsTrigger 
                  value="hot" 
                  className="text-gray-300 data-[state=active]:bg-sport-blue-medium data-[state=active]:text-gray-200"
                >
                  Горячие прогнозы
                </TabsTrigger>
                <TabsTrigger 
                  value="history" 
                  className="text-gray-300 data-[state=active]:bg-sport-blue-medium data-[state=active]:text-gray-200"
                >
                  История прогнозов
                </TabsTrigger>
                <TabsTrigger 
                  value="saved" 
                  className="text-gray-300 data-[state=active]:bg-sport-blue-medium data-[state=active]:text-gray-200"
                >
                  Мои ставки
                </TabsTrigger>
              </TabsList>

              <TabsContent value="upcoming">
                <MatchFilters onFilterChange={handleFilterChange} />
                <MatchList filters={filters} />
              </TabsContent>

              <TabsContent value="hot">
                <HotPredictions />
              </TabsContent>

              <TabsContent value="history">
                <PredictionHistory />
              </TabsContent>

              <TabsContent value="saved">
                <SavedMatches />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Predictions;
