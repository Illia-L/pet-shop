import css from "./SubmitBox.module.css";
import { useSelector } from "react-redux";

export default function SubmitBox() {
  const products = useSelector((state) => state.products.items);
  const totalAmount = useSelector((state) => state.products.totalAmount);

  return (
    <div className={css.submitBox}>
      <h2 className={css.titleForm}>Разом</h2>
      <div className={css.totalBox}>
        <p className={css.textForm}>
          <span>{products.length}</span> товари на суму
        </p>
        <p className={css.numberForm}>
          <span>{totalAmount}</span>, 00 ₴
        </p>
      </div>
      <div className={css.totalBox}>
        <p className={css.textForm}>
          <span></span> Вартість доставки
        </p>
        <p className={css.numberForm}>
          <span>80</span>, 00 ₴
        </p>
      </div>
      <div className={`${css.totalBox} ${css.marginBox}`}>
        <p className={css.textForm}>
          <span></span> До сплати
        </p>
        <p className={css.numberForm}>
          <span>{totalAmount + 80}</span>, 00 ₴
        </p>
      </div>
      <button className={css.submitButton}>Оплатити</button>
      <div className={css.policy}>
        <p className={css.textInformation}>
          Підтверджуючи замовлення, я приймаю умови:
        </p>
        <ul className={css.list}>
          <li className={css.item}>
            <p className={css.textItem}>
              положення про обробку і захист персональних даних
            </p>
          </li>
          <li className={css.item}>
            <p className={css.textItem}>угоди користувача</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
