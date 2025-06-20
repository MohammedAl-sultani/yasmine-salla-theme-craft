import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from 'lucide-react';
const HeroBanner = () => {
  return <section className="relative overflow-hidden bg-gradient-to-l from-pink-50 via-white to-yellow-50">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* النص والمحتوى */}
          <div className="text-center lg:text-right order-2 lg:order-1">
            <h2 className="text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="yasmine-text-gradient">مجموعة</span>
              <br />
              <span className="text-gray-800">الربيع الجديدة</span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
              اكتشفي أحدث صيحات الموضة العربية الأنيقة مع مجموعتنا الحصرية من الفساتين والعبايات العصرية
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="yasmine-gradient hover:opacity-90 text-white px-8 py-4 text-lg rounded-full shadow-xl transform hover:scale-105 transition-all duration-300">
                تسوقي الآن
                <ArrowLeft className="mr-2 h-5 w-5" />
              </Button>
              
              <Button variant="outline" size="lg" className="border-2 border-pink-300 text-pink-600 hover:bg-pink-50 px-8 py-4 text-lg rounded-full">
                شاهدي المجموعة
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-3xl font-bold yasmine-text-gradient">+500</p>
                <p className="text-sm text-gray-600">منتج حصري</p>
              </div>
              <div>
                <p className="text-3xl font-bold yasmine-text-gradient">+1000</p>
                <p className="text-sm text-gray-600">عميلة سعيدة</p>
              </div>
              <div>
                <p className="text-3xl font-bold yasmine-text-gradient">5★</p>
                <p className="text-sm text-gray-600">تقييم العملاء</p>
              </div>
            </div>
          </div>

          {/* الصورة */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative">
              {/* خلفية دائرية */}
              <div className="absolute inset-0 yasmine-gradient rounded-full transform rotate-6 scale-110 opacity-20"></div>
              
              {/* الصورة الرئيسية */}
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="aspect-[3/4] -bottom-0.5 bg-gradient-to-bl to-yellow-100 rounded-2xl flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <div className="w-32 h-32 bg-pink-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-4xl">👗</span>
                    </div>
                    <p className="text-lg font-medium">صورة المنتج</p>
                  </div>
                </div>
              </div>

              {/* عناصر ديكورية */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full opacity-80 animate-bounce"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-pink-400 rounded-full opacity-60 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* عناصر ديكورية في الخلفية */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-pink-200 rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-20 right-16 w-16 h-16 bg-yellow-200 rounded-full opacity-30 animate-float" style={{
      animationDelay: '2s'
    }}></div>
    </section>;
};
export default HeroBanner;