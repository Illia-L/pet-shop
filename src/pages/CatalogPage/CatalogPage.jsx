// import Catalog from '../../components/catalog/Catalog/Catalog';

// import { useEffect, useReducer, useState } from 'react';
// import {
//   categories as initialCategories,
//   products as initialProducts,
// } from '../../fake-data';
// import { useNavigate, useSearchParams } from 'react-router-dom';
// import * as api from '../../api';

// const sortValues = ['default', 'asc', 'desc'];

// const initialFilter = {
//   category: '',
//   search: '',
//   sort: sortValues[0],
//   perPage: 10,
//   page: 1,
//   pagesCount: 0,
// };

// function filterReducer(state, action) {
//   switch (action.type) {
//     case 'SET_CATEGORY': {
//       const category = action.payload;

//       if (category === state.category) return state;

//       return { ...state, page: 1, search: '', category };
//     }

//     case 'SET_SEARCH': {
//       const search = action.payload;

//       if (search === state.search) return state;

//       const category = search ? '' : state.category;

//       return { ...state, page: 1, category, search };
//     }

//     case 'SET_SORT': {
//       if (!sortValues.includes(action.payload)) return state;

//       return { ...state, page: 1, sort: action.payload };
//     }

//     case 'SET_PER_PAGE':
//       return { ...state, perPage: action.payload };

//     case 'SET_PAGE': {
//       const page = action.payload;

//       if (!Number.isInteger(page) || page < 1) return state;

//       return { ...state, page };
//     }

//     case 'SET_PAGES_COUNT':
//       return { ...state, pagesCount: action.payload };

//     default:
//       return state;
//   }
// }

// export default function CatalogPage() {
//   const [state, dispatch] = useReducer(filterReducer, initialFilter);
//   // const [categories, setCategories] = useState([]);
//   // const [products, setProducts] = useState([]);
//   const [searchParams] = useSearchParams();
//   const navigate = useNavigate();

//   function selectCategory(id) {
//     dispatch({ type: 'SET_CATEGORY', payload: id });
//   }

//   function setSearch(text) {
//     dispatch({ type: 'SET_SEARCH', payload: text });
//   }

//   function setSort(value) {
//     dispatch({ type: 'SET_SORT', payload: value });
//   }

//   function setPage(num) {
//     dispatch({ type: 'SET_PAGE', payload: num });
//   }

//   function setPerPage(num) {
//     dispatch({ type: 'SET_PER_PAGE', payload: num });
//   }

//   function setPagesCount(num) {
//     dispatch({ type: 'SET_PAGES_COUNT', payload: num });
//   }

  // async function fetchCategories() {
  //   const categories = await api.getCategories()

  //   setCategories(categories);
  // }

  // async function fetchProducts() {
  //   // const categoryParam = state.category ? `category=${state.category}` : '';
  //   // const searchParam = state.search ? `search=${state.search}` : '';
  //   // const sortParam = state.sort ? `sort=${state.sort}` : '';
  //   // const pageParam = state.page ? `page=${state.page}` : '';
  //   // const paramsToSend = [categoryParam, searchParam, sortParam, pageParam]
  //   //   .filter(param => param)
  //   //   .join('&');
  //   // const response = await fetch('api/products?' + paramsToSend);
  //   // const data = await response.json();
  //   // const { products, pagesCount } = data;

  //   const products = initialProducts;

  //   setProducts(products);
  //   // setPagesCount(pagesCount);
  // }

  // function saveSearchParamsToState() {
  //   const category = searchParams.get('category');
  //   const search = searchParams.get('search');
  //   const sort = searchParams.get('sort');
  //   const page = searchParams.get('page');
  //   const perPage = searchParams.get('per-page');

  //   if (search) setSearch(search);
  //   if (!search && category) selectCategory(category);
  //   if (sort) setSort(sort);
  //   if (page) setPage(page);
  //   if (perPage) setPerPage(perPage);
  // }

  // function navigateWithSearchParamsFromState() {
  //   const queryString = createQueryString(state);

  //   navigate(`/catalog?${queryString}`);
  // }

  // useEffect(() => {
  //   // fetchCategories();
  //   saveSearchParamsToState();
  // }, []);

  // useEffect(() => {
  //   navigateWithSearchParamsFromState();
  //   fetchProducts();
  // }, [state.category, state.search, state.sort, state.page, state.perPage]);

//   return (
//     <>
//       <Catalog
//         // categories={categories}
//         // products={products}
//         currentCategoryId={state.category}
//         currentProductsPage={state.page}
//         pagesCount={state.pagesCount}
//         search={state.search}
//         sort={state.sort}
//         setcurrentProductsPage={setPage}
//         setProductsPerPage={setPerPage}
//         setSearch={setSearch}
//         setSort={setSort}
//         selectCategory={selectCategory}
//       />
//     </>
//   );
// }

// function createQueryString(state) {
//   const categoryParam = state.category ? `category=${state.category}` : '';
//   const searchParam = state.search ? `search=${state.search}` : '';
//   const sortParam = state.sort !== 'default' ? `sort=${state.sort}` : '';
//   const pageParam = state.page !== 1 ? `page=${state.page}` : '';
//   const queryString = [categoryParam, searchParam, sortParam, pageParam]
//     .filter(param => param)
//     .join('&');

//   return queryString;
// }
