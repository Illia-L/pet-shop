import axios from 'axios';

axios.defaults.baseURL = 'https://gfts.website';

export async function getCategories() {
  const response = await axios.get('categories');

  return response.data.results;
}

export async function getProductsPage(params = {}) {
  const { category, search, sort, page } = params;
  const processedParams = {};

  if (category) processedParams.category_id = category;
  if (search) processedParams.search = search;
  if (page) processedParams.page = page;
  if (sort) processedParams.ordering = sort;

  const response = await axios.get('items', { params: processedParams });

  return response.data;
}

export async function getProduct(id) {
  const response = await axios.get(`items/${id}`);

  return response.data;
}

export async function signup(formData) {
  const {
    name: first_name,
    email,
    newPassword: password,
    passwordConfirm: password_confirm,
  } = formData;

  const registerData = { first_name, email, password, password_confirm };

  const response = await axios.post(`register/`, registerData);

  const user = { ...response.data };

  user.name = user.first_name;
  delete user.first_name;

  return user;
}

export async function login(formData) {
  const response = await axios.post('login/', formData);

  const { access, refresh, first_name: name } = response.data;

  return { access, refresh, name };
}

export async function getFreshAccessToken(refresh) {
  const response = await axios.post('refresh/', { refresh });

  return response.data.access;
}
