import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              О компании ООО "13 ФАРАД"
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Современная коммерческая организация, специализирующаяся на
              комплексном оснащении объектов различного назначения
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop"
                alt="Офисное здание"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                ООО «13 ФАРАД» — современная коммерческая организация,
                основанная в 2018 году. Мы осуществляем комплексное оснащение
                административных зданий, образовательных и медицинских
                учреждений, промышленных и коммерческих помещений.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Предприятие работает как поставщик и интегратор решений,
                способных обеспечить комфорт, безопасность и эффективность
                функционирования объектов различного масштаба.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 font-medium">
                  Юридический адрес:
                </p>
                <p className="text-gray-800">
                  430003, Республика Мордовия, г. Саранск, пр-кт Ленина, д. 47,
                  помещ. 3
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-blue-600">🏢</CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold mb-2">Административные здания</h3>
                <p className="text-sm text-gray-600">
                  Комплексное оснащение офисных комплексов
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-blue-600">🎓</CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold mb-2">
                  Образовательные учреждения
                </h3>
                <p className="text-sm text-gray-600">
                  Современное оборудование для школ и вузов
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-blue-600">🏥</CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold mb-2">Медицинские учреждения</h3>
                <p className="text-sm text-gray-600">
                  Специализированное медицинское оборудование
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-blue-600">🏭</CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold mb-2">Промышленные объекты</h3>
                <p className="text-sm text-gray-600">
                  Инженерные системы для производства
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
