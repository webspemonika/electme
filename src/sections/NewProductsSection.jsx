import React from 'react';
import Header from '../utils/Header';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import ProductLayout from '../components/ProductLayout';

const NewProductsSection = () => {
    const newProducts = [
        {
            id: 1,
            productDefaultImage: "/images/new-products/computer-specker.jpg",
            hoverProductImage: '/images/new-products/computer-specker-hover.jpg',
            productTitle: "Galaxy Watch5 44mm Bluetooth Smart Watch",
            rating: "3",
            newPrice: '$155',
            // oldPrice:"$199",
            sale: "sale!"

        },
        {
            id: 2,
            productDefaultImage: "/images/new-products/home-sequrity-camera.jpg",
            hoverProductImage: '/images/new-products/home-sequrity-camera-hover.jpg',
            productTitle: "Galaxy Watch5 44mm Bluetooth Smart Watch",
            rating: "3",
            newPrice: '$155',
            // oldPrice:"$199",

        },
        {
            id: 3,
            productDefaultImage: "/images/new-products/iphone.jpg",
            hoverProductImage: '/images/new-products/iphone-hover.jpg',
            productTitle: "Galaxy Watch5 44mm Bluetooth Smart Watch",
            rating: "3",
            newPrice: '$155',
            // oldPrice:"$199",

        },
        {
            id: 4,
            productDefaultImage: "/images/new-products/mouse.jpg",
            hoverProductImage: '/images/new-products/mouse-hover.jpg',
            productTitle: "Galaxy Watch5 44mm Bluetooth Smart Watch",
            rating: "3",
            newPrice: '$155',
            // oldPrice:"$199",

        },
        {
            id: 5,
            productDefaultImage: "/images/new-products/sequrity-camera.jpg",
            hoverProductImage: '/images/new-products/sequrity-camera-hover.jpg',
            productTitle: "Galaxy Watch5 44mm Bluetooth Smart Watch",
            rating: "3",
            newPrice: '$155',
            // oldPrice:"$199",
            sale: "sale!"

        },
        {
            id: 6,
            productDefaultImage: "/images/new-products/smart-specker.jpg",
            hoverProductImage: '/images/new-products/smart-specker-hover.jpg',
            productTitle: "Galaxy Watch5 44mm Bluetooth Smart Watch",
            rating: "3",
            newPrice: '$155',
            // oldPrice:"$199",

        },
        {
            id: 7,
            productDefaultImage: "/images/new-products/watch.jpg",
            hoverProductImage: '/images/new-products/watch-hover.jpg',
            productTitle: "Galaxy Watch5 44mm Bluetooth Smart Watch",
            rating: "3",
            newPrice: '$155',
            // oldPrice:"$199",

        },
        {
            id: 8,
            productDefaultImage: "/images/new-products/wifi-camera.jpg",
            hoverProductImage: '/images/new-products/wifi-camera-hover.jpg',
            productTitle: "Galaxy Watch5 44mm Bluetooth Smart Watch",
            rating: "3",
            newPrice: '$155',
            // oldPrice:"$199",

        },
    ]
    return (
        <section className="py-5 lg:py-8">
            <div className="container mx-auto ">
                <div className="mobile-padding">
                    {/* header start.. */}
                    <Header
                        headingText={"new products"}
                    />
                    {/* header end... */}
                    {/* products body start... */}
                    <div className="relative group">
                        {/* navigation start... */}
                        <span className="new-product-prev-btn swiper-left"> <IoIosArrowBack /> </span>
                        <span className="new-product-next-btn swiper-right"> <IoIosArrowForward /> </span>
                        {/* navigation end... */}

                        <Swiper
                            slidesPerView={7}
                            spaceBetween={0}
                            modules={[Navigation]}
                            loop={true}
                            speed={1000}
                            navigation={{
                                prevEl: ".new-product-prev-btn",
                                nextEl: ".new-product-next-btn"
                            }}
                               breakpoints={{
                                // Mobile (320px and up)
                                320: { slidesPerView: 1.5, spaceBetween: 0, },
                                // Small Mobile (480px and up)
                                480: { slidesPerView: 2.5, spaceBetween: 0, },
                                // Tablet Portrait (640px and up)
                                640: { slidesPerView: 4, spaceBetween: 0, },
                                // Tablet Landscape (768px and up)
                                768: { slidesPerView: 4, spaceBetween: 0, },
                                // Desktop (1024px and up)
                                1024: { slidesPerView: 5, spaceBetween: 0, },
                                // Large Desktop (1280px and up)
                                1280: { slidesPerView: 7, spaceBetween: 0, },
                            }}

                        >
                            {newProducts.map((newProduct) => (
                                <SwiperSlide key={newProduct.id} >
                                    <ProductLayout product={newProduct} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    {/* products body end... */}
                </div>
            </div>
        </section>
    );
};

export default NewProductsSection;