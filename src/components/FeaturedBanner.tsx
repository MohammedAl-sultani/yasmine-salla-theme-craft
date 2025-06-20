
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Star, Gift, Truck } from 'lucide-react';

const FeaturedBanner = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* بانر العرض الخاص */}
        <div className="bg-gradient-to-l from-pink-500 via-purple-500 to-blue-500 rounded-3xl p-8 lg:p-12 mb-12 text-white text-center relative overflow-hidden">
          {/* عناصر تزيينية */}
          <div className="absolute top-4 right-4 opacity-20">
            <Star className="h-12 w-12" />
          </div>
          <div className="absolute bottom-4 left-4 opacity-20">
            <Gift className="h-16 w-16" />
          </div>
          
          <div className="relative z-10">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              عروض مميزة لفترة محدودة
            </h2>
            <p className="text-xl mb-6 opacity-90">
              خصومات تصل إلى 70% على مختارات حصرية
            </p>
            <Button 
              size="lg" 
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-full font-semibold"
            >
              تسوقي الآن
              <ArrowLeft className="mr-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* مميزات الخدمة */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm border">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Truck className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">شحن مجاني</h3>
            <p className="text-gray-600">للطلبات أكثر من 200 ريال داخل المملكة</p>
          </div>

          <div className="text-center p-6 bg-white rounded-2xl shadow-sm border">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">ضمان الجودة</h3>
            <p className="text-gray-600">منتجات عالية الجودة مع ضمان الاستبدال</p>
          </div>

          <div className="text-center p-6 bg-white rounded-2xl shadow-sm border">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Gift className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">هدايا مجانية</h3>
            <p className="text-gray-600">هدية مجانية مع كل طلب للعضوات الجدد</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBanner;
