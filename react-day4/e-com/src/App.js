import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import ProductsPage from "./components/ProductsPage/ProductsPage";
import Product from "./components/Product/Product";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<Product />} />
      </Routes>
    </div>
  );
};

export default App;
