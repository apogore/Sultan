'use client'

import { useState } from 'react';
import { BannerBase } from './BannerBase';
import { useTranslation } from '../../../i18n/client';

export const Banner = ({ lng }) => {
  const { t } = useTranslation(lng, 'banner');
  const [location, setLocation] = useState(window.location.href);

  const handleButtonClick = () => {
    setLocation(window.location.href);
  };
  return (
    <>
      <BannerBase t={t} lng={lng} />
      <button className="btn" onClick={handleButtonClick}>
        {t('banner_btn')}
      </button>
    </>
  );
}   