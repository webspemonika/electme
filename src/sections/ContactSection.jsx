import React from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { MdLocationOn, MdPhone } from 'react-icons/md';

const ContactSection = () => {
    const contactInfos = [
        {
            id: 1,
            icon: <MdLocationOn />,
            heading: "Our Location",
            infoOne: "3308 Bassell Avenue, Los Angeles California, United States",
            infoTwo: "",
        },
        {
            id: 2,
            icon: <MdPhone />,
            heading: "Phone Number",
            infoOne: "+001 456 7890",
            infoTwo: "+001 123 4567",
        },
        {
            id: 1,
            icon: <HiOutlineMail />,
            heading: "Email Address",
            infoOne: "info@example.com",
            infoTwo: "test@example.com",
        }
    ]
    return (
        <section className="py-10">
            <div className="container mx-auto">
                <div className="mobile-padding  grid grid-cols-1 gap-5 lg:gap-10 lg:grid-cols-4 ">
                    {/* 1.location */}
                    <div className="">
                        <h4 className="text-24px-black-medium capitalize"> contact information</h4>
                        <div className=" divide-y divide-[#f2f2f2] ">
                            {contactInfos.map((info) => (
                                <div className="flex gap-2.5 items-start py-4 lg:py-5">
                                    {/* icon */}
                                    <span className=" text-base lg:text-[25px] text-[#6b8499] "> {info.icon} </span>
                                    {/* heading +info */}
                                    <div className=" w-full lg:w-[70%] ">
                                        <h6 className="text-20px-black-medium  mb-2"> {info.heading} </h6>
                                        <p className="text-15px-black-medium"> {info.infoOne} </p>
                                        <p className="text-15px-black-medium"> {info.infoTwo} </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* image */}
                        <img src="/images/contact-page/contact.jpg" alt="" className="w-full h-auto object-cover rounded-lg hidden lg:inline-block " />
                    </div>
                    {/* 2.form */}
                    <form className="col-span-3 bg-[#f2f2f2] p-5 lg:p-12.5">

                        {/* heading */}
                        <h6 className="text-24px-black-medium capitalize mb-5 "> contact for us any question </h6>
                        {/* name */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 lg:gap-7 mb-1 lg:mb-4">

                            <div className="">
                                <label htmlFor="" className='mb-1.25 inline-block text-15px-black-medium capitalize'>first name* </label>
                                <input required type="text" className="px-2.5 py-2 w-full bg-white focus:outline-2 focus:outline-white-yellow-500  " />
                            </div>
                            <div className="">
                                <label htmlFor="" className='mb-1.25 inline-block text-15px-black-medium capitalize'>last name* </label>
                                <input required type="text" className="px-2.5 py-2 inline-block w-full bg-white focus:outline-2 focus:outline-white-yellow-500  " />
                            </div>
                        </div>
                        {/* phone  */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 lg:gap-7 mb-1 lg:mb-4">

                            <div className="">
                                <label htmlFor="" className='mb-1.25 inline-block text-15px-black-medium capitalize'>email address* </label>
                                <input required type="text" className="px-2.5 py-2 w-full bg-white focus:outline-2 focus:outline-white-yellow-500  " />
                            </div>
                            <div className="">
                                <label htmlFor="" className='mb-1.25 inline-block text-15px-black-medium capitalize'>phone number* </label>
                                <input required type="text" className="px-2.5 py-2 inline-block w-full bg-white focus:outline-2 focus:outline-white-yellow-500 " />
                            </div>
                        </div>
                        {/* subject */}
                        <div className="mb-1 lg:mb-4">
                            <label htmlFor="" className='mb-1.25 inline-block text-15px-black-medium capitalize'>subject* </label>
                            <input required type="text" className="px-2.5 py-2 inline-block w-full bg-white focus:outline-2 focus:outline-white-yellow-500 " />
                        </div>
                        {/* message */}
                        <div className="">
                            <label htmlFor="" className='mb-1.25 inline-block text-15px-black-medium capitalize'>your message (optional) </label>
                            <textarea name="" id="" className='w-full h-[300px]  mb-4 bg-white text-gray-400 text-base p-5 focus:outline-2 focus:outline-white-yellow-500' placeholder='message'></textarea>

                        </div>
                        {/* button */}
                        <button type="submit" className='w-full py-3 text-15px-black-medium bg-white-yellow-500 inline-block cursor-pointer hover:bg-black-600 hover:text-white '> submit </button>
                    </form>
                    {/* end--- */}
                </div>
            </div>
        </section>
    );
};

export default ContactSection;