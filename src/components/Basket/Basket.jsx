import BasketList from "./BasketList/BasketList";
import { useSelector } from "react-redux";
import css from './Basket.module.css';

export default function Basket () {
  const products = useSelector((state) => state.products.items);

  return (
    <>
      {products.length > 0 ? <BasketList /> : <h1>Кошик порожний</h1>}
    </>
  )
}