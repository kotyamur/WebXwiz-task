'use client';
import { useTranslations } from 'next-intl';
import s from './Title.module.scss';

export const Title = () => {
  const t = useTranslations('ProfilePage.Sidebar');

  return <h4 className={s.heading}>{t('sellers')}</h4>;
};
