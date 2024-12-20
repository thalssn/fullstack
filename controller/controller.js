const { pessoas } = require('../database/database')

//CRUD
function cadastrar(id, nome, telefone, email){
    const novoUsuario = {id, nome, telefone, email}
    pessoas.push(novoUsuario)
    console.log("Usuário cadastrado com sucesso")
}

function editar(id, novoNome, novoTelefone, novoEmail){
    const pessoa = pessoas.find(elemento => elemento.id === id)
    if (pessoa) {
        pessoa.nome = novoNome || pessoa.nome
        pessoa.telefone = novoTelefone || pessoa.telefone
        pessoa.email = novoEmail || pessoa.email
        console.log("Usuário atualizado com sucesso")
    } else {
       console.log("Not Found!") 
    }
}

function deletarTodos(){
    pessoas.length = 0
}

function deletarPorID(id){
    const usuario = pessoas.findIndex(elemento => elemento.id === id)

    if(usuario === -1){
        console.log("Usuário não encontrado")
    } else{
        pessoas.splice(usuario, 1)
        console.log("Usuário deletado com sucesso")
    }
}

//Listar usuários
function listar(){
    try {
        if (pessoas.length <= 0) {
            console.log("Nenhum usuário cadastrado")
        } else {
            console.log("Usuários: ")
            console.table(pessoas)  
        }
    } catch (error) {
        console.error("Erro ao listar os usuários", error.message)
    }
}

cadastrar(1, "Fulano da Silva", "(84)99999-9999", "fulano@email.com")
cadastrar(2, "Cicrano da Silva", "(84)98888-8888", "cicrano@email.com")
listar()
editar(2, "Beltrano", null, "beltrano@email.com")
listar()
deletarPorID(1)
listar()
deletarTodos()
listar()

let test = 1 //lowercase
let TESTE1 = 2 //UPPERCASE
let teste_unitario= 3 //Snake case
let TesteUnitario1 = 4 //Camelcase
let Pascal = 5 //Pascal case