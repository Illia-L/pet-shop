import css from "./ProductsCheckout.module.css";
import { useSelector } from "react-redux";
import { useMedia } from "react-use";

import ProductBox from "../ProductBox/ProductBox";
import ProductBoxDes from "../ProductBoxDes/ProductBoxDes";

export default function ProductsCheckout({ openModal }) {
  const products = useSelector((state) => state.products.items);
  const isDesktop = useMedia("(min-width: 768px)");

  return (
    <div className={css.containerList}>
      <h1 className={css.title}>Замовлення</h1>
      <ul className={css.list}>
        {products.map((item) => (
          <li className={css.item} key={item.id}>
            {isDesktop ? (
              <ProductBoxDes item={item} />
            ) : (
              <ProductBox item={item} />
            )}
          </li>
        ))}
      </ul>

      <button className={css.button} onClick={openModal}>
        Редагувати товари
      </button>
    </div>
  );
}
