
import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* القسم الرئيسي */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* معلومات المتجر */}
          <div>
            <h3 className="text-3xl font-bold yasmine-text-gradient mb-4">ياسمين</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              متجرك الموثوق للأزياء العربية الأنيقة والعصرية. نقدم لك أجمل التصاميم التي تجمع بين الأصالة والحداثة.
            </p>
            
            {/* وسائل التواصل */}
            <div className="flex gap-4">
              <Button size="icon" variant="ghost" className="hover:bg-pink-600 rounded-full">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-pink-600 rounded-full">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-pink-600 rounded-full">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-pink-600 rounded-full">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* روابط سريعة */}
          <div>
            <h4 className="text-xl font-semibold mb-6">روابط سريعة</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">الرئيسية</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">من نحن</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">المنتجات</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">العروض</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">اتصل بنا</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">المدونة</a></li>
            </ul>
          </div>

          {/* خدمة العملاء */}
          <div>
            <h4 className="text-xl font-semibold mb-6">خدمة العملاء</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">سياسة الإرجاع</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">سياسة الشحن</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">طرق الدفع</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">الأسئلة الشائعة</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">دليل المقاسات</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">شروط الاستخدام</a></li>
            </ul>
          </div>

          {/* النشرة البريدية */}
          <div>
            <h4 className="text-xl font-semibold mb-6">النشرة البريدية</h4>
            <p className="text-gray-300 mb-4">
              اشتركي في نشرتنا البريدية للحصول على آخر العروض والمنتجات الجديدة
            </p>
            
            <div className="flex gap-2 mb-6">
              <Input 
                type="email" 
                placeholder="بريدك الإلكتروني"
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
              />
              <Button className="yasmine-gradient hover:opacity-90 px-6">
                اشتراك
              </Button>
            </div>

            {/* معلومات الاتصال */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-pink-400" />
                <span className="text-gray-300">+966 12 345 6789</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-pink-400" />
                <span className="text-gray-300">info@yasmine.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-pink-400" />
                <span className="text-gray-300">الرياض، المملكة العربية السعودية</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* الشريط السفلي */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-center md:text-right">
              © 2024 متجر ياسمين. جميع الحقوق محفوظة.
            </p>
            
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">سياسة الخصوصية</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">الشروط والأحكام</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">ملفات تعريف الارتباط</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
