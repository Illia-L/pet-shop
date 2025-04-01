import { Link } from 'react-router-dom';
import css from './Error500.module.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeAuthView } from '../../../redux/userSlice';
import { useMediaQuery } from 'react-responsive';

function Error500() {
  const dispatch = useDispatch();

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isDecktop = useMediaQuery({ query: '(min-width: 1440px)' });
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });
  const screenRes = isRetina ? '-2x' : '';
  let screenSize = '-tab';
  let imageHeight = 188;

  if (isMobile) {
    screenSize = '-mob';
    imageHeight = 185;
  }

  if (isDecktop) {
    screenSize = '';
    imageHeight = 214;
  }

  const imageSrc = `/pet-shop/img/design/dog-sleeping${screenSize}${screenRes}.webp`;

  return (
    <>
      <p className={css.desc}>
        Сталася помилка.
        <br />
        Спробуйте пізніше
      </p>

      <img
        className={css.image}
        src={imageSrc}
        height={imageHeight}
        width='auto'
        alt='A sleeping cartoon dog'
        loading='lazy'
      />

      <Link
        to='/'
        className={css.link}
      />
    </>
  );
}

export default Error500;
