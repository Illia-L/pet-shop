import css from './ProductDetailsForm.module.css';
import {
  addItemToCart,
  incrementQuantity,
  decrementQuantity,
} from '../../redux/productsSlice';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { DiAndroid } from 'react-icons/di';

const MAX_QUANTITY = 50;

function ProductDetailsForm({ product }) {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const cart = useSelector(state => state.products.items);

  const cartProduct = cart.find(p => p.id === product.id);
  const cartQuantity = cartProduct?.quantity;
  const buttonText = cartProduct ? 'У кошику' : 'Купити';
  const buttonClassList = [css.toCart];

  useEffect(() => {
    if (cartProduct) setQuantity(cartQuantity);
  }, []);

  if (cartProduct) buttonClassList.push(css.reversedColors);

  function increaseQuantity() {
    if (!cartProduct) dispatch(addItemToCart({ product, quantity: 1 }));

    setQuantity(q => q + 1);
    dispatch(incrementQuantity(product.id));
  }

  function decreaseQuantity() {
    setQuantity(q => q - 1);
    dispatch(decrementQuantity(product.id));
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addItemToCart({ product, quantity }));
  }

  return (
    <form
      className={css.order}
      onSubmit={handleSubmit}
    >
      <div className={css.sumBox}>
        <div className={css.quantityBox}>
          <button
            className={css.quantityButton}
            type='button'
            disabled={quantity <= 1}
            onClick={decreaseQuantity}
          >
            -
          </button>

          <p className={css.quantity}>{quantity}</p>

          <button
            className={css.quantityButton}
            type='button'
            disabled={quantity >= MAX_QUANTITY}
            onClick={increaseQuantity}
          >
            +
          </button>
        </div>

        <p className={css.price}>{product?.price} грн</p>
      </div>

      <button
        className={clsx(buttonClassList)}
        type='submit'
        disabled={!!cartProduct}
      >
        {buttonText}
      </button>
    </form>
  );
}

export default ProductDetailsForm;
