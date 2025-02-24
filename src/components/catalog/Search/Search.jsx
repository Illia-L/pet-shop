import { useEffect, useRef, useState } from 'react';
import Icon from '../../reusable-global/Icon/Icon';
import css from './Search.module.css';
import MediaQuery from 'react-responsive';
import Modal from '../Modal/Modal';

function Search({ search, setSearch }) {
  const [value, setValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    setSearch(value);
  }

  useEffect(() => {
    setValue(search);
  }, [search]);

  return (
    <form
      onSubmit={handleSubmit}
      onReset={() => setValue('')}
      className={css.form}
    >
      <div className={css.box}>
        <MediaQuery maxWidth={767}>
          <button
            type='submit'
            className={css.button + ' ' + css.submitMobile}
          >
            <Icon
              id='icon-search'
              width={16}
              height={16}
            />
          </button>
        </MediaQuery>
        <MediaQuery minWidth={768}>
          <Icon
            id='icon-search'
            width={16}
            height={16}
            iconClass={css.iconSearch}
          />
        </MediaQuery>

        <input
          type='search'
          className={css.input}
          placeholder='Шукати товари'
          value={value}
          onChange={e => setValue(e.target.value)}
          onFocus={() => setIsOpen(true)}
          onBlur={() => setIsOpen(false)}
        />

        <button
          onClick={() => setSearch('')}
          type='reset'
        >
          {!!value && (
            <Icon
              id='icon-close'
              width={12}
              height={12}
              iconClass={css.iconClose}
            />
          )}
        </button>
      </div>

      <MediaQuery minWidth={768}>
        <button
          className={css.submitTablet}
          type='submit'
        >
          Знайти
        </button>
      </MediaQuery>
    </form>
  );
}

export default Search;
