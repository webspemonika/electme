import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css"
import "swiper/css/navigation"
import { Autoplay, Navigation } from 'swiper/modules';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Header from '../utils/Header';

const CustomerReviewSection = () => {
    const reviewInfo = [
        {
            id: 1,
            reviewText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
            reviewImage: "/images/clients/client-1.jpg",
            reviewerName: "alli grater",
            reviewerDesignation: "designer "
        }
        , {
            id: 2,
            reviewText: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
            reviewImage: "/images/clients/client-2.jpg",
            reviewerName: "jone doe",
            reviewerDesignation: "engineer"
        },

        {
            id: 3,
            reviewText: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search.",
            reviewImage: "/images/clients/client-3.jpg",
            reviewerName: "rose bush",
            reviewerDesignation: "IT expert"
        }, {
            id: 4,
            reviewText: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search.",
            reviewImage: "/images/clients/client-4.jpg",
            reviewerName: "rose bush",
            reviewerDesignation: "IT expert"
        },
        {
            id: 5,
            reviewText: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search.",
            reviewImage: "/images/clients/client-5.jpg",
            reviewerName: "rose bush",
            reviewerDesignation: "IT expert"
        },
        {
            id: 6,
            reviewText: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search.",
            reviewImage: "/images/clients/client-3.jpg",
            reviewerName: "rose bush",
            reviewerDesignation: "IT expert"
        }
    ]



    return (
        <section className="py-5 lg:py-10 bg-[#f2f2f2] ">
            <div className="container mx-auto ">
                <div className="mobile-padding">
                    {/* header start.. */}
                   <Header
                   headingText={"see what our customers say"}
                   />
                    {/* header end... */}
                    {/* entire layout start... */}
                    <div className="  relative mt-6 group">
                        {/* navigation btn start... */}
                        <button className="review-prev-btn swiper-left  "><IoIosArrowBack />  </button>
                        <button className="review-next-btn swiper-right  "><IoIosArrowForward />  </button>
                        {/* navigation btn swiper... */}
                        {/* swiper start... */}
                        <Swiper
                            slidesPerView={4}
                            spaceBetween={20}
                            modules={[Navigation, Autoplay]}
                            loop={true}
                            speed={1000}
                            navigation={{
                                prevEl: ".review-prev-btn",
                                nextEl: ".review-next-btn"
                            }}
                            breakpoints={{
                                0: { slidesPerView: 1,  spaceBetween:5},
                                320: { slidesPerView: 1,spaceBetween:5 },
                                480: { slidesPerView: 2,spaceBetween:5 },
                                768: { slidesPerView: 3,spaceBetween:10 },
                                1024: { slidesPerView: 4,spaceBetween:20 }

                            }}
                        >

                            {reviewInfo.map((review) => (
                                <SwiperSlide key={review.id}>
                                    <div className="p-5 bg-white rounded-lg flex flex-col items-center text-center ">
                                        <p className="text-[15px] text-black-500 font-normal font-heebo leading-[150%] normal-case "> {review.reviewText} </p>
                                        <div className="flex gap-4 items-center mt-5">
                                            <img
                                                src={review.reviewImage}
                                                alt={review.reviewerName}
                                                className="size-14 rounded-full "
                                            />
                                            <div className="">
                                                <h6 className="text-[15px] text-black-500 font-medium font-heebo leading-[130%] capitalize ">{review.reviewerName}  </h6>
                                                <p className="text-[13px] text-black-500 font-normal font-heebo leading-[130%] capitalize ">  {review.reviewerDesignation} </p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        {/* swiper end... */}
                    </div>
                    {/* entire layout end... */}
                </div>

            </div>
        </section>
    );
};

export default CustomerReviewSection;