import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../utils/data";
import "./Product.css";

const Product = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    let foundProduct = products.filter((product) => product.id === id)[0];
    if (foundProduct === undefined || foundProduct === null) {
      setProduct(null);
    } else {
      setProduct(foundProduct);
    }
    setIsLoading(false);
  }, [id]);

  return (
    <div>
      <h4>E-commerce Product page</h4>
      {isLoading && <p>product loading...</p>}{" "}
      {!isLoading && (
        <div className="single-product-container">
          <div className="single-product-image">
            <img src={product.image} alt="product" />
          </div>
          <div className="single-product-details">
            <span className="single-product-name">Name : {product.name}</span>
            <span className="single-product-description">
              Description : {product.description}
            </span>
            <span className="single-product-price">
              Price : {product.price}
            </span>
            <span className="single-product-discount">
              Discount : {product.discount}
            </span>
            <span className="single-product-final-price">
              Final Price :{" "}
              {product.price - (product.price * product.discount) / 100}
            </span>
            <span className="single-product-availability">
              Availability :{" "}
              {product.isAvailable ? "available" : "not available"}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
