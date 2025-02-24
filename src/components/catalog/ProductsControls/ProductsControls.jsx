import css from './ProductsControls.module.css';
import { products as initialProducts } from '../../../fake-data';
import { useRef, useState } from 'react';
import Icon from '../../reusable-global/Icon/Icon';
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
