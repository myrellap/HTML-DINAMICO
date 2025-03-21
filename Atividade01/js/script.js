//--------------------------------------------------Atividade 01-------------------------------------------------------------------------------
const trocarImagem = () => {
  let imagem = document.getElementById("imagem");

  // Criando o vetor de frases
  const trocarimagens = [
    "Img/imagem brooklyn nine nine1.jpg",
    "Img/justen bieber imagem 2.png",
    "Img/shrek.webp",
  ];

  //Criando variável de controle para a frase exibida
  let indice = 0;

  //Criando variável para número aleatório entre 0 e 1 (lemnrando que o 1 não entra na conta)
  let numero = Math.random();

  //Configurando o número para a frase selecionada
  if (numero > 0.75) indice = 3;
  else if (numero > 0.5) indice = 2;
  else if (numero > 0.25) indice = 1;

  imagem.src = trocarimagens[indice];
  console.log(trocarimagens[indice]);
};



//---------------------------------------------------------Atividade 02------------------------------------------------------------------------

const calcular = (operador) => {
  let valor1 = parseFloat(frmCalculadora.inValor1.value);
  let valor2 = parseFloat(frmCalculadora.inValor2.value);
  let resultado = 0;

  switch (operador) {
    case "+":
      resultado = valor1 + valor2;
      break;


    case "-":
      resultado = valor1 - valor2;
      break;


    case "*":
      resultado = valor1 * valor2;
      break;


    case "/":
      resultado = valor1 / valor2;
      break;
  }
  
  frmCalculadora.inResultado.value = resultado
};
