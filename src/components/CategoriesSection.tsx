
import React from 'react';
import { Button } from "@/components/ui/button";

const CategoriesSection = () => {
  const categories = [
    {
      name: "فساتين سهرة",
      description: "للمناسبات الخاصة",
      icon: "👗",
      gradient: "from-pink-400 to-purple-500"
    },
    {
      name: "عبايات عصرية",
      description: "أناقة في الحشمة",
      icon: "🥻",
      gradient: "from-purple-400 to-blue-500"
    },
    {
      name: "حجاب وطرح",
      description: "تشكيلة متنوعة",
      icon: "🧕",
      gradient: "from-blue-400 to-teal-500"
    },
    {
      name: "إكسسوارات",
      description: "لمسة أخيرة مميزة",
      icon: "💍",
      gradient: "from-teal-400 to-green-500"
    },
    {
      name: "أحذية نسائية",
      description: "راحة وأناقة",
      icon: "👠",
      gradient: "from-green-400 to-yellow-500"
    },
    {
      name: "حقائب يد",
      description: "أسلوب عملي",
      icon: "👜",
      gradient: "from-yellow-400 to-orange-500"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* العنوان */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            تسوقي حسب <span className="yasmine-text-gradient">التصنيف</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            اختاري من مجموعة واسعة من التصنيفات المصممة خصيصاً للمرأة العربية الأنيقة
          </p>
        </div>

        {/* شبكة التصنيفات */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="group cursor-pointer"
            >
              <div className={`relative p-6 rounded-2xl bg-gradient-to-br ${category.gradient} text-white text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl`}>
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="font-semibold text-lg mb-1">{category.name}</h3>
                <p className="text-sm opacity-90">{category.description}</p>
                
                {/* تأثير الهوفر */}
                <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* قسم العروض الخاصة */}
        <div className="mt-16 bg-gradient-to-l from-pink-50 to-yellow-50 rounded-3xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="text-center lg:text-right">
              <h3 className="text-3xl font-bold mb-4">
                عروض خاصة على <span className="yasmine-text-gradient">جميع التصنيفات</span>
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                احصلي على خصم يصل إلى 40% على مختارات من جميع التصنيفات
              </p>
              <Button 
                size="lg" 
                className="yasmine-gradient hover:opacity-90 text-white px-8 py-4 text-lg rounded-full"
              >
                اكتشفي العروض
              </Button>
            </div>
            
            <div className="text-center">
              <div className="inline-block p-8 bg-white rounded-full shadow-xl">
                <div className="text-6xl mb-4">🎉</div>
                <div className="text-4xl font-bold yasmine-text-gradient">40%</div>
                <div className="text-lg text-gray-600">خصم</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
