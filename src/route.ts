import { body } from "express-validator/src/middlewares/validation-chain-builders";
import { validator } from "./modules/validation";
import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getOneProduct,
  getProduct,
  updateProduct,
} from "./handlers/product";
const router = Router();

/**
 * Product
 */
router.get("/product", (req, res) => {
  res.json({ message: "product" });
});

router.get("/product/", getProduct);
router.get("/product/:id", getOneProduct);
router.post("/product", createProduct);
router.put("/product/:id", [body("name").isString, validator], updateProduct);
router.delete("/product/:id", deleteProduct);

/**
 * Update
 */
router.get("/update", (req, res) => {});
router.get("/update/:id", (req, res) => {});
router.post("/update", (req, res) => {});
router.put("/update/:id", (req, res) => {});
router.delete("/update/:id", (req, res) => {});

/**
 * UpdatePoint
 */
router.get("/updatepoint", (req, res) => {});
router.get("/updatepoint/:id", (req, res) => {});
router.post("/updatepoint", (req, res) => {});
router.put("/updatepoint/:id", (req, res) => {});
router.delete("/updatepoint/:id", (req, res) => {});

export default router;
