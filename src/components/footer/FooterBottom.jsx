import React from 'react';

const FooterBottom = () => {
    return (
       <section className="bg-black-700 py-5">
        <div className="container mx-auto">
               <div className=" flex flex-col lg:flex-row justify-between items-center gap-3">
                <p className="xs-text text-[#9ca3af]  "> Copyright All right reserved. Powered by webspecialistmonika </p>
                <img
                    src="/logos/payment-logo.png"
                    alt=""
                    className=''
                />
            </div>
        </div>
       </section>
    );
};

export default FooterBottom;