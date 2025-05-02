import css from './Menu.module.scss';
import Navigation from '../Navigation/Navigation';
import Icon from '../reusable-global/Icon/Icon';

function Menu({ isMenuOpen, setIsMenuOpen }) {
  const getMenuStyles = () =>
    css.menu + ' ' + (isMenuOpen ? css.open : '');

  const getOverlayStyles = () =>
    css.overlay + ' ' + (isMenuOpen ? css.open : '');

  return (
    <>
      <div className={getOverlayStyles()}></div>
      <div
        className={getMenuStyles()}
        role='dialog'
        aria-label='Main Navigation'
      >
        {/* <div className={css.buttonContainer}> */}
        <button
          className={`${css.btn} ${css.btnClose}`}
          type='button'
          aria-label='Close Menu'
          onClick={() => setIsMenuOpen(false)}
        >
          <Icon
            id='icon-close'
            width={18}
            height={42}
          />
        </button>
        {/* </div> */}
        <Navigation setIsMenuOpen={setIsMenuOpen} />
      </div>
    </>
  );
}

export default Menu;
