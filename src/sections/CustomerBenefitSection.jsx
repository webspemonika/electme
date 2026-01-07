import React from 'react';
import { BsGift } from 'react-icons/bs';
import { RiCustomerService2Line } from 'react-icons/ri';
import { TbTruckDelivery, TbTruckReturn } from 'react-icons/tb';

const CustomerBenefitSection = () => {

    const benefits = [
        {
            id: 1,
            icon:<TbTruckDelivery />,
            benefitTitle: "easy free delivery",
            benefitDescription: "order on $100"
        },
            {
            id: 2,
            icon: <RiCustomerService2Line/>,
            benefitTitle: "premium warranty ",
            benefitDescription:"up to 2 years"
        },
          {
            id: 3,
            icon: <TbTruckReturn />,
            benefitTitle: "easy free retrun ",
            benefitDescription:"365 days return"
        },
        {
            id: 4,
            icon: <RiCustomerService2Line/>,
            benefitTitle: "24/7 online support",
            benefitDescription:"premium service"
        },
             {
            id: 5,
            icon: <BsGift />,
            benefitTitle: "best special gift ",
            benefitDescription:"frist order"
        }
    ]
    return (
        <section className="">
            <div className="container mx-auto">
                <div className="mobile-margin grid grid-cols-1 lg:grid-cols-5 py-3 px-0 lg:px-7.25 gap-5 lg:gap-0 items-center lg:items-left border border-[#efefef] rounded-lg lg:divide-x lg:divide-[#efefef] "> 

                    {benefits.map((benefit)=>(
                        <div key={benefit.id} className="flex gap-4  items-center p-1.25 mx-5   ">
                            <span className="text-[40px] text-white-yellow-500 "> {benefit.icon} </span>
                            <div className="">
                                <h5 className="text-15px-semibold-black capitalize  "> {benefit.benefitTitle} </h5>
                                <p className=" text-15px-normal-black capitalize "> {benefit.benefitDescription} </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CustomerBenefitSection;