import React from 'react';
import PropTypes from "prop-types";
import './DropDown.css'

const DropDown = ({className, label = '', defaultValue = '', values = [], onChange}) => {
    return (
            <div className='dropdown'>
                <label htmlFor={className}>{label}</label>
                <select id={className} name={className} onChange={onChange}>
                    <option value={defaultValue}>All</option>
                    {values.map(value => (
                        <option key={value} value={value}>{value}</option>
                    ))}
                </select>
            </div>
    )
}


DropDown.propTypes = {
    className: PropTypes.string,
    defaultValue: PropTypes.string,
    label: PropTypes.string,
    values: PropTypes.arrayOf(PropTypes.string),
    onChange: PropTypes.func,
};

export default DropDown;

