import axios from 'axios';

axios.defaults.baseURL = 'https://gfts.website';

export async function getCategories() {
  const response = await axios.get('categories');

  return response.data.results;
}

export async function getProductsPage(params = {}) {
  console.log(params);
  const { category, search, sort, page } = params;
  const processedParams = {};

  if (category) processedParams.category_id = category;
  if (search) processedParams.search = search;
  if (page) processedParams.page = page;
  if (sort) processedParams.ordering = sort;

  console.log(processedParams);

  const response = await axios.get('items', {params: processedParams});

  return response.data;
}

export async function getProduct(id) {
  const response = await axios.get(`items/${id}`)

  return response.data
}
