
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-sport-blue-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
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
                {/* VK icon */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.579 6.855c.14-.465 0-.806-.666-.806h-2.2c-.56 0-.817.295-.956.619 0 0-1.12 2.728-2.702 4.503-.512.513-.745.675-1.025.675-.14 0-.352-.162-.352-.627V6.855c0-.558-.16-.806-.62-.806H9.642c-.348 0-.558.258-.558.504 0 .528.788.65.87 2.138v3.228c0 .707-.127.836-.407.836-.746 0-2.56-2.735-3.634-5.866-.21-.607-.42-.854-.98-.854H2.730c-.627 0-.752.295-.752.619 0 .582.745 3.463 3.472 7.271 1.816 2.602 4.376 4.012 6.702 4.012 1.397 0 1.57-.314 1.57-.853v-1.966c0-.628.133-.752.576-.752.328 0 .888.164 2.197 1.426 1.495 1.495 1.742 2.167 2.583 2.167h2.2c.626 0 .94-.314.76-.934-.2-.614-.905-1.5-1.842-2.553-.51-.604-1.275-1.253-1.506-1.579-.326-.42-.234-.604 0-.976 0 0 2.673-3.773 2.95-5.055z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                {/* Instagram icon */}
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                {/* TikTok icon */}
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 015.16-1.74V12.1a8.07 8.07 0 003.77.9h.42V9.59a6.07 6.07 0 01-3.77-.9 4.83 4.83 0 003.77-2z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                {/* YouTube icon */}
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">Сервис</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">О нас</Link></li>
              <li><Link to="/how-it-works" className="text-gray-300 hover:text-white transition-colors">Наши инструменты</Link></li>
              <li><Link to="/blog/tutorials" className="text-gray-300 hover:text-white transition-colors">Обучение</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Блог</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">Поддержка</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Связаться с нами</Link></li>
              <li><Link to="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">Политика конфиденциальности</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-white transition-colors">Условия использования</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-700 text-gray-400 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© {currentYear} SportAI. Все права защищены.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="hover:text-white transition-colors">Политика конфиденциальности</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Условия использования</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
