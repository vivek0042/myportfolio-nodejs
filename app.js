 
const express = require('express');
const app = express();
const fs = require("fs")
const path=require("path");
const hbs=require("hbs");
const bodyParser = require('body-parser');
const mongoose=require("mongoose");
const data=require("../node js/student");
app.use(express.json());
mongoose.connect("mongodb://localhost:27017/project").then(()=>{
    console.log("connection suceesfully.");
}).catch((e) => {
    console.log("connection not done.");
})

app.use('/static', express.static('static')) // For serving static files
// app.use(express.urlencoded())`
app.use(bodyParser.urlencoded({ extended: false }));





app.set('view engine', 'hbs') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory


app.get('/', (req, res) => {
    res.render("index")
});
app.get('/intro',(req,res)=>{
    res.render("intro");
})
app.get('/services',(req,res)=>{
    res.render("services");
})
app.get('/contactme',(req,res)=>{
    res.render("contactme");
})
app.get('/contact',(req,res)=>{
    res.render("contact");
})

app.get('/myresume',(req, res)=> {
    res.sendFile(__dirname + "/views/myresume.pdf");
  })

app.post('/contact',async(req,res)=>{
    try{
        var adddata=new data(req.body);
        console.log(req.body);
        const add=await adddata.save();
        res.status(201).send("this is item is saved");
    }catch(e){
        res.status(403).send("this is item is not saved");

    }
    
})
app.listen(8080, () => {
    console.log('server started');
});
