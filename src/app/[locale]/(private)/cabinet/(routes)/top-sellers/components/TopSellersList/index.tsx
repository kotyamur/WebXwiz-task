'use client';
import { useTranslations } from 'next-intl';
import s from './TopSellersList.module.scss';

export const TopSellersList = () => {
  const t = useTranslations('ProfilePage.Sidebar.Seller');

  return (
    <div className={s.topSellersContainer}>
      <h5>{t('top_sellers')}</h5>
    </div>
  );
};
