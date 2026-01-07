import React from 'react';
import SubmitBtn from '../../utils/SubmitBtn';
import { Link } from 'react-router';

const Newsletter = () => {
    return (
        <>
            <div className="bg-[url(/bg-images/top-footer-bg.png)] bg-no-repeat bg-cover bg-center h-4 lg:h-7 "></div>
            <section className="bg-black-700 py-7 lg:py-9.5 ">
                <div className="container mx-auto">
                    <div className="mobile-padding grid grid-cols-1 lg:grid-cols-2 justify-between items-center gap-4  ">
                        {/* left content start...*/}
                        <div className="w-full lg:w-[60%] text-center lg:text-left ">
                            <h4 className=" text-base lg:text-[26px] text-white font-semibold font-fredoka leading-[120%] tracking-[-0.03em] normal-case mb-1.5 ">Join our newsletter fodr £10 offs</h4>
                            <p className="text-xs lg:text-sm text-[#9ca3af] font-normal font-fredoka tracking-[-0.02em]  "> Register now to get latest updates on promotions & coupons. Don’t worry, we not spam!</p>
                        </div>
                        {/* left content end...*/}
                        {/* right content start...*/}
                        <div className=" w-full lg:w-[60%] ml-auto ">
                            <form
                                action=""
                                className="w-full bg-white py-1 pr-1 pl-4.5 rounded-lg flex items-center justify-end
                                focus-within:outline-3 focus-within:outline-orange-500
                                "
                            >
                                <input
                                    required
                                    type="text"
                                    placeholder='enter your email '
                                    className="flex-1 focus:outline-none caret-orange-500"
                                />
                                <SubmitBtn
                                    text={"send"}
                                    className={""}
                                />
                            </form>
                            <p className="">
                                <Link
                                    route={"/"}
                                    className=""
                                >

                                </Link>
                            </p>
                        </div>
                        {/*right content end...*/}

                    </div>
                </div>
            </section>
        </>
    );
};

export default Newsletter;