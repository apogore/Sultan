import React from 'react';
import './search.scss';

const Search = ({ className, onClick, inputType, id, placeholder, icon }) => {
    return (
        <div className={`search-form ${className}`}>
            <input
                className={`search-input ${className}-input`}
                type={inputType}
                id={id}
                placeholder={placeholder}
            />
            <button
                className={`search-button ${className}-button`}
                onClick={onClick}
            >
                <img
                    src={icon}
                    alt={'image'}
                />
            </button>
        </div>
    );
};

export default Search;