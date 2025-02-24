import { useState } from 'react';
import css from './Sort.module.css';
import Icon from '../../reusable-global/Icon/Icon';
import MediaQuery from 'react-responsive';

const sortOptions = {
  default: 'За замовчуванням',
  asc: 'Від дешевих до дорогих',
  desc: 'Від дорогих до дешевих',
};

function Sort({ sort, setSort }) {
  const [isSortOpen, setIsSortOpen] = useState(false);

  function handleSort(value) {
    setIsSortOpen(false);
    setSort(value);
  }

  const modalStyles = css.list + ' ' + (isSortOpen ? css.open : '');

  const getOptionButtonStyles = key =>
    css.button + ' ' + (key === sort ? css.selected : '');

  return (
    <div className={css.box}>
      <button
        type='button'
        onClick={() => setIsSortOpen(is => !is)}
        className={css.viget}
      >
        <MediaQuery maxWidth={767}>
          <Icon
            id='icon-sort'
            width={28}
            height={26}
          />
        </MediaQuery>

        <MediaQuery minWidth={768}>
          {sortOptions[sort]}

          <Icon
            id='icon-chevron-down'
            width={9}
            height={6}
            iconClass={css.chevron}
          />
        </MediaQuery>
      </button>

      <ul className={modalStyles}>
        {Object.entries(sortOptions).map(([key, value]) => (
          <li
            className={css.item}
            key={key}
          >
            <button
              type='button'
              onClick={() => handleSort(key)}
              className={getOptionButtonStyles(key)}
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sort;
