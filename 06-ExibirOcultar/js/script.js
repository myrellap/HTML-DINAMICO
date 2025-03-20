const exibir = () => {
    let preguica = document.getElementById("preguica");
    let botao = document.getElementById("btnChave");

    if (botao.textContent == "Exibir") {
        //preguca.style.display = "block";
        preguica.style.display = "block";
        botao.textContent = "Ocultar" ;
    } else {
        //preguca.style.diplay = "none";
        preguica.style.display = "none";
        botao.textContent = "Exibir";
        
    }
};