import React from 'react';

const IconText = ({icon,text,containerClassName,iconClassName,textClassName}) => {
    return (
     <div className={`${containerClassName} inline-flex items-center`}>
        <span className={`${iconClassName}`} > {icon} </span>
        <span className={`${textClassName}`}> {text}</span>
     </div>
    );
};

export default IconText;