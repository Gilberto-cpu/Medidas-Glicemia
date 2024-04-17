let vl1 = document.getElementById("dia1");
let vl2 = document.getElementById("dia2");
let vl3 = document.getElementById("dia3");
let vl4 = document.getElementById("dia4");
let vl5 = document.getElementById("dia5");
let vl6 = document.getElementById("dia6");
let vl7 = document.getElementById("dia7");
let botaoCalcular = document.getElementById("btn");
let botaoEnviarFormulario = document.getElementById("env");
let resultado = document.getElementById("diaMedia");
var palavras = document.getElementById("frase");
var palavras2 = document.getElementById("frase2");
let palavras3 = document.getElementById("frase3");

let medica = document.getElementById("foto");




function calcularMedia() {
    validarCampo();
    let vl6 = document.getElementById("dia6");
    resultado =
      parseInt(vl6.value) +
      parseInt(vl7.value) +
      parseInt(vl5.value) +
      parseInt(vl4.value) +
      parseInt(vl3.value) +
      parseInt(vl2.value);
  
    if (
      vl2.value == "" ||
      vl3.value == "" ||
      vl4.value == "" ||
      vl5.value == "" ||
      vl6.value == "" ||
      vl7.value == ""
    ) {
      alert("Preencha todos os Campos");
  
      return false;
    } else {
      diaMedia.removeAttribute("disabled");
      diaMedia.style.display = "inline";
      média.style.color = "black";
    }
  
    if (
      vl2.value.length > 3 ||
      vl3.value.length > 3 ||
      vl4.value.length > 3 ||
      vl5.value.length > 3 ||
      vl6.value.length > 3 ||
      vl7.value.length > 3
    ) {
      alert("Digite Campos  MENOR  que 3 Digitos!");
  
      return false;
    } else {
      true;
    }
  
    if (
      vl2.value < 1 ||
      vl3.value < 1 ||
      vl4.value < 1 ||
      vl5.value < 1 ||
      vl6.value < 1 ||
      vl7.value < 1
    ) {
      alert("Digitos Negativos Não Aceitos");
  
      return false;
    }
  
    if (resultado > 850) {
      diaMedia.style.backgroundColor = "#ff6961";
      document.getElementById("frase").innerHTML =
        "PROCURE SEU ENDOCRINO! Endereço da Dra.CINTHIA - Rua: Chile, n: 95, Bairro: Frezzarin";
      medica.src = "fotos do projeto/medica brava.png";
      palavras3.remove();
    } else {
      diaMedia.style.backgroundColor = "#90EE90";
  
      document.getElementById("frase2").innerHTML =
        "CONTINUE ASSIM, SEMPRE CUIDANDO DA SAÚDE!";
      medica.src = "fotos do projeto/medica positivo.png";
      palavras3.remove();
    }
  
    document.getElementById("diaMedia").value = (resultado / 6).toFixed();
  
    vl6.value = "";
    vl7.value = "";
    vl5.value = "";
    vl4.value = "";
    vl3.value = "";
    vl2.value = "";
    vl1.value = "";
  
    aparecerForm();
  }
  
  function aparecerForm() {
    Formulario = document.getElementById("formulario");
    resultado = document.getElementById("diaMedia").value;
    if ((resultado = true)) {
      env.removeAttribute("disabled");
      env.style.display = "inline";
    }
  }
  
  function validarCampo() {
    let regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    let vl1 = document.getElementById("dia1").value;
    if (!regex.test(vl1)) {
      alert("POR FAVOR DIGITAR O FORMATO DA DATA VÁLIDO");
      removeEventListener();
    } else {
      return true;
    }
  }
  
  btn.addEventListener("click", calcularMedia);
  
  document.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      var btn = document.getElementById("btn");
  
      btn.click();
    }
  });
 