import React from "react";
import Link from "next/link";
import "./logo-sultan.scss";

const LogoSultan = () => {
  return (
    <div className="header-logo-sultan">
      <Link href="/" className="logo-sultan-link">
        <img
          src="/icons/logo-sultan.svg"
          alt="Султан"
          width={156}
          height={66}
          className="logo-sultan"
        />
      </Link>
    </div>
  );
};

export default LogoSultan;
