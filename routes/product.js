const router = require("express").Router();

const {
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  singleProduct,
} = require("../controllers/product");

router.get("/getProduct", getProduct);
router.post("/createProduct", createProduct);
router.put("/updateProduct/:id", updateProduct);
router.delete("/deleteProduct/:id", deleteProduct);
router.get("/getSingleProduct/:id", singleProduct);

module.exports = router;
