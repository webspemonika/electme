import React from 'react';
import Header from '../utils/Header';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation"
import { Navigation } from 'swiper/modules';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const Team = () => {
    const teamInfo = [
        {
            id: 1,
            image: "/images/about/team-1.jpg",
            name: "Johen Deceno",
            designation: "Web Developer"
        },
        {
            id: 2,
            image: "/images/about/team-2.jpg",
            name: "July Wood",
            designation: "Front-end Engineer"
        },
        {
            id: 3,
            image: "/images/about/team-3.jpg",
            name: "Monojy Malik",
            designation: "Graphic Designer"
        },
        {
            id: 4,
            image: "/images/about/team-4.jpg",
            name: "Rubina Delik",
            designation: "Co-Founder"
        },
        {
            id: 5,
            image: "/images/about/team-4.jpg",
            name: "Mitchell Doyle",
            designation: "Web Developer"
        },
        {
            id: 6,
            image: "/images/about/team-4.jpg",
            name: "Mitchell Doyle",
            designation: "Web Developer"
        }
    ]
    return (
        <section className="py-5">
            <div className="container mx-auto ">
                <div className=" mobile-padding">
                    {/* heading start .... */}
                    <Header
                        headingText={"meet our executive members"}
                    />
                    {/* heading end.... */}
                    {/* content start... */}
                    <div className="mt-4 lg:mt-7 relative group">
                        {/* navigation btn */}
                        <span className="team-prev-btn swiper-left"> <IoIosArrowBack /> </span>
                        <span className="team-next-btn swiper-right"><IoIosArrowForward /> </span>
                        <Swiper
                            modules={[Navigation]}
                            slidesPerView={5}
                            spaceBetween={25}
                            navigation={{
                                prevEl: ".team-prev-btn",
                                nextEl: ".team-next-btn"
                            }}
                            loop={true}
                            speed={1000}
                            breakpoints={{
                                // Mobile (320px and up)
                                320: { slidesPerView: 1.5, spaceBetween: 10, },
                                // Small Mobile (480px and up)
                                480: { slidesPerView: 2, spaceBetween: 10, },
                                // Tablet Portrait (640px and up)
                                640: { slidesPerView: 3, spaceBetween: 10, },
                                // Tablet Landscape (768px and up)
                                768: { slidesPerView: 3, spaceBetween: 15, },
                                // Desktop (1024px and up)
                                1024: { slidesPerView: 4, spaceBetween: 25, },
                                // Large Desktop (1280px and up)
                                1280: { slidesPerView: 5, spaceBetween: 25, },
                            }}
                        >
                            {teamInfo.map((team) => (
                                <SwiperSlide>
                                    <div key={team.id}
                                        className="">
                                        {/* 1.image */}
                                        <img
                                            src={team.image}
                                            alt={team.name}
                                            className="w-full h-auto  object-cover "
                                        />
                                        <div className="text-center mt-1 lg:mt-4">
                                            {/* 2. name */}
                                            <p className="text-base lg:text-xl text-black-600 font-medium font-heebo leading-[150%] capitalize "> {team.name} </p>
                                            {/* 3.designation  */}
                                            <p className="text-15px-black-normal"> {team.designation} </p>
                                        </div>
                                        {/*--------end------ */}
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    {/* content end */}
                </div>

            </div>
        </section>
    );
};

export default Team;