import React, { useState, useEffect } from "react";
import { getProduct, currency } from "home/products";
import { useParams } from "react-router-dom";

const PDPContent = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      getProduct(id).then((product) => {
        setProduct(product);
      });
    } else {
      setProduct(null);
    }
  }, []);

  if (!product) return null;

  return (
    <div className="grid grid-cols-2 gap-5">
      <div>
        <img src={product.image} alt={product.name} />
      </div>
      <div>
        <div className="flex">
          <h1 className="font-bold text-3xl flex-grow">{product.name}</h1>
          <div className="font-bold text-3xl flex-end">
            {currency.format(product.price)}
          </div>
        </div>
        <div className="mt-10">{product.description}</div>
        <div className="mt-10">{product.longDescription}</div>
      </div>
    </div>
  );
};

export default PDPContent;
