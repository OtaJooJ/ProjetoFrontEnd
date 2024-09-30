// Variavel principal, onde basicamente guarda todos os dados.

const ObjetoUsuario = {
    listaContatos: [
        {
            GrupoContatos: {
                Id_Grupo: 0,
                NomeGrupo: "",
                Contatos: []
            }
        }
    ]
};

const listaContatos = [];



class GrupoContatos {
    constructor(id_grupo, nomeGrupo, itemContato) {
        this.id_grupo = id_grupo;
        this.nomeGrupo = nomeGrupo;
        this.itemContato = [];
    }
}








// const GrupoCopia = JSON.parse(JSON.stringify(ObjetoUsuario.listaContatos.GrupoContatos));

// GrupoCopia.Id_Grupo = 1;
// let teste1 = ObjetoUsuario.listaContatos.GrupoContatos.Id_Grupo;
// let teste2 = GrupoCopia['Id_Grupo'];

// console.log(GrupoCopia)

let idNum = 0;
let idNumContato = 0;
let id_grupo = "DivGrupo[" + idNum + "]";
let id_contato = "DivContato[" + idNumContato + "]";
let InputNomeGrupo = document.getElementById("InputNomeGrupo");



function carregarContatos() {
    let listaContatosOBJ = JSON.parse(localStorage.getItem("ListaContatosOBJ"));
    

    listaContatosOBJ.forEach(function (grupo) {

        let divClone = document.createElement('div');
        let divCloneId = "DivGrupo[" + grupo.id_grupo + "]";
        let id_deletegrupo = "DeleteGrupoBtn[" + grupo.id_grupo + "]";
        let id_addcontato = "AddContatoBtn[" + grupo.id_grupo + "]";

        divClone.innerHTML = `
         <!-- "Header" do grupo -->
        <div class="TituloGrupo" style="justify-content: space-between;">
        
        <!-- Icon e Nome -->
        <div style="display: flex; width: 100%;">
        <img src="/img/group.png" class="ImgFormato">
        <h1 class="FonteTitulo" style="padding-left: 2%;" id="GrupoNome">` + grupo.nomeGrupo + `</h1>
        </div>
        
        <!-- Botão de adicionar contato -->
        <div style="display:flex;justify-content:flex-end;align-items:center; margin-right: 6%;">
        <div class="DivButton">
        <input type="button" value="Adicionar Contato" class="Button" style="width: 400px" id="` + id_addcontato + `" onclick="AdicionarContato(this.id)">
        </div>
        </div>
        
        <!-- Botão de deletar grupo -->
        <div style="display:flex;justify-content:flex-end;align-items:center;">
        <div class="DivButton">
        <input type="button" value="Apagar Grupo" class="Button" style="width: 400px" id="` + id_deletegrupo + `" onclick="DeletarGrupo(this.id)">
        </div>
        </div>
        </div>`

        divClone.setAttribute("id", divCloneId);
        divClone.setAttribute("class", "GrupoContatos")

        document.getElementById("container").appendChild(divClone);

        // listaContatos.push(grupo);
        // localStorage.setItem("ListaContatosOBJ", JSON.stringify(listaContatos));
        // console.log(grupo)
        grupo.itemContato.forEach(function (contato) {
            // console.log(contato)
            let idContato = "DivContato[" + contato.id_contato + "]"

            let divCloneContato = document.createElement('div')
            divCloneContato.innerHTML = `<!-- Item de um contato -->
            <!-- Nome do Contato -->
            <div class="ContatoNome">
                <img src="/img/user.png" class="ImgFormato" style="height: 50%;">
                <h1 class="FonteSubtitulo" style="padding-left: 1%;">` + contato.nomeContato + `</h1>
            </div>

            <!-- Telefone do contato -->
            <div class="ContatoNumero">
                <h1 class="FonteSubtitulo">` + contato.telefoneContato + `</h1>
            </div>
            <!-- Botão de detalhes do contato -->
            <div class="ContatoBotoes">
                <div class="DivButton">
                <input type="button" value="Apagar" class="Button" id="contato[` + idNumContato + `]" onclick="DeletarContato(this.id)">
                </div>
            </div>`

            divCloneContato.setAttribute("id", idContato);
            divCloneContato.setAttribute("class", "ContatoItem")
            document.getElementById(divCloneId).appendChild(divCloneContato);

            // listaContatos.grupo.push(contato);
            // localStorage.setItem("ListaContatosOBJ", JSON.stringify(listaContatos))
  
        })
    });
}


function DeletarGrupo(idBtnClicado) { //Parametro é o id do elemento que chamou a função
    let idBtnClicadoNum = idBtnClicado.replace(/\D/g, "");
    let idDivGrupoClicado = "DivGrupo[" + idBtnClicadoNum + "]"
    let DivGrupoClicado = document.getElementById(idDivGrupoClicado);
    DivGrupoClicado.parentNode.removeChild(DivGrupoClicado);

    
    let listaContatosOBJ = JSON.parse(localStorage.getItem("ListaContatosOBJ"));

    listaContatosOBJ.forEach(function (item, index) {
        
        if (item.id_grupo == idBtnClicadoNum) {

            listaContatosOBJ.splice(index, 1)
            localStorage.setItem("ListaContatosOBJ", JSON.stringify(listaContatosOBJ))

        }
    });
}


function AdicionarContato(idBtnClicado) {
    let idBtnClicadoNum = idBtnClicado.replace(/\D/g, "");
    let idDivGrupoClicado = "DivGrupo[" + idBtnClicadoNum + "]"

    function abrirContatoIframe() {
        document.getElementById("IframeDiv").style.display = "";

        const Iframe = document.getElementById("IframeContatos").contentWindow;
        const btnAdicionar = Iframe.document.getElementById("btnAdicionar");
        btnAdicionar.addEventListener("click", InserirContato, { once: true });
    }

    abrirContatoIframe();

    function InserirContato() {

        let ContatoInserido = JSON.parse(localStorage.getItem("ContatoInserido"));
        let idNumContato = ContatoInserido.id_contato + 1;
        let id_contato = "DivContato[" + idNumContato + "]";
        let nomeContato = ContatoInserido.nomeContato;
        let telefoneContato = ContatoInserido.telefoneContato;


        let divCloneContato = document.createElement('div')
        divCloneContato.innerHTML = `<!-- Item de um contato -->
                    <!-- Nome do Contato -->
                    <div class="ContatoNome">
                    <img src="/img/user.png" class="ImgFormato" style="height: 50%;">
                    <h1 class="FonteSubtitulo" style="padding-left: 1%;">` + nomeContato + `</h1>
                    </div>
                    <!-- Telefone do contato -->
                    <div class="ContatoNumero">
                    <h1 class="FonteSubtitulo">` + telefoneContato + `</h1>
                    </div>
                    <!-- Botão de detalhes do contato -->
                    <div class="ContatoBotoes">
                    <div class="DivButton">
                    <input type="button" value="Apagar" class="Button" id="contato[` + idNumContato + `]" onclick="DeletarContato(this.id)">
                    </div>
                    </div>`

        divCloneContato.setAttribute("id", id_contato);
        divCloneContato.setAttribute("class", "ContatoItem")


        document.getElementById(idDivGrupoClicado).appendChild(divCloneContato);

        let listaContatosOBJ = JSON.parse(localStorage.getItem("ListaContatosOBJ"));
        
        listaContatosOBJ.forEach(function (item) {
            console.log("teste")
            if (item.id_grupo == idBtnClicadoNum) {
                item.itemContato.push(ContatoInserido);
                
                localStorage.setItem("ListaContatosOBJ", JSON.stringify(listaContatosOBJ));
            }
        });
        ajustarAltura();
    }

}

function addGrupo() {
    
    

    if (InputNomeGrupo.value != "") {
        let listaContatosOBJ = JSON.parse(localStorage.getItem("ListaContatosOBJ"));
            listaContatosOBJ.forEach(function (grupo){ 
                while (idNum < grupo.id_grupo){
                    idNum++ 
                }
            })

        idNum++;
        id_grupo = "DivGrupo[" + idNum + "]";
        let id_deletegrupo = "DeleteGrupoBtn[" + idNum + "]";
        let id_addcontato = "AddContatoBtn[" + idNum + "]";
        let InputNomeGrupoVALOR = InputNomeGrupo.value;

        let divClone = document.createElement('div')
        divClone.innerHTML = `
        <!-- "Header" do grupo -->
        <div class="TituloGrupo" style="justify-content: space-between;">
        
        <!-- Icon e Nome -->
        <div style="display: flex; width: 100%;">
        <img src="/img/group.png" class="ImgFormato">
        <h1 class="FonteTitulo" style="padding-left: 2%;" id="GrupoNome">` + InputNomeGrupoVALOR + `</h1>
        </div>
        
        <!-- Botão de adicionar contato -->
        <div style="display:flex;justify-content:flex-end;align-items:center; margin-right: 6%;">
        <div class="DivButton">
        <input type="button" value="Adicionar Contato" class="Button" style="width: 400px" id="` + id_addcontato + `" onclick="AdicionarContato(this.id)">
        </div>
        </div>
        
        <!-- Botão de deletar grupo -->
        <div style="display:flex;justify-content:flex-end;align-items:center;">
        <div class="DivButton">
        <input type="button" value="Apagar Grupo" class="Button" style="width: 400px" id="` + id_deletegrupo + `" onclick="DeletarGrupo(this.id)">
        </div>
        </div>
        </div>`

        divClone.setAttribute("id", id_grupo);;
        divClone.setAttribute("class", "GrupoContatos");

        document.getElementById("container").appendChild(divClone);

        document.getElementById("InputNomeGrupo").value = "";

        let GrupoInserido = new GrupoContatos(idNum, InputNomeGrupoVALOR, "");
        listaContatosOBJ.push(GrupoInserido);
        localStorage.setItem("ListaContatosOBJ", JSON.stringify(listaContatosOBJ));

        ajustarAltura();

    } else {
        alert("Insira um nome para o grupo.")
    }
}

// function DetalhesContato(idBtnClicado){
//     window.location.href = "PaginaContato.html";

//     let idBtnClicadoNum = idBtnClicado.replace(/\D/g, "");
//     let idDivContatoClicado = "contato[" + idBtnClicadoNum + "]";

//     listaContatosOBJ.forEach(function (item) {
//         if (item.id_grupo == idBtnClicadoNum) {

//             document.getElementById("TelefoneNumero")
//         }
//     });

// }

function DeletarContato(idBtnClicado){
    let idBtnClicadoNum = idBtnClicado.replace(/\D/g, "");
    let idDivContatoClicado = "DivContato[" + idBtnClicadoNum + "]";

    let DivContatoClicado = document.getElementById(idDivContatoClicado);

    let DivPai = DivContatoClicado.parentElement.id

    document.getElementById(DivPai).removeChild(DivContatoClicado);

    
    let listaContatosOBJ = JSON.parse(localStorage.getItem("ListaContatosOBJ"));

    listaContatosOBJ.forEach(function (item, index) {
        console.log(item)
        
        if (item.itemContato.id_contato == idBtnClicadoNum) {
            console.log(item)
            item.itemContato.splice(index, 1)
            localStorage.setItem("ListaContatosOBJ", JSON.stringify(listaContatosOBJ))

        }
    });
}



// CSS + Javascript

function ajustarAltura() {
    //Aumenta a altura dinamicamente do corpo principal da lista de contatos. Entretanto funciona apenas para o primeiro clique
    let AumentaHeight = parseInt(document.getElementById(id_grupo).scrollHeight);
    document.getElementById("container").style.height = AumentaHeight + 'px';

    //Também aumenta a altura dinamicamente do corpo principal da lista de contatos. Entretanto funciona para os próximos grupos e é constante
    let SegundoAumentaHeight = parseInt(document.getElementById("container").scrollHeight);
    document.getElementById("container").style.height = SegundoAumentaHeight + 'px'
}

function fecharContatoIframe() {

    // Animações de fechar a div
    document.getElementById("IframeContatos").style.cssText = "animation: iframeanimationClose 0.5s ease-in forwards"
    document.getElementById("IframeBackground").style.cssText = "animation: backgroundanimationClose 0.5s ease-in forwards"
    // document.getElementById("IframeBackground").classList.toggle("IsClosed");       // POSSIVELMENTE UTIL FUTURAMENTE, POR ISSO DEIXADO AQUI 

    function fecharDivIframe() {
        // resetar para não dar problema ao reiniciar as animações
        document.getElementById("IframeDiv").style.display = "none" // esconde a div para que o usuário possa interagir novamente
        document.getElementById("IframeContatos").style.cssText = ""
        document.getElementById("IframeBackground").style.cssText = ""
    }
    setTimeout(fecharDivIframe, 600)
}