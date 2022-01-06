import { products } from "../../utils/data";
import { Link } from "react-router-dom";
import "./ProductsPage.css";

const ProductsPage = () => {
  return (
    <div>
      <h4>E-Commerce products page</h4>
      <div className="product-card-container">
        {products.map((product) => (
          <Link
            style={{ textDecoration: "none" }}
            key={product.id}
            to={`/products/${product.id}`}
          >
            <div key={product.id} className="product-card">
              <img
                src={product.image}
                className="product-image"
                alt="product"
              />
              <div className="product-description">
                <span className="product-title">Title : {product.name}</span>
                <span className="product-price">Price : {product.price}</span>
                <span className="product-discount">
                  Discount : {product.discount}
                </span>
              </div>
            </div>
          </Link>
        ))}
        <br />
        <br />
        <Link to={"/"}>go back to home</Link>
        <br />
        <Link to={"/products/1"}> go to first product </Link>
      </div>
    </div>
  );
};

export default ProductsPage;
