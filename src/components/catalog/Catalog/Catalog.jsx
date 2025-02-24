import css from './Catalog.module.css';
import Categories from '../Categories/Categories';
import Products from '../Products/Products';
import ProductsControls from '../ProductsControls/ProductsControls';
import Pagination from '../Pagination/Pagination';
import CategoriesMobileViget from '../CategoriesMobileViget/CategoriesMobileViget';
import { useState } from 'react';

export default function Catalog({
  categories,
  products,
  currentCategoryId,
  currentProductsPage,
  pagesCount,
  search,
  sort,
  setProducts,
  setcurrentProductsPage,
  setSearch,
  setSort,
  selectCategory,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const allCategoriesItem = {
    id: '',
    title: 'Всі категорії',
  };

  const categoriesWithAllCategoriesItem = [allCategoriesItem, ...categories];

  const currentCategoryName = categoriesWithAllCategoriesItem.find(
    cat => `${cat.id}` === `${currentCategoryId}`
  )?.title;

  return (
    <div className={css.catalog}>
      <CategoriesMobileViget
        currentCategoryName={currentCategoryName}
        setIsModalOpen={setIsModalOpen}
      />

      <ProductsControls
        search={search}
        sort={sort}
        setSort={setSort}
        setSearch={setSearch}
      />

      <div className={css.content}>
        <Categories
          categoriesWithAllCategoriesItem={categoriesWithAllCategoriesItem}
          currentCategoryId={currentCategoryId}
          isModalOpen={isModalOpen}
          selectCategory={selectCategory}
          setIsModalOpen={setIsModalOpen}
        />
        <div>
          <Products
            products={products}
            currentProductsPage={currentProductsPage}
            pagesCount={pagesCount}
            setProducts={setProducts}
            setcurrentProductsPage={setcurrentProductsPage}
          />
          <Pagination
            currentProductsPage={currentProductsPage}
            pagesCount={pagesCount}
            setcurrentProductsPage={setcurrentProductsPage}
          />
        </div>
      </div>
    </div>
  );
}
