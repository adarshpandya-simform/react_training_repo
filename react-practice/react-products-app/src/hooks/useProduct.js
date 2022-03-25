import { useDispatch, useSelector } from "react-redux";
import {
  addProductAsync,
  deleteProductAsync,
  fetchProductsAsync,
  updateProductAsync,
} from "../feature/product.slice";

export const useProduct = () => {
  const { products, isLoading } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const fetchProducts = () => {
    dispatch(fetchProductsAsync());
  };

  const addProduct = ({ name, description, thumbnail, images }) => {
    dispatch(addProductAsync({ name, description, thumbnail, images }));
  };

  const deleteProduct = ({ id }) => {
    dispatch(deleteProductAsync({ id }));
  };

  const updateProduct = ({ id, name, description, thumbnail, images }) => {
    dispatch(updateProductAsync({ id, name, description, thumbnail, images }));
  };

  return {
    products,
    isLoading,
    fetchProducts,
    addProduct,
    updateProduct,
    deleteProduct,
  };
};
