
var idade = prompt("Qual sua idade");
if(idade>=18){
    alert("Maior de idade");
}
else{
    alert("Menor de idade");
}
var count;
for(count=0;count<=6;count++){
    alert(count);
}

var count=0;
while(count<=5){
    console.log(count);
    count=count+1;
}
function veri (idade){
    var validar;
    if(idade >= 18){
        validar = true
        return("Ok pode continuar na pagina")
        alert("Ok pode continuar na pagina")
    }else{
        validar = false
        return("Você não pode entrar nessa pagina")
        alert("Você não pode entrar nessa pagina")
    }
}
var idade = prompt("Qual sua idade");
console.log(veri(idade));
function clicou(){
    document.getElementById("Agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
}
    function redirecionar(){
        window.open("https://orbi.co/");
    }
function trocar(){
    document.getElementById("mousemove").innerHTML="Obrigado por passar o mouse";
}
function voltar(){
    document.getElementById("mousemove").innerHTML="Passe o mouse aqui";
}
function load(){
    alert("Pagina carregada");
}
function funcaoChange(elemento){
    console.log(elemento.value);
}
