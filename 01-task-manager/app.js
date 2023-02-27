const express = require("express");
const app = express();
app.use(express.static('./public'))
const tasks = require('./routes/task')
const connectDB = require('./db/connect')
require('dotenv').config()
//middleware

app.use(express.json());

//Route

app.get('/hello',(req,res)=>{
return res.status(200).send("Konichiwa Fellas");

});

app.use('/api/v1/task',tasks)

const port = 3000;

const start = async ()=>
{
  try{
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () => {
      console.log(`Server is listening on ${port}`);
    });
  } catch(error){
    console.log(error);
  }
}


start()


