import React from "react";

const AboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              О компании ООО "13 ФАРАД"
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Современная коммерческая организация с многолетним опытом работы
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop"
                alt="Офис компании 13 ФАРАД"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Наша миссия
              </h3>
              <p className="text-gray-600 mb-6">
                Мы специализируемся на комплексном оснащении объектов
                инженерными системами, современным оборудованием и IT-решениями.
                Наша цель — обеспечить максимальную эффективность и комфорт для
                наших клиентов.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <p className="text-gray-600">
                    Индивидуальный подход к каждому проекту
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <p className="text-gray-600">
                    Использование современных технологий
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <p className="text-gray-600">
                    Гарантия качества и сервисное обслуживание
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">10+</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Лет опыта
              </h4>
              <p className="text-gray-600">На рынке инженерных решений</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">500+</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Проектов
              </h4>
              <p className="text-gray-600">Успешно реализовано</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">24/7</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Поддержка
              </h4>
              <p className="text-gray-600">Техническое обслуживание</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
