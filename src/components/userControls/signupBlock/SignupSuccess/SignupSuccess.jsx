import { useMediaQuery } from 'react-responsive';
import formCss from '../../css/form.module.css';
import css from './SignupSuccess.module.scss';
import clsx from 'clsx';

function SignupSuccess({ setModalComponent }) {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });
  const imageHeight = isMobile ? 194 : 298;
  const screenSize = isMobile ? '-mob' : '';
  const screenRes = isRetina ? '-2x' : '';
  const imageSrc = `/img/design/dog-standing${screenSize}${screenRes}.webp`;

  return (
    <div className={css.container}>
      <p className={css.desc}>Ваш акаунт успішно створено</p>

      <h2 className={css.title}>
        Вітаємо в <span>PetShop!</span>
      </h2>

      <img
        className={css.image}
        src={imageSrc}
        height={imageHeight}
        width='auto'
        alt='A ready to play cartoon dog'
        loading='lazy'
      />

      <button
        className={clsx(formCss.button, css.button)}
        type='button'
        onClick={() => setModalComponent('login')}
      >
        Увійти в акаунт
      </button>
    </div>
  );
}

export default SignupSuccess;
