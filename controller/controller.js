const { pessoas } = require('../database/database')

//CRUD
function cadastrar(id, nome, telefone, email){
    const novoUsuario = {id, nome, telefone, email}
    pessoas.push(novoUsuario)
}

function editar(id, novoNome, novoTelefone, novoEmail){
    const pessoa = pessoas.find(elemento => elemento.id === id)
    if (pessoa) {
        pessoa.nome = novoNome
        pessoa.telefone = novoTelefone
        pessoa.email = novoEmail
    } else {
       console.log("Not Found!") 
    }
}

function deletarTodos(){
    pessoas = []
}

function deletarPorID(id){
    
}

//Listar usuários
function listar(){
    console.log(pessoas)
}

cadastrar(1, "Fulano da Silva", "(84)99999-9999", "fulano@email.com")
cadastrar(2, "Cicrano da Silva", "(84)98888-8888", "cicrano@email.com")
listar()
editar(2, "Beltrano","(84)97777-7777", "beltrano@email.com")
//deletarPorID(2)
listar()
