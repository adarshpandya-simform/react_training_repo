import {
  Box,
  Button,
  Heading,
  Image,
  Input,
  Select,
  Textarea,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { uploadFile, uploadFiles } from "../api/products.api";
import { useProduct } from "../hooks/useProduct";

export const ProductEditPage = () => {
  const { isLoading, products, fetchProducts, deleteProduct, updateProduct } =
    useProduct();
  const [currentProduct, setCurrentProduct] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [images, setImages] = useState([]);
  const [thumbnailLoading, setThumbnailLoading] = useState(false);
  const [imagesLoading, setImagesLoading] = useState(false);

  useEffect(() => {
    if (currentProduct) {
      setName(currentProduct.name);
      setDescription(currentProduct.description);
      setThumbnail(currentProduct.thumbnail);
      setImages(currentProduct.images);
    }
  }, [currentProduct]);

  useEffect(() => {
    if (products.length === 0) {
      fetchProducts();
    }
  }, []);

  const handleSelectChange = (id) => {
    setCurrentProduct(products.find((product) => product._id === id));
  };

  const handleThumbnailUpload = async (file) => {
    setThumbnailLoading(true);
    const responseImage = await uploadFile({ file });
    setThumbnail(responseImage);
    setThumbnailLoading(false);
  };

  const handleImagesUpload = async (imageFiles) => {
    setImagesLoading(true);
    const responseImages = await uploadFiles({ files: imageFiles });
    setImages(responseImages);
    setImagesLoading(false);
  };

  const handleDeleteProduct = () => {
    deleteProduct({ id: currentProduct._id });
    setCurrentProduct(null);
  };

  const handleUpdateProduct = () => {
    updateProduct({
      id: currentProduct._id,
      name,
      description,
      images,
      thumbnail,
    });
  };

  if (isLoading) {
    return <p>loading...</p>;
  }

  return (
    <Box p={5}>
      <Heading>ProductEditPage</Heading>
      <br />
      <Select
        onChange={(e) => {
          handleSelectChange(e.target.value);
        }}
        placeholder="Select Product"
        bg={"whiteAlpha.600"}
      >
        {products &&
          products.map((product) => (
            <option key={product._id} value={product._id}>
              {product.name}
            </option>
          ))}
      </Select>
      <br />
      <br />
      {currentProduct && (
        <>
          <Input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <br />
          <br />
          <Textarea
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <br />
          <br />
          <Box display={"flex"}>
            <Image maxH={"250px"} maxW={"250px"} src={thumbnail} alt={name} />
            <Input
              type={"file"}
              disabled={thumbnailLoading}
              onChange={(e) => {
                handleThumbnailUpload(e.target.files[0]);
              }}
              accept={"image/png, image/jpeg"}
              placeholder={"Select image for update"}
            />
          </Box>
          <br />
          <br />
          <Box display={"flex"}>
            <Box display={"flex"}>
              {images.map((image) => (
                <Image key={image} src={image} maxH={"250px"} maxW={"250px"} />
              ))}
            </Box>
            <Input
              type={"file"}
              disabled={imagesLoading}
              accept={"image/png, image/jpeg"}
              placeholder={"Select image for update"}
              onChange={(e) => handleImagesUpload(e.target.files)}
              multiple
            />
          </Box>
          <br />
          <br />
          <Box display={"flex"}>
            <Button
              onClick={handleUpdateProduct}
              mx={5}
              isFullWidth={true}
              colorScheme={"green"}
            >
              UPDATE
            </Button>
            <Button
              onClick={handleDeleteProduct}
              mx={5}
              isFullWidth={true}
              colorScheme={"red"}
            >
              DELETE
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};
