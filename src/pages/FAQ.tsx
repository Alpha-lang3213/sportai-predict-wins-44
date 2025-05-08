
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const faqs = [
  {
    id: "general-1",
    question: "Что такое SportAI?",
    answer: "SportAI — это платформа спортивной аналитики, которая использует искусственный интеллект для создания точных прогнозов на спортивные события. Мы анализируем тысячи факторов для каждого матча, включая историческую статистику, текущую форму команд и игроков, травмы и многое другое."
  },
  {
    id: "general-2",
    question: "Как работает AI-прогнозирование?",
    answer: "Наш искусственный интеллект анализирует более 1000 факторов для каждого матча, включая историческую статистику, текущую форму команд и игроков, травмы, погодные условия и многое другое. Затем он применяет сложные алгоритмы машинного обучения для создания точных прогнозов."
  },
  {
    id: "general-3",
    question: "Какие виды спорта поддерживает SportAI?",
    answer: "В настоящее время мы поддерживаем футбол, баскетбол, теннис, хоккей и киберспорт. Мы постоянно работаем над добавлением новых видов спорта в наш сервис."
  },
  {
    id: "payments-1",
    question: "Какие тарифные планы доступны?",
    answer: "У нас есть три основных тарифных плана: Бесплатный (с ограниченным функционалом), Стандарт и Премиум. Каждый план предоставляет разный уровень доступа к нашим аналитическим инструментам и прогнозам."
  },
  {
    id: "payments-2",
    question: "Могу ли я отменить подписку в любое время?",
    answer: "Да, вы можете отменить подписку в любое время через ваш личный кабинет. После отмены вы сможете пользоваться сервисом до конца оплаченного периода."
  },
  {
    id: "payments-3",
    question: "Какие способы оплаты вы принимаете?",
    answer: "Мы принимаем все основные кредитные карты (Visa, MasterCard), а также платежи через PayPal, Яндекс.Деньги, Webmoney и криптовалюты."
  },
  {
    id: "account-1",
    question: "Как я могу изменить свои личные данные?",
    answer: "Вы можете изменить свои личные данные в разделе «Личный кабинет» после входа в свою учетную запись."
  },
  {
    id: "account-2",
    question: "Что делать, если я забыл пароль?",
    answer: "На странице входа есть опция «Забыли пароль?». Нажмите на нее, введите email, который вы использовали при регистрации, и мы отправим вам инструкции по сбросу пароля."
  },
  {
    id: "technical-1",
    question: "Какие браузеры поддерживает ваш сайт?",
    answer: "Наш сайт оптимизирован для последних версий всех основных браузеров: Chrome, Firefox, Safari, Edge и Opera. Для наилучшего опыта рекомендуем использовать последнюю версию браузера."
  },
  {
    id: "technical-2",
    question: "Есть ли у вас мобильное приложение?",
    answer: "В настоящее время у нас нет отдельного мобильного приложения, но наш сайт полностью адаптирован для мобильных устройств и планшетов."
  }
];

const categories = ["Все вопросы", "Общие", "Платежи", "Аккаунт", "Технические вопросы"];

const FAQ = () => {
  return (
    <div className="min-h-screen bg-sport-blue-dark text-gray-300">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4 text-white">Часто задаваемые вопросы</h1>
        <p className="text-xl mb-8">
          Найдите ответы на самые распространенные вопросы о нашем сервисе
        </p>
        
        <div className="mb-8 max-w-2xl mx-auto">
          <div className="relative">
            <Input 
              type="search" 
              placeholder="Поиск по вопросам..." 
              className="pl-10 bg-sport-blue-medium/10 border-sport-blue-medium/30 text-white"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {categories.map((category) => (
            <button 
              key={category} 
              className="px-4 py-2 rounded-full text-sm bg-sport-blue-medium/30 hover:bg-sport-blue-medium/50 transition"
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq) => (
              <AccordionItem 
                key={faq.id} 
                value={faq.id}
                className="bg-sport-blue-medium/10 border border-sport-blue-medium/30 rounded-lg overflow-hidden px-4"
              >
                <AccordionTrigger className="text-left text-lg py-4 hover:text-sport-accent">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="mt-16 bg-sport-blue-medium/20 rounded-lg p-8 max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4 text-white">Не нашли ответ на свой вопрос?</h2>
          <p className="mb-6">Свяжитесь с нашей службой поддержки, и мы с радостью поможем вам</p>
          <div className="flex justify-center">
            <Link to="/contact" className="bg-sport-accent hover:bg-sport-accent-hover px-6 py-2 rounded-md text-white font-medium">
              Связаться с поддержкой
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
