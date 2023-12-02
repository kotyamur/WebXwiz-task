import { TopSellersList } from './components/TopSellersList';

import { Title } from './components/Title';

import s from './TopSellers.module.scss';
import { SearchForm } from './components/SearchForm';
import { SellersList } from './components/SellersList';

export default async function TopSellers() {
  return (
    <main>
      <div className={s.container}>
        <Title />
        <TopSellersList />
        <SearchForm />
        <SellersList />
      </div>
    </main>
  );
}
