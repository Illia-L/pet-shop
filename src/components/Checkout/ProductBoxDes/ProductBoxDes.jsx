import css from "./ProductBoxDes.module.css";

export default function ProductBoxDes({ item }) {
  return (
    <div className={css.productBox}>
      <div className={css.imageBox}>
        <img
          src={"/pet-shop" + item.image}
          alt={item.title}
          className={css.image}
        />
        <p className={css.title}>{item.title}</p>
      </div>
      <div>
        <p className={css.price}>{item.price},00 ₴</p>
      </div>
    </div>
  );
}
