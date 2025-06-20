
import React from 'react';
import Header from '@/components/Header';
import HeroBanner from '@/components/HeroBanner';
import CategoriesSection from '@/components/CategoriesSection';
import ProductsSection from '@/components/ProductsSection';
import FeaturedBanner from '@/components/FeaturedBanner';
import NewsletterSection from '@/components/NewsletterSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroBanner />
      <CategoriesSection />
      <FeaturedBanner />
      <ProductsSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Index;
