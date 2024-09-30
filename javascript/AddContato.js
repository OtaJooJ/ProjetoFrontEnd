class ItemContato {
    constructor(id_contato, nomeContato, telefoneContato, emailContato, descricaoContato){
        this.id_contato = id_contato;
        this.nomeContato = nomeContato;
        this.telefoneContato = telefoneContato;
        this.emailContato = emailContato
        this.descricaoContato = descricaoContato;
    }
}


let idContato = 0;
let nomeContatoInput = "";
let telefoneContatoInput = "";
let emailContatoInput = "";
let descricaoContatoInput = "";

function salvarContato() {
nomeContatoInput = document.getElementById("nomeContato").value;
telefoneContatoInput = document.getElementById("telefone").value;
emailContatoInput = document.getElementById("email").value;
descricaoContatoInput = document.getElementById("descricao").value;

    if (nomeContatoInput != "" && telefoneContatoInput != "") {
        idContato++;
        // localStorage.setItem("NomeContato", JSON.stringify(nomeContatoInput))
        // localStorage.setItem("TelefoneContato", JSON.stringify(telefoneContatoInput))
        // localStorage.setItem("EmailContato", JSON.stringify(emailContatoInput))
        // localStorage.setItem("DescricaoContato", JSON.stringify(descricaoContatoInput))

        let ObjContatoInserido = new ItemContato(idContato, nomeContatoInput, telefoneContatoInput, emailContatoInput, descricaoContatoInput);

        localStorage.setItem("ContatoInserido", JSON.stringify(ObjContatoInserido)); //descoisar o bagulho no script.js

        fecharIframe();

        document.getElementById("nomeContato").value = "";
        document.getElementById("email").value = "";
        document.getElementById("descricao").value = "";
        document.getElementById("telefone").value = "";
        // Passar o contatoinserido pro array do grupo e depois mandar esse grupo pro array da lista e mandar a lista pro localstorage
    } else {
        alert("Campo de nome ou de telefone estão vazios!")
    }
}


function fecharIframe(){
    parent.fecharContatoIframe();
}
// Usar import e export para mandar os dados das variaveis salvas aqui pro contato e depois executar a função com a váriavel (talvez usar parametros?)
// Usar tbm return no If com todos os inputs