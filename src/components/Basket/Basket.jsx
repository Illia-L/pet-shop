import BasketList from "./BasketList/BasketList";
import { useSelector } from "react-redux";

export default function Basket () {
  const products = useSelector((state) => state.products.items);

  return (
    <>
      <h2>Кошик:</h2>
      {products.length > 0 ? <BasketList /> : <h1>Кошик порожний</h1>}
    </>
  )
}