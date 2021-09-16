var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
  var resultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);
  if (chute == numeroSecreto) {
    resultado.innerHTML = "Você acertou!";
  } else if (chute > 10 || chute < 0) {
    resultado.innerHTML = "Esse número não está entre 0 e 10";
  } else {
    resultado.innerHTML = "Vc errou, o número secreto é " + numeroSecreto;
  }
}