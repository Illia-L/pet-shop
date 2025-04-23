import { Link, NavLink, useLocation } from 'react-router-dom';
import css from './ProductCard.module.css';
import Icon from '../../reusable-global/Icon/Icon';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../../redux/productsSlice';

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const location = useLocation();

  const addToCart = () => {
    dispatch(addItemToCart(product));
  };

  return (
    <li className={css.card}>
      <Link
        to={`/products/${product.id}`}
        state={{ from: location }}
        className={css.link}
      >
        <div className={css.imageRelativeBox}>
          <div className={css.imageAbsoluteBox}>
            <img
              src={product.image}
              alt={product.title}
              className={css.image}
            />
          </div>
        </div>
        <h3 className={css.title}>{product.title}</h3>
        <p className={css.purchaseBox}>
          {product.price} &#8372;

          <button
            type='button'
            className='cartButton'
            onClick={() => addToCart(product)}
          >
            <Icon
              id='icon-cart-filled'
              width={24}
              height={22}
            />
          </button>
        </p>
      </Link>
    </li>
  );
}

export default ProductCard;
