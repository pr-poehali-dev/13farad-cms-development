import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">13F</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">13 ФАРАД</h1>
              <p className="text-sm text-gray-600">
                Комплексное оснащение объектов
              </p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/about"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              О компании
            </Link>
            <Link
              to="/services"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Услуги
            </Link>
            <Link
              to="/reviews"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Отзывы
            </Link>
            <Link
              to="/contacts"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Контакты
            </Link>
          </nav>

          <Link to="/contacts">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
              Получить консультацию
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
