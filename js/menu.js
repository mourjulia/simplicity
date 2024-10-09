/* selecionando o link com a palavra menu */
const botaoMenu = document.querySelector(".titulo-menu a");

/* selecionando a lista de links do menu */
const listaDelinks = document.querySelector(".links-menu");

/* ouvinte de evento para o clickno botão menu */
botaoMenu.addEventListener("click", function( event ){
    // preventDefault serve para anular o comportamento padrão (evitar)
    event.preventDefault();

    // 
    listaDelinks.classList.toggle("aberto");

    if(listaDelinks.classList.contains("aberto")){
        botaoMenu.innerHTML = "fechar";
    }

    else {
        botaoMenu.innerHTML = "Menu &equiv;"
    }
});