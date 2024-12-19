const { pessoas } = require('../database/database')

let pessoa = pessoas.find((elemento) => elemento.id === 2)

if(pessoa){
    pessoa.nome = "Fulano 5"
}else{
    console.log("Ta louqinho né? sei nem quem é")
}

console.log(pessoas)