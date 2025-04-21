import css from './ProductDetails.module.css';
import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import * as api from '../../api';
import { PulseLoader } from 'react-spinners';
import Icon from '../reusable-global/Icon/Icon';
import ProductDetailsForm from '../ProductDetailsForm/ProductDetailsForm';

function ProductDetails() {
  const [product, setProduct] = useState({});
  const [isPending, setIsPending] = useState(false);
  const [isError, setIsError] = useState(false);
  const { id } = useParams();
  const location = useLocation();
  const fromRef = useRef('/catalog');

  useEffect(() => {
    const from = location?.state?.from;

    if (!from) return;

    fromRef.current = from;
  }, []);

  useEffect(() => {
    getProduct();
  }, [id]);

  async function getProduct() {
    try {
      setIsError(false);
      setIsPending(true);
      const product = await api.getProduct(id);
      setProduct(product);
    } catch (err) {
      setIsError(true);
    } finally {
      setIsPending(false);
    }
  }

  // if (isPending)
  //   return (
  //     <PulseLoader
  //       color='#a6a5a5'
  //       margin={5}
  //       speedMultiplier={0.6}
  //     />
  //   );

  if (isError)
    return (
      <p>
        Не вдалося завантажити дані про товар. Спробуйте, будь ласка, пізніше.
      </p>
    );

  return (
    <div className={css.container}>
      <Link to={fromRef.current} className={css.linkBack}>
        <Icon
          id='icon-chevron-left'
          width={10}
          height={16}
        />
        Назад
      </Link>

      <div className={css.box}>
        <div className={css.details}>
          <h1 className={css.title}>{product?.title}</h1>

          <div className={css.desc}>
            <span className={css.descLabel}>Опис:</span>
            <p className={css.descContent}>{product?.description}</p>
          </div>
        </div>

        <div className={css.imageContainer}>
          <img
            className={css.image}
            src={product?.image}
            alt={product?.title}
          />
        </div>

        <ProductDetailsForm product={product} />
      </div>
    </div>
  );
}

export default ProductDetails;
