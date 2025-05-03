import { Router } from "express";
import { getProducts, getProductsByCategory, getProductsByCategoryAndAnimalType, Product } from "../controllers/products.controller.js";

export let productRouter = Router()
productRouter.get("/", getProducts)
productRouter.get("/:id", Product)
productRouter.get('/:category', getProductsByCategory)
productRouter.get('/:category/:animalType', getProductsByCategoryAndAnimalType)


