let inputNome = document.getElementById('nome');
let inputSobrenome = document.getElementById('snome');
let inputCpf = document.getElementById('cpf');

let dadosCorretos = document.getElementById('dados-corretos');
let dadosIncorretos = document.getElementById('dados-incorretos');

let button = document.getElementById('botao1');

button.onclick = function () {
    todosCamposOk();
};

function validaCampos(nome, sobrenome, cpf) { // a
    if (nome !== '' &&
        sobrenome !== '' &&
        cpf !== '') {
        if (verificaCpf(inputCpf.value)) {
            alert('Todos os campos estão preenchidos!');
            alert('CPF Válido!');
            return true;
        } else {
            alert('Complete o CPF!');
        }

    } else {
        alert('Erro, preencha todos os campos!');
    }
}

function verificaCpf(cpf) { // b
    if (cpf.length == 11) {
        return true;
    } else {
        alert('CPF inválido!');
    }
}

let todosCamposOk = function () { // c
    if (validaCampos(inputNome.value, inputSobrenome.value, inputCpf.value) && verificaCpf(inputCpf.value)) {
        dadosIncorretos.setAttribute('hidden', 'true'); // adc hidden no incorreto
        dadosCorretos.removeAttribute('hidden'); // remove o hidden do correto
    } else {
        dadosCorretos.setAttribute('hidden', 'true'); // adc hidden no correto
        dadosIncorretos.removeAttribute('hidden'); // remove hidden do incorreto
    }
}