const db = require("../database/db");

const getProduct = (req, res, next) => {
  try {
    const queryForGetProduct = "SELECT * FROM products;";
    db.query(queryForGetProduct, (err, data) => {
      if (err) return res.json({ success: false, message: `${err}` });
      return res.status(200).json({ success: true, data: data });
    });
  } catch (error) {
    return next(error);
  }
};

const createProduct = (req, res, next) => {
  try {
    const { ProductId, ProductName, CategoryName, CategoryId } = req.body;
    const queryForCreateProduct = `INSERT INTO products (ProductId,ProductName,CategoryName,CategoryId) VALUES (${ProductId},"${ProductName}","${CategoryName}",${CategoryId})`;

    db.query(queryForCreateProduct, (err, data) => {
      if (err)
        return res.status(400).json({ success: false, message: err.message });
      return res
        .status(200)
        .json({ success: true, message: "Product Created Successfully!!" });
    });
  } catch (error) {
    return next(error);
  }
};

const updateProduct = (req, res, next) => {
  try {
    const { ProductName, CategoryName, CategoryId } = req.body;
    const id = req.params.id;
    const queryForupdateProduct = `UPDATE products SET ProductName = "${ProductName}", CategoryName = "${CategoryName}", CategoryId = ${CategoryId}  WHERE ProductId = ${id}`;
    db.query(queryForupdateProduct, (err, data) => {
      if (err)
        return res
          .status(400)
          .json({ success: false, message: err.message.toString() });
      return res
        .status(200)
        .json({ success: true, message: "Product Updated Successfully!!" });
    });
  } catch (error) {
    return next(error);
  }
};

const deleteProduct = (req, res, next) => {
  try {
    const id = req.params.id;
    const queryFordeleteProduct = `delete FROM products where ProductId = ${id}`;
    db.query(queryFordeleteProduct, (err, data) => {
      if (err)
        return res.status(400).json({ success: false, message: err.message });
      return res
        .status(200)
        .json({ success: true, message: "Product Deleted Successfully!!" });
    });
  } catch (error) {
    return next(error);
  }
};

const singleProduct = (req, res, next) => {
  try {
    const id = req.params.id;
    const queryForSingleProduct = `SELECT * FROM products WHERE ProductId = ${id}`;
    db.query(queryForSingleProduct, (err, data) => {
      if (err)
        return res.status(400).json({ success: false, message: err.message });
      return res.status(200).json({ success: true, data: data });
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  singleProduct,
};
