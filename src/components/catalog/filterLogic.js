import { useReducer } from 'react';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const sortValues = ['default', 'asc', 'desc'];

const defaultFilter = {
  category: '',
  search: '',
  sort: sortValues[0],
  perPage: 10,
  page: 1,
};

function filterReducer(state, action) {
  switch (action.type) {
    case 'SET_CATEGORY': {
      const category = action.payload;

      if (category === state.category) return state;

      return { ...state, page: 1, search: '', category };
    }

    case 'SET_SEARCH': {
      const search = action.payload;

      if (search === state.search) return state;

      const category = search ? '' : state.category;

      return { ...state, page: 1, category, search };
    }

    case 'SET_SORT': {
      if (!sortValues.includes(action.payload)) return state;

      return { ...state, page: 1, sort: action.payload };
    }

    case 'SET_PER_PAGE':
      return { ...state, perPage: action.payload };

    case 'SET_PAGE': {
      const page = +action.payload;

      if (!Number.isInteger(page) || page < 1) return state;

      return { ...state, page };
    }

    default:
      return state;
  }
}

export default function useFilter() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [state, dispatch] = useReducer(filterReducer, null, () => {
    const category = searchParams.get('category');
    const search = searchParams.get('search');
    const sort = searchParams.get('sort');
    const page = searchParams.get('page');
    const perPage = searchParams.get('per-page');

    const initialFilter = { ...defaultFilter };

    if (search) initialFilter.search = search;
    if (!search && category) initialFilter.category = category;
    if (sort) initialFilter.sort = sort;
    if (page) initialFilter.page = page;
    if (perPage) initialFilter.perPage = perPage;

    return initialFilter;
  });

  useEffect(() => {
    const newParams = {};

    for (const key in state) {
      if (state[key] !== defaultFilter[key]) newParams[key] = `${state[key]}`;
    }

    setSearchParams(newParams, { replace: false });
  }, [state]);

  const actions = {
    setCategory: id => dispatch({ type: 'SET_CATEGORY', payload: id }),
    setSearch: text => dispatch({ type: 'SET_SEARCH', payload: text }),
    setSort: value => dispatch({ type: 'SET_SORT', payload: value }),
    setPage: num => dispatch({ type: 'SET_PAGE', payload: num }),
    setPerPage: num => dispatch({ type: 'SET_PER_PAGE', payload: num }),
  };

  return [state, actions];
}
