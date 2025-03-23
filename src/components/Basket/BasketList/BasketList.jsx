import { useSelector, useDispatch } from "react-redux";
import { removeItemFromCart, incrementQuantity, decrementQuantity, clearCart} from '../../../redux/productsSlice';
import { NavLink } from "react-router-dom";
import { FaRegTrashAlt } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import css from './BasketList.module.css';

export default function BasketList ({ onClose }) {

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
    <>
      <div className={css.titleBox}>
        <h1 className={css.mainTitle}>Мій Кошик</h1>
        <button className={css.buttonBorder}>
          <RxCross1 className={css.iconCross} onClick={() => onClose()}/>
        </button>
      </div>
      <div className={css.listBox}>
        <div className={css.btnBox}>
          <p className={css.deleteText}>Видалити все</p>
          <button className={css.btnClear} type="button" onClick={() => handleClearCart()}>
          <FaRegTrashAlt className={css.iconDelete} />
          </button>
        </div>
        <ul className={css.products}>
          {products.map((item) => (
            <li className={css.card} key={item.id}>
              <div className={css.productBox}>
                {/* <div>
                  <input type='checkbox'>
                  </input>
                </div> */}
                <div className={css.gap}>
                  <div className={css.imageBox}>
                    <img
                      src={'/pet-shop' + item.image}
                      alt={item.title}
                      className={css.image}
                    />
                  </div>
                  <div className={css.textBox}>
                    <p className={css.title}>{item.title}</p>
                    <div className={css.priceBox}>
                      <p className={css.price}>{item.price},00 ₴</p>
                      <div>
                        <button className={css.counter} onClick={() => handleDecrement(item.id)}>-</button>
                        <span className={css.quantity}> {item.quantity} </span>
                        <button className={css.counter} onClick={() => handleIncrement(item.id)}>+</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={css.buttonPosition}>
                  <button type='button' onClick={() => removeFromCartHandler(item.id)}><FaRegTrashAlt className={css.iconDelete} /></button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className={css.background}>
        <div className={css.totalBox}>
          <div className={css.totalBtnBox}>
            <div className={css.total}>
              <span className={css.totalText}>Разом</span>
              <span className={css.totalAmount}>{totalAmount},00 ₴</span>
            </div>
            <button className={css.btnOrder} type='button'>Оформити замовлення</button>
          </div>
          <NavLink to='/catalog' className={css.continueText}>
            <button className={css.continueText} onClick={() => onClose()}>Продовжити покупки</button>
          </NavLink>
        </div>
      </div>
    </>
  )
}