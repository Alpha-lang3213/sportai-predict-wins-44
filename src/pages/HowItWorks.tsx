
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-sport-blue-dark text-gray-300">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-white">Как это работает</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-sport-accent">Алгоритмы искусственного интеллекта</h2>
            <p className="mb-4">
              Наш ИИ анализирует тысячи факторов, чтобы создать наиболее точные прогнозы для спортивных событий. 
              Система постоянно учится на новых данных и улучшает свои алгоритмы прогнозирования.
            </p>
            <p>
              Мы используем комбинацию нейронных сетей, машинного обучения и статистического анализа для обработки
              огромных массивов данных и выявления скрытых закономерностей.
            </p>
          </div>
          <div className="rounded-lg bg-sport-blue-medium/20 p-8">
            <h3 className="text-xl font-medium mb-4">Процесс анализа:</h3>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Сбор и агрегация данных из множества источников</li>
              <li>Очистка и нормализация данных для анализа</li>
              <li>Применение алгоритмов машинного обучения</li>
              <li>Генерация вероятностей и прогнозов</li>
              <li>Постоянное обучение на основе результатов</li>
            </ol>
          </div>
        </div>
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-6 text-white">Наши уникальные инструменты</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-sport-blue-medium/10 rounded-lg p-6">
              <h3 className="text-xl font-medium mb-3 text-sport-accent">Анализ команд</h3>
              <p>Глубокий анализ статистики команд, формы игроков, и исторических данных о встречах.</p>
            </div>
            <div className="bg-sport-blue-medium/10 rounded-lg p-6">
              <h3 className="text-xl font-medium mb-3 text-sport-accent">Калькулятор ставок</h3>
              <p>Расчет оптимальных ставок на основе наших прогнозов и ваших предпочтений по риску.</p>
            </div>
            <div className="bg-sport-blue-medium/10 rounded-lg p-6">
              <h3 className="text-xl font-medium mb-3 text-sport-accent">Тренд-трекер</h3>
              <p>Отслеживание изменений в коэффициентах букмекеров и выявление ценных возможностей для ставок.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorks;
