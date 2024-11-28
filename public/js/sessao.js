// sessão
function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    var b_usuario = document.getElementById("b_usuario");

    if (email != null && nome != null) {
        b_usuario.innerHTML = nome.toUpperCase();
    } else {
        window.location = "./login.html";
    }
}
function ativarMusica(){ 
    var audio = document.getElementById('menu_theme'); 
    if (audio) { 
        audio.play()
    }
} 
function butaoHover (){
    butao_hover_som.play()
} 
function somClick (){
    butao_som.currentTime = 0;
    butao_som.play()
}
function limparSessao() {
    sessionStorage.clear();
    setTimeout(() => window.location = "../login.html", 200)
}
function iniciarJulgamento(){
    setTimeout(() => window.location.href = "./judgement.html", 200)
}
function visualizarDesempenho(){
    setTimeout(() => window.location.href = "./dashboard.html", 200)
}