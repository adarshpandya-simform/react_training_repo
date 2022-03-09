import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components";
import {
  AddProductPage,
  HomePage,
  ProductDetailsPage,
  ProductEditPage,
  ProductsPage,
} from "./pages";
import { useProduct } from "./hooks/useProduct";

const App = () => {
  const { fetchProducts } = useProduct();

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/add-product" element={<AddProductPage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
        <Route path="/edit-product/:id" element={<ProductEditPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
