
// let lampada = document.getElementById("lampada");

//  lampada.src = "img/acesa.jpg";
// if (lampada.src.includes("apagada.jpg")) lampada.src = "img/acesa.jpg";
// else lampada.src = "img/apagada.jpg";
// const ligar = () => {
  //   let lampada = document.getElementById("lampada");
  
  //ATIVIDADE 01
const ligar = () => {
  let lampada = document.getElementById("lampada");

  //  lampada.src = "img/acesa.jpg";
  if (lampada.src.includes("apagada.jpg")) lampada.src = "img/acesa.jpg";
  else lampada.src = "img/apagada.jpg";
};

//------------------------------------------------------------------------------------------------------------------------------------------------
// ATIVIDADE 03
const Formulario = () => {
  let data = frmRegistro.inData.value;
  let nome = frmRegistro.inCli.value;
  let telefone = frmRegistro.inFone.value;
  let mail = frmRegistro.inMail.value;
  let produto = frmRegistro.inProd.value;
  let qtd = frmRegistro.inQtd.value;
  let valor = frmRegistro.inVal.value;

  let divMensagem = document.getElementById("mensagem-erro");
  let mensagem = "";

  if (nome.trim() == "" || nome <= 5) {
    mensagem += "O campo Nome do Cliente está vazio!\n";
  }

  if (data.trim() == "") {
    mensagem += "O campo Data está vazio!\n";
  }

  if (telefone.trim() == "" || telefone <= 5) {
    mensagem += "O campo Telefone está vazio!\n";
  }

  if (mail.trim() == "" || mail <= 5) {
    mensagem += "O campo E-mail está vazio ou menos que 5 caracteres!\n";
  }

  if (produto.trim() == "" || produto < 0) {
    mensagem += "O campo Produto está vazio ou é Menor do que 0!\n";
  }

  if (qtd.trim() == "" || qtd < 0) {
    mensagem += "O campo Quantida está vazio ou é Menor do que 0!\n";
  }

  if (valor.trim() == "" || valor < 0) {
    mensagem += "O campo Valor está vazio ou é Menor do que 0!\n";
  }

  if (mensagem != "") {
    divMensagem.innerText = mensagem;
    divMensagem.style.display = "block";
  }
};

//CORREÇÃO ATIVIDADE 03

// const validaForm = () => {
//   let erro = document.getElementById("mensagem-erro");
//   erro.innerHTML = "";

//   let nome = inCli;
//   let data = inData;
//   let fone = inFone;
//   let mail = inMail;
//   let prod = inProd;
//   let qtd = inQtd;
//   let val = inVal;

//   switch (true) {
//     case nome.value.trim() == "" ||
//       data.value == "" ||
//       fone.value == "" ||
//       mail.value == "" ||
//       prod.value == "" ||
//       qtd.value == "" ||
//       val.value == "":
//       erro.style.display = "block";
//       erro.innerHTML = "Erro: O campo não pode estar vazio!";
//       break;

//     case val.value < 0 || qtd.value < 0:
//       erro.style.display = "block";
//       erro.innerHTML = "Erro: Este campo não pode ser negativo!";

//       break;

//     case nome.value.trim().length < 5 || prod.value.trim().length < 5:
//       erro.innerHTML = "O campo texto não pode ter menos que 5 caracteres!";
//       erro.style.display = "block";
//       break;

//     default:
//       break;
//   }
// };

//--------------------------------------------------------------------------------------------------------------------------------------

//ATIVIDADE 02
const gerarImagem = () => {
  let qtdImagem = document.getElementById("inQtdImg").value;
  let canvas =  document.getElementById("canvas");

  if (qtdImagem <= 0)
    alert("o campo quantidade não pode estar nulo ou negativo");
  else{
    for (let index = 1; index <= qtdImagem; index++) {
      canvas.innerHTML += "<img src='img/logo.png' alt=''>";
   }
  }
};

//------------------------------------------------------------------------------------------------------------------------------------//

//ATIVIDADE 04
const calcular = () => {
  let valPedido = 0;
  let perDesconto = 0;
  let valDesconto = 0; 
  let valFinal = 0;

  if (valPedido >= 2000) {
    perDesconto = 1.5;
  } else if (valPedido >= 1500) {
  perDesconto = 1;
  }  else if (valPedido >= 1000) {
    perDesconto = 0.8;
  } else if (valPedido >= 500) {
    perDesconto = 0.5;
  } else {
    perDesconto = 0;
    
  }

  valDesconto = (valPedido * perDesconto) / 100;
  valFinalPedido = valPedido - valDesconto;
  inPerDesc.value = perDesconto;
  inValDesc.value = valDesconto.toFixed(2);
  inValFinal.value = valFinalPedido.toFixed(2);
};

