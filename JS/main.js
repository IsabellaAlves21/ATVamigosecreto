let amigos = [];

const btnAdicionar = document.querySelector('#btn-adicionar');
const participantes = document.querySelector('#friends-selection');
const txtAmigo = document.querySelector('.friend-name');
const mensagemErro = document.querySelector('.error');
const btnSorteio = document.querySelector('#btn-sortear');
const btnReiniciar = document.querySelector('#btn-reiniciar');
const result = document.querySelector('.results');


console.log(btnAdicionar, participantes, txtAmigo, mensagemErro, btnSorteio, btnReiniciar); 

btnAdicionar.addEventListener('click', () => {
    console.log('Adicionar botão clicado'); 
    if (txtAmigo.value !== '') {
        mensagemErro.innerHTML = "";
        if (participantes.textContent.length === 0) {
            participantes.innerHTML = txtAmigo.value;
        } else {
            participantes.textContent = participantes.textContent + "," + txtAmigo.value;
        }
        amigos.push(txtAmigo.value);
        console.log(amigos);
        txtAmigo.value = "";
    } else {
        mensagemErro.innerHTML = 'ERRO! Insira um valor válido!';
    }
});

btnReiniciar.addEventListener('click', () => {
    console.log('Reiniciar botão clicado'); 
    amigos = [];
    participantes.innerHTML = "";
    txtAmigo.value = "";
    mensagemErro.innerHTML = "";
    result.innerHTML = '';
    console.log("Lista de amigos reiniciada:", amigos);
});

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function sortear() {
    if (amigos.length < 4) {
        mostrarMsgErro('Adicione ao menos 4 amigos!');
        return;
    }
 
    embaralhar(amigos);
 
    let sorteio = document.querySelector('.results');
    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + '<li>' + amigos[i] + ' --> ' + amigos[0] + '</li>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + '<li>' + amigos[i] + ' --> ' + amigos[i + 1] + '</li>';
        }
    }
}