
import React from 'react';
import './address-Info.scss';  

const AddressInfo = () => {
  return (
    <div className="header-address">
      <img src="/icons/geo-icon.svg" alt="geo" width={16} height={18} />
      <p>
        <b>г. Кокчетав, ул. Ж. Ташенова 129Б</b>
      </p>
      <p className="header-signature">(Рынок Восточный)</p>
    </div>
  );
};

export default AddressInfo;
