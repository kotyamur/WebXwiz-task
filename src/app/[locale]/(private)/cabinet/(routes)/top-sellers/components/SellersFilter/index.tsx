'use client';

import { FC, useCallback } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import s from './SellersFilter.module.scss';

const tabs = ['allTime', 'thisYear', 'thisMonth'];

export const SellersFilter: FC = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchTab = searchParams.get('duration');
  const activeTab = tabs.find((tab) => tab === searchTab)
    ? searchTab
    : tabs[0];

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
    );
    
    const t = useTranslations('ProfilePage.TopSellers.Filter');

    return (
      <div className={s.SellersFilterWrapper}>
        <ul className={s.tabs}>
          {tabs.map((tab, index) => {
            const isActive = activeTab === tab;

            return (
              <li className={s.tab} key={index}>
                <Link
                  href={`${pathname}?${createQueryString(
                    'duration',
                    tab
                  )}`}
                  className={`${s.tab_filter} ${isActive ? s.active : ''}`}
                >
                  {t(tab)}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
};
