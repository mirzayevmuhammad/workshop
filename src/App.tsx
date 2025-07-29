import { useState } from "react";
import {
  Wrench,
  Car,
  Phone,
  MapPin,
  Clock,
  Globe,
  Menu,
  X,
} from "lucide-react";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";

export default function HomePage() {
  const [language, setLanguage] = useState<"ru" | "uz">("ru");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const content = {
    ru: {
      nav: {
        services: "Услуги",
        about: "О нас",
        contact: "Контакты",
      },
      header: {
        call: "Позвонить",
        address: "Адрес",
      },
      hero: {
        title: "Профессиональный Ремонт Автомобилей",
        subtitle:
          "Высококачественный ремонт, быстрое обслуживание и надежные решения. Ваш автомобиль в безопасных руках.",
        viewServices: "Посмотреть услуги",
        freeConsult: "Бесплатная консультация",
      },
      services: {
        title: "Наши Услуги",
        subtitle:
          "Все виды ремонта и техническое обслуживание для вашего автомобиля",
        bodyRepair: {
          title: "Кузовной Ремонт",
          desc: "Ремонт кузова, покраска и восстановительные работы",
        },
        quickService: {
          title: "Быстрый Сервис",
          desc: "24/7 экстренный ремонт и помощь на дороге",
        },
      },
      about: {
        title: "Почему выбирают нас?",
        points: [
          "15 лет опыта и профессиональные специалисты",
          "Современное оборудование и оригинальные запчасти",
          "Гарантия на работы 1 год",
          "Доступные цены и удобная оплата",
        ],
      },
      contact: {
        title: "Свяжитесь с нами",
        subtitle: "Есть вопросы? Мы готовы помочь",
        phone: "Телефон",
        address: "Адрес",
        workTime: "Время работы",
        schedule: {
          weekdays: "Пн-Пт: 10:00-20:00",
          saturday: "Сб-Вс: 10:00-18:00",
        },
        city: "г. Москва",
        district: "Тропарёво‑Никулино",
      },
      footer: {
        rights: "© 2025 Все права защищены",
      },
    },
    uz: {
      nav: {
        services: "Xizmatlar",
        about: "Biz haqimizda",
        contact: "Aloqa",
      },
      header: {
        call: "Qo'ng'iroq qilish",
        address: "Manzil",
      },
      hero: {
        title: "Professional Avtomobil Ta'mirlash Xizmati",
        subtitle:
          "Yuqori sifatli ta'mirlash, tez xizmat va ishonchli yechimlar. Avtomobilingiz bizning qo'llarimizda xavfsiz.",
        viewServices: "Xizmatlarni ko'rish",
        freeConsult: "Bepul konsultatsiya",
      },
      services: {
        title: "Bizning Xizmatlarimiz",
        subtitle:
          "Avtomobilingiz uchun barcha turdagi ta'mirlash va texnik xizmat ko'rsatish",
        bodyRepair: {
          title: "Kuzov Ta'mirlash",
          desc: "Kuzov ta'mirlash, bo'yash va qayta tiklash ishlari",
        },
        quickService: {
          title: "Tezkor Xizmat",
          desc: "24/7 favqulodda ta'mirlash va yo'lda yordam xizmati",
        },
      },
      about: {
        title: "Nima uchun bizni tanlash kerak?",
        points: [
          "15 yillik tajriba va professional mutaxassislar",
          "Zamonaviy asbob-uskunalar va original ehtiyot qismlar",
          "Ishlarimizga 1 yillik kafolat beramiz",
          "Qulay narxlar va to'lov imkoniyatlari",
        ],
      },
      contact: {
        title: "Biz bilan bog'laning",
        subtitle: "Savollaringiz bormi? Biz sizga yordam berishga tayyormiz",
        phone: "Telefon",
        address: "Manzil",
        workTime: "Ish vaqti",
        schedule: {
          weekdays: "Dush-Juma: 10:00-20:00",
          saturday: "Shanba-Yak: 10:00-18:00",
        },
        city: "sh. Moskva",
        district: "Troparevo-Nikulino",
      },
      footer: {
        rights: "© 2025 Barcha huquqlar himoyalangan",
      },
    },
  };

  const t = content[language];

  const toggleLanguage = () => {
    const newLang = language === "ru" ? "uz" : "ru";
    setLanguage(newLang);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-lg">
        <div className="container mx-auto px-4">
          {/* Main Header */}
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center space-x-2 text-gray-700 hover:text-orange-500 transition-colors">
              <Wrench className="h-6 w-6 sm:h-7 sm:w-7" />
              <span className="text-lg sm:text-xl font-bold">ОлМакС‑Запад</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a
                href="#services"
                className="text-gray-600 hover:text-orange-600 transition-colors font-medium"
              >
                {t.nav.services}
              </a>
              <a
                href="#about"
                className="text-gray-600 hover:text-orange-600 transition-colors font-medium"
              >
                {t.nav.about}
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-orange-600 transition-colors font-medium"
              >
                {t.nav.contact}
              </a>
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-3">
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-1 rounded-md px-3 py-2 text-sm bg-gray-100 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-all"
              >
                <Globe className="h-4 w-4" />
                <span>{language === "ru" ? "UZ" : "RU"}</span>
              </button>
              <Button className="bg-orange-600 hover:bg-orange-700">
                <Phone className="h-4 w-4 mr-2" />
                {t.header.call}
              </Button>
              <a
                href="https://www.google.com/maps/place/Olmaks-Zapad/@55.6671714,37.4968071,643m/data=!3m2!1e3!4b1!4m6!3m5!1s0x46b54de72654feb1:0x4cea018b0f7a4e02!8m2!3d55.6671714!4d37.499382!16s%2Fg%2F11fpy_xj7m?entry=ttu&g_ep=EgoyMDI1MDcyMy4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="border-orange-600 text-orange-600 hover:bg-orange-50 bg-transparent"
                >
                  <MapPin className="h-4 w-4 mr-2" />
                  {t.header.address}
                </Button>
              </a>
            </div>

            {/* Mobile Actions */}
            <div className="flex lg:hidden items-center space-x-2">
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-1 rounded-md px-2 py-1 text-sm bg-gray-100 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-all"
              >
                <Globe className="h-4 w-4" />
                <span className="text-xs">
                  {language === "ru" ? "UZ" : "RU"}
                </span>
              </button>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMobileMenu}
                className="p-2"
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Contact Bar */}
          <div className="lg:hidden border-t border-gray-100 py-3">
            <div className="flex items-center gap-3">
              <a href="tel:+79775247768" className="flex-1">
                <Button
                  size="sm"
                  className="bg-orange-600 hover:bg-orange-700 w-full flex items-center justify-center gap-2"
                >
                  <Phone className="h-4 w-4" />
                  <span className="text-sm font-medium">{t.header.call}</span>
                </Button>
              </a>
              <a
                href="https://www.google.com/maps?q=Пр-т+Вернадского,+д.+89,+Москва,+119526"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button
                  size="sm"
                  variant="outline"
                  className="w-full flex items-center justify-center gap-2 border-orange-600 text-orange-600 hover:bg-orange-50 bg-transparent"
                >
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm font-medium">
                    {t.header.address}
                  </span>
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
            <nav className="container mx-auto px-4 py-4 space-y-4">
              <a
                href="#services"
                onClick={closeMobileMenu}
                className="block text-gray-600 hover:text-orange-600 transition-colors font-medium py-2"
              >
                {t.nav.services}
              </a>
              <a
                href="#about"
                onClick={closeMobileMenu}
                className="block text-gray-600 hover:text-orange-600 transition-colors font-medium py-2"
              >
                {t.nav.about}
              </a>
              <a
                href="#contact"
                onClick={closeMobileMenu}
                className="block text-gray-600 hover:text-orange-600 transition-colors font-medium py-2"
              >
                {t.nav.contact}
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-24 lg:pt-20 pb-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <Car className="h-16 w-16 sm:h-20 sm:w-20 mx-auto mb-6 text-orange-500" />
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 leading-tight">
              {t.hero.title}
            </h1>
            <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Button
                size="lg"
                className="bg-orange-600 hover:bg-orange-700 w-full sm:w-auto"
              >
                {t.hero.viewServices}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent w-full sm:w-auto"
              >
                {t.hero.freeConsult}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              {t.services.title}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              {t.services.subtitle}
            </p>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3">
                  {t.services.bodyRepair.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  {t.services.bodyRepair.desc}
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3">
                  {t.services.quickService.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  {t.services.quickService.desc}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                {t.about.title}
              </h2>
              <div className="space-y-4">
                {t.about.points.map((point, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="bg-orange-600 w-2 h-2 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600 text-sm sm:text-base">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-r from-gray-500 from-10% via-gray-900 via-30% to-gray-700 to-90% rounded-lg p-4 sm:p-8">
              <img
                src="https://demo.kallyas.net/autoservice/wp-content/uploads/sites/101/revslider/auto-repair/wordpress-auto-repair-slider.jpg"
                alt="Avtomobil ustaxonasi"
                className="w-full h-48 sm:h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              {t.contact.title}
            </h2>
            <p className="text-gray-300 text-sm sm:text-base">
              {t.contact.subtitle}
            </p>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Phone className="h-10 w-10 sm:h-12 sm:w-12 mx-auto mb-4 text-orange-500" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                {t.contact.phone}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base">
                +7 977 524 77 68
              </p>
            </div>
            <div>
              <MapPin className="h-10 w-10 sm:h-12 sm:w-12 mx-auto mb-4 text-orange-500" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                {t.contact.address}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base">
                {t.contact.city}
              </p>
              <p className="text-gray-300 text-sm sm:text-base">
                {t.contact.district}
              </p>
            </div>
            <div>
              <Clock className="h-10 w-10 sm:h-12 sm:w-12 mx-auto mb-4 text-orange-500" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                {t.contact.workTime}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base">
                {t.contact.schedule.weekdays}
              </p>
              <p className="text-gray-300 text-sm sm:text-base">
                {t.contact.schedule.saturday}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <Wrench className="h-6 w-6 text-orange-500" />
              <span className="text-lg sm:text-xl font-bold">ОлМакС‑Запад</span>
            </div>
            <p className="text-gray-400 text-center md:text-right text-sm sm:text-base">
              {t.footer.rights}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
