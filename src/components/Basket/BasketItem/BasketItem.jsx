
import css from './BasketItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../../../redux/productsSlice';

export default function BasketItem ({ item: { id, price, title, image }}) {

  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteProduct(id))
  }

  return (
    <>
      <div className={css.imageRelativeBox}>
        <div className={css.imageAbsoluteBox}>
          <img
            src={'/pet-shop' + image}
            alt={title}
            className={css.image}
          />
        </div>
      </div>
      <h3 className={css.title}>{title}</h3>
      <p className={css.price}>{price}</p>
      <button type='button' onClick={handleDelete}>Видалити</button>
    </>
  )
}