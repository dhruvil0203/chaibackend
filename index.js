require('dotenv').config()
const express = require("express");

const app = express();
const port = 1008;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get('/twitter',(req,res)=>{
    res.send('Dhruvil234')
})

app.get('/login',(req,res)=>{
    res.send('<h1>please login at char aur code</h1>')
})

app.get('/youtube',(req,res)=>{
    res.send('<h2>Dhruvil Mistry</h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
