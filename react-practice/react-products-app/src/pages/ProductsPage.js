import { Box, Heading, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useProduct } from "../hooks/useProduct";

export const ProductsPage = () => {
  const { isLoading, products } = useProduct();

  if (isLoading) {
    return <p>loading...</p>;
  }
  return (
    <Box p={5}>
      <Heading>ProductsPage</Heading>
      <br />
      <Box display={"flex"}>
        {products &&
          products.map((product) => (
            <Link key={product._id} to={`/product/${product._id}`}>
              <Box
                cursor={"pointer"}
                maxW={"200px"}
                maxH={"300px"}
                borderWidth={1}
                p={2}
                key={product._id}
                marginRight={10}
                display="flex"
                flexDirection={"column"}
                justifyContent="center"
                alignItems={"center"}
              >
                <Image maxH={"100px"} maxW={"100px"} src={product.thumbnail} />
                <p>
                  <b>{`${product.name.slice(0, 50)}...`}</b>
                </p>
                <p>{`${product.description.slice(0, 100)}...`}</p>
              </Box>
            </Link>
          ))}
      </Box>
    </Box>
  );
};
