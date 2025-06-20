
import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Filter, Grid3X3, LayoutGrid } from 'lucide-react';

const ProductsSection = () => {
  const [activeFilter, setActiveFilter] = useState('الكل');
  const [viewMode, setViewMode] = useState('grid');

  const filters = ['الكل', 'فساتين', 'عبايات', 'حجاب', 'إكسسوارات', 'أحذية'];

  const products = [
    {
      id: 1,
      name: "فستان سهرة أنيق بالورود المطرزة",
      price: 299,
      originalPrice: 399,
      image: "/placeholder.svg",
      category: "فساتين سهرة",
      rating: 5,
      reviewCount: 24,
      isNew: true,
      isSale: true
    },
    {
      id: 2,
      name: "عباية كاجوال عصرية بتطريز ذهبي",
      price: 199,
      image: "/placeholder.svg",
      category: "عبايات",
      rating: 4,
      reviewCount: 18,
      isNew: true
    },
    {
      id: 3,
      name: "حجاب حريري فاخر متعدد الألوان",
      price: 89,
      originalPrice: 120,
      image: "/placeholder.svg",
      category: "حجاب",
      rating: 5,
      reviewCount: 32,
      isSale: true
    },
    {
      id: 4,
      name: "فستان يومي مريح للصيف",
      price: 149,
      image: "/placeholder.svg",
      category: "فساتين كاجوال",
      rating: 4,
      reviewCount: 15
    },
    {
      id: 5,
      name: "طقم إكسسوارات ذهبي كامل",
      price: 159,
      originalPrice: 200,
      image: "/placeholder.svg",
      category: "إكسسوارات",
      rating: 5,
      reviewCount: 28,
      isSale: true
    },
    {
      id: 6,
      name: "جلابية رمضانية أنيقة ومريحة",
      price: 179,
      image: "/placeholder.svg",
      category: "جلاليب",
      rating: 4,
      reviewCount: 12,
      isNew: true
    },
    {
      id: 7,
      name: "حذاء كعب عالي للمناسبات",
      price: 249,
      originalPrice: 299,
      image: "/placeholder.svg",
      category: "أحذية",
      rating: 4,
      reviewCount: 20,
      isSale: true
    },
    {
      id: 8,
      name: "حقيبة يد جلدية فاخرة",
      price: 329,
      image: "/placeholder.svg",
      category: "حقائب",
      rating: 5,
      reviewCount: 35,
      isNew: true
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* العنوان والوصف */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="yasmine-text-gradient">المنتجات</span> المميزة
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            اكتشفي مجموعتنا المختارة بعناية من أجمل القطع العربية الأنيقة التي تناسب جميع المناسبات
          </p>
        </div>

        {/* شريط الفلاتر والإعدادات */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
          {/* فلاتر المنتجات */}
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                className={`rounded-full px-6 py-2 text-sm transition-all ${
                  activeFilter === filter
                    ? 'yasmine-gradient text-white shadow-lg'
                    : 'border-gray-300 text-gray-600 hover:border-pink-300 hover:text-pink-600 hover:bg-pink-50'
                }`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </Button>
            ))}
          </div>

          {/* إعدادات العرض */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 border border-gray-300 rounded-lg p-1">
              <Button
                size="sm"
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                className="p-2"
                onClick={() => setViewMode('grid')}
              >
                <LayoutGrid className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                className="p-2"
                onClick={() => setViewMode('list')}
              >
                <Grid3X3 className="h-4 w-4" />
              </Button>
            </div>
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              فلترة
            </Button>
          </div>
        </div>

        {/* عداد النتائج */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">
            عرض {products.length} منتج من أصل {products.length}
          </p>
          <div className="text-sm text-gray-500">
            مرتب حسب: الأحدث
          </div>
        </div>

        {/* شبكة المنتجات */}
        <div className={`grid gap-6 mb-12 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
            : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
        }`}>
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* زر عرض المزيد */}
        <div className="text-center">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-pink-300 text-pink-600 hover:bg-pink-50 hover:border-pink-400 px-8 py-4 text-lg rounded-full font-semibold transition-all"
          >
            عرض جميع المنتجات ({products.length * 3}+)
            <ArrowLeft className="mr-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
