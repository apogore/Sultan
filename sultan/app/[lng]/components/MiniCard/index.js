import React from 'react';
import { MiniCardBase } from './MiniCardBase';
import { useTranslation } from '../../../i18n';

export const MiniCard = ({ lng, key, product, handleCardClick }) => {
  const { t } = useTranslation(lng, 'mini-card');

  return (
        <MiniCardBase
          t={t}
          key={key}
          lng={lng}
          product={product} 
          onClick={handleCardClick}
        />
  );
};
