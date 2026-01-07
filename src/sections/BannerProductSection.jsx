import React from 'react';
import BannerProductLayout from '../components/BannerProductLayout';

const BannerProductSection = () => {
    return (
     <section className="  ">
        <div className="container mx-auto">
            <div className="mobile-padding grid  grid-cols-1 lg:grid-cols-3 gap-5 ">
                <BannerProductLayout
                image={"/bg-images/banner-bg/fan-banner-bg.jpg"}
                />
                  <BannerProductLayout
                image={"/bg-images/banner-bg/macbook-banner-bg.jpg"}
                />
                  <BannerProductLayout
                image={"/bg-images/banner-bg/headset-banner-bg.jpg"}
                />
            </div>
        </div>
     </section>
    );
};

export default BannerProductSection;