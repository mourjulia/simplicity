// selecionando os elemntos que serão manipulados
const formulario = document.querySelector("form");
const campoCep = formulario.querySelector("#cep");
const campoEndereço = formulario.querySelector("#endereço");
const campoBairro = formulario.querySelector("#bairro");
const campoCidade = formulario.querySelector("#cidade");
const campoEstado= formulario.querySelector("#estado");
const botaoBuscar = formulario.querySelector("#buscar");
const mensagemStatus = formulario.querySelector("#status");


/* capturando o cliques no botão buscar */
botaoBuscar.addEventListener("click", function(){
    // verificando se o cep NÃO TEM 9 dígitos
    if( campoCep.value.length !== 9 ){
        // informar o usuario sobre o erro
        mensagemStatus.textContent = "Digite um CEP válido";
        mensagemStatus.style.color = "purple";

        // Para completamente a execução do script
        return
    } 

    // guardando o valor do cep digitado
    let cepDigitado = campoCep.value;

    /*AJAX - Asyncronous JavaScript and XML 
    Técnica de comunicação (transmissão,recebimento) de dados muito usada  
    entre sistemas e tecnologias diferentes.*/
    
}); /* final do evento do botão */