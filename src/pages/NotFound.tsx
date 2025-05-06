
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-sport-blue-dark text-gray-300">
      <Header />
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center space-y-6">
          <h1 className="text-6xl font-bold text-sport-accent">404</h1>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-gradient">Страница не найдена</h2>
            <p className="text-gray-400">
              Запрашиваемая страница не существует или была перемещена
            </p>
          </div>
          <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => navigate(-1)}
              variant="outline"
              className="border-sport-blue-medium text-sport-blue-medium hover:bg-sport-blue-medium hover:text-white"
            >
              Назад
            </Button>
            <Button 
              onClick={() => navigate("/")}
              className="bg-sport-blue-medium hover:bg-sport-blue-light"
            >
              На главную
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
