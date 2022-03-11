const BASE_URL = "http://localhost:8080";

export const getProducts = async () => {
  const res = await fetch(`${BASE_URL}/products`);
  return await res.json();
};

export const getProduct = async (id) => {
  const res = await fetch(`${BASE_URL}/products/${id}`);
  return await res.json();
};

export const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
