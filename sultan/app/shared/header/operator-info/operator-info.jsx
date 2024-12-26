import React from "react";
import Link from "next/link";
import "./operator-info.scss";

const OperatorInfo = () => {
  return (
    <div className="header-operator">
      <div className="header-operator-info">
        <p className="header-telephone-number">+ 7 (777) 490-00-91</p>
        <p className="header-operator-signature">время работы: 9:00-20:00</p>
        <p className="header-signature">
          <Link href="tel:77774900091" className="order-call-link">
            <span className="bold-text">Заказать звонок</span>
          </Link>
        </p>
      </div>

      <div className="header-operator-photo">
        <div className="header-operator-shadow-point" />
        <img
          src="/header/operator.png"
          alt="Заказать звонок"
          width={74}
          height={100}
        />
      </div>
    </div>
  );
};

export default OperatorInfo;
