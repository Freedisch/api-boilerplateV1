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
import {
  createUpdate,
  deleteUpdate,
  getOneUpdate,
  getUpdate,
  Update,
} from "./handlers/update";
const router = Router();

/**
 * Product
 */

router.get("/product/", getProduct);
router.get("/product/:id", getOneProduct);
router.post("/product", [body("name").isString(), validator], createProduct);
router.put("/product/:id", [body("name").isString, validator], updateProduct);
router.delete("/product/:id", deleteProduct);

/**
 * Update
 */
router.get("/update", getUpdate);
router.get("/update/:id", getOneUpdate);
router.post("/update", createUpdate);
router.put("/update/:id", Update);
router.delete("/update/:id", deleteUpdate);

/**
 * UpdatePoint
 */
router.get("/updatepoint", (req, res) => {});
router.get("/updatepoint/:id", (req, res) => {});
router.post("/updatepoint", (req, res) => {});
router.put("/updatepoint/:id", (req, res) => {});
router.delete("/updatepoint/:id", (req, res) => {});

export default router;
