const express = require("express");
const app = express();
const port = 3000;
app.use(express.static('./public'))
const tasks = require('./routes/task')
app.use(express.json());
//Route

app.get('/hello',(req,res)=>{
return res.status(200).send("Konichiwa Fellas");

});

app.use('/api/v1/task',tasks)


app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});


