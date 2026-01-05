import React from 'react';

const Select = ({ options }) => {
    return (
        <select name="" id="" className="xs-text  capitalize rounded-xs focus:outline focus:outline-orange-500 ">
            {options?.map((option) => (
                <option
                    key={option.id}
                    value=""
                    className="xs-text text-black"
                >
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export default Select;