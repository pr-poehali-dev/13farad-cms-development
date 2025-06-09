import React from "react";

const ReviewsSection = () => {
  const reviews = [
    {
      name: "Алексей Петров",
      position: "Директор ООО 'Техносервис'",
      text: "Отличная работа команды 13 ФАРАД! Полностью оснастили наш офис инженерными системами. Качество на высшем уровне, сроки соблюдены.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Мария Сидорова",
      position: "Управляющий торговым центром",
      text: "Профессиональный подход к проекту. Установили современную систему вентиляции и кондиционирования. Работают быстро и качественно.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b332c1a1?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Игорь Волков",
      position: "Руководитель производства",
      text: "Решили сложную задачу по автоматизации производственных процессов. IT-решения работают без сбоев, техподдержка на высоте.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Елена Кузнецова",
      position: "Главный врач клиники",
      text: "Оснастили медицинский центр современным оборудованием. Индивидуальный подход, учли все наши специфические требования.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Отзывы клиентов
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мнения наших партнеров о качестве выполненных работ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {review.name}
                    </h4>
                    <p className="text-sm text-gray-600">{review.position}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 italic">"{review.text}"</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 bg-blue-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Станьте нашим следующим довольным клиентом
            </h3>
            <p className="text-gray-600 mb-6">
              Получите бесплатную консультацию по вашему проекту
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Связаться с нами
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
