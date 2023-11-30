import { TopSellersList } from './components/TopSellersList';

import { Title } from './components/Title';

import s from './TopSellers.module.scss';

export default async function TopSellers() {
  return (
    <main>
      <div className={s.container}>
        <Title />
        <TopSellersList />
        <div>Search</div>
        <div>List</div>
        <div>Pagination</div>
      </div>
    </main>
  );
}
