var nome = " Elisa Mesquita Alves";
var idade = 32;
var idade1 = 10;
var frase = "Japão é o melhor time do mundo";
var lista = ["Maça","Pêra","Laranja"];/* Lista de frutas */
var fruta =[{nome:"Maça",cor:"Vermelha"},{nome:"Banana",cor:"Amarelo" }]
console.log(fruta[0]);
console.log(fruta[1]);
lista.push("Uva");/* lista.push acrencenta a lista novo elemento */
console.log(lista);/* Mostra no console do navegador a lista com a uva incluida */
console.log(lista[2]);/* Mostra no console do navegador a fruta que corresponde a alocação 2 */
alert(lista[1]);/* Mostra um alerta com a fruta que corresponde a alocação 1 */
alert ("Bem vindo"+ nome + " Tem " + idade + " Anos");
/* Atraves do console você pode verificar se tem algum erro */
console.log(nome);/*Mostra no console na área inspensionar do navegador o nome*/
console.log(idade+idade1);/*Mostra no console na área inspensionar do navegador a soma das duas idades*/
console.log(frase.replace("Japão","Brasil"));/*Mudando palavras da var frase*/
alert(frase.replace("Japão","Brasil"));/*Mostrando como um alerta a var frase*/