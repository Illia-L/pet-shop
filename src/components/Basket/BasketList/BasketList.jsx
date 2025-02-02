import { useSelector, useDispatch } from "react-redux";
import { removeItemFromCart, incrementQuantity, decrementQuantity, clearCart} from '../../../redux/productsSlice';

import css from './BasketList.module.css';

export default function BasketList () {

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const totalAmount = useSelector((state) => state.products.totalAmount);
  console.log(products.length)
  console.log(totalAmount)

 const removeFromCartHandler = (id) => {
    dispatch(removeItemFromCart(id));
  };

  const handleIncrement = (id) => {
    dispatch(incrementQuantity(id)); 
  };

  const handleDecrement = (id) => {
    dispatch(decrementQuantity(id)); 
  };

  const handleClaerCart = () => {
    dispatch(clearCart());
  }

  return (
    <div>
      <button type="button" onClick={() => handleClaerCart()}>Очистити весь кошик</button>
      <ul className={css.products}>
        {products.map((item) => (
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
                  <p className={css.price}>Ціна: {item.price*item.quantity} гривень</p>
                  <p>Кол-во: {item.quantity} шт</p>
                  <div>
                  <button onClick={() => handleDecrement(item.id)}>-</button>
                  <span>{item.quantity}</span>
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