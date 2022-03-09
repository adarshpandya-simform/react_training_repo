import { useDispatch, useSelector } from "react-redux";
import { addProductAsync, fetchProductsAsync } from "../feature/product.slice";

export const useProduct = () => {
  const { products, isLoading } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const fetchProducts = () => {
    dispatch(fetchProductsAsync());
  };

  const addProduct = ({ name, description, thumbnail, images }) => {
    dispatch(addProductAsync({ name, description, thumbnail, images }));
  };

  return { products, isLoading, fetchProducts, addProduct };
};
