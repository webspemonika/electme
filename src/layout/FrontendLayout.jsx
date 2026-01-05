import React from 'react';
import { Outlet } from 'react-router';
import TopHeader from '../components/header/TopHeader';
import MainHeader from '../components/header/MainHeader';
import Footer from '../components/footer/Footer';
import Newsletter from '../components/footer/Newsletter';
import MiddleHeader from '../components/header/MiddleHeader';
import FooterBottom from '../components/footer/FooterBottom';

const FrontendLayout = () => {
    return (

        <>
        {/* header start.... */}
            <header>
                <TopHeader />
                <MiddleHeader/>
                <MainHeader />
            </header>
            {/* header end */}
            <main> <Outlet /> </main>
            {/* footer start... */}
            <footer>
                <Newsletter />
                <Footer />
                <FooterBottom/>
            </footer>
            {/* footer end */}

        </>
    );
};

export default FrontendLayout;