import { useEffect, useState } from 'react';
import styles from './Pagination.module.css';

const defaultDisplayedNumberOfPages = 5;
const displayedPagesToBeCut = Array.from(
  { length: defaultDisplayedNumberOfPages },
  (_, i) => i + 1
);

function Pagination({ currentProductsPage, pagesCount, setcurrentProductsPage }) {
  const [displayedPageNumbers, setDisplayedPageNumbers] = useState([]);

  // const isDotsVisible =
  //   currentProductsPage >= 5 && currentProductsPage < pagesCount - 1;
  const isPreviousDisabled = currentProductsPage === 1;
  const isNextDisabled = currentProductsPage === pagesCount;

  const getButtonStyle = page =>
    styles.button + ' ' + (page === currentProductsPage ? styles.current : '');

  function selectPage(pageNum) {
    setcurrentProductsPage(pageNum)
  }

  function selectNext() {
    setcurrentProductsPage(p => p + 1)
  }

  function selectPrevious() {
    setcurrentProductsPage(p => p - 1)
  }

  useEffect(() => {
    setDisplayedPageNumbers(displayedPagesToBeCut.slice(0, pagesCount));
  }, [pagesCount]);

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
      <ul className={styles.paginationList}>
        <li>
          <button
            className={styles.button}
            aria-label='Previous Page'
            disabled={isPreviousDisabled}
            onClick={selectPrevious}
          >
            &lt;
          </button>
        </li>
        {displayedPageNumbers.map(pageNum => (
          <li>
            <button
              className={getButtonStyle(pageNum)}
              aria-label={'Page ' + pageNum}
              onClick={() => selectPage(pageNum)}
            >
              {pageNum}
            </button>
          </li>
        ))}

        {/* {isDotsVisible && (
          <li>
            <span
              className={styles.dots}
              aria-hidden='true'
            >
              ...
            </span>
          </li>
        )}
        <li>
          <button
            className={getButtonStyle(pagesCount)}
            aria-label={'Page ' + pagesCount}
          >
            {pagesCount}
          </button>
        </li> */}
        <li>
          <button
            className={styles.button}
            aria-label='Next Page'
            disabled={isNextDisabled}
            onClick={selectNext}
          >
            &gt;
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
