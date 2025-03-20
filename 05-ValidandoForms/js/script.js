//cria alerta na pagina com ação de click em OK
//alert("Alerta com ação de click")

const validarDados = () => {
  let nome = frmExemplo.inNome.value;
  let idade = frmExemplo.inIdade.value;

  if (nome.trim() == "") {
    alert("o campo não pode estar vazio!");
    frmExemplo.inNome.focus();
    return false;
  }

  if (idade.trim() == "") {
    alert("o campo idade não pode estar vazio ou negativo!");
    frmExemplo.inIdade.focus();
    return false;
  }

 if(nome.trim() != "" && idade.trim() != "" && idade > 0) {
    alert("formulário enviado!"); location.reload();
 }
};
