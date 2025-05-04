
import React from "react";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-sport-blue-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="font-bold text-xl flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-sport-blue-medium rounded-md flex items-center justify-center">
                <span className="text-white font-bold">S</span>
              </div>
              <span>SportAI</span>
            </div>
            <p className="text-gray-300 mb-4">
              Ставки на спорт с точностью искусственного интеллекта
            </p>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">Сервис</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">О нас</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">Наши инструменты</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">Обучение</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">Блог</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">Поддержка</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">Часто задаваемые вопросы</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">Связаться с нами</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">Политика конфиденциальности</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">Условия использования</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">Подписаться на новости</h3>
            <p className="text-gray-300 mb-4">Получайте эксклюзивные прогнозы и советы по ставкам</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Ваш email"
                className="px-4 py-2 w-full rounded-l-md focus:outline-none text-gray-900"
              />
              <button className="bg-sport-accent hover:bg-sport-accent-hover px-4 py-2 rounded-r-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m5 12 14 0"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-700 text-gray-400 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© {currentYear} SportAI. Все права защищены.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="#" className="hover:text-white transition-colors">Политика конфиденциальности</Link>
              <Link to="#" className="hover:text-white transition-colors">Условия использования</Link>
            </div>
          </div>
        </div>
        
        <div className="mt-12">
          <h3 className="font-semibold text-lg mb-4">Часто задаваемые вопросы</h3>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">
                Как работает AI-прогнозирование?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Наш искусственный интеллект анализирует более 1000 факторов для каждого матча, включая историческую статистику, текущую форму команд и игроков, травмы, погодные условия и многое другое. Затем он применяет сложные алгоритмы машинного обучения для создания точных прогнозов.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">
                Могу ли я отменить подписку в любое время?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Да, вы можете отменить подписку в любое время через ваш личный кабинет. После отмены вы сможете пользоваться сервисом до конца оплаченного периода.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">
                Какие виды спорта поддерживает SportAI?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                В настоящее время мы поддерживаем футбол, баскетбол, теннис, хоккей и киберспорт. Мы постоянно работаем над добавлением новых видов спорта в наш сервис.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">
                Что делает бесплатный пробный период?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Бесплатный 7-дневный пробный период дает вам полный доступ ко всем функциям SportAI, включая AI-прогнозы, расширенную статистику и инструменты анализа. Никаких обязательств — вы можете отменить в любое время.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
