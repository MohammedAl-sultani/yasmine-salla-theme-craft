
import React from 'react';
import { Heart, ShoppingCart, Eye, Star } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviewCount?: number;
  isNew?: boolean;
  isSale?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  price,
  originalPrice,
  image,
  category,
  rating,
  reviewCount = 0,
  isNew,
  isSale
}) => {
  const discountPercentage = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-pink-200">
      {/* صورة المنتج */}
      <div className="relative overflow-hidden aspect-[4/5]">
        <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
          <div className="text-center text-gray-400">
            <div className="w-20 h-20 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full mx-auto mb-3 flex items-center justify-center">
              <span className="text-2xl">👗</span>
            </div>
            <p className="text-xs">صورة المنتج</p>
          </div>
        </div>

        {/* الشارات */}
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          {isNew && (
            <Badge className="bg-green-500 hover:bg-green-500 text-white text-xs">
              جديد
            </Badge>
          )}
          {isSale && (
            <Badge className="bg-red-500 hover:bg-red-500 text-white text-xs">
              -{discountPercentage}%
            </Badge>
          )}
        </div>

        {/* أيقونات التفاعل */}
        <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <div className="flex flex-col gap-2">
            <Button size="icon" variant="secondary" className="rounded-full w-9 h-9 bg-white/90 hover:bg-white shadow-sm">
              <Heart className="h-4 w-4 text-gray-600" />
            </Button>
            <Button size="icon" variant="secondary" className="rounded-full w-9 h-9 bg-white/90 hover:bg-white shadow-sm">
              <Eye className="h-4 w-4 text-gray-600" />
            </Button>
          </div>
        </div>

        {/* زر الإضافة للسلة */}
        <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
          <Button className="w-full yasmine-gradient hover:opacity-90 text-white rounded-full h-10 text-sm font-medium">
            <ShoppingCart className="h-4 w-4 ml-2" />
            أضف للسلة
          </Button>
        </div>

        {/* طبقة التأثير */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
      </div>

      {/* تفاصيل المنتج */}
      <div className="p-4">
        {/* الفئة */}
        <p className="text-xs text-gray-500 mb-2 font-medium">{category}</p>
        
        {/* اسم المنتج */}
        <h3 className="font-semibold text-gray-800 text-base leading-tight mb-3 hover:text-pink-600 transition-colors cursor-pointer line-clamp-2">
          {name}
        </h3>

        {/* التقييم */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-3.5 h-3.5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500">({rating}.0)</span>
          {reviewCount > 0 && (
            <span className="text-xs text-gray-400">• {reviewCount} تقييم</span>
          )}
        </div>

        {/* السعر */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-pink-600">{price} ر.س</span>
            {originalPrice && (
              <span className="text-sm text-gray-400 line-through">{originalPrice} ر.س</span>
            )}
          </div>
          {isSale && (
            <span className="text-xs text-green-600 font-medium">
              وفّر {originalPrice! - price} ر.س
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
