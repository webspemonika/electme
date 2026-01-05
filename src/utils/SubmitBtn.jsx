import React from 'react';

const SubmitBtn = ({text}) => {
    return (
      <button 
      type="submit"
      className='px-5 py-2 rounded-md bg-orange-500
     text-sm text-white  font-semibold font-roboto leading-[150%] uppercase cursor-pointer
      '
      >
{text}
      </button>
    );
};

export default SubmitBtn;