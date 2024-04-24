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

    let inputs = [vl2, vl3, vl4, vl5, vl6, vl7];
    let resultado = 0;

    inputs.forEach(function(input) {
        resultado += parseInt(input.value) || 0;
    });

    let inputs2 = [vl2, vl3, vl4, vl5, vl6, vl7];

    if (inputs2.some(value => value.value == "")) {
        alert("Preencha todos os Campos");
        return false;
    } else {
        diaMedia.removeAttribute("disabled");
        diaMedia.style.display = "inline";
        média.style.color = "black";
    }

    const values1 = [vl2.value, vl3.value, vl4.value, vl5.value, vl6.value, vl7.value];
    if (values1.some(value => value.length > 3)) {
        alert("Digite Campos MENOR que 3 Digitos!");
        return false;
    } else {
        true;
    }

    const values = [vl2.value, vl3.value, vl4.value, vl5.value, vl6.value, vl7.value];
    if (values.some(value => value < 1)) {
        alert("Digitos Negativos Não Aceitos");
        return false;
    }

    if (resultado > 850) {
        diaMedia.style.backgroundColor = "#ff6961";
        document.getElementById("frase").innerHTML =
            "PROCURE SEU ENDOCRINO! Endereço da Dra.CINTHIA - Rua: Chile, n: 95, Bairro: Frezzarin";
        medica.src = "medica-brava.png";
        palavras3.remove();
    } else {
        diaMedia.style.backgroundColor = "#90EE90";
        document.getElementById("frase2").innerHTML =
            "CONTINUE ASSIM, SEMPRE CUIDANDO DA SAÚDE!";
        medica.src = "medica positivo.png";
        palavras3.remove();
    }

    document.getElementById("diaMedia").value = (resultado / 6).toFixed();

    limpar_inputs();

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

let limpar_inputs = function () {
    let valores = [vl1, vl2, vl3, vl4, vl5, vl6, vl7];
    valores.forEach(function (vl) {
        vl.value = "";
    });
};
