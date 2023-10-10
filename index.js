const inputTelaInicial = document.querySelector(".inputTelaInicial")
const telaDeSelecao = document.querySelector(".telaDeSelecao");
let usuario = null;
let objetoSelecionado = null;
let objetoSorteado = null;
let arrayDeObjetos = ['pedra', 'papel', 'tesoura'];
let empate = 0
let user = 0
let computador = 0

function confirmarUsuario() {
    const telaInicial = document.querySelector(".telaInicial");
    const mensagemErro = document.querySelector(".mensagemErro")
    usuario = inputTelaInicial.value;
    if (usuario !== "") {
        telaInicial.innerHTML = ``;
        iniciarJogo();
        return usuario;
    } else {
        mensagemErro.innerHTML = `<p>Insira um nome de usuário válido!</p>`
        inputTelaInicial.value = "";
    };
};

function iniciarJogo() {
    objetoSorteado = arrayDeObjetos[Math.floor(Math.random() * arrayDeObjetos.length)]
    telaDeSelecao.innerHTML = `<h1>Selecione qual objeto quer jogar:</h1>
    <div>
        <img class="objetoPedra" onclick="selecionarObjeto('pedra')" src="img/Stone.png"/>
        <img class="objetos" onclick="selecionarObjeto('papel')" src="img/Paper.png"/>
        <img class="objetos" onclick="selecionarObjeto('tesoura')" src="img/Shears.png"/>
    </div>`
};



function carregarResultado() {
    const telaDeLoad = document.querySelector(".telaDeLoad");
    telaDeLoad.innerHTML = `<h1>Aguarde...</h1>
    <img class="objetosLoad" src="img/load-1.png"/>`
    setTimeout(() => {
        telaDeLoad.innerHTML = `<h1>Aguarde...</h1>
    <img class="objetosLoad" src="img/load-2.png"/>`}, 500);
    setTimeout(() => {
        telaDeLoad.innerHTML = `<h1>Aguarde...</h1>
    <img class="objetosLoad" src="img/load-3.png"/>`}, 1000);
    setTimeout(() => { telaDeLoad.innerHTML = ``; exibirResultado() }, 1500);
}

function selecionarObjeto(objeto) {
    telaDeSelecao.innerHTML = ``;
    objetoSelecionado = objeto
    carregarResultado()
};

let telaDeResultado = document.querySelector(".telaDeResultado")
function exibirResultado() {

    if(objetoSelecionado === 'pedra'){
    switch (objetoSorteado) {
        case 'pedra':
            empate++
            telaDeResultado.innerHTML = `<div>
        <img class="objetoPedra" src="img/Stone.png"/>
        <img class="objetoPedra" src="img/Stone.png"/>
        </div>
    <div class="resultado">
        <h2>Computador</h2>
        <p>${computador}</p>
        <h2>Empate</h2>
        <p>${empate}</p>
        <h2>${usuario}</h2>
        <p>${user}</p>
        <button onclick="recomecarJogo()">Recomeçar</button>
    </div>`;
            break
        case 'papel':
            computador++
            telaDeResultado.innerHTML = `<div>
        <img class="objetos" src="img/Paper.png"/>
        <img class="objetoPedra" src="img/Stone.png"/>
        </div>
    <div class="resultado">
        <h2>Computador</h2>
        <p>${computador}</p>
        <h2>Empate</h2>
        <p>${empate}</p>
        <h2>${usuario}</h2>
        <p>${user}</p>
        <button onclick="recomecarJogo()">Recomeçar</button>
    </div>`;
            break
        case 'tesoura':
            user++
            telaDeResultado.innerHTML = `<div>
        <img class="objetos" src="img/Shears.png"/>
        <img class="objetoPedra" src="img/Stone.png"/>
        </div>
    <div class="resultado">
        <h2>Computador</h2>
        <p>${computador}</p>
        <h2>Empate</h2>
        <p>${empate}</p>
        <h2>${usuario}</h2>
        <p>${user}</p>
        <button onclick="recomecarJogo()">Recomeçar</button>
    </div>`;
        break
    }
    } else if(objetoSelecionado === 'papel') { 
        switch (objetoSorteado) {
            case 'pedra':
                user++
                telaDeResultado.innerHTML = `<div>
            <img class="objetoPedra" src="img/Stone.png"/>
            <img class="objetos" src="img/Paper.png"/>
            </div>
        <div class="resultado">
            <h2>Computador</h2>
            <p>${computador}</p>
            <h2>Empate</h2>
            <p>${empate}</p>
            <h2>${usuario}</h2>
            <p>${user}</p>
            <button onclick="recomecarJogo()">Recomeçar</button>
        </div>`;
                break
            case 'papel':
                empate++
                telaDeResultado.innerHTML = `<div>
            <img class="objetos" src="img/Paper.png"/>
            <img class="objetos" src="img/Paper.png"/>
            </div>
        <div class="resultado">
            <h2>Computador</h2>
            <p>${computador}</p>
            <h2>Empate</h2>
            <p>${empate}</p>
            <h2>${usuario}</h2>
            <p>${user}</p>
            <button onclick="recomecarJogo()">Recomeçar</button>
        </div>`;
                break
            case 'tesoura':
                computador++
                telaDeResultado.innerHTML = `<div>
            <img class="objetos" src="img/Shears.png"/>
            <img class="objetos" src="img/Paper.png"/>
            </div>
        <div class="resultado">
            <h2>Computador</h2>
            <p>${computador}</p>
            <h2>Empate</h2>
            <p>${empate}</p>
            <h2>${usuario}</h2>
            <p>${user}</p>
            <button onclick="recomecarJogo()">Recomeçar</button>
        </div>`;
    }
    } else{
        switch (objetoSorteado) {
            case 'pedra':
                computador++
                telaDeResultado.innerHTML = `<div>
            <img class="objetoPedra" src="img/Stone.png"/>
            <img class="objetos" src="img/Shears.png"/>
            </div>
        <div class="resultado">
            <h2>Computador</h2>
            <p>${computador}</p>
            <h2>Empate</h2>
            <p>${empate}</p>
            <h2>${usuario}</h2>
            <p>${user}</p>
            <button onclick="recomecarJogo()">Recomeçar</button>
        </div>`;
                break
            case 'papel':
                user++
                telaDeResultado.innerHTML = `<div>
            <img class="objetos" src="img/Paper.png"/>
            <img class="objetos" src="img/Shears.png"/>
            </div>
        <div class="resultado">
            <h2>Computador</h2>
            <p>${computador}</p>
            <h2>Empate</h2>
            <p>${empate}</p>
            <h2>${usuario}</h2>
            <p>${user}</p>
            <button onclick="recomecarJogo()">Recomeçar</button>
        </div>`;
                break
            case 'tesoura':
                empate++
                telaDeResultado.innerHTML = `<div>
            <img class="objetos" src="img/Shears.png"/>
            <img class="objetos" src="img/Shears.png"/>
            </div>
        <div class="resultado">
            <h2>Computador</h2>
            <p>${computador}</p>
            <h2>Empate</h2>
            <p>${empate}</p>
            <h2>${usuario}</h2>
            <p>${user}</p>
            <button onclick="recomecarJogo()">Recomeçar</button>
        </div>`;
    }
    }
}

function recomecarJogo() {
    telaDeResultado.innerHTML = ``;
    iniciarJogo()
}




