import css from './Footer.module.css';
import Icon from '../reusable-global/Icon/Icon';

function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.container}>
        <div className={css.contactsBlock}>
          <h3 className={css.subtitle}>Контакти</h3>
          <address className={css.desc}>
            <ul>
              <li>
                <a href=''>м. Львів, вул. Котляра, 12</a>
              </li>
              <li>
                <a href='tel:+380981234567'>+38 (098) 123-45-67</a>
              </li>
              <li>
                <a href='mailto:info@zoolviv.com'>info@zoolviv.com</a>
              </li>
            </ul>
          </address>
        </div>

        <div className={`${css.mt20} ${css.icons}`}>
          <h3 className={css.subtitle}>Соціальні мережі</h3>
          <ul className={`${css.socials} ${css.desc}`}>
            <li>
              <a href=''>
                <Icon
                  id='icon-facebook'
                  width='25'
                  height='25'
                  iconClass={css.icon}
                />
              </a>
            </li>
            <li>
              <a href=''>
                <Icon
                  id='icon-instagram'
                  width='25'
                  height='25'
                  iconClass={css.icon}
                />
              </a>
            </li>
          </ul>
        </div>

        <div className={`${css.mt40} ${css.schedule}`}>
          <h3 className={css.subtitle}>Графік роботи</h3>
          <p className={css.desc}>
            Пн-Пт: <time dateTime='09:00'>09:00</time> –{' '}
            <time dateTime='20:00'>20:00</time>
            <br />
            Сб-Нд: <time dateTime='10:00'>10:00</time> –{' '}
            <time dateTime='18:00'>18:00</time>
          </p>
        </div>

        <div className={`${css.mt40} ${css.policyBlock}`}>
          <h3 className={css.subtitle}>Політика магазину</h3>
          <ul className={css.desc}>
            <li>
              <a href=''>Політика конфіденційності</a>
            </li>
            <li>
              <a href=''>Умови доставки</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
