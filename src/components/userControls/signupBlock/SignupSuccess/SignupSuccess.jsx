import { useMediaQuery } from 'react-responsive';
import css from './SignupSuccess.module.css';

function SignupSuccess() {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });
  const imageHeight = isMobile ? 194 : 298;
  const screenSize = isMobile ? '-mob' : '';
  const screenRes = isRetina ? '-2x' : '';
  const imageSrc = `/pet-shop/img/design/dog-standing${screenSize}${screenRes}.webp`;

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
    </div>
  );
}

export default SignupSuccess;
