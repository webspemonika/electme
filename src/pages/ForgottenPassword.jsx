import React from 'react';

const ForgottenPassword = () => {
    return (
        <section className="py-5 lg:py-15">
            <div className="container mx-auto ">
                <div className="mobile-margin ">
                    <div className="w-full max-w-[470px] bg-[#f2f2f2] mx-auto flex flex-col items-center lg:px-10 p-5  lg:py-5">
                        {/* 1.header */}
                        <h2 className=" mb-3 lg:mb-5 text-xl lg:text-[24px] text-black-600 font-medium font-heebo capitalize leading-[150%]  "> forgotten password? </h2>
                        {/*2. form ..... */}
                        <form action="" className="w-full space-y-6">
                            {/*2.1 email address */}
                            <div className="w-full ">
                                <label htmlFor="" className='mb-1.25 inline-block text-15px-black-medium capitalize'>email address* </label>
                                <input required type="email" className="px-2.5 py-1 lg:py-2 w-full bg-white focus:outline-2 focus:outline-white-yellow-500  caret-white-yellow-500 " />
                            </div>
                            {/*2.2 continue btn */}
                            <button type="button" className='w-full py-2 lg:py-2.5 inline-block bg-white-yellow-500 hover:bg-black-600 cursor-pointer text-xs lg:text-base text-black-700 hover:text-white font-medium font-heebo  capitalize'> continue </button>

                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ForgottenPassword;