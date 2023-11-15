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

app.get('/obtener', (req,res)=>{
    console.log("--get/obtener-->[server]")
    console.log(req.body)

    let data = Controlador.obtener()

    str = ""; str2 = ""
    str += "<h1>Mi Almacen</h1>"
    for(var i=0 ; i<data.length ; i++){

        if(data[i].impuestos){
            str2 = "paga"
        }else{
            str2 = "exento"
        }

        str += "<p>"+data[i].nombre+"     "+data[i].cantidad+"    "+str2+"<p>"
    }
    
    str += "<a href='http://localhost:3000'>Volver</a>";

    res.send(str);
   
})
app.listen(port, ()=>{
    console.log('Escuchando en el puerto ${port}')
});