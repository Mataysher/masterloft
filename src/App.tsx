import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { 
  Warehouse, 
  Table, 
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Star,
  MessageCircle,
  Menu,
  X
} from 'lucide-react';
import Shelves from './pages/Shelves';
import Furniture from './pages/Furniture';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-zinc-50">
      <Routes>
        <Route path="/shelves" element={<Shelves />} />
        <Route path="/furniture" element={<Furniture />} />
        <Route path="/" element={
          <>
            {/* Hero Section */}
            <header className="relative h-screen">
              <div className="absolute inset-0">
                <img 
                  src="https://images.unsplash.com/photo-1564540574859-0dfb63985953?auto=format&fit=crop&q=80"
                  alt="Мастерская" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60" />
              </div>
              
              <nav className="relative z-20 flex justify-between items-center px-6 py-4 lg:px-16">
                <Link to="/" className="flex items-center gap-2 text-white">
                  <Warehouse size={32} />
                  <span className="text-2xl font-bold">LOFT MASTERS</span>
                </Link>
                <div className="hidden md:flex items-center gap-8 text-white">
                  <button onClick={() => scrollToSection('products')} className="hover:text-zinc-300">Продукция</button>
                  <button onClick={() => scrollToSection('about')} className="hover:text-zinc-300">О нас</button>
                  <button onClick={() => scrollToSection('contact')} className="hover:text-zinc-300">Контакты</button>
                </div>
                <button 
                  ref={buttonRef}
                  className="md:hidden text-white z-50"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </nav>

              {/* Mobile Menu */}
              <div 
                ref={menuRef}
                className={`fixed top-0 right-0 w-64 h-auto bg-zinc-900 shadow-lg transform transition-transform duration-300 ease-in-out z-40 md:hidden rounded-bl-lg ${
                  isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
              >
                <div className="flex flex-col py-20 px-6 gap-6">
                  <button 
                    onClick={() => scrollToSection('products')} 
                    className="text-white hover:text-zinc-300 text-left text-lg font-medium"
                  >
                    Продукция
                  </button>
                  <button 
                    onClick={() => scrollToSection('about')} 
                    className="text-white hover:text-zinc-300 text-left text-lg font-medium"
                  >
                    О нас
                  </button>
                  <button 
                    onClick={() => scrollToSection('contact')} 
                    className="text-white hover:text-zinc-300 text-left text-lg font-medium"
                  >
                    Контакты
                  </button>
                </div>
              </div>

              <div className="relative z-10 flex flex-col items-center justify-center h-[calc(100vh-80px)] text-center px-6">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  Мебель и Металлоконструкции <br />в стиле LOFT
                </h1>
                <p className="text-xl text-zinc-200 mb-8 max-w-2xl">
                  Изготавливаем уникальную мебель и металлоконструкции в индустриальном стиле. 
                  От стеллажей до столов - воплощаем ваши идеи в жизнь.
                </p>
                <button 
                  onClick={() => scrollToSection('products')}
                  className="px-8 py-3 bg-zinc-800 text-white rounded-md hover:bg-zinc-700 flex items-center gap-2"
                >
                  Смотреть работы <ChevronRight size={20} />
                </button>
              </div>
            </header>

            {/* Products Section */}
            <section id="products" className="py-20 px-6 lg:px-16">
              <h2 className="text-3xl font-bold text-center mb-16">Наша Продукция</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Стеллажи",
                    image: "https://resources.cdn-kaspi.kz/img/m/p/hd3/hae/86194027135006.jpg?format=gallery-large",
                    description: "Металлические стеллажи под заказ для любого помещения",
                    link: "/shelves"
                  },
                  {
                    title: "Мебель LOFT",
                    image: "https://resources.cdn-kaspi.kz/img/m/p/ha5/ha4/87183017934878.jpg?format=gallery-large",
                    description: "Столы, стулья и другая мебель на заказ",
                    link: "/furniture"
                  }
                ].map((product, index) => (
                  <Link 
                    to={product.link}
                    key={index} 
                    className="group relative overflow-hidden rounded-lg shadow-lg"
                  >
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-80 object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-6">
                      <h3 className="text-xl font-bold text-white mb-2">{product.title}</h3>
                      <p className="text-zinc-300">{product.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* Showcase Section */}
            <section className="py-20 px-6 lg:px-16 bg-white">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-6">Наши Проекты</h2>
                <p className="text-lg text-zinc-600 text-center mb-16 max-w-3xl mx-auto">
                  Создаем функциональные и стильные пространства для бизнеса любого масштаба. 
                  От небольших офисов до крупных торговых центров.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    {
                      title: "Современный Офис",
                      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
                      description: "Эргономичные рабочие места и системы хранения для продуктивной работы"
                    },
                    {
                      title: "Конференц-зал",
                      image: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&q=80",
                      description: "Представительские помещения для проведения важных встреч"
                    },
                    {
                      title: "Торговый Центр",
                      image: "https://images.unsplash.com/photo-1567449303078-57ad995bd17a?auto=format&fit=crop&q=80",
                      description: "Торговое оборудование и зоны отдыха для комфорта посетителей"
                    }
                  ].map((project, index) => (
                    <div key={index} className="group cursor-pointer">
                      <div className="relative overflow-hidden rounded-lg shadow-lg mb-4">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-zinc-600">{project.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 px-6 lg:px-16 bg-white">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-16">О Нас</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div>
                    <img 
                      src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80" 
                      alt="Наша мастерская"
                      className="rounded-lg shadow-lg w-full h-[400px] object-cover"
                    />
                  </div>
                  <div className="space-y-6">
                    <p className="text-lg text-zinc-700">
                      LOFT Masters - это команда профессионалов, специализирующихся на создании уникальной мебели и металлоконструкций в стиле лофт. С 2018 года мы воплощаем в жизнь самые смелые идеи наших клиентов.
                    </p>
                    <p className="text-lg text-zinc-700">
                      Наша мастерская оснащена современным оборудованием, что позволяет нам гарантировать высокое качество каждого изделия. Мы работаем только с проверенными поставщиками материалов и используем лучшие марки стали и древесины.
                    </p>
                    <p className="text-lg text-zinc-700">
                      За годы работы мы реализовали более 500 проектов различной сложности - от небольших предметов интерьера до комплексного оснащения коммерческих помещений.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Features Section */}
            <section className="bg-zinc-900 text-white py-20 px-6 lg:px-16">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-16">Почему Выбирают Нас</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    {
                      icon: <Star className="w-12 h-12 mb-4" />,
                      image: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?auto=format&fit=crop&q=80",
                      title: "Качественные Материалы",
                      description: "Используем только сертифицированные материалы:",
                      details: [
                        "• Сталь марок Ст3 и 09Г2С для надежности конструкций",
                        "• Профильные трубы 20х20, 40х20, 40х40 мм",
                        "• Массив дерева: дуб, ясень, карагач",
                        "• Немецкая фурнитура Blum и Hafele"
                      ]
                    },
                    {
                      icon: <Table className="w-12 h-12 mb-4" />,
                      image: "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?auto=format&fit=crop&q=80",
                      title: "Индивидуальный Дизайн",
                      description: "Создаем уникальные проекты под ваши требования:",
                      details: [
                        "• 3D-визуализация проекта",
                        "• Учет особенностей помещения",
                        "• Широкий выбор отделки и покрытий",
                        "• Возможность изменения размеров и конфигурации"
                      ]
                    },
                    {
                      icon: <Warehouse className="w-12 h-12 mb-4" />,
                      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80",
                      title: "Профессиональный Монтаж",
                      description: "Гарантируем качественную установку:",
                      details: [
                        "• Бесплатный выезд на замеры",
                        "• Доставка и монтаж включены в стоимость",
                        "• Профессиональная сборка на месте",
                        "• Гарантия 2 года на все изделия"
                      ]
                    }
                  ].map((feature, index) => (
                    <div key={index} className="rounded-lg overflow-hidden bg-zinc-800">
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={feature.image} 
                          alt={feature.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex justify-center">{feature.icon}</div>
                        <h3 className="text-xl font-bold mb-4 text-center">{feature.title}</h3>
                        <p className="text-zinc-400 mb-4">{feature.description}</p>
                        <ul className="space-y-2 text-zinc-300">
                          {feature.details.map((detail, idx) => (
                            <li key={idx}>{detail}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 px-6 lg:px-16">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-16">Свяжитесь с Нами</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <Phone className="w-6 h-6" />
                      <div>
                        <h3 className="font-bold">Телефон</h3>
                        <p>+7 (777) 123-4567</p>
                      </div>
                    </div>
                    <a 
                      href="https://wa.me/77771234567" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 hover:text-green-600 transition-colors"
                    >
                      <MessageCircle className="w-6 h-6" />
                      <div>
                        <h3 className="font-bold">WhatsApp</h3>
                        <p>+7 (777) 123-4567</p>
                      </div>
                    </a>
                    <div className="flex items-center gap-4">
                      <Mail className="w-6 h-6" />
                      <div>
                        <h3 className="font-bold">Email</h3>
                        <p>info@loftmasters.kz</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <MapPin className="w-6 h-6" />
                      <div>
                        <h3 className="font-bold">Адрес Мастерской</h3>
                        <p>г. Алматы, ул. Рыскулова 232/3</p>
                      </div>
                    </div>
                  </div>
                  <form className="space-y-4">
                    <input 
                      type="text" 
                      placeholder="Ваше Имя" 
                      className="w-full p-3 rounded-md border border-zinc-300"
                    />
                    <input 
                      type="email" 
                      placeholder="Email" 
                      className="w-full p-3 rounded-md border border-zinc-300"
                    />
                    <textarea 
                      placeholder="Ваше Сообщение" 
                      rows={4}
                      className="w-full p-3 rounded-md border border-zinc-300"
                    ></textarea>
                    <button className="w-full py-3 bg-zinc-800 text-white rounded-md hover:bg-zinc-700">
                      Отправить Сообщение
                    </button>
                  </form>
                </div>
              </div>
            </section>

            {/* Footer */}
            <footer className="bg-zinc-900 text-white py-8 px-6 lg:px-16">
              <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center gap-2 mb-4 md:mb-0">
                  <Warehouse size={24} />
                  <span className="text-xl font-bold">LOFT MASTERS</span>
                </div>
                <p className="text-zinc-400">© 2024 LOFT Masters. Все права защищены.</p>
              </div>
            </footer>
          </>
        } />
      </Routes>
      <WhatsAppButton />
    </div>
  );
}

export default App;