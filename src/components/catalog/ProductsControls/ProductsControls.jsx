import styles from './ProductsControls.module.css';
import { products as initialProducts } from '../../../fake-data';
import { useRef } from 'react';

function ProductsControls({ setSortOrder, searchText }) {
  const searchFieldRef = useRef(null);

  function onSearch() {
    const text = searchFieldRef.current.value.toLowerCase();

    searchText(text)
  }

  function onClearSearch() {
    searchFieldRef.current.value = ''

    searchText('')
  }

  return (
    <div className={styles.controls}>
      <div className={styles.searchContainer}>
        <input
          ref={searchFieldRef}
          type='text'
          className={styles.search}
          placeholder='Введіть назву товару'
        />
        <button
          className={styles.button}
          onClick={onSearch}
        >
          Шукати
        </button>
        <button
          className={styles.button}
          onClick={onClearSearch}
        >
          Очистити
        </button>
      </div>
      <select
        className={styles.sort}
        onChange={e => setSortOrder(e.target.value)}
      >
        <option value='asc'>Від дешевих до дорогих</option>
        <option value='desc'>Від дорогих до дешевих</option>
      </select>
    </div>
  );
}

export default ProductsControls;
