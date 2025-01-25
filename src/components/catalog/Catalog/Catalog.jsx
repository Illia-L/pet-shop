import styles from './Catalog.module.css';
import Categories from '../Categories/Categories';
import Products from '../Products/Products';

export default function Catalog({
  categories,
  products,
  currentCategoryId,
  currentProductsPage,
  pagesCount,
  setProducts,
  setcurrentProductsPage,
  searchText,
  selectCategory,
}) {
  return (
    <div className={styles.catalog}>
      <Categories
        categories={categories}
        currentCategoryId={currentCategoryId}
        selectCategory={selectCategory}
      />
      <Products
        products={products}
        currentProductsPage={currentProductsPage}
        pagesCount={pagesCount}
        setProducts={setProducts}
        setcurrentProductsPage={setcurrentProductsPage}
        searchText={searchText}
      />
    </div>
  );
}
