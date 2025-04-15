import { useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import css from './ProductList.module.css';
import ProductsControls from '../ProductsControls/ProductsControls';
import Pagination from '../Pagination/Pagination';
import { useEffect } from 'react';
import * as api from '../../../api';

function ProductList({ filter }) {
  const [products, setProducts] = useState([]);
  const [isPending, setIsPending] = useState([]);
  const [isError, setIsError] = useState([]);

  async function fetchAndSetProducts() {
    try {
      setIsPending(true);
      setIsError(false);

      const products = await api.getProducts(filter);

      setProducts([...products]);
    } catch (err) {
      setIsError(true);
    } finally {
      setIsPending(false);
    }
  }

  useEffect(() => {
    fetchAndSetProducts();
  }, [filter]);

  return (
    <ul className={css.products}>
      {products.map(product => (
        <ProductCard
          product={product}
          key={product.id}
        />
      ))}
    </ul>
  );
}

export default ProductList;
