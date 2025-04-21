import { useEffect, useState } from 'react';
import styles from './Pagination.module.css';

function Pagination({
  page,
  pagesCount,
  setPage,
}) {

  return (
    <nav
      className={styles.pagination}
      aria-label='Pagination'
    >
      <button
        type='button'
        aria-label='Go to first page'
        className={styles.btn}
        disabled={page === 1}
        onClick={() => setPage(1)}
      >
        &laquo;
      </button>
      <button
        type='button'
        aria-label='Go to previous page'
        className={styles.btn}
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
      >
        &lsaquo;
      </button>
      <span
        className={styles.decs}
        aria-live='polite'
      >
        {page} of {pagesCount}
      </span>
      <button
        type='button'
        aria-label='Go to next page'
        className={styles.btn}
        disabled={page === pagesCount}
        onClick={() => setPage(page + 1)}
      >
        &rsaquo;
      </button>
      <button
        type='button'
        aria-label='Go to last page'
        className={styles.btn}
        disabled={page === pagesCount}
        onClick={() => setPage(pagesCount)}
      >
        &raquo;
      </button>
    </nav>
  );
}

export default Pagination;
