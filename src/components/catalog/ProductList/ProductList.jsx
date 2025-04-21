import { useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import css from './ProductList.module.css';
import ProductsControls from '../ProductsControls/ProductsControls';
import Pagination from '../Pagination/Pagination';
import { useEffect } from 'react';
import * as api from '../../../api';

function ProductList({ filter, setPagesCount }) {
  const [products, setProducts] = useState([]);
  const [isPending, setIsPending] = useState([]);
  const [isError, setIsError] = useState([]);

  useEffect(() => {
    updateProducts();
  }, [filter]);

  async function updateProducts() {
    try {
      setIsPending(true);
      setIsError(false);

      const productsPage = await api.getProductsPage(filter);
      const products = productsPage.results
      const itemsCount = productsPage.count
      const {perPage} = filter
      const pagesCount = Math.ceil(itemsCount / perPage)

      setPagesCount(pagesCount)
      setProducts([...products]);
    } catch (err) {
      setIsError(true);
    } finally {
      setIsPending(false);
    }
  }

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
