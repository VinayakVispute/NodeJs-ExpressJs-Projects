const Product = require('../models/product')

const getAllProductsStatic = async(req,res) =>{
    const products = await Product.find({
        name:'vase table',
    })
    return res.status(200).send({products,nbHits:products.length})
}

const getAllProducts = async(req,res) =>{
    const products = await Product.find({req.query})
    return res.status(200).send({products,nbHits:products.length})

}


module.exports = {
    getAllProductsStatic,
    getAllProducts,
}
