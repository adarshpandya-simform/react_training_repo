import { Box, Divider, Heading, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProduct } from "../hooks/useProduct";

export const ProductDetailsPage = () => {
  const { products, isLoading, fetchProducts } = useProduct();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [currentImage, setCurrentImage] = useState("");

  useEffect(() => {
    if (id) {
      if (products.length !== 0) {
        products.forEach((currentProduct) => {
          if (currentProduct._id === id) {
            setProduct(currentProduct);
            setCurrentImage(currentProduct.thumbnail);
            return;
          }
        });
      } else {
        fetchProducts();
      }
    }
  }, [id, products]);

  if (isLoading) {
    return <p>loading...</p>;
  }

  const changeImage = (image) => {
    setCurrentImage(image);
  };

  return (
    <Box p={5}>
      <Heading>ProductDetailsPage</Heading>
      <br />
      {product && (
        <Box display={"flex"}>
          <Box
            display={"flex"}
            justifyContent="center"
            alignItems={"center"}
            flex={5}
            h={"300px"}
            p={3}
          >
            <Image maxH={"250px"} maxW={"250px"} src={currentImage} />
          </Box>
          <Box marginLeft={5} flex={7}>
            <Heading size={"md"}>{product.name}</Heading>
            <br />
            <Divider />
            <br />
            <p>{product.description}</p>
          </Box>
        </Box>
      )}
      <br />
      <br />
      <Box display={"flex"}>
        {product &&
          product.images.map((image) => (
            <Image
              onClick={() => {
                changeImage(image);
              }}
              maxW={"100px"}
              maxH={"100px"}
              key={image}
              alt={image}
              src={image}
            />
          ))}
      </Box>
    </Box>
  );
};
