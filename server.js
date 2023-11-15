const express = require("express");
const app = express();
const path = require('path')

const Controlador = require('./controlador');

app.use(express.json());
app.use(express.urlencoded({extended : false}))

const port = 3000;

app.get('/', (req,res)=>{
    //res.send('<h1>Hola Genteeee....!!!');
    res.sendFile(path.join(__dirname,'./static/menu.html'))
})

app.post('/nuevo', (req,res)=>{
    console.log("--post/nuevo--[server]");
    
    req.body.impuestos == undefined ? req.body.impuestos = false : req.body.impuestos = true;
    console.log(req.body);
    Controlador.nuevo(req.body);
    res.sendFile(path.join(__dirname,'./static/menu.html'))
})

app.listen(port, ()=>{
    console.log('Escuchando en el puerto ${port}')
});