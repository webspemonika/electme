import React from 'react';
import BannerProductLayout from '../components/BannerProductLayout';

const SpecialOfferBannerSection = () => {
    return (
        <section className="py-5 lg:py-10">
            <div className="container mx-auto ">
                <div className="mobile-padding grid grid-cols-1 lg:grid-cols-3 gap-5">
                    <div className="">
                        <BannerProductLayout
                            image={"/public/bg-images/banner-bg/2-fan-banner-bg.jpg"}
                        />
                    </div>
                    <div className="lg:col-span-2">
                        <BannerProductLayout
                            image={"/public/bg-images/banner-bg/laptop-banner-bg.jpg"}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SpecialOfferBannerSection;