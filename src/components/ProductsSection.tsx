
import React from 'react';
import ProductCard from './ProductCard';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from 'lucide-react';

const ProductsSection = () => {
  const products = [
    {
      id: 1,
      name: "فستان سهرة أنيق بالورود",
      price: 299,
      originalPrice: 399,
      image: "/placeholder.svg",
      category: "فساتين سهرة",
      rating: 5,
      isNew: true,
      isSale: true
    },
    {
      id: 2,
      name: "عباية كاجوال عصرية",
      price: 199,
      image: "/placeholder.svg",
      category: "عبايات",
      rating: 4,
      isNew: true
    },
    {
      id: 3,
      name: "حجاب حريري فاخر",
      price: 89,
      originalPrice: 120,
      image: "/placeholder.svg",
      category: "حجاب",
      rating: 5,
      isSale: true
    },
    {
      id: 4,
      name: "فستان يومي مريح",
      price: 149,
      image: "/placeholder.svg",
      category: "فساتين كاجوال",
      rating: 4
    },
    {
      id: 5,
      name: "طقم إكسسوارات ذهبي",
      price: 159,
      originalPrice: 200,
      image: "/placeholder.svg",
      category: "إكسسوارات",
      rating: 5,
      isSale: true
    },
    {
      id: 6,
      name: "جلابية رمضانية أنيقة",
      price: 179,
      image: "/placeholder.svg",
      category: "جلاليب",
      rating: 4,
      isNew: true
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* العنوان */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="yasmine-text-gradient">المنتجات</span> المميزة
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            اكتشفي مجموعتنا المختارة بعناية من أجمل القطع العربية الأنيقة
          </p>
        </div>

        {/* فلاتر المنتجات */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button variant="default" className="yasmine-gradient text-white rounded-full">الكل</Button>
          <Button variant="outline" className="rounded-full">فساتين</Button>
          <Button variant="outline" className="rounded-full">عبايات</Button>
          <Button variant="outline" className="rounded-full">حجاب</Button>
          <Button variant="outline" className="rounded-full">إكسسوارات</Button>
        </div>

        {/* شبكة المنتجات */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* زر عرض المزيد */}
        <div className="text-center">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-pink-300 text-pink-600 hover:bg-pink-50 px-8 py-4 text-lg rounded-full"
          >
            عرض جميع المنتجات
            <ArrowLeft className="mr-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
