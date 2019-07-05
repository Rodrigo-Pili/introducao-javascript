var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var tagTodosPacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < tagTodosPacientes.length; i++){
  var tagPaciente = tagTodosPacientes[i];

  var tagPeso = tagPaciente.querySelector(".info-peso");
  var peso = tagPeso.textContent;

  var tagAltura = tagPaciente.querySelector(".info-altura");
  var altura = tagAltura.textContent;

  var pesoEhValido = true;
  var alturaEhValida = true;

  var tagImc = tagPaciente.querySelector(".info-imc");

  if(peso <= 0 || peso > 300){
      pesoEhValido = false;
      tagImc.textContent = "Peso inválido";
  }

  if(altura <= 0 || altura > 3.00){
      alturaEhValida = false;
      tagImc.textContent = "Altura inválida";
  }

  tagImc.textContent = calculaImc(peso, altura);

}

function calculaImc(peso, altura){
    if(pesoEhValido && alturaEhValida){
      var imc = peso / (altura * altura);
      return imc.toFixed(2);;
    } else {
      tagPaciente.classList.add("paciente-invalido");
    }
}
