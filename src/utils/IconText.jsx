import React from 'react';

const IconText = ({icon,text}) => {
    return (
     <div className="flex items-center gap-1">
        <span className="text-white text-base "> {icon} </span>
        <span className="xs-text capitalize "> {text}</span>
     </div>
    );
};

export default IconText;