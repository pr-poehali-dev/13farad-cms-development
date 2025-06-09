import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ContactsSection = () => {
  return (
    <section id="contacts" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Контакты
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Свяжитесь с нами для обсуждения вашего проекта
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <span>📍</span>
                    <span>Адрес</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    430003, Республика Мордовия
                    <br />
                    г. Саранск, пр-кт Ленина, д. 47, помещ. 3
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <span>📞</span>
                    <span>Телефон</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    +7 (8342) XX-XX-XX
                    <br />
                    +7 (XXX) XXX-XX-XX
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <span>✉️</span>
                    <span>Email</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    info@13farad.ru
                    <br />
                    sales@13farad.ru
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <span>🕒</span>
                    <span>Время работы</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Пн-Пт: 09:00 - 18:00
                    <br />
                    Сб-Вс: по договоренности
                  </p>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Связаться с нами</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Имя *
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Ваше имя"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Телефон *
                    </label>
                    <input
                      type="tel"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="+7 (XXX) XXX-XX-XX"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Сообщение *
                    </label>
                    <textarea
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      rows={4}
                      placeholder="Опишите ваш проект или вопрос"
                    ></textarea>
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Отправить сообщение
                  </Button>

                  <p className="text-xs text-gray-500">
                    * Обязательные поля. Мы свяжемся с вами в течение рабочего
                    дня.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
