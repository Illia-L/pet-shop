import css from "./ProductBox.module.css";

export default function ProductBox({ item }) {
  return (
    <div className={css.productBox}>
      <div className={css.imageBox}>
        <img src={item.image} alt={item.title} className={css.image} />
      </div>
      <div className={css.priceBox}>
        <p className={css.title}>{item.title}</p>
        <div className={css.totalBox}>
          <p className={css.price}>
            {item.price},00 ₴ x {item.quantity} од
          </p>
          <p className={css.total}>{item.price * item.quantity},00 ₴</p>
        </div>
      </div>
    </div>
  );
}
