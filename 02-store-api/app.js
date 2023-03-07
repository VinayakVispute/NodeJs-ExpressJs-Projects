require("dotenv").config();
const { request } = require("express");
//async Errors

const express = require("express");
const app = express();

const notFoundMiddleware = require("./middleware/not-found");
const errorMiddleware = require("./middleware/error-handler");

//middleware
app.use(express.json());

//routes

app.get("/", (req, res) => {
  res.send('<h1>Store!!! API</h1><a href="/api/v1/products">Products</a>');
});

app.get("/api/v1/products",(req,res)=>{
    console.log("/api/v1/product");
    return res.send("/api/v1/product")
})


//product routes

const connectDB=require('./db/connect')

app.use(notFoundMiddleware);
app.use(errorMiddleware);


const port = process.env.PORT || 8000;
const start = async () => {
    try{
        // connectDB
        await connectDB(process.env.MONGO_URL)
        app.listen(port,()=>{
            console.log(`Server is Vibing on ${port}`);
        })
    } catch(error){
        console.log(error);
    }
}

start();