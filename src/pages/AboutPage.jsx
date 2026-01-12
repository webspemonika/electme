import React from 'react';
import Counter from '../sections/Counter';
import AboutElectme from '../sections/AboutElectme';
import Team from '../sections/Team';
import AboutProductSection from '../sections/AboutProductSection';
import CompanyLogoSection from '../sections/CompanyLogoSection';

const AboutPage = () => {
    return (
       <>
       <AboutElectme/>
       <Counter/>
       <AboutProductSection/>
       <Team/>
       <CompanyLogoSection/>
       </>
    );
};

export default AboutPage;