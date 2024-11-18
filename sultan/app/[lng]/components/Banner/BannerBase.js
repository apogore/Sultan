import React from "react";
import "./banner.css";

export const BannerBase = ({ t, lng }) => {
  return (
    <div className="banner">
      <div className="banner_image">
        <img
          src={`/banner_home.webp`}
          alt="Banner background"
          className="banner_img"
        />
        <div className="blur"></div>
      </div>
      <div className="banner_info">
        <h1 className="desktop">{t('banner_info1d')}</h1>
        <h2 className="desktop">
          <span>{t('banner_info2d')}</span>
        </h2>
        <div className="mobile mblur">
          <h1 className="mobile">{t('banner_info1m')}</h1>
          <h2 className="mobile">{t('banner_info2m')}</h2>
        </div>
        <button className="btn">
          {t('banner_btn')}
        </button>
        <div className="list desktop-pluses">
          <div className="advant adv_p1">
            <div className="circle">
              <b>+</b>
            </div>
            <span>{t('banner_adv1')}</span>
          </div>
          <div className="advant adv_p1">
            <div className="circle">
              <b>+</b>
            </div>
            <span>
              {t('banner_adv2')}
              <br />
              <b>{t('banner_adv2_b')}</b>
            </span>
          </div>
        </div>
      </div>
      <div className="list mobile-pluses">
        <div className="advant adv_p1">
          <div className="circle">
            <b>+</b>
          </div>
          <span>{t('banner_adv1')}</span>
        </div>
        <div className="advant adv_p1">
          <div className="circle">
            <b>+</b>
          </div>
          <span>
            {t('banner_adv2')} <b>{t('banner_adv2_b')}</b>
          </span>
        </div>
      </div>
    </div>
  );
};
