import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Icon name="Beef" className="text-amber-800 mr-2" size={32} />
              <h1 className="text-2xl font-bold text-amber-900">МЕСТАНА</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-amber-800 transition-colors">Главная</a>
              <a href="#about" className="text-gray-700 hover:text-amber-800 transition-colors">О компании</a>
              <a href="#products" className="text-gray-700 hover:text-amber-800 transition-colors">Продукция</a>
              <a href="#certificates" className="text-gray-700 hover:text-amber-800 transition-colors">Сертификаты</a>
              <a href="#contacts" className="text-gray-700 hover:text-amber-800 transition-colors">Контакты</a>
            </nav>
            <Button className="bg-amber-800 hover:bg-amber-900 text-white">
              Связаться с нами
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-amber-50 to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-green-100 text-green-800 border-green-200">
                  Экологически чистое производство
                </Badge>
                <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                  Премиальная говядина полного цикла
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  От собственных экологически чистых ферм до вашего стола. 
                  Контролируем каждый этап производства для гарантии высочайшего качества.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-amber-800 hover:bg-amber-900 text-white">
                  <Icon name="ShoppingCart" className="mr-2" size={20} />
                  Каталог продукции
                </Button>
                <Button size="lg" variant="outline" className="border-amber-800 text-amber-800 hover:bg-amber-50">
                  <Icon name="Factory" className="mr-2" size={20} />
                  О производстве
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/8124323c-770a-458f-93b8-cf442f6c8c25.jpg" 
                alt="Экологически чистая ферма" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Icon name="Leaf" className="text-green-600" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">100% Эко</p>
                    <p className="text-sm text-gray-600">Чистое производство</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Icon name="Sprout" className="text-amber-800" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Экологическая чистота</h3>
              <p className="text-gray-600">Выращивание без химических добавок и антибиотиков</p>
            </div>
            <div className="text-center space-y-4">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Icon name="Recycle" className="text-amber-800" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Полный цикл</h3>
              <p className="text-gray-600">От выращивания до переработки под полным контролем</p>
            </div>
            <div className="text-center space-y-4">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Icon name="Award" className="text-amber-800" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Премиум качество</h3>
              <p className="text-gray-600">Инновационные технологии и строгие стандарты</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/img/c75cb7d7-2292-4d08-9222-73e05bcbeef7.jpg" 
                alt="Производство" 
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">О компании МЕСТАНА</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Мы — ведущий мясокомбинат с собственными фермами, специализирующийся на производстве 
                  премиальной говядины. Наша миссия — обеспечить потребителей высококачественным мясом, 
                  выращенным с заботой о природе и животных.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Собственные фермы</h4>
                  <p className="text-sm text-gray-600">15 экологически чистых ферм</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Опыт работы</h4>
                  <p className="text-sm text-gray-600">Более 25 лет на рынке</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Поголовье скота</h4>
                  <p className="text-sm text-gray-600">Более 10,000 голов</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Переработка</h4>
                  <p className="text-sm text-gray-600">2,000 тонн в месяц</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Наша продукция</h2>
            <p className="text-lg text-gray-600">Широкий ассортимент премиальной говядины</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <img 
                  src="/img/b7922717-a18d-4988-99f6-0cb5ace24db7.jpg" 
                  alt="Мраморная говядина" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <CardTitle>Мраморная говядина</CardTitle>
                <CardDescription>Элитные отрубы с превосходной мраморностью</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">• Рибай стейк</p>
                  <p className="text-sm text-gray-600">• Филе миньон</p>
                  <p className="text-sm text-gray-600">• Стриплойн</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-full h-48 bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg mb-4 flex items-center justify-center">
                  <Icon name="Beef" className="text-amber-800" size={64} />
                </div>
                <CardTitle>Классические отрубы</CardTitle>
                <CardDescription>Традиционные части туши высшего качества</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">• Вырезка</p>
                  <p className="text-sm text-gray-600">• Грудинка</p>
                  <p className="text-sm text-gray-600">• Лопатка</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-full h-48 bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg mb-4 flex items-center justify-center">
                  <Icon name="Package" className="text-green-800" size={64} />
                </div>
                <CardTitle>Полуфабрикаты</CardTitle>
                <CardDescription>Готовые к приготовлению продукты</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">• Фарш премиум</p>
                  <p className="text-sm text-gray-600">• Котлеты</p>
                  <p className="text-sm text-gray-600">• Колбаски</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Сертификаты качества</h2>
            <p className="text-lg text-gray-600">Наше качество подтверждено международными стандартами</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="bg-white w-24 h-24 rounded-full flex items-center justify-center mx-auto shadow-md">
                <Icon name="Shield" className="text-green-600" size={48} />
              </div>
              <h3 className="font-semibold text-gray-900">ISO 22000</h3>
              <p className="text-sm text-gray-600">Безопасность пищевых продуктов</p>
            </div>
            <div className="text-center space-y-4">
              <div className="bg-white w-24 h-24 rounded-full flex items-center justify-center mx-auto shadow-md">
                <Icon name="CheckCircle" className="text-blue-600" size={48} />
              </div>
              <h3 className="font-semibold text-gray-900">HACCP</h3>
              <p className="text-sm text-gray-600">Контроль критических точек</p>
            </div>
            <div className="text-center space-y-4">
              <div className="bg-white w-24 h-24 rounded-full flex items-center justify-center mx-auto shadow-md">
                <Icon name="Leaf" className="text-green-600" size={48} />
              </div>
              <h3 className="font-semibold text-gray-900">Органик</h3>
              <p className="text-sm text-gray-600">Экологическая сертификация</p>
            </div>
            <div className="text-center space-y-4">
              <div className="bg-white w-24 h-24 rounded-full flex items-center justify-center mx-auto shadow-md">
                <Icon name="Award" className="text-amber-600" size={48} />
              </div>
              <h3 className="font-semibold text-gray-900">Качество</h3>
              <p className="text-sm text-gray-600">Премиальные стандарты</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Контакты</h2>
            <p className="text-lg text-gray-600">Свяжитесь с нами для сотрудничества</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="text-center p-6">
                <Icon name="MapPin" className="text-amber-800 mx-auto mb-4" size={48} />
                <h3 className="font-semibold text-gray-900 mb-2">Адрес</h3>
                <p className="text-gray-600">г. Москва, ул. Производственная, 15</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="text-center p-6">
                <Icon name="Phone" className="text-amber-800 mx-auto mb-4" size={48} />
                <h3 className="font-semibold text-gray-900 mb-2">Телефон</h3>
                <p className="text-gray-600">+7 (495) 123-45-67</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="text-center p-6">
                <Icon name="Mail" className="text-amber-800 mx-auto mb-4" size={48} />
                <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">info@mestana.ru</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Icon name="Beef" className="text-amber-400 mr-2" size={24} />
                <h3 className="text-xl font-bold">МЕСТАНА</h3>
              </div>
              <p className="text-gray-400">Премиальная говядина полного цикла производства</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#products" className="hover:text-white transition-colors">Продукция</a></li>
                <li><a href="#certificates" className="hover:text-white transition-colors">Сертификаты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Оптовые поставки</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Розничная торговля</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Экспорт</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+7 (495) 123-45-67</li>
                <li>info@mestana.ru</li>
                <li>г. Москва, ул. Производственная, 15</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 МЕСТАНА. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;