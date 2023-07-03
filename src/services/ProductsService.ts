import ProductsModel from '../models/ProductsModel';

const { createProduct, getProductsModel } = ProductsModel;

const postProductService = async (name: string, amount: string) => {
  const productCreated = await createProduct(name, amount);

  return productCreated;
};

const getProductService = async () => {
  const allProducts = await getProductsModel();
  return allProducts;
};

export default {
  postProductService,
  getProductService,
};