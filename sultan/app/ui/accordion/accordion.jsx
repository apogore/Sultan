import React, { useState } from "react";
import Button from "../button/button";
import "./accordion.scss";

const Accordion = ({ className, text, isAlwaysExpanded, accordionShort, accordionBody }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`accordion-block collapsible ${className}`}>
            {accordionShort}
            {isAlwaysExpanded
                ? (<span></span>)
                : (<Button
                    onClick={toggleAccordion}
                    className={`expanding-info-button ${className}__button ${isOpen ? 'active' : ''}`}
                    text={text}
                    icon={"/icons/polygon_down.svg"}
                />)}

            {(isAlwaysExpanded || isOpen) && accordionBody}
        </div>
    );
};

export default Accordion;
