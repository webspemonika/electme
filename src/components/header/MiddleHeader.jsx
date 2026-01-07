import React from 'react';
import ExternalContactLink from '../../utils/ExternalContactLink';
import { TbPhoneCall } from 'react-icons/tb';
import { Link } from 'react-router';
import { MdMail } from 'react-icons/md';
import IconText from '../../utils/IconText';
import { FiCheck } from 'react-icons/fi';
import Select from '../../utils/Select';
import Icon from '../../utils/Icon';
import { GoGitCompare, GoHeart } from 'react-icons/go';
import { FaRegUser } from 'react-icons/fa';
import { BsCart2 } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import SubmitBtn from '../../utils/SubmitBtn';

const MiddleHeader = () => {
    const currencies = [
        {
            id: 1,
            label: "usd"
        }, {
            id: 2,
            label: "bdt"
        }
    ]
    const laguages = [
        {
            id: 1,
            label: "bangla"

        },
        {
            id: 2,
            label: "english"
        }
    ]



    return (
        <section className="bg-black-700 py-1">
            <div className="container mx-auto">
                {/* top start... */}
                <div className=" hidden lg:flex justify-between items-center py-3 border-b border-white/30">
                    {/*top-left content start... */}
                    <div className="flex gap-4">
                        {/* phone number ...*/}
                        <div className="">
                            <ExternalContactLink
                                href={"tel:+8801864162004"}
                                icon={<TbPhoneCall />}
                                contactText={"+8801864162004"}
                            />
                        </div>
                        {/* email address... */}
                        <div className="">
                            <ExternalContactLink
                                href={"mailto:webspecialistmonika@gmail.com"}
                                icon={<MdMail />}
                                contactText={"webspecialistmonika@gmail.com"}
                            />
                        </div>
                        <Link to={"/about"} className='  xs-text flex items-center capitalize' > about us</Link>
                        <Link to={"/contact"} className='xs-text flex items-center capitalize' > contact </Link>
                        <div className="">
                            <IconText
                                icon={<FiCheck />}
                                text={"free shipping"}
                            />
                        </div>
                        <div className="">
                            <IconText
                                icon={<FiCheck />}
                                text={"safe payment"}
                            />
                        </div>
                    </div>
                    {/* top-left content end... */}
                    {/* top-right content-start... */}
                    <div className="flex gap-3 items-center">
                        <Select
                            options={laguages}
                        />
                        <Select
                            options={currencies}
                        />
                    </div>
                    {/* top-right content-end... */}
                </div>
                {/* top end... */}
                {/* bottom start.... */}
                <div className="grid grid-cols-7 gap-5 py-3 items-center ">
                    <div className=" col-span-5  grid lg:grid-cols-6 ">

                        {/* company logo */}
                        <Link to={"/"}>
                            <img
                                src="/logos/nav-logo.svg"
                                alt=""
                                className="w-30 h-10 "
                            />
                        </Link>
                        {/* input */}
                        <form
                            //    onSubmit={handleSearch}
                            className="relative px-1 pl-4 pr-1 hidden lg:flex items-center bg-white rounded-lg w-full  
               focus-within:ring-3 focus-within:ring-orange-500 caret-orange-500 focus:outline col-span-5"
                        >
                            {/* Search Icon */}
                            <div className="flex items-center">
                                <BiSearch className="w-5 h-5 text-gray-500" />
                            </div>

                            {/* Search Input */}
                            <input
                                type="text"
                                placeholder="Search everything at bumedi store..."
                                className="w-full py-3 px-2 text-gray-700 placeholder-gray-400 text-sm focus:outline-none"
                            />

                            {/* Search Button */}
                            <SubmitBtn
                                text={"Search"}
                                className=""
                            />
                        </form>
                    </div>
                    {/* quick-links start */}
                    <div className="flex gap-4 lg:col-span-2 ">
                        <div className="lg:inline-block hidden">
                            <Icon
                                route={'/wishlist'}
                                icon={<GoHeart />}
                                badgeCount={1}
                                className={""}
                            />
                        </div>
                        <div className=" lg:inline-block hidden">
                            <Icon
                                route={"/compare"}
                                icon={<GoGitCompare />}
                                badgeCount={2}
                            />
                        </div>
                        <div className="hidden lg:flex gap-2">
                            <Icon
                                route={"/login"}
                                icon={<FaRegUser />}
                                badgeCount={0}
                            />
                            <div className="">
                                <p className="text-base text-white font-medium font-fredoka leading-[150%] tracking-[-0.01em] capitalize"> sign in  </p>
                                <p className="xs-text text-gray-400"> account </p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <Icon
                                route={"/cart"}
                                icon={<BsCart2 />}
                                badgeCount={1}
                                className="bg-gray-600 border-none"
                            />
                            <div className="hidden lg:inline-block">
                                <p className="text-base text-white font-medium font-fredoka leading-[150%] tracking-[-0.01em] capitalize"> $00.00  </p>
                                <p className="xs-text text-gray-400 ">cart total</p>
                            </div>
                        </div>

                    </div>
                    {/* quick-links end */}
                </div>
                {/* bottom end.... */}
            </div>
        </section >
    );
};

export default MiddleHeader;