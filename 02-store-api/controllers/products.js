const Product = require("../models/product");

const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({
    name: "vase table",
  });
  return res.status(200).send({ products, nbHits: products.length });
};

const getAllProducts = async (req, res) => {
  // const products = await Product.find(req.query)
  const { featured, company } = req.query;
  const queryObject = {};

  if (featured) {
    queryObject.featured = featured === 'true' ? true : false;
  }
  if (company){
    queryObject.company = company;
  }
  console.log(queryObject);
  const products = await Product.find(queryObject);
  return res.status(200).send({ products, nbHits: products.length });
};

module.exports = {
  getAllProductsStatic,
  getAllProducts,
};
