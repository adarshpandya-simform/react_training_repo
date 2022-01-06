import { products } from "../../utils/data";
import { useNavigate } from "react-router-dom";
import "./ProductsPage.css";

const ProductsPage = () => {
  const navigate = useNavigate();

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div>
      <h4>E-Commerce products page</h4>
      <div className="product-card-container">
        {products.map((product) => (
          <div
            onClick={() => handleProductClick(product.id)}
            key={product.id}
            className="product-card"
          >
            <img src={product.image} className="product-image" alt="product" />
            <div className="product-description">
              <span className="product-title">Title : {product.name}</span>
              <span className="product-price">Price : {product.price}</span>
              <span className="product-discount">
                Discount : {product.discount}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
