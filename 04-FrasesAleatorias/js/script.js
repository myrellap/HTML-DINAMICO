// Criando a função de flecha com frase aleatorias
const falar = () => {
  //Criando o vetor de frases
  const frases = [
    "Hoje está um dia bonito!",
    "Estou cansada!",
    "Estou com sono!",
    "Justin lindo!",
  ];
  //Criando uma variavel para armazenar a DIV com id "tagarela"
  let tagarela = document.getElementById("tagarela");

  //Criando variavel de controle para a frase exibida
  let indice = 0;

  //Criando variavel para numeros aleatorios entre 0 e 1 (lembrando que o 1 não entra na conta)
  let numero = Math.random();

  //Configurando o numero para a frase selecionada
  if (numero > 0.75) indice = 3;
  else if (numero > 0.5) indice = 2;
  else if (numero > 0.25) indice = 1;

  //Escrevendo a frase para usuario
  tagarela.innerHTML = frases[indice];
};
