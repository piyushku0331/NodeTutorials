const express = require('express');
const app = express();
const PORT = 5000;

app.get('/',(req,res)=>{
    res.status(200).send("Hello!!!");
})

app.get('/about',(req,res)=>{
    res.status(200).send(`<h1>Hi<h1>
              <p>My Name is Piyush<p>
              `);
})


app.listen(PORT,()=>{
    console.log(`Server is listening at http://localhost:${PORT}`);
})