import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">13F</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">ООО "13 ФАРАД"</h3>
                  <p className="text-gray-400 text-sm">
                    Комплексное оснащение объектов
                  </p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Современная коммерческая организация, специализирующаяся на
                комплексном оснащении объектов инженерными системами,
                оборудованием и IT-решениями.
              </p>
              <p className="text-gray-400 text-sm">
                430003, Республика Мордовия, г. Саранск, пр-кт Ленина, д. 47,
                помещ. 3
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Инженерные системы</li>
                <li>Оборудование и мебель</li>
                <li>IT-решения</li>
                <li>Сервисное обслуживание</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-300">
                <li>info@13farad.ru</li>
                <li>+7 (8342) XX-XX-XX</li>
                <li>Пн-Пт: 09:00-18:00</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ООО "13 ФАРАД". Все права защищены.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
