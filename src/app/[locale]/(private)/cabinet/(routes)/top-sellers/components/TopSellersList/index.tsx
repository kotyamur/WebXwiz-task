'use client';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

import { SellersFilter } from '../SellersFilter';

import MarvinImg from 'assets/images/top-sellers/marvin.png';

import s from './TopSellersList.module.scss';
import { AchiveIcon } from 'components/icons/AchiveIcon';

const sellers = [
  {
    userName: 'Kristin Watson',
    avatarURL: MarvinImg,
    achievements: ['1', '2,140'],
  },
  {
    userName: 'Theresa Webb',
    avatarURL: MarvinImg,
    achievements: ['2', '2,140'],
  },
  {
    userName: 'Guy Hawkins',
    avatarURL: MarvinImg,
    achievements: ['3', '2,140'],
  },
  {
    userName: 'Ralph Edwards',
    avatarURL: MarvinImg,
    achievements: ['4', '2,140'],
  },
  {
    userName: 'Wade Warren',
    avatarURL: MarvinImg,
    achievements: ['5', '2,140'],
  },
];

export const TopSellersList = () => {
  const t = useTranslations('ProfilePage.Sidebar.Seller');

  return (
    <div className={s.topSellersContainer}>
      <div className={s.topWrapper}>
        <h5>{t('top_sellers')}</h5>
        <SellersFilter />
      </div>
      <ul className={s.sellersList}>
        {sellers?.map((seller, index) => {
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
