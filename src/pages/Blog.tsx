
import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const blogPosts = [
  {
    id: 1,
    title: "Как ИИ меняет индустрию спортивных прогнозов",
    excerpt: "Искусственный интеллект произвёл революцию во многих отраслях, и спортивные прогнозы не исключение...",
    image: "https://picsum.photos/id/1/600/400",
    date: "5 мая 2025",
    category: "Технологии",
    author: "Александр Петров"
  },
  {
    id: 2,
    title: "5 ключевых метрик, которые нужно анализировать перед ставкой",
    excerpt: "Успешные ставки на спорт требуют тщательного анализа. В этой статье мы рассмотрим 5 важнейших показателей...",
    image: "https://picsum.photos/id/2/600/400",
    date: "28 апреля 2025",
    category: "Советы",
    author: "Елена Смирнова"
  },
  {
    id: 3,
    title: "Психология ставок: как избежать эмоциональных решений",
    excerpt: "Психологические аспекты играют огромную роль в спортивных ставках. Узнайте, как контролировать эмоции...",
    image: "https://picsum.photos/id/3/600/400",
    date: "20 апреля 2025",
    category: "Психология",
    author: "Дмитрий Козлов"
  },
  {
    id: 4,
    title: "Анализ прошедшего футбольного сезона с помощью SportAI",
    excerpt: "Подробный разбор статистики и интересных закономерностей прошедшего сезона с использованием...",
    image: "https://picsum.photos/id/4/600/400",
    date: "15 апреля 2025",
    category: "Футбол",
    author: "Михаил Соколов"
  },
  {
    id: 5,
    title: "Как правильно управлять банкроллом: стратегии для новичков",
    excerpt: "Одним из ключевых факторов успеха в ставках является грамотное управление банкроллом...",
    image: "https://picsum.photos/id/5/600/400",
    date: "10 апреля 2025",
    category: "Финансы",
    author: "Ольга Новикова"
  },
  {
    id: 6,
    title: "Обзор новых функций SportAI: что появилось в последнем обновлении",
    excerpt: "Мы постоянно работаем над улучшением нашего сервиса. В последнем обновлении появились...",
    image: "https://picsum.photos/id/6/600/400",
    date: "5 апреля 2025",
    category: "Новости",
    author: "Команда SportAI"
  }
];

const categories = [
  "Все", "Технологии", "Советы", "Психология", "Футбол", "Баскетбол", "Теннис", "Финансы", "Новости"
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-sport-blue-dark text-gray-300">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4 text-white">Блог SportAI</h1>
        <p className="text-xl mb-8">
          Полезные статьи, советы и новости из мира спортивной аналитики и ставок
        </p>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <button 
              key={category} 
              className="px-4 py-1 rounded-full text-sm bg-sport-blue-medium/30 hover:bg-sport-blue-medium/50 transition"
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link to={`/blog/${post.id}`} key={post.id} className="group h-full">
              <div className="bg-sport-blue-medium/10 rounded-lg overflow-hidden border border-sport-blue-medium/30 transition hover:border-sport-accent h-full flex flex-col">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex justify-between text-sm text-gray-400 mb-2">
                    <span>{post.category}</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-sport-accent transition">{post.title}</h3>
                  <p className="mb-4 line-clamp-3 flex-grow">{post.excerpt}</p>
                  <div className="flex items-center text-sm mt-auto">
                    <span className="text-sport-accent">Автор: {post.author}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <button className="bg-sport-blue-medium hover:bg-sport-blue-light px-6 py-2 rounded-md text-white font-medium">
            Загрузить больше
          </button>
        </div>
        
        <div className="mt-16 bg-sport-blue-medium/20 rounded-lg p-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4 text-white text-center">Подпишитесь на нашу рассылку</h2>
          <p className="text-center mb-6">Получайте свежие статьи, советы и эксклюзивные прогнозы прямо на вашу почту</p>
          <form className="flex max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Ваш email" 
              className="flex-grow p-2 rounded-l-md focus:outline-none text-gray-900"
            />
            <button type="submit" className="bg-sport-accent hover:bg-sport-accent-hover px-6 py-2 rounded-r-md text-white font-medium">
              Подписаться
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
