const getAllProductsStatic = async(req,res) =>{
    return res.status(200).send({msg:'Products Testing Route'})
}

const getAllProducts = async(req,res) =>{
    return res.status(200).send({msg:'Products Route'})
}


module.exports = {
    getAllProductsStatic,
    getAllProducts,
}
