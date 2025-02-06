import { useEffect, useState } from 'react';
import styles from './Pagination.module.css';

function Pagination({
  currentProductsPage,
  pagesCount,
  setcurrentProductsPage,
}) {
  // const isDotsVisible =
  //   currentProductsPage >= 5 && currentProductsPage < pagesCount - 1;
  const isPreviousDisabled = currentProductsPage === 1;
  const isNextDisabled = currentProductsPage === pagesCount;

  const getButtonStyle = page =>
    styles.button + ' ' + (page === currentProductsPage ? styles.current : '');

  function selectPage(pageNum) {
    setcurrentProductsPage(pageNum);
  }

  function selectNext() {
    setcurrentProductsPage(p => p + 1);
  }

  function selectPrevious() {
    setcurrentProductsPage(p => p - 1);
  }

  // States: currentProductsPage, pagesCount
  // Layout options:
  //   1 page: 1
  //   2-4 pages: < 1 2 3 4 >
  //   5 of more pages: < 1 2 3 ... 18 >
  // Layout depending on current page:
  //   first is current - button "<" is disabled
  //   last is current - button ">" is disabled

  // Logic with ... :
  //   On click on ">": if
  //     next page is among 3 displayed - nothing
  //     next page is absent, 3 pages are added 1
  //   If last of 3 pages is equal to the very last page - 1: ... is not displayed
  return (
    <nav
      className={styles.pagination}
      aria-label='Pagination'
    >
      <button
        type='button'
        aria-label='Go to first page'
        className={styles.btn}
        disabled={currentProductsPage === 1}
        onClick={() => setcurrentProductsPage(1)}
      >
        &laquo;
      </button>
      <button
        type='button'
        aria-label='Go to previous page'
        className={styles.btn}
        disabled={currentProductsPage === 1}
        onClick={() => setcurrentProductsPage(p => p - 1)}
      >
        &lsaquo;
      </button>
      <span
        className={styles.decs}
        aria-live='polite'
      >
        {currentProductsPage} of {pagesCount}
      </span>
      <button
        type='button'
        aria-label='Go to next page'
        className={styles.btn}
        disabled={currentProductsPage === pagesCount}
        onClick={() => setcurrentProductsPage(p => p + 1)}
      >
        &rsaquo;
      </button>
      <button
        type='button'
        aria-label='Go to last page'
        className={styles.btn}
        disabled={currentProductsPage === pagesCount}
        onClick={() => setcurrentProductsPage(pagesCount)}
      >
        &raquo;
      </button>
    </nav>
  );
}

export default Pagination;
