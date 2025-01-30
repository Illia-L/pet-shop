import styles from './ProductDetails.module.css';
import { useEffect, useRef, useState } from 'react';
import { products as initialProducts } from '../../fake-data';
import { useParams } from 'react-router-dom';

function ProductDetails() {
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();

  function addToCart() {
    const newItem = {id, quantity}

    console.log(newItem);
  }

  useEffect(() => {
    const fetchedProduct = initialProducts.find(p => `${p.id}` === `${id}`);

    setProduct(fetchedProduct);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.fotos}>
          <img
            src={'/pet-shop' + product.image}
            alt={product.title}
          />
        </div>
        <div className={styles.details}>
          <h1 className={styles.title}>{product.title}</h1>
          <p className={styles.price}>{product.price}</p>
          <div className={styles.order}>
            <div className={styles.inputWrapper}>
              <input
                className={styles.inputQuantity}
                id='quantity'
                name='quantity'
                value={quantity}
                onChange={e => setQuantity(e.target.value)}
              />
            </div>
            <button type='button' className={styles.toCart} onClick={addToCart}>Додати до Кошика</button>
          </div>
        </div>
      </div>
      <div className={styles.desc}>{product.description}</div>
    </div>
  );
}

export default ProductDetails;
