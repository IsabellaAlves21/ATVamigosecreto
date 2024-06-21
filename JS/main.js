let amigos = [];
 
const btnAdicionar = document.querySelector('#btn-adicionar');
const participantes = document.querySelector('#friends-selection')
const txtAmigo = document.querySelector('.friend-name')
const mensagemErro = document.querySelector(".error")
const btnSorteio = document.querySelector('#btn-sortear')
const btnReiniciar = document.querySelector('#btn-reiniciar')
 
btnAdicionar.addEventListener('click',()=>{
    if (txtAmigo.value!=='') {
        mensagemErro.innerHTML = ""
        if (participantes.textContent.length===0) {
        participantes.innerHTML=txtAmigo.value;
        } else {
        participantes.textContent=participantes.textContent + "," +txtAmigo.value;
    }
    amigos.push(txtAmigo.value);
    console.log(amigos);
    txtAmigo.value="";
    mensagemErro.innerHTML = "";
    } else {
        mensagemErro.innerHTML ='ERRO! Insira um valor válido!';
    }
 
})
 
btnSorteio.addEventListener('click',()=>{
    if (amigos.length>=4) {
        sortear();
        mensagemErro.innerHTML ='';
       } else {
        mensagemErro.innerHTML ='ERRO! Insira um valor válido!';
       }
    })    
 
function sortear() {
    embaralhar(amigos);
 
    let result = document.querySelector('.results');
    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            result.innerHTML = result.innerHTML + '<li>' + amigos[i] + ' --> ' + amigos[0] + '</li>';
        } else {
            result.innerHTML = result.innerHTML + '<li>' + amigos[i] + ' --> ' + amigos[i + 1] + '</li>';
        }
    }
}
 
function embaralhar(amigos) {
    for (let indice = amigos.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [amigos[indice - 1], amigos[indiceAleatorio]] = [amigos[indiceAleatorio], amigos[indice - 1]];
    }
}
 
btnReiniciar.addEventListener('click', () => {
    participantes.textContent = '';
 
    txtAmigo.value = '';
 
    mensagemErro.innerHTML = '';
 
    amigos = [];
 
    result.innerHTML = '';
 
    mensagemErro.innerHTML ='Resetado!';
});