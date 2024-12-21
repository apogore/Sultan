import React, { useState } from 'react';
import "./view-switcher.scss";

const ViewSwitcher = ({ changeView }) => {
    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => {
      setIsToggled(!isToggled);
      changeView(isToggled);
    };
  
    return (
      <div className={`toggle-switch ${isToggled ? 'toggled' : ''}`} onClick={handleToggle}>
        <img className="icon left-icon" src="/icons/row_view_icon.svg"/>
        <span className="circle" />
        <img className="icon right-icon" src="/icons/card_view_icon.svg"/>
      </div>
    );
  };

export default ViewSwitcher;