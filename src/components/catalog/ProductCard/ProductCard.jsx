import { NavLink } from 'react-router-dom';
import styles from './ProductCard.module.css';

function ProductCard({product}) {
  return (
    <li className={styles.card}>
      <NavLink to={`products/${product.id}`} className={styles.link}>
        <div className={styles.imageRelativeBox}>
          <div className={styles.imageAbsoluteBox}>
            <img
              src={'/pet-shop' + product.image}
              alt={product.title}
              className={styles.image}
            />
          </div>
        </div>
        <h3 className={styles.title}>{product.title}</h3>
        <p className={styles.price}>{product.price}</p>
      </NavLink>
    </li>
  );
}

export default ProductCard;
