import React from 'react';
import FooterList from '../../utils/FooterList';

const Footer = () => {

    const myAccount = [
        {
            id: 1,
            name: "help-center",
            route: "/"
        },
        {
            id: 2,
            name: "redeem voucher",
            route: "/"
        },
        {
            id: 3,
            name: "order-tracking",
            route: "/"
        },
        {
            id: 4,
            name: "order-history",
            route: "/"
        },
        {
            id: 5,
            name: "afflicate",
            route: "/"
        },
        {
            id: 6,
            name: "gift card",
            route: "/"
        },
        {
            id: 7,
            name: "service center",
            route: "/"
        },
    ]
     const information = [
        {
            id: 1,
            name: "help-center",
            route: "/"
        },
        {
            id: 2,
            name: "redeem voucher",
            route: "/"
        },
        {
            id: 3,
            name: "order-tracking",
            route: "/"
        },
        {
            id: 4,
            name: "order-history",
            route: "/"
        },
        {
            id: 5,
            name: "afflicate",
            route: "/"
        },
        {
            id: 6,
            name: "gift card",
            route: "/"
        },
        {
            id: 7,
            name: "service center",
            route: "/"
        },
    ]
     const companyDetails = [
        {
            id: 1,
            name: "help-center",
            route: "/"
        },
        {
            id: 2,
            name: "redeem voucher",
            route: "/"
        },
        {
            id: 3,
            name: "order-tracking",
            route: "/"
        },
        {
            id: 4,
            name: "order-history",
            route: "/"
        },
        {
            id: 5,
            name: "afflicate",
            route: "/"
        },
        {
            id: 6,
            name: "gift card",
            route: "/"
        },
        {
            id: 7,
            name: "service center",
            route: "/"
        },
    ]

    return (
        <>
            {/* footer ... */}
            <footer className="py-5 lg:py-10 bg-black-700 border-y border-y-white/20 ">
                <div className="container mx-auto">
                    <div className="grid lg:grid-cols-5 gap-2 lg:gap-0">
                        {/* left content start... */}
                        <div className="col-span-2 w-[70%] ">
                            <h4 className="base-text capitalize ">Do You Need Help ? </h4>
                            <p className="sm-text text-[#9ca3af] my-1.5 lg:my-5.5  ">   Autoseligen syr. Nek diarask fröbomba. Nör antipol kynoda nynat. Pressa fåmoska. </p>
                            <a
                                href="tel:+01864162004"
                                className="heading-2xl"
                            >
                                +880 1864162004
                            </a>
                            <p className="sm-text text-[#9ca3af] lg:mb-4.5 lg:mt-1 my-0.5">Free from fixed and mobile phones in USA.</p>
                            <span className="sm-text text-[#9ca3af] capitalize"> email:
                                <a href="mailto:webspecialistmonika@gmail.com" className="sm-text text-orange-500 ml-2 inline-block">webspecialistmonika@gmail.com</a>
                            </span>
                            <p className="sm-text text-[#9ca3af] mt-4.5"> Call Center hours </p>
                            <p className="sm-text"> Mon-Sun 09:00-19:00 </p>
                        </div>
                        {/* left content end... */}
                        {/* footer link column start... */}
                     <div className="col-span-3 grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-0 ">
                         <div className="">
                          <FooterList
                            heading={"my account"}
                            lists={myAccount}
                        />
                      </div>
                      <div className="">
                          <FooterList
                            heading={"Information"}
                            lists={information}
                        />
                      </div>
                      <div className="">
                          <FooterList
                            heading={"company details"}
                            lists={companyDetails}
                        />
                      </div>
                     </div>
                        {/* footer link column end... */}
                    </div>
                </div>
            </footer>
            {/* footer bottom.... */}

        </>
    );
};

export default Footer;