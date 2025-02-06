import { useSelector, useDispatch } from "react-redux";
import { removeItemFromCart, incrementQuantity, decrementQuantity, clearCart} from '../../../redux/productsSlice';
import { useEffect, useState } from "react";

import css from './BasketList.module.css';

export default function BasketList () {

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const totalAmount = useSelector((state) => state.products.totalAmount);
  console.log(products)

  const [basket, setBasket] = useState(() => {
    const savedReviews = localStorage.getItem("cart");
      if (savedReviews !== null) {
        return JSON.parse(savedReviews)
      }
      return [];
    });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(products))
, [products]})

  console.log(basket)

  const removeFromCartHandler = (id) => {
    dispatch(removeItemFromCart(id));
    setBasket(products);
  };

  const handleIncrement = (id) => {
    dispatch(incrementQuantity(id)); 
    setBasket(products);
  };

  const handleDecrement = (id) => {
    dispatch(decrementQuantity(id));
    setBasket(products);
  };

  const handleClearCart = () => {
    dispatch(clearCart());
    localStorage.clear();
  }

  return (
    <div>
      <button type="button" onClick={() => handleClearCart()}>Очистити весь кошик</button>
      <ul className={css.products}>
        {basket.map((item) => (
          <li className={css.card} key={item.id}>
            <div className={css.imageRelativeBox}>
                    <div className={css.imageAbsoluteBox}>
                      <img
                        src={'/pet-shop' + item.image}
                        alt={item.title}
                        className={css.image}
                      />
                    </div>
                  </div>
                  <h3 className={css.title}>{item.title}</h3>
                  <p className={css.price}>Ціна товару: {item.price} гривень</p>
                  <div>
                  <button onClick={() => handleDecrement(item.id)}>-</button>
                  <span> {item.quantity} шт </span>
                  <button onClick={() => handleIncrement(item.id)}>+</button>
                  </div>
                  <button type='button' onClick={() => removeFromCartHandler(item.id)}>Видалити</button>
          </li>
        ))}
      </ul>
      <div>Сумма: {totalAmount}
        <button type='button'>Оформити замовлення</button>
      </div>
    </div>
  )
}