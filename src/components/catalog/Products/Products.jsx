import { useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import styles from './Products.module.css';
import ProductsControls from '../ProductsControls/ProductsControls';
import Pagination from '../Pagination/Pagination';

function Products({
  products,
  currentCategoryId,
  currentProductsPage,
  pagesCount,
  setcurrentProductsPage,
  setSearchText,
}) {
  const [sortOrder, setSortOrder] = useState('asc');

  const sortedProducts =
    sortOrder === 'asc'
      ? [...products].sort((a, b) => a.price * 1 - b.price * 1)
      : [...products].sort((a, b) => b.price * 1 - a.price * 1);

  return (
    <div className={styles.container}>
      <ProductsControls
        setSortOrder={setSortOrder}
        currentCategoryId={currentCategoryId}
        setSearchText={setSearchText}
      />

      <ul className={styles.products}>
        {sortedProducts.map(product => (
          <ProductCard
            product={product}
            key={'product-' + product.id}
          />
        ))}
      </ul>

      <Pagination
        currentProductsPage={currentProductsPage}
        pagesCount={pagesCount}
        setcurrentProductsPage={setcurrentProductsPage}
      />
    </div>
  );
}

export default Products;
