import React from 'react';

const Header = ({ headingText }) => {
    return (
        <h2 className="text-24px capitalize
                                pb-3  border-b border-[#e5e5e5]
                               relative after:absolute after:content-[''] after:w-15 lg:after:w-[150px] after:h-0.5 after:left-0 after:bottom-0 after:bg-white-yellow-500"
        >
            {headingText}
        </h2>
    );
};

export default Header;