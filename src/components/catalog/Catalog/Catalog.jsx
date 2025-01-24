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
  setSearchText,
  handleSelectCategory,
}) {
  return (
    <div className={styles.catalog}>
      <Categories
        categories={categories}
        currentCategoryId={currentCategoryId}
        handleSelectCategory={handleSelectCategory}
      />
      <Products
        products={products}
        currentCategoryId={currentCategoryId}
        currentProductsPage={currentProductsPage}
        pagesCount={pagesCount}
        setProducts={setProducts}
        setcurrentProductsPage={setcurrentProductsPage}
        setSearchText={setSearchText}
      />
    </div>
  );
}
