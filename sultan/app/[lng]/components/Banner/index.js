import { useTranslation } from '../../../i18n';
import { BannerBase } from './BannerBase';

export const Banner = async ({ lng }) => {
  const { t } = await useTranslation(lng, 'banner');
  return <BannerBase t={t} lng={lng} />;
};

