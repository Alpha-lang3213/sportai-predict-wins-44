
import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

const testimonials = [
  {
    id: 1,
    name: "Алексей П.",
    rating: 5,
    text: "Я использую SportAI уже 3 месяца и мой ROI вырос на 12%. Точность прогнозов просто поражает!",
    plan: "Премиум",
    date: "15 апреля 2025"
  },
  {
    id: 2,
    name: "Мария С.",
    rating: 4,
    text: "Очень удобный интерфейс и детальная аналитика. Единственное, хотелось бы больше видов спорта.",
    plan: "Стандарт",
    date: "2 марта 2025"
  },
  {
    id: 3,
    name: "Дмитрий К.",
    rating: 5,
    text: "Система предсказала несколько неожиданных исходов, которые действительно сбылись. Впечатлен!",
    plan: "Премиум",
    date: "20 февраля 2025"
  },
  {
    id: 4,
    name: "Ольга М.",
    rating: 5,
    text: "Лучший сервис для анализа спортивных событий. После подключения премиум-плана получила доступ к VIP прогнозам, которые оказались очень точными.",
    plan: "Премиум",
    date: "5 апреля 2025"
  },
  {
    id: 5,
    name: "Сергей В.",
    rating: 4,
    text: "Пользуюсь сервисом полгода. Понравилась функция риск-менеджмента, она помогла мне более системно подходить к ставкам и увеличить общий профит.",
    plan: "Стандарт",
    date: "12 марта 2025"
  },
  {
    id: 6,
    name: "Андрей Л.",
    rating: 5,
    text: "Долго искал что-то подобное. SportAI буквально изменил мой подход к спортивным прогнозам. Теперь решения принимаю только на основе данных.",
    plan: "Премиум",
    date: "28 марта 2025"
  }
];

const Testimonials = () => {
  const [rating, setRating] = useState<number>(5);
  const [name, setName] = useState<string>("");
  const [review, setReview] = useState<string>("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Отзыв отправлен",
      description: "Спасибо за ваш отзыв! Он будет опубликован после модерации.",
    });
    setName("");
    setReview("");
    setRating(5);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sport-blue-dark to-sport-blue text-gray-300">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4 text-white text-center">Отзывы наших пользователей</h1>
        <p className="text-xl mb-12 text-center max-w-3xl mx-auto">
          Узнайте, что думают о нашем сервисе пользователи, которые уже используют 
          SportAI для анализа спортивных событий и прогнозирования.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-sport-blue/80 border-sport-blue-medium/30 text-white neo-blur p-6">
              <div className="flex items-center mb-4">
                <div className="flex space-x-1 mr-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={18} 
                      className={i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-400"} 
                    />
                  ))}
                </div>
                <span className="text-sport-accent font-medium">{testimonial.plan}</span>
              </div>
              <p className="mb-4 italic">"{testimonial.text}"</p>
              <div className="flex justify-between text-sm text-gray-400">
                <span>{testimonial.name}</span>
                <span>{testimonial.date}</span>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 bg-sport-blue/70 neo-blur rounded-lg p-8 max-w-3xl mx-auto border border-sport-blue-medium/30">
          <h2 className="text-2xl font-semibold mb-4 text-white text-center">Оставьте свой отзыв</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block mb-1">Ваше имя</label>
                <input 
                  type="text" 
                  id="name" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2 rounded bg-sport-blue/80 border border-sport-blue-medium/50 focus:outline-none focus:border-sport-accent text-gray-300"
                />
              </div>
              <div>
                <label htmlFor="rating" className="block mb-1">Оценка</label>
                <select 
                  id="rating" 
                  value={rating}
                  onChange={(e) => setRating(parseInt(e.target.value))}
                  className="w-full p-2 rounded bg-sport-blue/80 border border-sport-blue-medium/50 focus:outline-none focus:border-sport-accent text-gray-300"
                >
                  <option value="5">5 звезд</option>
                  <option value="4">4 звезды</option>
                  <option value="3">3 звезды</option>
                  <option value="2">2 звезды</option>
                  <option value="1">1 звезда</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="review" className="block mb-1">Ваш отзыв</label>
              <textarea 
                id="review" 
                rows={4}
                value={review}
                onChange={(e) => setReview(e.target.value)}
                className="w-full p-2 rounded bg-sport-blue/80 border border-sport-blue-medium/50 focus:outline-none focus:border-sport-accent text-gray-300"
              ></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-sport-accent hover:bg-sport-accent-hover px-6 py-2 rounded-md text-white font-medium">
                Отправить отзыв
              </button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Testimonials;
