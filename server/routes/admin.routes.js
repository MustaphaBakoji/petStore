import { Router } from "express";
export let adminRouter = Router()
import { authMiddleware } from "../middlewares/auth.middleware.js";

import { addNewProduct } from "../controllers/admin.controller.js";

adminRouter.post("/add", addNewProduct
)
