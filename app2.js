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

app.all('*',(res,req)=>{
    res.status(404).send(`<h1>Hi this page is not available</h1>`);
})

app.listen(PORT,()=>{
    console.log(`Server is listening at http://localhost:${PORT}`);
})