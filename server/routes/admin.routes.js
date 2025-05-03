import { Router } from "express";
export let adminRouter = Router()


import { addNewProduct } from "../controllers/admin.controller.js";

adminRouter.post("/add", addNewProduct
)
