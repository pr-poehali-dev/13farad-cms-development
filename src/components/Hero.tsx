import React from "react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Комплексное оснащение объектов
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Инженерные системы, оборудование, мебель и IT-решения для
            административных зданий, образовательных и медицинских учреждений
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/services"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Наши услуги
            </a>
            <a
              href="/contacts"
              className="border-white text-white hover:bg-white hover:text-blue-600 border px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Связаться с нами
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold">2018</div>
              <div className="text-blue-200">Год основания</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">100+</div>
              <div className="text-blue-200">Реализованных проектов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-blue-200">Сервисная поддержка</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
