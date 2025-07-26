import { Wrench, Car, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 ">
      {}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Wrench className="h-8 w-8 text-orange-600" />
              <span className="text-2xl font-bold text-gray-900">WorkShop</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#services"
                className="text-gray-600 hover:text-orange-600 transition-colors"
              >
                Xizmatlar
              </a>
              <a
                href="#about"
                className="text-gray-600 hover:text-orange-600 transition-colors"
              >
                Biz haqimizda
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-orange-600 transition-colors"
              >
                Aloqa
              </a>
            </nav>
            <Button className="bg-orange-600 hover:bg-orange-700 flex">
              <Phone className="h-4 w-4 mr-2 mt-1 " />
              Qo'ng'iroq qilish
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <Car className="h-20 w-20 mx-auto mb-6 text-orange-500" />
            <h1 className="text-5xl font-bold mb-6">
              Professional Avtomobil Ta'mirlash Xizmati
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Yuqori sifatli ta'mirlash, tez xizmat va ishonchli yechimlar.
              Avtomobilingiz bizning qo'llarimizda xavfsiz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                Xizmatlarni ko'rish
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
              >
                Bepul konsultatsiya
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Bizning Xizmatlarimiz
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Avtomobilingiz uchun barcha turdagi ta'mirlash va texnik xizmat
              ko'rsatish
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Dvigatel Ta'mirlash
                </h3>
                <p className="text-gray-600">
                  Professional dvigatel diagnostikasi va ta'mirlash xizmatlari
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Kuzov Ta'mirlash</h3>
                <p className="text-gray-600">
                  Kuzov ta'mirlash, bo'yash va qayta tiklash ishlari
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Tezkor Xizmat</h3>
                <p className="text-gray-600">
                  24/7 favqulodda ta'mirlash va yo'lda yordam xizmati
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Nima uchun bizni tanlash kerak?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-orange-600 w-2 h-2 rounded-full mt-2"></div>
                  <p className="text-gray-600">
                    15 yillik tajriba va professional mutaxassislar
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-orange-600 w-2 h-2 rounded-full mt-2"></div>
                  <p className="text-gray-600">
                    Zamonaviy asbob-uskunalar va original ehtiyot qismlar
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-orange-600 w-2 h-2 rounded-full mt-2"></div>
                  <p className="text-gray-600">
                    Ishlarimizga 1 yillik kafolat beramiz
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-orange-600 w-2 h-2 rounded-full mt-2"></div>
                  <p className="text-gray-600">
                    Qulay narxlar va to'lov imkoniyatlari
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Avtomobil ustaxonasi"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Biz bilan bog'laning</h2>
            <p className="text-gray-300">
              Savollaringiz bormi? Biz sizga yordam berishga tayyormiz
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Phone className="h-12 w-12 mx-auto mb-4 text-orange-500" />
              <h3 className="text-xl font-semibold mb-2">Telefon</h3>
              <p className="text-gray-300">+998 90 123 45 67</p>
              <p className="text-gray-300">+998 91 234 56 78</p>
            </div>

            <div>
              <MapPin className="h-12 w-12 mx-auto mb-4 text-orange-500" />
              <h3 className="text-xl font-semibold mb-2">Manzil</h3>
              <p className="text-gray-300">Toshkent shahar</p>
              <p className="text-gray-300">Chilonzor tumani</p>
            </div>

            <div>
              <Clock className="h-12 w-12 mx-auto mb-4 text-orange-500" />
              <h3 className="text-xl font-semibold mb-2">Ish vaqti</h3>
              <p className="text-gray-300">Dush-Juma: 8:00-18:00</p>
              <p className="text-gray-300">Shanba: 9:00-15:00</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Wrench className="h-6 w-6 text-orange-500" />
              <span className="text-xl font-bold">WorkShop</span>
            </div>
            <p className="text-gray-400 text-center md:text-right">
              © 2024 Barcha huquqlar himoyalangan
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
