
import React from 'react';
import Header from '@/components/Header';
import HeroBanner from '@/components/HeroBanner';
import CategoriesSection from '@/components/CategoriesSection';
import ProductsSection from '@/components/ProductsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroBanner />
      <CategoriesSection />
      <ProductsSection />
      <Footer />
    </div>
  );
};

export default Index;
