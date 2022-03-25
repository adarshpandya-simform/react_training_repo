import { Router } from "express";
import { productController } from "../controllers/product.controller.js";

export const productRouter = Router();

productRouter.get("/products", async (req, res) => {
  const response = await productController.getProducts();
  return res.json(response);
});

productRouter.get("/product/:id", async (req, res) => {
  const { id } = req.params;
  const response = await productController.getProduct(id);
  return res.json(response);
});

productRouter.post("/add-product", async (req, res) => {
  const { thumbnail, images, name, description } = req.body;
  const response = await productController.insertProduct({
    description,
    images,
    name,
    thumbnail,
  });
  return res.json(response);
});

productRouter.patch("/update-product", async (req, res) => {
  const { id, thumbnail, images, name, description } = req.body;
  const response = await productController.updateProduct({
    id,
    description,
    images,
    name,
    thumbnail,
  });
  return res.json(response);
});

productRouter.delete("/delete-product/:id", async (req, res) => {
  const { id } = req.params;
  const response = await productController.deleteProduct(id);
  return res.json(response);
});
