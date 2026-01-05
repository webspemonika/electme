import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation} from 'swiper/modules';
import "swiper/css"
import "swiper/css/navigation"
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const TopHeader = () => {

    const deliveryFeatures = [
        {
            id: 1,
            name: "Free shipping on orders over $60",
        },
        {
            id: 2,
            name: "30-days money back guarantee",
        },
        {
            id: 3,
            name: "24/7 customer support available",
        },
        {
            id: 4,
            name: "Exclusive deals for members",
        }
    ]
    return (
        <section className="bg-[url(/bg-images/top-header-bg.png)] bg-no-repeat bg-cover bg-center py-2 lg:block hidden ">
            <div className="max-w-140 mx-auto ">
                {/* content start... */}
                <div className="relative">

                    {/* navigation btn start  ... */}
                    <button type="button" className='prev-btn cursor-pointer text-2xl text-white  outline-none absolute -left-5 top-1/2 -translate-y-1/2 '><IoIosArrowBack /></button>
                    <button type="button" className='next-btn cursor-pointer text-2xl  text-white outline-none absolute -right-5 top-1/2 -translate-y-1/2 '><IoIosArrowForward /></button>
                    {/* navigation btn end  ... */}
                    <Swiper
                        slidesPerView={1}
                        modules={[Autoplay, Navigation]}
                        loop={true}
                        speed={1000}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false
                        }}
                        navigation={{
                            prevEl: ".prev-btn",
                            nextEl: ".next-btn"
                        }}
                    >
                        {deliveryFeatures.map((feature) => (
                            <SwiperSlide key={feature.id} >
                                <p className="text-base text-white font-semibold font-fredoka normal-case text-center"> {feature.name}  </p>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                {/* content end... */}
            </div>
        </section>
    );
};

export default TopHeader;