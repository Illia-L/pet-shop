import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";

const getNavLinkClass = ({isActive}) => {
    return clsx(css.link, isActive && css.active)
  }

export default function Navigation () {
  return (
    <nav className={css.navListContainer}>
        <NavLink to="/" className={getNavLinkClass}>
          Home
        </NavLink>
        <NavLink to="about" className={getNavLinkClass}>
          About
        </NavLink>
        <NavLink to="catalog" className={getNavLinkClass}>
          Catalog
        </NavLink>
        <NavLink to="profile" className={getNavLinkClass}>
          Profile
        </NavLink>
        <NavLink to="checkout" className={getNavLinkClass}>
          Checkout
        </NavLink>
        <NavLink to="basket" className={getNavLinkClass}>
          Basket
        </NavLink>
    </nav>
  )
}