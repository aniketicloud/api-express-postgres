import { Router } from "express";

const router = Router();

/**
 * Product
 */
router.get("/product", (req, res) => {
  res.json({ message: "Hello from Postgres" + req.mysecret });
});
router.get("/product/:id", () => {});
router.put("/product/:id", () => {});
router.post("/product", () => {});
router.delete("/product/:id", () => {});

/**
 * Update
 */
router.post("/update", () => {});
router.get("/update", () => {});
router.get("/update/:id", () => {});
router.put("/update/:id", () => {});
router.delete("/update/:id", () => {});

/**
 * Update Point
 */
router.post("/updatepoint", () => {});
router.get("/updatepoint", () => {});
router.get("/updatepoint/:id", () => {});
router.put("/updatepoint/:id", () => {});
router.delete("/updatepoint/:id", () => {});

export default router;
