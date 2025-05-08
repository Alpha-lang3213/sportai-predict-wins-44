
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";

const tutorials = [
  {
    id: 1,
    title: "Начало работы со SportAI: полное руководство для новичков",
    description: "Подробное руководство по использованию основных функций платформы для начинающих пользователей.",
    level: "Начальный",
    duration: "15 минут",
    image: "https://picsum.photos/id/11/600/400"
  },
  {
    id: 2,
    title: "Как анализировать статистику команд с помощью SportAI",
    description: "Узнайте, как использовать наши инструменты аналитики для глубокого анализа статистики команд.",
    level: "Средний",
    duration: "20 минут",
    image: "https://picsum.photos/id/12/600/400"
  },
  {
    id: 3,
    title: "Продвинутый риск-менеджмент в ставках на спорт",
    description: "Стратегии управления рисками для опытных игроков с использованием инструментов SportAI.",
    level: "Продвинутый",
    duration: "25 минут",
    image: "https://picsum.photos/id/13/600/400"
  },
  {
    id: 4,
    title: "Использование AI-прогнозов для увеличения ROI",
    description: "Как правильно интерпретировать AI-прогнозы и применять их для повышения доходности ставок.",
    level: "Средний",
    duration: "18 минут",
    image: "https://picsum.photos/id/14/600/400"
  },
  {
    id: 5,
    title: "Калькулятор прибыли: подробное руководство",
    description: "Как использовать калькулятор прибыли для оптимизации ваших ставок и максимизации выигрышей.",
    level: "Начальный",
    duration: "12 минут",
    image: "https://picsum.photos/id/15/600/400"
  },
  {
    id: 6,
    title: "Мастер-класс: Симулятор стратегий в действии",
    description: "Пошаговый туториал по использованию симулятора стратегий для тестирования ваших идей.",
    level: "Продвинутый",
    duration: "30 минут",
    image: "https://picsum.photos/id/16/600/400"
  }
];

const BlogTutorials = () => {
  return (
    <div className="min-h-screen bg-sport-blue-dark text-gray-300">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4 text-white">Обучающие материалы</h1>
        <p className="text-xl mb-12">
          Освойте все возможности SportAI с помощью наших подробных руководств и обучающих видео
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutorials.map((tutorial) => (
            <Link to={`/blog/tutorials/${tutorial.id}`} key={tutorial.id} className="group">
              <div className="bg-sport-blue-medium/10 rounded-lg overflow-hidden border border-sport-blue-medium/30 transition hover:border-sport-accent h-full">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={tutorial.image} 
                    alt={tutorial.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="px-3 py-1 rounded-full bg-sport-blue-medium/40 text-sport-accent">{tutorial.level}</span>
                    <span className="text-gray-400">{tutorial.duration}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-sport-accent transition">{tutorial.title}</h3>
                  <p className="line-clamp-3">{tutorial.description}</p>
                </div>
                <div className="px-6 pb-6">
                  <button className="w-full bg-sport-blue-medium/30 hover:bg-sport-blue-medium/50 px-4 py-2 rounded text-white transition">
                    Начать обучение
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-6 text-white">Видеокурсы</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-sport-blue-medium/10 rounded-lg overflow-hidden border border-sport-blue-medium/30 p-6">
              <h3 className="text-xl font-semibold mb-3 text-white">Мастерство спортивной аналитики</h3>
              <p className="mb-4">Полный курс из 10 уроков по спортивной аналитике с использованием инструментов SportAI.</p>
              <div className="flex items-center justify-between">
                <span className="text-sport-accent">10 видеоуроков</span>
                <button className="bg-sport-accent hover:bg-sport-accent-hover px-4 py-2 rounded text-white">
                  Смотреть курс
                </button>
              </div>
            </div>
            <div className="bg-sport-blue-medium/10 rounded-lg overflow-hidden border border-sport-blue-medium/30 p-6">
              <h3 className="text-xl font-semibold mb-3 text-white">От новичка до профи: ставки на спорт</h3>
              <p className="mb-4">Базовый курс для начинающих игроков, который поможет избежать типичных ошибок.</p>
              <div className="flex items-center justify-between">
                <span className="text-sport-accent">8 видеоуроков</span>
                <button className="bg-sport-accent hover:bg-sport-accent-hover px-4 py-2 rounded text-white">
                  Смотреть курс
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogTutorials;
