import css from "./ProductBox.module.css";

export default function ProductBox({ item }) {
  return (
    <div className={css.productBox}>
      <div className={css.gap}>
        <div className={css.imageBox}>
          <img
            src={"/pet-shop" + item.image}
            alt={item.title}
            className={css.image}
          />
        </div>
        <div className={css.priceBox}>
          <p className={css.title}>{item.title}</p>
          <p className={css.price}>{item.price},00 ₴</p>
        </div>
      </div>
    </div>
  );
}
