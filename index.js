const express = require("express")
const cors = require('cors')

const app = express();

const port = process.env.PORT || 5000;

app.get("/" , (req,res)=>{
    res.send("simple node server running!")
})

app.use(cors());

const users = [
    {id:'1',name:'Sahil',email:"sahil@gmail.com"},
    {id:'2',name:'Asif vai',email:"asif+vai@gmail.com"},
    {id:'3',name:'Sanji',email:"sanji@gmail.com"},
]

app.get("/users",(req,res)=>{
    res.send(users);
})

app.listen(port , ()=>{
    console.log(`simple node server running on ${port}`);
})
