import { SiDatadog } from "react-icons/si";
import css from './BasketEmpty.module.css';
import { NavLink } from "react-router-dom";
export default function BasketEmpty () {

  return (
    <div className={css.container}>
      <SiDatadog className={css.icon}/>
      <h1 className={css.title}>Кошик порожній</h1>
      <p className={css.text}>Але це ніколи не пізно <NavLink to='/catalog' className={css.link}>виправити</NavLink> :)</p>
    </div>
  )
}