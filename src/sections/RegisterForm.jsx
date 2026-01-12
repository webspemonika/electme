import React from 'react';
import { Link } from 'react-router';

const RegisterForm = () => {
    return (
        <section className="py-5 lg:py-15">
            <div className="container mx-auto ">

                <div className="mobile-margin">
                    <form className="  w-full max-w-[470px] bg-[#f2f2f2] mx-auto flex flex-col items-center lg:px-10 p-5  lg:py-5 space-y-1 lg:space-y-2">
                        {/* header... */}
                        <h2 className=" mb-3 lg:mb-5 text-xl lg:text-[24px] text-black-600 font-medium font-heebo capitalize leading-[150%]  ">register account </h2>
                        {/* 1.frist nameee */}
                        <div className="w-full ">
                            <label htmlFor="" className='mb-1.25 inline-block text-15px-black-medium capitalize'>first name* </label>
                            <input required type="text" className="px-2.5 py-1 lg:py-2 w-full bg-white focus:outline-2 focus:outline-white-yellow-500   caret-white-yellow-500" />
                        </div>
                        {/* 2.lase name */}
                        <div className="w-full ">
                            <label htmlFor="" className='mb-1.25 inline-block text-15px-black-medium capitalize'>last name* </label>
                            <input required type="text" className="px-2.5 py-1 lg:py-2 w-full bg-white focus:outline-2 focus:outline-white-yellow-500  caret-white-yellow-500 " />
                        </div>
                        {/* 3.email address */}
                        <div className="w-full ">
                            <label htmlFor="" className='mb-1.25 inline-block text-15px-black-medium capitalize'>email address* </label>
                            <input required type="email" className="px-2.5 py-1 lg:py-2 w-full bg-white focus:outline-2 focus:outline-white-yellow-500  caret-white-yellow-500 " />
                        </div>
                        {/* 4.new-password */}
                        <div className="w-full ">
                            <label htmlFor="" className='mb-1.25 inline-block text-15px-black-medium capitalize'>new password * </label>
                            <input required type="password" className="px-2.5 py-1 lg:py-2 w-full bg-white focus:outline-2 focus:outline-white-yellow-500 caret-white-yellow-500  " />
                        </div>
                        {/* 5.confirm-password */}
                        <div className="w-full ">
                            <label htmlFor="" className='mb-1.25 inline-block text-15px-black-medium capitalize'>confirm password * </label>
                            <input required type="password" className="px-2.5 py-1 lg:py-2 w-full bg-white focus:outline-2 focus:outline-white-yellow-500  caret-white-yellow-500 " />
                        </div>
                        {/* 6. register btn */}
                        <button type="submit" className='my-2 lg:my-3 w-full py-2 lg:py-2.5 inline-block bg-white-yellow-500 hover:bg-black-600 cursor-pointer text-xs lg:text-base text-black-700 hover:text-white font-medium font-heebo  capitalize' > register</button>
                        {/*form end-------- */}

                        {/* 7. footer text */}
                        <div className="mb-3 lg:mb-5">
                            <p className="text-15px-black-medium capitalize "> already have an account? <Link to="/login" className='hover:underline hover:text-black-700'> login</Link> </p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default RegisterForm;