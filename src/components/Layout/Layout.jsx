import css from "./Layout.module.css";
import Header from '../Header/Header';

import { Suspense } from "react";
import Footer from "../Footer/Footer";

export default function Layout ({ children }) {
  return (
      <div className={css.container}>
          <Header />
          <main>
            {children}
          </main>
          <Footer />
      </div>
  )
}