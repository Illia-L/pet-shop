import { SiDatadog } from "react-icons/si";
import css from './BasketEmpty.module.css';
import { NavLink } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";

export default function BasketEmpty ({ onClose }) {

  return (
    <div className={css.container}>
      <div className={css.titleBox}>
        <h1 className={css.mainTitle}>Мій Кошик</h1>
        <button className={css.buttonBorder}>
          <RxCross1 className={css.iconCross} onClick={() => onClose()}/>
        </button>
      </div>
      <div className={css.iconFlex}>
        <SiDatadog className={css.icon}/>
        <h1 className={css.title}>Кошик порожній</h1>
        <p className={css.text}>Але це ніколи не пізно <NavLink to='/catalog' className={css.link}>
            <button className={css.link} onClick={() => onClose()}> виправити</button>
          </NavLink> :)
        </p>
      </div>
    </div>
  )
}