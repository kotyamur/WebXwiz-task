'use client';
import { FC } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

import { SellersFilter } from '../SellersFilter';
import { AchiveIcon } from 'components/icons/AchiveIcon';
import { ITopSellersConfig } from '../../page';

import s from './TopSellersList.module.scss';

interface TopSellersListProps {
  config: ITopSellersConfig;
}

export const TopSellersList: FC<TopSellersListProps> = ({ config }) => {
  const t = useTranslations('ProfilePage.Sidebar.Seller');

  return (
    <div className={s.topSellersContainer}>
      <div className={s.topWrapper}>
        <h5>{t('top_sellers')}</h5>
        <SellersFilter />
      </div>
      <ul className={s.sellersList}>
        {config.sellers?.map((seller, index) => {
          const isFirst = seller.achievements[0] === '1';
          return (
            <li className={s.sellersItem} key={index}>
              <div className={s.sellerImage}>
                <Image
                  src={seller.avatarURL}
                  width={80}
                  height={80}
                  alt={seller.userName}
                />
                <span
                  className={`${s.seller_place} ${
                    isFirst ? s.first : ''
                  }`.trim()}
                >
                  #{seller.achievements[0]}
                </span>
              </div>
              <p>{seller.userName}</p>
              <div
                className={`${s.seller_achive} ${
                  isFirst ? s.first : ''
                }`.trim()}
              >
                <AchiveIcon />
                <span>{seller.achievements[1]} Sells</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
