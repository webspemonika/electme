import React from 'react';

const ExternalContactLink = ({href,contactText,icon}) => {
    return (
       <a 
       href={href}
       target="-blank"
       rel="noopener noreferrer"
       className="group flex justify-center items-center gap-1.5">
        <span className="text-xl text-white  group-hover:text-orange-500"> {icon} </span>
        <span className="xs-text  group-hover:text-orange-500 "> {contactText} </span>
       </a>
    );
};

export default ExternalContactLink;