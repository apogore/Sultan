import React from 'react';
import Button from '../button/button';
import './search.scss';

const Search = ({ className, onClick, inputType, id, placeholder, onChange, value, icon }) => {
    return (
        <div className={`search-form ${className}`}>
            <input
                className={`search-input ${className}__input`}
                type={inputType}
                id={id}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
            />
            <Button
                className={`search-button ${className}__button`}
                onClick={onClick}
                icon={icon}
            />
        </div>
    );
};

export default Search;