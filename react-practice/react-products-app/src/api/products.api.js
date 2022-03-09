import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:2000/api",
});

export const getProductsRequest = async () => {
  const res = await instance.get("/products");
  return res.data.products;
};

export const getProductRequest = async ({ id }) => {
  const res = await instance.get(`/product/${id}`);
  return res.data.product;
};

export const addProductRequest = async ({
  name,
  description,
  thumbnail,
  images,
}) => {
  const res = await instance.post("/add-product", {
    name,
    description,
    thumbnail,
    images,
  });
  return res.data.product;
};

export const deleteProductRequest = async ({ id }) => {
  const res = await instance.delete(`/delete-product/${id}`);
  return res.data.product;
};

export const updateProductRequest = async ({
  id,
  name,
  description,
  thumbnail,
  images,
}) => {
  const res = await instance.patch("/update-product", {
    id,
    name,
    description,
    images,
    thumbnail,
  });
  return res.data.products;
};
