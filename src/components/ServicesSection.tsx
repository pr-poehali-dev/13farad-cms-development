import React from "react";

const ServicesSection = () => {
  const services = [
    {
      title: "Инженерные системы",
      description:
        "Проектирование и монтаж систем вентиляции, кондиционирования, отопления и водоснабжения",
      image:
        "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=300&fit=crop",
      features: [
        "Вентиляция и кондиционирование",
        "Отопление и водоснабжение",
        "Электроснабжение",
        "Слаботочные системы",
      ],
    },
    {
      title: "Оборудование и мебель",
      description:
        "Поставка и установка профессионального оборудования и офисной мебели",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop",
      features: [
        "Офисная мебель",
        "Торговое оборудование",
        "Медицинское оборудование",
        "Промышленное оборудование",
      ],
    },
    {
      title: "IT-решения",
      description:
        "Комплексная автоматизация бизнес-процессов и внедрение современных IT-технологий",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop",
      features: [
        "Системы безопасности",
        "Сетевые решения",
        "Автоматизация процессов",
        "Техническая поддержка",
      ],
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Полный спектр решений для комплексного оснащения вашего объекта
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6">
              Нужна консультация по выбору решения?
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Получить консультацию
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
