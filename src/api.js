import axios from 'axios';

axios.defaults.baseURL = 'https://gfts.website';

export async function getCategories() {
  const response = await axios.get('categories');

  return response.data.results;
}

export async function getProducts(params = {}) {
  console.log(params);
  const { category, search, sort, page } = params;
  const processedParams = {};

  if (category) processedParams.category_id = category;
  if (search) processedParams.search = search;
  if (page) processedParams.page = page;
  if (sort) processedParams.ordering = sort;

  console.log(processedParams);

  const response = await axios.get('items', processedParams);

  return response.data.results;
}
