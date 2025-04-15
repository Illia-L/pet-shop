import css from './Catalog.module.css';
import Categories from '../Categories/Categories';
import ProductList from '../ProductList/ProductList';
import ProductsControls from '../ProductsControls/ProductsControls';
import Pagination from '../Pagination/Pagination';
import CategoriesMobileViget from '../CategoriesMobileViget/CategoriesMobileViget';
import { useState } from 'react';
import useFilter from '../filterLogic';

export default function Catalog({}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  // const [currentCategoryId, setCurrentCategoryId] = useState({});
  const [filter, filterActions] = useFilter();

  const currentCategoryName =
    categories.find(cat => `${cat.id}` === `${filter.category}`)?.title || '';

  return (
    <div className={css.catalog}>
      <CategoriesMobileViget
        currentCategoryName={currentCategoryName}
        setIsModalOpen={setIsModalOpen}
      />

      <ProductsControls
        search={filter.search}
        sort={filter.sort}
        setSort={filterActions.setSort}
        setSearch={filterActions.setSearch}
      />

      <div className={css.content}>
        <Categories
          categories={categories}
          setCategories={setCategories}
          currentCategoryId={filter.category}
          isModalOpen={isModalOpen}
          selectCategory={filterActions.setCategory}
          setIsModalOpen={setIsModalOpen}
        />
        <div>
          <ProductList
            // products={products}
            // currentProductsPage={filter.page}
            filter={filter}
            // pagesCount={pagesCount}
            // setProducts={setProducts}
            setcurrentProductsPage={filterActions.setPage}
          />
          <Pagination
            currentProductsPage={filter.page}
            // pagesCount={pagesCount}
            setcurrentProductsPage={filterActions.setPage}
          />
        </div>
      </div>
    </div>
  );
}
