import React from 'react';
import HeroSection from '../sections/HeroSection';
import BannerProductSection from '../sections/BannerProductSection';
import SpecialOfferBannerSection from '../sections/SpecialOfferBannerSection';
import CustomerBenefitSection from '../sections/CustomerBenefitSection';
import ProductCategorySection from '../sections/ProductCategorySection';
import CustomerReviewSection from '../sections/CustomerReviewSection';
import BlogSection from '../sections/BlogSection';
import CompanyLogoSection from '../sections/CompanyLogoSection';
import FeatureProductSection from '../sections/FeatureProductSection';
import NewProductsSection from '../sections/NewProductsSection';
import WeekenDeals from '../sections/WeekenDeals';

const HomePage = () => {
    return (
      <>
      <HeroSection/>
      <CustomerBenefitSection/>
      <FeatureProductSection/>
      <BannerProductSection/>
      <NewProductsSection/>
      {/* 5 sections end */}
      <WeekenDeals/>
      <ProductCategorySection/>
      <SpecialOfferBannerSection/>
      <CustomerReviewSection/>
      <BlogSection/>
      {/* 10 sections end--- */}
      <CompanyLogoSection/>
      </>
    );
};

export default HomePage;