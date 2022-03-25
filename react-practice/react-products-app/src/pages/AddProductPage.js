import { Box, Button, Heading, Input, Textarea } from "@chakra-ui/react";
import React, { useState } from "react";
import { uploadFile, uploadFiles } from "../api/products.api";
import { useProduct } from "../hooks/useProduct";

export const AddProductPage = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [images, setImages] = useState([]);
  const [isImageLoading, setIsImageLoading] = useState(false);
  const [isImagesLoading, setIsImagesLoading] = useState(false);
  const { addProduct } = useProduct();

  const handleOnChangeThumbnail = async (files) => {
    setIsImageLoading(true);
    const responseThumbnail = await uploadFile({ file: files[0] });
    setThumbnail(responseThumbnail);
    setIsImageLoading(false);
  };

  const handleOnChangeImages = async (imageFiles) => {
    setIsImagesLoading(true);
    await uploadFiles({ files: imageFiles }).then((data) => {
      setImages(data);
      setIsImagesLoading(false);
    });
  };

  const handleAddProduct = () => {
    addProduct({ name, description, thumbnail, images });
    setDescription("");
    setName("");
    setImages("");
    setThumbnail("");
  };

  return (
    <Box p={5}>
      <Heading>AddProductPage</Heading>
      <br />
      <Input
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        placeholder="Enter Product Name"
      />
      <br />
      <br />
      <Textarea
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        placeholder="Enter Product Description"
      />
      <br />
      <br />
      <Input
        type={"file"}
        disabled={isImageLoading}
        onChange={(e) => {
          handleOnChangeThumbnail(e.target.files);
        }}
        accept="image/png, image/jpeg"
        placeholder="Enter Product thumbnail"
      />
      <br />
      <br />
      <Input
        type={"file"}
        disabled={isImagesLoading}
        onChange={(e) => {
          handleOnChangeImages(e.target.files);
        }}
        accept="image/png, image/jpeg"
        multiple
        placeholder="Enter Product thumbnail"
      />
      <br />
      <br />
      <Button
        textTransform={"uppercase"}
        colorScheme={"blue"}
        isFullWidth={true}
        onClick={handleAddProduct}
      >
        add product
      </Button>
    </Box>
  );
};
