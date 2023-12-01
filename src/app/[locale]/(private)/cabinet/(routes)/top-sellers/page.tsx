import { TopSellersList } from './components/TopSellersList';

import { Title } from './components/Title';

import s from './TopSellers.module.scss';
import { SearchForm } from './components/SearchForm';

export default async function TopSellers() {
  return (
    <main>
      <div className={s.container}>
        <Title />
        <TopSellersList />
        <SearchForm />
        <div>List</div>
        <div>Pagination</div>
      </div>
    </main>
  );
}
