import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      title: "Инженерные системы",
      description:
        "Проектирование и монтаж систем отопления, вентиляции, кондиционирования, электроснабжения",
      icon: "⚡",
      features: [
        "Система отопления",
        "Вентиляция и кондиционирование",
        "Электроснабжение",
        "Слаботочные системы",
      ],
    },
    {
      title: "Оборудование и мебель",
      description:
        "Поставка и установка специализированного оборудования, офисной и специальной мебели",
      icon: "🛠️",
      features: [
        "Офисная мебель",
        "Специализированное оборудование",
        "Сейфы и металлическая мебель",
        "Торговое оборудование",
      ],
    },
    {
      title: "IT-решения",
      description:
        "Комплексные информационно-технические и коммуникационные решения для современного бизнеса",
      icon: "💻",
      features: [
        "Компьютерные сети",
        "Системы безопасности",
        "Телефония",
        "Видеонаблюдение",
      ],
    },
    {
      title: "Полное сопровождение",
      description:
        "От разработки технической документации до монтажа, наладки и сервисного обслуживания",
      icon: "🔧",
      features: [
        "Техническая документация",
        "Монтаж и наладка",
        "Сервисное обслуживание",
        "Гарантийная поддержка",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Комплексные решения для оснащения объектов любой сложности
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="h-full hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="text-3xl">{service.icon}</div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center space-x-2"
                      >
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-blue-600 text-white rounded-lg p-8 mt-16 text-center">
            <h3 className="text-2xl font-bold mb-4">Нужна консультация?</h3>
            <p className="text-blue-100 mb-6">
              Наши специалисты помогут подобрать оптимальное решение для вашего
              объекта
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Получить консультацию
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
