import css from "./TitleLink.module.css";
import { NavLink } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

export default function TitleLink() {
  return (
    <div className={css.titleLink}>
      <NavLink to="/" className={css.link}>
        <IoIosArrowBack className={css.icon} />
        <p className={css.linkBack}>Назад</p>
      </NavLink>
    </div>
  );
}
