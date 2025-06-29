const form = document.getElementById("form");
const resultado = document.getElementById("resultado");

const getMensagemIMC = (imc) => {
  switch (true) {
    case imc < 18.5:
      return "Baixo peso";
    case imc > 18.5 && imc < 24.9:
      return "Peso adequado";
    case imc > 25 && imc < 29.9:
      return "Sobrepeso";
    case imc > 30 && imc < 34.9:
      return "Obesidade grau I";
    case imc > 35 && imc < 39.9:
      return "Obesidade grau II";
    case imc > 40:
      return "Obesidade grau III";

    default:
      break;
  }
};

const criarP = (msg) => {
  let p = document.createElement("p");
  p.textContent = msg;
  p.classList.add("resultado");
  return p;
};

// Alterar o RESULTADO no front-end
const setResultado = (imc, isValid) => {
  let p = criarP(isValid ? getMensagemIMC(imc) : "Valores inválidos");
  resultado.innerHTML = "";
  resultado.appendChild(p);
};

const isValid = (dados) =>
  !dados.peso || !dados.altura || dados.peso == 0 || dados.altura == 0
    ? false
    : true;

const getIMC = (dados) => (dados.peso / dados.altura ** 2).toFixed(2);

// Evento SUBMIT do formulário
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let dados = {
    peso: event.currentTarget.peso.value,
    altura: event.currentTarget.altura.value,
  };

  if (!isValid(dados)) {
    setResultado(null, false);
    return;
  }

  let imc = getIMC(dados);
  setResultado(imc, true);
});
