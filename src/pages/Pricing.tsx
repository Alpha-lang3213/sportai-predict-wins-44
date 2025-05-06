import React, { useState } from "react";
import { Check, X, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FeaturesTable from "@/components/pricing/FeaturesTable";
const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const handleSelectPlan = (plan: string) => {
    setSelectedPlan(plan);
    // Scroll to payment section or show modal
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  };
  return <div className="min-h-screen bg-sport-blue-dark text-gray-300">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto text-center max-w-4xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
              Выберите тариф и начните зарабатывать с <span className="text-gradient">SportAI Predictor</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Три тарифа на любой уровень: от новичка до профессионала. 
              Все прогнозы одинаково точные, разница в глубине аналитики.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-8 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Basic Plan */}
              <div className={`rounded-xl neo-blur p-6 border-2 ${selectedPlan === 'basic' ? 'border-sport-blue-medium' : 'border-gray-700'} transition-all duration-300 flex flex-col h-full`}>
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2 text-white">Базовый</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-white">Бесплатно</span>
                  </div>
                  <p className="text-gray-400 text-sm">Начните использовать SportAI без оплаты</p>
                </div>

                <div className="flex-grow space-y-4 mb-8">
                  <div className="flex items-start">
                    <Check size={18} className="text-sport-green mr-2 mt-1 flex-shrink-0" />
                    <span>Список матчей без вероятностей</span>
                  </div>
                  <div className="flex items-start">
                    <X size={18} className="text-gray-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-500">Прогнозы с вероятностями</span>
                  </div>
                  <div className="flex items-start">
                    <X size={18} className="text-gray-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-500">Базовая аналитика</span>
                  </div>
                  <div className="flex items-start">
                    <Check size={18} className="text-sport-green mr-2 mt-1 flex-shrink-0" />
                    <span>Подписка на Telegram-канал</span>
                  </div>
                </div>

                <Button className={`w-full ${selectedPlan === 'basic' ? 'bg-sport-blue-medium hover:bg-sport-blue-light' : 'border border-gray-600 hover:border-sport-blue-medium bg-transparent hover:bg-sport-blue/10'}`} onClick={() => handleSelectPlan('basic')}>
                  Выбрать
                </Button>
              </div>

              {/* Standard Plan */}
              <div className={`rounded-xl neo-blur p-6 border-2 relative ${selectedPlan === 'standard' ? 'border-sport-blue-medium' : 'border-gray-700'} transition-all duration-300 flex flex-col h-full`}>
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-sport-blue-medium px-4 py-1 rounded-full text-sm font-medium">
                  Популярный выбор
                </div>
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2 text-white">Стандартный</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-white">1 300 ₽</span>
                    <span className="text-gray-400 ml-1">/3 дня</span>
                  </div>
                  <p className="text-gray-400 text-sm">Без автопродления</p>
                </div>

                <div className="flex-grow space-y-4 mb-8">
                  <div className="flex items-start">
                    <Check size={18} className="text-sport-green mr-2 mt-1 flex-shrink-0" />
                    <span>Список матчей без вероятностей</span>
                  </div>
                  <div className="flex items-start">
                    <Check size={18} className="text-sport-green mr-2 mt-1 flex-shrink-0" />
                    <span>Прогнозы с вероятностями</span>
                  </div>
                  <div className="flex items-start">
                    <Check size={18} className="text-sport-green mr-2 mt-1 flex-shrink-0" />
                    <span>Базовая аналитика</span>
                  </div>
                  <div className="flex items-start">
                    <Check size={18} className="text-sport-green mr-2 mt-1 flex-shrink-0" />
                    <span>Подписка на Telegram-канал</span>
                  </div>
                  <div className="flex items-start">
                    <Check size={18} className="text-sport-green mr-2 mt-1 flex-shrink-0" />
                    <span>Email-уведомления</span>
                  </div>
                </div>

                <Button className={`w-full ${selectedPlan === 'standard' ? 'bg-sport-blue-medium hover:bg-sport-blue-light' : 'bg-sport-blue-medium/80 hover:bg-sport-blue-medium'}`} onClick={() => handleSelectPlan('standard')}>
                  Выбрать
                </Button>
              </div>

              {/* Premium Plan */}
              <div className={`rounded-xl neo-blur p-6 border-2 ${selectedPlan === 'premium' ? 'border-sport-accent' : 'border-gray-700'} transition-all duration-300 flex flex-col h-full`}>
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2 text-white">Премиум</h3>
                  <div className="mb-4">
                    <div>
                      <span className="text-3xl font-bold text-white">990 ₽</span>
                      <span className="text-gray-400 ml-1">/3 дня</span>
                    </div>
                    <div className="text-sm mt-1 text-gray-400">
                      + 9 900 ₽/месяц
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm">Полный доступ к премиум-функциям</p>
                </div>

                <div className="flex-grow space-y-4 mb-8">
                  <div className="flex items-start">
                    <Check size={18} className="text-sport-green mr-2 mt-1 flex-shrink-0" />
                    <span>Список матчей без вероятностей</span>
                  </div>
                  <div className="flex items-start">
                    <Check size={18} className="text-sport-green mr-2 mt-1 flex-shrink-0" />
                    <span>Прогнозы с вероятностями</span>
                  </div>
                  <div className="flex items-start">
                    <Check size={18} className="text-sport-green mr-2 mt-1 flex-shrink-0" />
                    <span>Базовая аналитика</span>
                  </div>
                  <div className="flex items-start">
                    <Check size={18} className="text-sport-green mr-2 mt-1 flex-shrink-0" />
                    <span>Углубленная аналитика</span>
                  </div>
                  <div className="flex items-start">
                    <Check size={18} className="text-sport-green mr-2 mt-1 flex-shrink-0" />
                    <span>Персональные рекомендации</span>
                  </div>
                  <div className="flex items-start">
                    <Check size={18} className="text-sport-green mr-2 mt-1 flex-shrink-0" />
                    <span>Подписка на Telegram-канал</span>
                  </div>
                  <div className="flex items-start">
                    <Check size={18} className="text-sport-green mr-2 mt-1 flex-shrink-0" />
                    <span>Email-уведомления</span>
                  </div>
                  <div className="flex items-start">
                    <Check size={18} className="text-sport-green mr-2 mt-1 flex-shrink-0" />
                    <span>Персональный менеджер</span>
                  </div>
                </div>

                <Button className={`w-full ${selectedPlan === 'premium' ? 'bg-sport-accent hover:bg-sport-accent-hover' : 'border border-sport-accent hover:bg-sport-accent/10 bg-transparent'}`} onClick={() => handleSelectPlan('premium')}>
                  Выбрать
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Comparison Chart - Updated according to reference */}
        <section className="py-8 px-4">
          <div className="container mx-auto">
            <div className="bg-[#1a1c24]/80 rounded-xl p-8 max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-10 text-white text-center">Сравнение стоимости тарифов</h2>
              
              <div className="grid grid-cols-3 gap-6">
                {/* Базовый */}
                <div className="text-center">
                  <h3 className="text-lg font-medium mb-4 text-white">Базовый</h3>
                  <div className="flex flex-col items-center">
                    <div className="mb-3 w-40 h-5 bg-[#1a1c24] rounded-lg"></div>
                    <div className="text-xl font-bold text-white mb-3">0 ₽</div>
                    <div className="h-12 w-full bg-[#1a1] rounded-b-lg mt-[142px] rounded-sm"></div>
                  </div>
                  <p className="mt-4 text-sm text-gray-400">Бесплатный план</p>
                </div>
                
                {/* Стандартный */}
                <div className="text-center">
                  <h3 className="text-lg font-medium mb-4 text-white">Стандартный</h3>
                  <div className="flex flex-col items-center">
                    <div className="mb-3 w-40 h-48 bg-[#6646ed]/60 rounded-lg flex items-center justify-center">
                      <div className="text-2xl font-bold text-white">1 300 ₽</div>
                    </div>
                    <div className="h-12 w-full bg-[#6646ed] rounded-b-lg mt-[10px]"></div>
                  </div>
                  <p className="mt-4 text-sm text-gray-400">За 3 дня без автопродления</p>
                </div>
                
                {/* Премиум */}
                <div className="text-center">
                  <h3 className="text-lg font-medium mb-4 text-white">Премиум</h3>
                  <div className="flex flex-col items-center">
                    <div className="mb-3 w-40 h-24 bg-[#9d5424]/60 rounded-t-lg flex items-center justify-center">
                      <div className="text-xl font-bold text-white">990 ₽</div>
                    </div>
                    <div className="mb-0 w-40 h-24 bg-[#ff6d00]/60 flex items-center justify-center">
                      <div className="text-xl font-bold text-white">9 900 ₽</div>
                    </div>
                    <div className="h-12 w-full bg-[#ff6d00] rounded-b-lg mt-[10px]"></div>
                  </div>
                  <p className="mt-4 text-sm text-gray-400">3 дня + ежемесячная подписка</p>
                </div>
              </div>
              
              <p className="text-center text-sm text-gray-400 mt-8">
                *Премиум тариф включает расширенную аналитику и персонального менеджера
              </p>
            </div>
          </div>
        </section>

        {/* Feature Comparison Table */}
        <section className="py-8 px-4">
          <div className="container mx-auto">
            <div className="bg-sport-blue/70 rounded-xl p-6 neo-blur max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 text-white text-center">Детальное сравнение возможностей</h2>
              <FeaturesTable />
            </div>
          </div>
        </section>

        {/* How it Works Section */}
        <section className="py-8 px-4">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 text-white text-center">Как это работает</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-sport-blue-medium/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-sport-blue-medium">1</span>
                  </div>
                  <h3 className="font-medium mb-2 text-gray-200">Выберите тариф</h3>
                  <p className="text-sm text-gray-400">Подберите план, соответствующий вашим потребностям</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-sport-blue-medium/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-sport-blue-medium">2</span>
                  </div>
                  <h3 className="font-medium mb-2 text-gray-200">Оплатите онлайн</h3>
                  <p className="text-sm text-gray-400">Быстрая и безопасная оплата картой или электронными деньгами</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-sport-blue-medium/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-sport-blue-medium">3</span>
                  </div>
                  <h3 className="font-medium mb-2 text-gray-200">Получите доступ</h3>
                  <p className="text-sm text-gray-400">Мгновенно получите доступ к прогнозам и аналитике</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-sport-blue-medium/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-sport-blue-medium">4</span>
                  </div>
                  <h3 className="font-medium mb-2 text-gray-200">Отслеживайте результаты</h3>
                  <p className="text-sm text-gray-400">Начните использовать прогнозы и увеличивайте свой выигрыш</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-8 px-4">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 text-white text-center">Часто задаваемые вопросы</h2>
              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem value="item-1" className="border-b border-gray-700 pb-4">
                  <AccordionTrigger className="text-lg font-medium text-gray-200 py-4">
                    Почему прогнозы одинаково точны на всех тарифах?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 pt-2">
                    Все прогнозы генерируются одним и тем же AI-алгоритмом, поэтому их точность одинакова на всех тарифах. 
                    Разница заключается в объеме предоставляемой информации и глубине аналитики. В премиум-тарифе вы получаете 
                    больше данных для анализа, персональные рекомендации и поддержку менеджера, но сами прогнозы основаны на 
                    том же алгоритме искусственного интеллекта.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border-b border-gray-700 pb-4">
                  <AccordionTrigger className="text-lg font-medium text-gray-200 py-4">
                    Можно ли отменить автопродление?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 pt-2">
                    Да, автопродление можно отключить в любое время в вашем личном кабинете в разделе "Подписки". 
                    После отключения автопродления вы сможете пользоваться сервисом до конца оплаченного периода, 
                    после чего подписка будет автоматически остановлена. Стандартный тариф изначально не имеет 
                    автопродления и действует только указанное количество дней.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border-b border-gray-700 pb-4">
                  <AccordionTrigger className="text-lg font-medium text-gray-200 py-4">
                    Как получить бесплатный доступ?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 pt-2">
                    Вы можете получить бесплатный доступ к базовому тарифу, просто зарегистрировавшись на платформе. 
                    Базовый тариф включает список предстоящих матчей без вероятностей и доступ к Telegram-каналу, 
                    где публикуются общие прогнозы и советы. Для получения доступа к более продвинутым функциям 
                    необходимо перейти на платные тарифы.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border-b border-gray-700 pb-4">
                  <AccordionTrigger className="text-lg font-medium text-gray-200 py-4">
                    Как изменить тариф?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 pt-2">
                    Чтобы изменить текущий тариф, перейдите в раздел "Мой аккаунт" &gt; "Подписки" и нажмите на кнопку 
                    "Изменить тариф". Если вы переходите на более дорогой план, доплата будет рассчитана пропорционально 
                    оставшимся дням текущей подписки. При переходе на более дешёвый план, изменения вступят в силу 
                    после окончания текущего платёжного периода.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border-b border-gray-700 pb-4">
                  <AccordionTrigger className="text-lg font-medium text-gray-200 py-4">
                    Что входит в персональные рекомендации?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 pt-2">
                    Персональные рекомендации в Премиум-тарифе включают индивидуально подобранные ставки, основанные 
                    на вашем профиле риска и предпочтениях по видам спорта. Наш AI изучает ваши предыдущие ставки, 
                    анализирует успешные стратегии и предлагает оптимальны�� варианты с наибольшей вероятностью выигрыша 
                    в текущей ситуации. Кроме того, персональный менеджер помогает адаптировать эти рекомендации под 
                    ваши конкретные цели.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-8 px-4">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-10 text-white text-center">Отзывы наших пользователей</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-sport-blue/50 rounded-xl p-6 neo-blur">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-sport-blue-medium rounded-full mr-4"></div>
                    <div>
                      <h3 className="font-medium text-gray-200">Алексей С.</h3>
                      <p className="text-sm text-gray-400">Пользуется Стандартным тарифом</p>
                    </div>
                  </div>
                  <p className="text-gray-300">
                    "Пользуюсь сервисом уже 3 месяца. Прогнозы действительно точные, выигрыш увеличился примерно на 40%. 
                    Стандартного тарифа достаточно для моих нужд — рекомендую!"
                  </p>
                  <div className="flex mt-4">
                    {[1, 2, 3, 4, 5].map(rating => <svg key={rating} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#8B5CF6" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>)}
                  </div>
                </div>
                
                <div className="bg-sport-blue/50 rounded-xl p-6 neo-blur">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-sport-accent rounded-full mr-4"></div>
                    <div>
                      <h3 className="font-medium text-gray-200">Наталья В.</h3>
                      <p className="text-sm text-gray-400">Пользуется Премиум тарифом</p>
                    </div>
                  </div>
                  <p className="text-gray-300">
                    "Персональный менеджер — это game-changer! Он провёл глубокий анализ моих ставок и предложил 
                    стратегию, которая увеличила мой ROI вдвое. Премиум тариф окупил себя за первые две недели."
                  </p>
                  <div className="flex mt-4">
                    {[1, 2, 3, 4, 5].map(rating => <svg key={rating} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#8B5CF6" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>)}
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-xl font-medium mb-6 text-white text-center">Истории успеха</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-sport-blue/30 rounded-lg p-4">
                    <p className="text-gray-300 text-sm">
                      "После месяца использования Стандартного тарифа я увеличил свой банкролл на 63%. AI-прогнозы SportAI точнее любых других сервисов."
                    </p>
                    <p className="text-sport-blue-medium font-medium text-sm mt-2">— Игорь М.</p>
                  </div>
                  <div className="bg-sport-blue/30 rounded-lg p-4">
                    <p className="text-gray-300 text-sm">
                      "Благодаря углубленной аналитике Премиум-тарифа я нашел несколько недооцененных букмекерами матчей и сделал серию успешных ставок."
                    </p>
                    <p className="text-sport-blue-medium font-medium text-sm mt-2">— Дмитрий К.</p>
                  </div>
                  <div className="bg-sport-blue/30 rounded-lg p-4">
                    <p className="text-gray-300 text-sm">
                      "Начал с Базового тарифа, затем перешел на Стандартный. За три месяца ROI вырос на 25%, теперь стабильно зарабатываю на ставках."
                    </p>
                    <p className="text-sport-blue-medium font-medium text-sm mt-2">— Анна П.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 px-4 bg-gradient-to-b from-sport-blue/50 to-sport-blue-dark">
          <div className="container mx-auto text-center max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              Готовы начать зарабатывать с помощью <span className="text-gradient">SportAI?</span>
            </h2>
            <p className="text-gray-300 mb-8">
              Выберите подходящий тариф и начните использовать силу искусственного интеллекта для прибыльных ставок
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-sport-blue-medium hover:bg-sport-blue-light text-white text-lg px-8" onClick={() => setSelectedPlan('standard')}>
                Выбрать Стандартный тариф
              </Button>
              <Button className="bg-transparent border border-sport-blue-medium text-sport-blue-medium hover:bg-sport-blue-medium/10" onClick={() => setSelectedPlan('premium')}>
                Узнать о Премиум
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Sticky CTA bar if a plan is selected */}
      {selectedPlan && <div className="fixed bottom-0 left-0 right-0 bg-sport-blue-dark/90 backdrop-blur-lg py-4 border-t border-sport-blue-medium/30 z-50">
          <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between px-4">
            <div className="flex items-center mb-4 sm:mb-0">
              <div className="mr-4">
                <p className="text-gray-300">Выбранный тариф:</p>
                <p className="font-bold text-white">{selectedPlan === 'basic' ? 'Базовый (Бесплатно)' : selectedPlan === 'standard' ? 'Стандартный (1 300 ₽)' : 'Премиум (990 ₽ + 9 900 ₽/мес)'}</p>
              </div>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-200" onClick={() => setSelectedPlan(null)}>
                Изменить
              </Button>
            </div>
            <Button className={selectedPlan === 'basic' ? 'bg-sport-blue-medium hover:bg-sport-blue-light' : selectedPlan === 'standard' ? 'bg-sport-blue-medium hover:bg-sport-blue-light' : 'bg-sport-accent hover:bg-sport-accent-hover'} size="lg">
              {selectedPlan === 'basic' ? 'Активировать бесплатно' : 'Перейти к оплате'}
            </Button>
          </div>
        </div>}

      <Footer />
    </div>;
};
export default Pricing;