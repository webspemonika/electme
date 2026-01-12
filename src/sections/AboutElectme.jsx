import React from 'react';
import IconText from '../utils/IconText';
import { FaCheck } from 'react-icons/fa';

const AboutElectme = () => {
    const features = [
        {
            id: 1,
            feature: 'Discover the Future of Electronics: Shop Innovative Gadgets and Cutting-Edge Tech at Our Store!'
        },
        {
            id: 2,
            feature: 'Unleash Your Inner Tech Guru: DIY Electronics Projects and Tutorials Await You!'
        },
        {
            id: 3,
            feature: 'Electronics Shopping with a Conscience: Explore our Eco - Friendly and Sustainable Product Collection!'
        },
        {
            id: 4,
            feature: 'Stay Ahead of the Tech Curve: Get the Latest Industry Trends and Product Reviews Here!'
        },
    ]




    return (
        <section className=" py-5  lg:py-10">
            <div className="container mx-auto">


                <div className="mobile-padding grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-7 items-center">
                    {/* left content start ... */}
                    <div className="order-2 lg:order-1">
                        {/* 1.heading */}
                        <h4 className="text-24px-black-medium text-center lg:text-left">About Elecme WooCommerce Store  </h4>
                        {/* 2.description */}
                        <p className="text-15px-black-medium normal-case  tracking-wide   my-1 lg:my-5">The Electronics WooCommerce Store prioritizes customer convenience by offering secure payment options and reliable shipping services. It ensures a smooth checkout process and provides tracking information for timely order delivery. Additionally, a responsive customer support team is available to address any inquiries or concerns promptly.</p>
                        {/* 3.icon + features */}
                        <div className="space-y-1.5">
                            {features.map((feature) => (
                                <IconText
                                    key={feature.id}
                                    icon={<FaCheck />}
                                    text={feature.feature}
                                    containerClassName={"gap-1.5"}
                                    iconClassName={"text-[#6b8499] text-sm"}
                                    textClassName={"text-15px-black-medium tracking-wide text-xs "}
                                />
                            ))}
                        </div>
                        {/* end------ */}
                    </div>
                    {/* left content end ... */}
                    {/* right content start...*/}
                    <div className=" grid grid-cols-2 gap-1.5 lg:gap-5 order-1 lg:order-2">
                        {/* img:1 */}
                        <div className="">
                            <img
                                src="/images/about/description-1.jpg"
                                alt=""
                                className="w-full h-auto object-cover rounded-lg"
                            />
                        </div>
                        {/* img:2 */}

                        <div className="">
                            <img
                                src="/images/about/description-2.jpg"
                                alt=""
                                className="w-full h-auto object-cover rounded-lg"
                            />
                        </div>

                    </div>
                    {/* right content end...*/}
                </div>
            </div>
        </section>
    );
};

export default AboutElectme;