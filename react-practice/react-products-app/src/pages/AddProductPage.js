import { Box, Button, Heading, Input, Textarea } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useProduct } from "../hooks/useProduct";

export const AddProductPage = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [images, setImages] = useState([]);
  const [isImageLoading, setIsImageLoading] = useState(false);
  const [isImagesLoading, setIsImagesLoading] = useState(false);
  const { addProduct } = useProduct();

  console.log(thumbnail);
  console.log(images);

  const handleOnChangeThumbnail = async (files) => {
    setIsImageLoading(true);
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", process.env.REACT_APP_CLOUDINARY_PRESET_NAME);
    data.append("cloud_name", process.env.REACT_APP_CLOUDINARY_CLOUD_NAME);
    await axios
      .post(
        `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`,
        data
      )
      .then((res) => {
        setThumbnail(res.data.secure_url);
      })
      .catch((err) => console.log(err));
    setIsImageLoading(false);
  };

  const handleOnChangeImages = async (imageFiles) => {
    setIsImagesLoading(true);
    [...imageFiles].forEach(async (file) => {
      const data = new FormData();
      data.append("file", file);
      data.append(
        "upload_preset",
        process.env.REACT_APP_CLOUDINARY_PRESET_NAME
      );
      data.append("cloud_name", process.env.REACT_APP_CLOUDINARY_CLOUD_NAME);
      await axios
        .post(
          `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`,
          data
        )
        .then((res) => {
          setImages((prev) => [...prev, res.data.secure_url]);
        })
        .catch((err) => console.log(err));
    });
    setIsImagesLoading(false);
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
        name="product-images"
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
