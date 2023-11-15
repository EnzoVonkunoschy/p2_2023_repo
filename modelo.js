const fs = require('fs')

function guardar(data){
    console.log("--guardar(data)-->[modelo]")
    console.log(data)

    let str_mercaderias = fs.readFileSync('./db.txt','utf-8')
    let mercaderias = []
    if(str_mercaderias){
        mercaderias = JSON.parse(str_mercaderias)
    }
    
    mercaderias.push(data)
    fs.writeFileSync('./db.txt',JSON.stringify(mercaderias))
}

module.exports = {guardar}