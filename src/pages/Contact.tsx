
import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageCircle, Phone } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-sport-blue-dark text-gray-300">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4 text-white text-center">Связаться с нами</h1>
        <p className="text-xl mb-12 text-center max-w-3xl mx-auto">
          У вас есть вопросы или предложения? Мы всегда рады помочь и ответить на ваши вопросы.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-white">Напишите нам</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block mb-1">Имя</label>
                  <Input 
                    type="text" 
                    id="name" 
                    className="bg-sport-blue-dark/80 border-sport-blue-medium/50 focus:border-sport-accent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-1">Email</label>
                  <Input 
                    type="email" 
                    id="email" 
                    className="bg-sport-blue-dark/80 border-sport-blue-medium/50 focus:border-sport-accent"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block mb-1">Тема</label>
                <Input 
                  type="text" 
                  id="subject" 
                  className="bg-sport-blue-dark/80 border-sport-blue-medium/50 focus:border-sport-accent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1">Сообщение</label>
                <Textarea 
                  id="message" 
                  rows={6} 
                  className="bg-sport-blue-dark/80 border-sport-blue-medium/50 focus:border-sport-accent resize-none"
                ></Textarea>
              </div>
              <Button type="submit" className="bg-sport-accent hover:bg-sport-accent-hover w-full">
                Отправить сообщение
              </Button>
            </form>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-white">Контактная информация</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-sport-blue-medium/30 p-3 rounded-full mr-4">
                  <Mail className="text-sport-accent" />
                </div>
                <div>
                  <h3 className="font-medium text-white mb-1">Email</h3>
                  <p className="text-gray-300">support@sportai.ru</p>
                  <p className="text-gray-300">info@sportai.ru</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-sport-blue-medium/30 p-3 rounded-full mr-4">
                  <Phone className="text-sport-accent" />
                </div>
                <div>
                  <h3 className="font-medium text-white mb-1">Телефон</h3>
                  <p className="text-gray-300">+7 (800) 555-35-35</p>
                  <p className="text-sm text-gray-400">Пн-Пт: 9:00 - 18:00</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-sport-blue-medium/30 p-3 rounded-full mr-4">
                  <MessageCircle className="text-sport-accent" />
                </div>
                <div>
                  <h3 className="font-medium text-white mb-1">Онлайн-чат</h3>
                  <p className="text-gray-300">Наши операторы готовы ответить на ваши вопросы</p>
                  <Button variant="outline" className="mt-2">Начать чат</Button>
                </div>
              </div>
            </div>
            
            <div className="mt-10 p-6 bg-sport-blue-medium/10 border border-sport-blue-medium/30 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-white">Часто задаваемые вопросы</h3>
              <p className="mb-4">Возможно, вы найдете ответ на свой вопрос в нашем разделе FAQ</p>
              <Link to="/faq" className="text-sport-accent hover:underline">
                Перейти к FAQ
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
