import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">13F</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">13 ФАРАД</h1>
              <p className="text-sm text-gray-600">
                Комплексное оснащение объектов
              </p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              О компании
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Услуги
            </button>
            <button
              onClick={() => scrollToSection("reviews")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Отзывы
            </button>
            <button
              onClick={() => scrollToSection("contacts")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Контакты
            </button>
          </nav>

          <Button className="bg-blue-600 hover:bg-blue-700">
            Получить консультацию
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
