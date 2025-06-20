
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Bell } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "تم الاشتراك بنجاح!",
        description: "سنرسل لك أحدث العروض والمنتجات الجديدة",
      });
      setEmail('');
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* الأيقونة والعنوان */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
              <Mail className="h-10 w-10 text-white" />
            </div>
          </div>

          <h2 className="text-4xl font-bold mb-4">
            اشتركي في <span className="yasmine-text-gradient">النشرة البريدية</span>
          </h2>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            كوني أول من يعرف عن المنتجات الجديدة والعروض الحصرية والخصومات المميزة
          </p>

          {/* نموذج الاشتراك */}
          <form onSubmit={handleSubscribe} className="max-w-md mx-auto mb-8">
            <div className="flex gap-3">
              <Input
                type="email"
                placeholder="أدخلي بريدك الإلكتروني"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-12 rounded-full border-gray-300 focus:border-pink-500"
                required
              />
              <Button 
                type="submit"
                className="h-12 px-8 yasmine-gradient hover:opacity-90 text-white rounded-full font-semibold"
              >
                اشتراك
              </Button>
            </div>
          </form>

          {/* إحصائيات */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold yasmine-text-gradient mb-2">15,000+</div>
              <p className="text-gray-600">عضوة مشتركة</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold yasmine-text-gradient mb-2">500+</div>
              <p className="text-gray-600">منتج حصري</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold yasmine-text-gradient mb-2">98%</div>
              <p className="text-gray-600">رضا العملاء</p>
            </div>
          </div>

          {/* رسالة إضافية */}
          <div className="mt-8 p-4 bg-white/50 rounded-2xl border border-white/20 backdrop-blur-sm">
            <div className="flex items-center justify-center gap-2 text-gray-700">
              <Bell className="h-5 w-5 text-pink-500" />
              <span className="text-sm">لا نشارك بياناتك مع أطراف خارجية - يمكنك إلغاء الاشتراك في أي وقت</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
