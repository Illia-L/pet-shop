import { useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import styles from './Products.module.css';
import ProductsControls from '../ProductsControls/ProductsControls';
import Pagination from '../Pagination/Pagination';

function Products({
  products,
}) {
  return (
    <ul className={styles.products}>
      {products.map(product => (
        <ProductCard
          product={product}
          key={'product-' + product.id}
        />
      ))}
    </ul>
  );
}

export default Products;
