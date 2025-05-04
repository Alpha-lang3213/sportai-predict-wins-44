
import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";

interface ToolCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  dialogContent: React.ReactNode;
}

const ToolCard = ({ title, description, icon, dialogContent }: ToolCardProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group border-2 border-transparent hover:border-sport-blue-light">
          <div className="mb-4 w-12 h-12 bg-sport-blue-light/10 rounded-lg flex items-center justify-center text-sport-blue-medium group-hover:bg-sport-blue-light group-hover:text-white transition-all duration-300">
            {icon}
          </div>
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </Card>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        {dialogContent}
      </DialogContent>
    </Dialog>
  );
};

const Tools = () => {
  return (
    <section id="tools" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Наши уникальные инструменты</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Используйте мощь искусственного интеллекта для анализа ставок и повышения ваших шансов на выигрыш
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ToolCard
            title="AI-анализ 1 000 факторов"
            description="Комплексный анализ всех аспектов матча с использованием продвинутого ИИ"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v6.5"></path>
                <path d="M18 5.5 13 10"></path>
                <path d="M5.5 18 10 13"></path>
                <path d="M2 12h6.5"></path>
                <path d="M18 18.5 13 14"></path>
                <path d="M5.5 5.5 10 10"></path>
                <path d="M22 12h-6.5"></path>
                <path d="M12 22v-6.5"></path>
              </svg>
            }
            dialogContent={
              <div className="p-4">
                <div className="mb-6">
                  <h3 className="font-semibold text-lg mb-2">Как это работает</h3>
                  <p className="text-gray-600 mb-4">
                    Наш AI анализирует более 1000 различных факторов для каждого матча, включая:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Историческую статистику команд и игроков</li>
                    <li>Текущую форму и последние результаты</li>
                    <li>Травмы и дисквалификации</li>
                    <li>Погодные условия и особенности стадиона</li>
                    <li>Тактические схемы и стили игры</li>
                    <li>Психологические факторы и мотивацию команд</li>
                    <li>Календарь матчей и график нагрузки игроков</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-gray-50 rounded-lg mb-6">
                  <div className="flex items-center mb-2">
                    <div className="w-4 h-4 bg-sport-blue-medium rounded-full mr-2"></div>
                    <h4 className="font-semibold">Точность прогнозов</h4>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Средняя точность наших AI-прогнозов составляет 78%, что значительно выше
                    среднего показателя среди других сервисов ставок.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-4 border border-gray-100">
                  <div className="mb-4 font-semibold">Пример AI-анализа для матча</div>
                  <div className="h-40 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                    Интерактивная визуализация анализа (доступно в Pro-тарифе)
                  </div>
                </div>
              </div>
            }
          />
          
          <ToolCard
            title="Калькулятор прибыли"
            description="Расчет потенциальной прибыли на основе вашей стратегии и банкролла"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="16" height="20" x="4" y="2" rx="2"></rect>
                <line x1="8" x2="16" y1="6" y2="6"></line>
                <line x1="16" x2="16" y1="14" y2="18"></line>
                <path d="M16 10h.01"></path>
                <path d="M12 10h.01"></path>
                <path d="M8 10h.01"></path>
                <path d="M12 14h.01"></path>
                <path d="M8 14h.01"></path>
                <path d="M12 18h.01"></path>
                <path d="M8 18h.01"></path>
              </svg>
            }
            dialogContent={
              <div className="p-4">
                <div className="mb-6">
                  <h3 className="font-semibold text-lg mb-2">Калькулятор прибыли</h3>
                  <p className="text-gray-600 mb-4">
                    Рассчитайте потенциальную прибыль на основе вашей стратегии ставок, начального банкролла и исторических данных.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Начальный банкролл
                    </label>
                    <input
                      type="number"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      placeholder="10000"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Размер ставки (%)
                    </label>
                    <input
                      type="number"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      placeholder="5"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Средний коэффициент
                    </label>
                    <input
                      type="number"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      placeholder="1.85"
                      step="0.01"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Период (месяцев)
                    </label>
                    <input
                      type="number"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      placeholder="6"
                    />
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <div className="font-semibold text-center mb-4">Прогнозируемый результат</div>
                  <div className="flex justify-between items-center">
                    <div className="text-center">
                      <p className="text-gray-600 text-sm">Прибыль</p>
                      <p className="text-sport-green text-xl font-bold">+8,540 ₽</p>
                    </div>
                    <div className="text-center">
                      <p className="text-gray-600 text-sm">ROI</p>
                      <p className="text-sport-green text-xl font-bold">+85.4%</p>
                    </div>
                    <div className="text-center">
                      <p className="text-gray-600 text-sm">Банкролл</p>
                      <p className="text-sport-blue-medium text-xl font-bold">18,540 ₽</p>
                    </div>
                  </div>
                </div>
                
                <p className="text-xs text-gray-500">
                  * Результаты калькулятора основаны на исторической точности прогнозов и не гарантируют будущую прибыль.
                </p>
              </div>
            }
          />
          
          <ToolCard
            title="Симулятор стратегий"
            description="Проверьте эффективность различных стратегий ставок без реального риска"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"></path>
              </svg>
            }
            dialogContent={
              <div className="p-4">
                <div className="mb-6">
                  <h3 className="font-semibold text-lg mb-2">Симулятор стратегий</h3>
                  <p className="text-gray-600 mb-4">
                    Протестируйте различные стратегии ставок на исторических данных, чтобы найти наиболее эффективную.
                  </p>
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Выберите стратегию
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                    <option value="flat">Флэт (одинаковые ставки)</option>
                    <option value="martingale">Мартингейл (удвоение после проигрыша)</option>
                    <option value="kelly">Критерий Келли</option>
                    <option value="value">Value betting</option>
                    <option value="custom">Пользовательская стратегия</option>
                  </select>
                </div>
                
                <div className="bg-white rounded-lg border p-4 mb-6">
                  <div className="font-medium mb-2">Описание стратегии</div>
                  <p className="text-gray-600 text-sm">
                    Флэт — стратегия, при которой каждая ставка имеет фиксированный размер, не зависящий от результатов предыдущих ставок. Это самая простая и безопасная стратегия, идеально подходящая для начинающих игроков.
                  </p>
                </div>
                
                <div className="mb-6">
                  <div className="font-semibold mb-2">Результаты симуляции (последние 100 ставок)</div>
                  <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                    График результатов симуляции (доступно в Pro-тарифе)
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <p className="text-gray-600 text-sm">Прибыль</p>
                    <p className="text-sport-green text-xl font-bold">+15.4%</p>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <p className="text-gray-600 text-sm">Макс. просадка</p>
                    <p className="text-sport-accent text-xl font-bold">-8.2%</p>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <p className="text-gray-600 text-sm">Стабильность</p>
                    <p className="text-sport-blue-medium text-xl font-bold">Высокая</p>
                  </div>
                </div>
              </div>
            }
          />
          
          <ToolCard
            title="Персональный риск-менеджер"
            description="Контроль рисков и оптимизация банкролла на основе вашего стиля игры"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V6l-8-4-8 4v6c0 6 8 10 8 10"></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
            }
            dialogContent={
              <div className="p-4">
                <div className="mb-6">
                  <h3 className="font-semibold text-lg mb-2">Персональный риск-менеджер</h3>
                  <p className="text-gray-600 mb-4">
                    Индивидуальные рекомендации по управлению рисками, основанные на вашем профиле и истории ставок.
                  </p>
                </div>
                
                <div className="bg-sport-blue-light/10 p-4 rounded-lg mb-6">
                  <div className="flex items-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sport-blue-medium mr-2">
                      <path d="M12 22s8-4 8-10V6l-8-4-8 4v6c0 6 8 10 8 10"></path>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                    <h4 className="font-semibold">Ваш профиль риска</h4>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    На основе ваших предыдущих ставок мы определили, что у вас <strong>умеренный</strong> профиль риска.
                  </p>
                  
                  <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden mb-2">
                    <div className="h-full bg-sport-blue-medium w-1/2"></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Консервативный</span>
                    <span>Умеренный</span>
                    <span>Агрессивный</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Рекомендации по управлению рисками</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="min-w-5 h-5 bg-sport-blue-light/20 rounded-full flex items-center justify-center text-sport-blue-medium text-sm mr-3 mt-0.5">1</div>
                      <p className="text-gray-600 text-sm">Ограничьте размер отдельной ставки до 5% от банкролла</p>
                    </li>
                    <li className="flex items-start">
                      <div className="min-w-5 h-5 bg-sport-blue-light/20 rounded-full flex items-center justify-center text-sport-blue-medium text-sm mr-3 mt-0.5">2</div>
                      <p className="text-gray-600 text-sm">Избегайте ставок на коэффициенты ниже 1.5 и выше 2.5</p>
                    </li>
                    <li className="flex items-start">
                      <div className="min-w-5 h-5 bg-sport-blue-light/20 rounded-full flex items-center justify-center text-sport-blue-medium text-sm mr-3 mt-0.5">3</div>
                      <p className="text-gray-600 text-sm">Установите дневной лимит в размере 15% от банкролла</p>
                    </li>
                    <li className="flex items-start">
                      <div className="min-w-5 h-5 bg-sport-blue-light/20 rounded-full flex items-center justify-center text-sport-blue-medium text-sm mr-3 mt-0.5">4</div>
                      <p className="text-gray-600 text-sm">Делайте перерыв после 3 проигрышных ставок подряд</p>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Установить лимиты</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs text-gray-500 mb-1">Дневной лимит (₽)</label>
                      <input type="number" className="w-full px-3 py-1.5 border border-gray-300 rounded-md text-sm" placeholder="1000" />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-500 mb-1">Макс. размер ставки (%)</label>
                      <input type="number" className="w-full px-3 py-1.5 border border-gray-300 rounded-md text-sm" placeholder="5" />
                    </div>
                  </div>
                </div>
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Tools;
