
import React from 'react';
import { Heart, ShoppingCart, Eye } from 'lucide-react';
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
  isNew,
  isSale
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group transform hover:-translate-y-2">
      {/* صورة المنتج */}
      <div className="relative overflow-hidden">
        <div className="aspect-[3/4] bg-gradient-to-b from-pink-50 to-yellow-50 flex items-center justify-center">
          <div className="text-center text-gray-400">
            <div className="w-24 h-24 bg-pink-200 rounded-full mx-auto mb-3 flex items-center justify-center">
              <span className="text-3xl">👗</span>
            </div>
            <p className="text-sm">صورة المنتج</p>
          </div>
        </div>

        {/* الشارات */}
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          {isNew && <Badge className="bg-green-500 hover:bg-green-500">جديد</Badge>}
          {isSale && <Badge className="bg-red-500 hover:bg-red-500">تخفيض</Badge>}
        </div>

        {/* أيقونات التفاعل */}
        <div className="absolute top-3 left-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button size="icon" variant="secondary" className="rounded-full bg-white/80 hover:bg-white">
            <Heart className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="secondary" className="rounded-full bg-white/80 hover:bg-white">
            <Eye className="h-4 w-4" />
          </Button>
        </div>

        {/* زر الإضافة للسلة */}
        <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button className="w-full yasmine-gradient hover:opacity-90 text-white rounded-full">
            <ShoppingCart className="h-4 w-4 ml-2" />
            أضف للسلة
          </Button>
        </div>
      </div>

      {/* تفاصيل المنتج */}
      <div className="p-4">
        <div className="mb-2">
          <p className="text-sm text-gray-500 mb-1">{category}</p>
          <h3 className="font-semibold text-gray-800 text-lg leading-tight hover:text-pink-600 transition-colors cursor-pointer">
            {name}
          </h3>
        </div>

        {/* التقييم */}
        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <span 
              key={i} 
              className={`text-sm ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            >
              ★
            </span>
          ))}
          <span className="text-sm text-gray-500 mr-2">({rating}.0)</span>
        </div>

        {/* السعر */}
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-pink-600">{price} ريال</span>
          {originalPrice && (
            <span className="text-sm text-gray-400 line-through">{originalPrice} ريال</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
