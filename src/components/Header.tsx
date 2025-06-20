
import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, Heart, Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* شريط المعلومات العلوي */}
      <div className="bg-gradient-to-r from-pink-500 to-yellow-400 text-white text-center py-2 text-sm">
        شحن مجاني للطلبات أكثر من 200 ريال | خصم 20% على المجموعة الجديدة
      </div>
      
      {/* الهيدر الرئيسي */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* اللوجو */}
          <div className="flex-shrink-0">
            <h1 className="text-3xl font-bold yasmine-text-gradient">
              ياسمين
            </h1>
            <p className="text-xs text-gray-600">متجر الأناقة العربية</p>
          </div>

          {/* شريط البحث */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <Input 
                type="text" 
                placeholder="ابحث عن المنتجات..."
                className="pr-10 pl-4 py-3 border-2 border-pink-200 focus:border-pink-400 rounded-full"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            </div>
          </div>

          {/* أيقونات التنقل */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="hidden md:flex items-center gap-2">
              <Phone className="h-5 w-5" />
              <span>اتصل بنا</span>
            </Button>
            
            <Button variant="ghost" size="sm">
              <Heart className="h-6 w-6" />
            </Button>
            
            <Button variant="ghost" size="sm">
              <User className="h-6 w-6" />
            </Button>
            
            <Button variant="ghost" size="sm" className="relative">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </Button>

            <Button 
              variant="ghost" 
              size="sm" 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* القائمة الرئيسية */}
        <nav className="hidden md:block border-t border-gray-200">
          <ul className="flex justify-center gap-8 py-4">
            <li><a href="#" className="text-gray-700 hover:text-pink-500 font-medium transition-colors">الرئيسية</a></li>
            <li><a href="#" className="text-gray-700 hover:text-pink-500 font-medium transition-colors">الفساتين</a></li>
            <li><a href="#" className="text-gray-700 hover:text-pink-500 font-medium transition-colors">العبايات</a></li>
            <li><a href="#" className="text-gray-700 hover:text-pink-500 font-medium transition-colors">الحجاب</a></li>
            <li><a href="#" className="text-gray-700 hover:text-pink-500 font-medium transition-colors">الإكسسوارات</a></li>
            <li><a href="#" className="text-gray-700 hover:text-pink-500 font-medium transition-colors">التخفيضات</a></li>
            <li><a href="#" className="text-gray-700 hover:text-pink-500 font-medium transition-colors">اتصل بنا</a></li>
          </ul>
        </nav>

        {/* القائمة المحمولة */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="mb-4">
              <Input 
                type="text" 
                placeholder="ابحث عن المنتجات..."
                className="w-full pr-4 pl-4 py-3 border-2 border-pink-200 focus:border-pink-400 rounded-full"
              />
            </div>
            <ul className="space-y-2">
              <li><a href="#" className="block py-2 text-gray-700 hover:text-pink-500">الرئيسية</a></li>
              <li><a href="#" className="block py-2 text-gray-700 hover:text-pink-500">الفساتين</a></li>
              <li><a href="#" className="block py-2 text-gray-700 hover:text-pink-500">العبايات</a></li>
              <li><a href="#" className="block py-2 text-gray-700 hover:text-pink-500">الحجاب</a></li>
              <li><a href="#" className="block py-2 text-gray-700 hover:text-pink-500">الإكسسوارات</a></li>
              <li><a href="#" className="block py-2 text-gray-700 hover:text-pink-500">التخفيضات</a></li>
              <li><a href="#" className="block py-2 text-gray-700 hover:text-pink-500">اتصل بنا</a></li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
