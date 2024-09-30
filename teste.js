// let nome = document.getElementById('teste').value;


// let nomeCoisado = JSON.stringify(nome);

// window.localStorage.setItem("nomeValor", nomeCoisado)



// const ObjetoUsuario = {
//     listaContatos: 
//     {GrupoContatos: {Id_Grupo: 0,
//                      NomeGrupo: "",
//                      ItemContato: {Id_Contato: 0,
//                                    NomeContato: "",
//                                    TelefoneContato: "",
//                                    EmailContato: "",
//                                    DescricaoContato: ""},
//                      ItemContato: {Id_Contato: 0,
//                                    NomeContato: "",
//                                    TelefoneContato: "",
//                                    EmailContato: "",
//                                    DescricaoContato: ""}}
//                                                         },

//     {GrupoContatos: {Id_Grupo: 1,
//                      NomeGrupo: "",
//                      ItemContato: {Id_Contato: 1,
//                                    NomeContato: "",
//                                    TelefoneContato: "",
//                                    EmailContato: "",
//                                    DescricaoContato: ""}}
//                                                         }
// };

// ObjetoUsuario.listaContatos.forEach(element => {

// });


// const obj1 = {
// 	innerObj:{
//   	name:'Bob'
//   },
//   innerOBj2:{
//   	color:'blue'
//   }
// }

// const obj2 = {
// 	lastName:'Some',
//   age:45
// }

// obj1.innerObj = Object.assign(obj1.innerObj,obj2);
// console.log(obj1);

const ObjetoUsuario = {};

let ListaContatos = []

class GrupoContatos {
    constructor(id_grupo, nomeGrupo, Contatos) {
        this.id_grupo = id_grupo;
        this.nomeGrupo = nomeGrupo;
        this.Contatos = [];
    }
}

class ItemContato {
    constructor(id_contato, nomeContato, telefoneContato, emailContato, descricaoContato) {
        this.id_contato = id_contato;
        this.nomeContato = nomeContato;
        this.telefoneContato = telefoneContato;
        this.emailContato = emailContato
        this.descricaoContato = descricaoContato;
    }
}

const Grupo = new GrupoContatos(1, "Amogus", 0)

const Contato = new ItemContato(1, "Yoru", "33333-3333", "adas@gmail.com", "descrever")

const ContatoB = new ItemContato(2, "Asa", "55555-5555", "dare@gmail.com", "refletir")

Grupo.Contatos.push(Contato);
Grupo.Contatos.push(ContatoB);

// Object.assign(Grupo.Contatos, Contato)
// Object.assign(Grupo.Contatos, ContatoB)

Grupo.Contatos.forEach(function (item) {
    if (item.id_contato == 1){
    console.log(item);}
});

console.log("================================================")

// let objArr = [
//     {
//         name: 'john',
//         age: 12,
//         gender: 'male'
//     },
//     {
//         name: 'jane',
//         age: 15,
//         gender: 'female'
//     },
//     {
//         name: 'julie',
//         age: 20,
//         gender: 'trans'
//     }
// ];

// console.log("Accessing the arrayusing the forEach loop:");
// objArr.forEach(function (item) {
//     if (item.name == 'jane'){
//     console.log(item);}
// });














//Testar foreach criando um objeto novo

// Depois criar um objeto dos contatos no addcontato.js utilizando a classe de objeto lá do script.js e mandar os dados para o script.js
// Possivelmente mudar o método de duplicar div e só usar como string, substituindo os dados de cada dado assim como dito acima

const ObjetoUsuarioTESTE = {listaContatos: [
    {GrupoContatos: {Id_Grupo: 0,
                    NomeGrupo: "",
                    Contatos: []}}]};

// console.log(ObjetoUsuarioTESTE)