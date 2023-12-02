import { TopSellersList } from './components/TopSellersList';
import { SearchForm } from './components/SearchForm';
import { SellersList } from './components/SellersList';
import { Title } from './components/Title';

import { GetTopSeller, ISeller } from 'types/sellerTypes';
import { topSellersConfig } from './seller-configs/topSellers-config';

import s from './TopSellers.module.scss';

export interface ITopSellersConfig {
  sellers: GetTopSeller[];
}
export interface ISellersConfig {
  sellers: ISeller[];
}

export default async function TopSellers() {
  let topSellersCurrent: ITopSellersConfig = topSellersConfig
  return (
    <main>
      <div className={s.container}>
        <Title />
        <TopSellersList config={topSellersCurrent} />
        <SearchForm />
        <SellersList />
      </div>
    </main>
  );
}
