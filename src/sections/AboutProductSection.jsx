import React from 'react';
import IconText from '../utils/IconText';
import { HiGlobeAlt } from 'react-icons/hi';
import { FaRegSmile } from 'react-icons/fa';
import { GrLike } from 'react-icons/gr';

const AboutProductSection = () => {
    return (
        <section className="py-5 lg:py-10 ">
            <div className="container mx-auto ">
                <div className="mobile-padding grid lg:grid-cols-2 grid-cols-1 gap-2.5 lg:gap-10 items-center ">
                    {/* left content start ... */}
                    <div className="">
                        <img
                            src="/images/about/description-3.jpg"
                            alt=""
                            className="w-full h-auto object-cover rounded-lg"
                        />
                    </div>
                    {/* left content end ... */}
                    {/* right content start.. */}
                    <div className="">
                        {/* 1.heading */}
                        <h2 className="text-24px-black-medium text-center lg:text-left">Approximately 10K+ Products available on Electme Store </h2>
                        {/* 2.description */}
                        <p className="text-15px-black-medium my-2 lg:mt-6 lg:mb-4 ">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>

                        {/* 3.description-2 */}
                        <p className="text-15px-semibold-black italic">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        {/* 4.icon text container */}
                        <div className="mt-6 grid grid-cols-3 gap-2.5 lg:gap-5 justify-center">
                            {/* 1. */}
                            <IconText
                                containerClassName={"flex-col gap-2.5 "}
                                icon={<HiGlobeAlt />}
                                iconClassName={"text-2xl lg:text-[35px] text-white-yellow-500"}
                                text={"Access Our Store From Worldwide"}
                                textClassName={"text-xs lg:text-[20px] text-black-500 font-medium font-heebo leading-[150%] tracking-wider capitalize text-center"}
                            />
                            {/* 2. */}
                            <IconText
                                containerClassName={"flex-col gap-2.5 "}
                                icon={<GrLike />}
                                iconClassName={"text-2xl lg:text-[35px] text-white-yellow-500"}
                                text={"100% Finest Quality Products"}
                                textClassName={"text-xs lg:text-[20px] text-black-500 font-medium font-heebo leading-[150%] tracking-wider capitalize text-center"}
                            />
                            {/* 3. */}
                            <IconText
                                containerClassName={"flex-col gap-2.5 "}
                                icon={<FaRegSmile />}
                                iconClassName={"text-2xl lg:text-[35px] text-white-yellow-500"}
                                text={"Next Level Customer Satisfaction"}
                                textClassName={"text-xs lg:text-[20px] text-black-500 font-medium font-heebo leading-[150%] tracking-wider capitalize text-center"}
                            />
                        </div>
                        {/* ---end--- */}
                    </div>
                    {/* right content start.. */}
                </div>
            </div>
        </section>
    );
};

export default AboutProductSection;