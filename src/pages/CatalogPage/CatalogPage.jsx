import Catalog from '../../components/catalog/Catalog/Catalog';

import { useEffect, useMemo, useState } from 'react';
import {
  categories as initialCategories,
  products as initialProducts,
} from '../../fake-data';
import { useSearchParams } from 'react-router-dom';

const defaultProductsPerPage = 10;

function useFilter() {
  const [searchParams, setSearchParams] = useSearchParams()

  const filters = useMemo(
    () => ({
      category: searchParams.get('category') || '',
      search: searchParams.get('search') || '',
    }),
    [searchParams]
  );

  function setFilter(key, value) {
    const newParams = new URLSearchParams(searchParams)

    if(value) {
      newParams.set(key, value)
    } else {
      newParams.delete(key)
    }

    setSearchParams(newParams)
  }

  return [filters, setFilter]
}

export default function CatalogPage() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [productsPerPage, setProductsPerPage] = useState(
    defaultProductsPerPage
  );
  const [pagesCount, setPagesCount] = useState(null);
  const [currentProductsPage, setcurrentProductsPage] = useState(1);
  // const [currentCategoryId, setCurrentCategoryId] = useState(null);
  // const [searchText, setSearchText] = useState('');
  const [filters, setFilter] = useFilter()

  function selectCategory(id) {
    setFilter('category', id);
  }

  function searchText(text) {
    setFilter('search', text)
  }

  useEffect(() => {
    setcurrentProductsPage(() => 1);
  }, [filters]);

  useEffect(() => {
    const filteredProductsByCategory =
      !filters.category
        ? initialProducts
        : initialProducts.filter(p => `${p.categoryId}` === filters.category);

    const filteredProducts = filteredProductsByCategory.filter(p =>
      p.title.toLowerCase().includes(filters.search.toLowerCase())
    );

    setPagesCount(Math.ceil(filteredProducts.length / productsPerPage));

    const startChunkIndex = productsPerPage * (currentProductsPage - 1);
    const endChunkIndex = productsPerPage * currentProductsPage;
    const currentPageProducts = filteredProducts.slice(
      startChunkIndex,
      endChunkIndex
    );

    setProducts(currentPageProducts);
  }, [filters, currentProductsPage]);

  useEffect(() => {
    setCategories(initialCategories);
  }, []);

  return (
    <>
      <Catalog
        categories={categories}
        products={products}
        currentCategoryId={filters.category}
        currentProductsPage={currentProductsPage}
        pagesCount={pagesCount}
        setProducts={setProducts}
        setcurrentProductsPage={setcurrentProductsPage}
        searchText={searchText}
        selectCategory={selectCategory}
      />
    </>
  );
}
