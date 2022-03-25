import { productModel } from "../models/product.model.js";

const getProducts = async () => {
  const products = await productModel.find({});
  return { success: true, products };
};

const getProduct = async (id) => {
  const product = await productModel.findById(id);
  return { success: true, product };
};

const insertProduct = async ({ name, description, thumbnail, images }) => {
  const productObj = { name, description, thumbnail, images };
  const product = new productModel(productObj);
  const productData = await product.save();
  return { success: true, product: productData };
};

const deleteProduct = async (id) => {
  const product = await productModel.findByIdAndDelete(id, { new: true });
  return { success: true, product };
};

const updateProduct = async ({ id, name, description, thumbnail, images }) => {
  const product = await productModel.findByIdAndUpdate(
    id,
    {
      name,
      description,
      thumbnail,
      images,
    },
    { new: true }
  );
  return { success: true, product };
};

export const productController = {
  getProducts,
  getProduct,
  insertProduct,
  deleteProduct,
  updateProduct,
};
