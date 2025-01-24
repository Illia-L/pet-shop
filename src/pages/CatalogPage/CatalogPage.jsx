import Catalog from '../../components/catalog/Catalog/Catalog';

import { useEffect, useState } from 'react';
import {
  categories as initialCategories,
  products as initialProducts,
} from '../../fake-data';

const defaultProductsPerPage = 10;

export default function CatalogPage() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [productsPerPage, setProductsPerPage] = useState(
    defaultProductsPerPage
  );
  const [pagesCount, setPagesCount] = useState(null);
  const [currentCategoryId, setCurrentCategoryId] = useState(null);
  const [currentProductsPage, setcurrentProductsPage] = useState(1);
  const [searchText, setSearchText] = useState('');

  function handleSelectCategory(id) {
    setCurrentCategoryId(id);
    setProducts(initialProducts.filter(p => p.categoryId === id));
  }

  useEffect(() => {
    setcurrentProductsPage(() => 1);
  }, [currentCategoryId, searchText]);

  useEffect(() => {
    const filteredProductsByCategory =
      currentCategoryId === null
        ? initialProducts
        : initialProducts.filter(p => p.categoryId === currentCategoryId);

    const filteredProducts = filteredProductsByCategory.filter(p =>
      p.title.toLowerCase().includes(searchText.toLowerCase())
    );

    setPagesCount(Math.ceil(filteredProducts.length / productsPerPage));

    const startChunkIndex = productsPerPage * (currentProductsPage - 1);
    const endChunkIndex = productsPerPage * currentProductsPage;
    const currentPageProducts = filteredProducts.slice(
      startChunkIndex,
      endChunkIndex
    );

    setProducts(currentPageProducts);
  }, [currentCategoryId, currentProductsPage, productsPerPage, searchText]);

  useEffect(() => {
    setCategories(initialCategories);
  }, []);

  return (
    <>
      <Catalog
        categories={categories}
        products={products}
        currentCategoryId={currentCategoryId}
        currentProductsPage={currentProductsPage}
        pagesCount={pagesCount}
        setProducts={setProducts}
        setcurrentProductsPage={setcurrentProductsPage}
        setSearchText={setSearchText}
        handleSelectCategory={handleSelectCategory}
      />
    </>
  );
}
