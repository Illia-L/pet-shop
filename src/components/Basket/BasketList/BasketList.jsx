import { useSelector, useDispatch } from "react-redux";
import { removeItemFromCart, incrementQuantity, decrementQuantity, clearCart} from '../../../redux/productsSlice';
import { NavLink } from "react-router-dom";
import { FaRegTrashAlt } from "react-icons/fa";
import css from './BasketList.module.css';

export default function BasketList () {

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const totalAmount = useSelector((state) => state.products.totalAmount);

  const removeFromCartHandler = (id) => {
    dispatch(removeItemFromCart(id));
  };

  const handleIncrement = (id) => {
    dispatch(incrementQuantity(id)); 
  };

  const handleDecrement = (id) => {
    dispatch(decrementQuantity(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
    localStorage.clear();
  }

  return (
    <div>
      {/* <button type="button" onClick={() => handleClearCart()}>Очистити весь кошик</button> */}
      <h1 className={css.mainTitle}>Мій Кошик</h1>
      <div className={css.listBox}>
        <ul className={css.products}>
          {products.map((item) => (
            <li className={css.card} key={item.id}>
              <div className={css.productBox}>
                <div>
                  <input type='checkbox'>
                  </input>
                </div>
                <div className={css.imageBox}>
                  <img
                    src={'/pet-shop' + item.image}
                    alt={item.title}
                    className={css.image}
                  />
                </div>
                <div className={css.textBox}>
                  <p className={css.title}>{item.title}</p>
                  <p className={css.price}>{item.price},00 ₴</p>
                  <div>
                  <button className={css.counter} onClick={() => handleDecrement(item.id)}>-</button>
                  <span className={css.quantity}> {item.quantity} </span>
                  <button className={css.counter} onClick={() => handleIncrement(item.id)}>+</button>
                  </div>
                </div>
                <div className={css.buttonPosition}>
                  <button type='button' onClick={() => removeFromCartHandler(item.id)}><FaRegTrashAlt /></button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className={css.totalBox}>
        <div className={css.total}>
          <span className={css.totalText}>Разом</span>
          <span className={css.totalAmount}>{totalAmount},00 ₴</span>
        </div>
        <button className={css.btnOrder} type='button'>Оформити замовлення</button>
        <NavLink to='/catalog' className={css.continueText}>Продовжити покупки</NavLink>
      </div>
    </div>
  )
}