import css from './Checkout.module.css';
import { NavLink } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";

export default function Checkout () {
  return (
    <div className={css.container}>
      <div>
        <NavLink to='/' className={css.link}>
          <IoIosArrowBack className={css.icon}/>
            <p className={css.linkBack}>Назад</p>
        </NavLink>
      </div>
      <div>

      </div>
    </div>
  )
}