var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){
  event.preventDefault();

  var form = document.querySelector("#form-adiciona-paciente");
  var paciente = pegaValoresDoFormulario(form);
  console.log(paciente);

  var pacienteTr = document.createElement("tr");

  var nomeTd = document.createElement("td");
  var pesoTd = document.createElement("td");
  var alturaTd = document.createElement("td");
  var gorduraTd = document.createElement("td");
  var imcTd = document.createElement("td");
  nomeTd.textContent = nome;
  pesoTd.textContent = peso;
  alturaTd.textContent = altura;
  gorduraTd.textContent = gordura;
  imcTd.textContent = calculaImc(peso, altura);

  pacienteTr.appendChild(nomeTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);
  pacienteTr.appendChild(imcTd);

  var tBody = document.querySelector("#tabela-pacientes");
  tBody.appendChild(pacienteTr);
});

function pegaValoresDoFormulario(form){
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value
  }

  return paciente;
}
