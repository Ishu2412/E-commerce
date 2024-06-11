import path from "path";

import { Router } from "express";

import * as adminController from "../controllers/admin.js";

const router = Router();

// // /admin/add-product => GET
router.get("/add-product", adminController.getAddProduct);

// // /admin/products => GET
// router.get('/products', adminController.getProducts);

// // /admin/add-product => POST
router.post("/add-product", adminController.postAddProduct);

// router.get('/edit-product/:productId', adminController.getEditProduct);

// router.post('/edit-product', adminController.postEditProduct);

// router.post('/delete-product', adminController.postDeleteProduct);

export default router;
