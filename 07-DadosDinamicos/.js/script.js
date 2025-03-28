const atualizarDados = () => {
  let dados = document.getElementById("itens");
  //Zerando o tbody se houver dados
  dados.innerHTML = "";

  //gerando novos conteudos dinamicamente
  for (let i = 0; i < 5; i++) {
    //Criando variavel para valor aleatorio
    let preco = Math.random() * 100;

    //Criando variavel para um elemento tr (dados da tabela)
    let elemento = "";

    //criando lista de cor diferente para as linhas impares
    if (i % 2 != 0) elemento = "<tr class=´lista´>";
    else elemento = "<tr>";

    //Inserindo os itens na linha (tr)
    elemento += `<td>Produto ${i} </td><td>R$ ${preco.toFixed(2)}</td>`;

    dados.innerHTML += elemento;
  }
};
