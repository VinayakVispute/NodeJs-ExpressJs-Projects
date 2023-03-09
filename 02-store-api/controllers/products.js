const Product = require("../models/product");

const getAllProductsStatic = async (req, res) => {
  const search = "AB";
  const products = await Product.find({}).select('name price')
  return res.status(200).send({ products, nbHits: products.length });
};

const getAllProducts = async (req, res) => {
  // const products = await Product.find(req.query)
  const { featured, company, name, sort, fields } = req.query;
  const queryObject = {};

  if (featured) {
    queryObject.featured = featured === "true" ? true : false;
  }
  if (company) {
    queryObject.company = company;
  }
  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }
//   console.log(queryObject);

  let results =  Product.find(queryObject);

// Sort

  if (sort) {
    // console.log(sort);
    const sortList = sort.split(',').join(' ');
    results = results.sort(sortList)
  }else {
    results = results.sort('createdAt')
  }

  if (fields){
    const fieldsList  = fields.split(',').join(' ');
    results = results.select(fieldsList)
  }

  const products = await results;
  return res.status(200).send({ products, nbHits: products.length });
};



module.exports = {
  getAllProductsStatic,
  getAllProducts,
};
