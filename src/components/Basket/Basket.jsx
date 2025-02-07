import { useEffect } from 'react';
import BasketList from './BasketList/BasketList';
import { useDispatch, useSelector } from 'react-redux';
import { setCart } from '../../redux/productsSlice';

export default function Basket() {
  const products = useSelector(state => state.products.items);
  const dispatch = useDispatch()

  useEffect(() => {
    const rawBasket = localStorage.getItem('basket');

    if (!rawBasket) return;

    const basket = JSON.parse(rawBasket);

    dispatch(setCart(basket));
  }, []);

  return (
    <>
      <h2>Кошик:</h2>
      {products.length > 0 ? <BasketList /> : <h1>Кошик порожний</h1>}
    </>
  );
}
