import { useSelector } from "react-redux";

import css from './BasketList.module.css';
import BasketItem from "../BasketItem/BasketItem";

export default function BasketList () {

  const items = useSelector(state => state.products.items);

  return (
    <ul className={css.products}>
        {items.map((item) => (
          <li className={css.card} key={item.id}>
            <BasketItem item={item}/>
          </li>
        ))}
      </ul>
  )
}