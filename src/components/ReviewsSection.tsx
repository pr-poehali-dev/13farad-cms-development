import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const ReviewsSection = () => {
  const reviews = [
    {
      name: "Александр Петров",
      position: "Директор ООО 'СтройИнвест'",
      text: "Отличная работа команды 13 ФАРАД! Качественно и в срок выполнили комплексное оснащение нашего офисного центра. Особенно впечатлила система климат-контроля.",
      rating: 5,
    },
    {
      name: "Елена Смирнова",
      position: "Заведующая МБОУ 'Школа №15'",
      text: "Благодарим за профессиональное оснащение компьютерного класса. Все оборудование работает стабильно, техническая поддержка на высоте.",
      rating: 5,
    },
    {
      name: "Михаил Козлов",
      position: "Главный врач поликлиники №3",
      text: "Качественная установка медицинского оборудования и систем безопасности. Проект реализован точно в срок, все требования учтены.",
      rating: 5,
    },
  ];

  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Отзывы клиентов
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мнения наших партнеров о качестве выполненных работ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{review.text}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-gray-900">{review.name}</p>
                    <p className="text-sm text-gray-600">{review.position}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-bold text-blue-600">100+</div>
                <div className="text-gray-600">Довольных клиентов</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">98%</div>
                <div className="text-gray-600">Положительных отзывов</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">5 лет</div>
                <div className="text-gray-600">На рынке</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">24/7</div>
                <div className="text-gray-600">Поддержка</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
