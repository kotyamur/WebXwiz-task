'use client';
import { useTranslations } from 'next-intl';
import s from './TopSellersList.module.scss';
import { SellersFilter } from '../SellersFilter';

export const TopSellersList = () => {
  const t = useTranslations('ProfilePage.Sidebar.Seller');

  return (
    <div className={s.topSellersContainer}>
      <div className={s.topWrapper}>
        <h5>{t('top_sellers')}</h5>
        <SellersFilter />
      </div>
    </div>
  );
};
