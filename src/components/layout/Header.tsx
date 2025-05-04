
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed w-full top-0 z-50 bg-sport-blue-dark/80 backdrop-blur-md border-b border-sport-blue-medium/30">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 md:px-6">
        <div className="flex items-center">
          <Link to="/" className="font-bold text-xl text-white flex items-center gap-2">
            <div className="w-8 h-8 bg-sport-blue-medium rounded-md flex items-center justify-center animate-glow">
              <span className="text-white font-bold">S</span>
            </div>
            <span>SportAI</span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <Button variant="ghost" size="icon" className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="#matches" className="text-gray-300 hover:text-sport-blue-medium transition-colors">
            Матчи
          </Link>
          <Link to="#tools" className="text-gray-300 hover:text-sport-blue-medium transition-colors">
            Инструменты
          </Link>
          <Link to="#stats" className="text-gray-300 hover:text-sport-blue-medium transition-colors">
            Статистика
          </Link>
          <Link to="#pricing" className="text-gray-300 hover:text-sport-blue-medium transition-colors">
            Тарифы
          </Link>
          <Button className="bg-sport-accent hover:bg-sport-accent-hover text-white">
            Начать бесплатно
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
