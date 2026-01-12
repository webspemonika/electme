import React from 'react';
import { Link } from 'react-router';

const FooterList = ({heading,lists}) => {
    return (
     <>
     <h4 className="base-text lg:text-white text-orange-500 font-semibold mb-2 lg:mb-4.5 capitalize"> {heading} </h4>
     <ul>
        {lists?.map((list)=>(
            <li key={list.id} className=""> <Link className='slide-underline sm-text text-white/80 capitalize pb-0.5' to={list.route}> {list.name} </Link> </li>
        ))}
     </ul>
     </>
    );
};

export default FooterList;