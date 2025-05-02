import css from './ProductsControls.module.css';
import Search from '../Search/Search';
import Sort from '../Sort/Sort';

function ProductsControls({ search, sort, setSort, setSearch }) {
  return (
    <div className={css.controls}>
      <Search
        search={search}
        setSearch={setSearch}
      />

      <Sort
        sort={sort}
        setSort={setSort}
      />
    </div>
  );
}

export default ProductsControls;
