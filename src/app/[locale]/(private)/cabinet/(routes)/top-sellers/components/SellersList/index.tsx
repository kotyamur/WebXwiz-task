'use client';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

import { generateRandomNumber } from 'utils/utils';
import MarvinImg from 'assets/images/top-sellers/marvin.png';
import { CheckIcon } from 'components/icons/CheckmarkIcon';
import { MinusRoundIcon } from 'components/icons/MinusIcon';
import { SecondaryButton } from 'ui/components/Button';
import { FilterArrowsIcon } from 'components/icons/FilterIcon';
import { ArrowLeft, ArrowRight } from 'components/icons/ArrowIcons';

import s from './SellersList.module.scss';

const data = [
  {
    avatarURL: MarvinImg,
    email: 'smallpaul@me.com',
    id: generateRandomNumber(),
    userName: 'Kathryn Murphy',
    number: '0999999999',
    signupDate: '31/05/20, 14:20',
    sells: 25,
  },
  {
    avatarURL: MarvinImg,
    email: 'smallpaul@me.com',
    id: generateRandomNumber(),
    userName: 'Kathryn Murphy',
    number: '0999999999',
    signupDate: '31/05/20, 14:20',
    sells: 25,
  },
];


export const SellersList = () => {
    const t = useTranslations('ProfilePage.TopSellers.Table');
    
    const [pageIndex, setPageIndex] = useState(0);

    const rowsLength = 520;
    const pageSize = 10;

    const currentPage = pageIndex + 1;
    const endItemIndex = Math.min(currentPage * pageSize, rowsLength);
    const numPagesToShow = 1; // з кожної сторони + 1 кнопка
    const pageCount = 52;
    const canPreviousPage = pageIndex > 0;
    const canNextPage = pageIndex < pageCount -1;
    
    const handleClickNextPage = () => {
      setPageIndex(pageIndex + 1);
    };

    const handleClickPreviosPage = () => {
      setPageIndex(pageIndex - 1);
    };

    const handleClickPage = (page: number) => {
      setPageIndex(page);
    };

  return (
    <div className={s.wrapper}>
      <table className={s.table}>
        <thead className={s.table_head}>
          <tr>
            <th>
              <CheckIcon />
            </th>
            <th>{t('user_name')}</th>
            <th>{t('number')}</th>
            <th>
              <div className={s.table_filter}>
                {t('signup_date')}
                <FilterArrowsIcon />
              </div>
            </th>
            <th>
              <div className={s.table_filter}>
                {t('sells')}
                <FilterArrowsIcon />
              </div>
            </th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody className={s.table_body}>
          {data.map((it) => (
            <tr>
              <td>
                <CheckIcon />
              </td>
              <td>{it.userName}</td>
              <td>{it.number}</td>
              <td>{it.signupDate}</td>
              <td>{it.sells}</td>
              <td>
                <button className={s.table_body}>
                  <MinusRoundIcon />
                </button>
              </td>
              <td>
                <ArrowRight />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={s.pagination}>
        <span className={s.pagination_size}>
          {endItemIndex} {t('of')} {rowsLength}
        </span>
        <ul className={s.pagination_controls}>
          <li>
            <SecondaryButton
              className={`${s.pagination_control} ${
                !canPreviousPage ? s.disabled : ''
              }`}
              onClick={handleClickPreviosPage}
            >
              <ArrowLeft />
            </SecondaryButton>
          </li>
          {Array.from({ length: pageCount }, (_, index) => {
            if (
              index === 0 || // Перша сторінка
              index === pageIndex || // Поточна сторінка
              index === pageCount - 1 || // Остання сторінка
              (index >= pageIndex - numPagesToShow &&
                index <= pageIndex + numPagesToShow) || // доступні кнопки з numPagesToShow
              (pageIndex === 0 && index <= numPagesToShow) || // плюс numPagesToShow від першої сторінки
              (pageIndex === pageCount - 1 &&
                index >= pageCount - numPagesToShow - 1) // мінус numPagesToShow від останньої сторінки
            ) {
              return (
                <li key={index}>
                  <SecondaryButton
                    className={`${s.pagination_control} ${
                      currentPage === index + 1 ? s.active : ''
                    }`}
                    onClick={() => {
                      handleClickPage(index);
                    }}
                  >
                    <span className="text_accent">{index + 1}</span>
                  </SecondaryButton>
                </li>
              );
            } else if (
              index === pageIndex - numPagesToShow - 1 ||
              index === pageIndex + numPagesToShow + 1
            ) {
              return (
                <li key={index}>
                  <span className="text_accent">...</span>
                </li>
              );
            }
          })}
          <li>
            <SecondaryButton
              className={`${s.pagination_control} ${
                !canNextPage ? s.disabled : ''
              }`}
              onClick={handleClickNextPage}
            >
              <ArrowRight />
            </SecondaryButton>
          </li>
        </ul>
      </div>
    </div>
  );
};
