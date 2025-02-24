import { NavLink } from 'react-router-dom';
import css from './ProductCard.module.css';
import Icon from '../../reusable-global/Icon/Icon'

function ProductCard({product}) {
  return (
    <li className={css.card}>
      <NavLink to={`products/${product.id}`} className={css.link}>
        <div className={css.imageRelativeBox}>
          <div className={css.imageAbsoluteBox}>
            <img
              src={'/pet-shop' + product.image}
              alt={product.title}
              className={css.image}
            />
          </div>
        </div>
        <h3 className={css.title}>{product.title}</h3>
        <p className={css.purchaseBox}>
          {product.price}
          
          <button type='button' className='cartButton'>
            <Icon id='icon-cart-filled' width={24} height={22}/>
          </button>
        </p>
      </NavLink>
    </li>
  );
}

export default ProductCard;
