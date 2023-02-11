{
    let cpfCliente = prompt('Digite seu CPF:');

    function validaCPF(cpf) { // Funcao para velidar cpf digitado
        // CPF tem 11 digitos? CPF é um número?
        if (cpf.length == 11 && !isNaN(cpf)) {
            return true;
        } else {
            return false;
        }
    }

    function formatarCPF(cpfRecebido) { // Funcao para formatar cpf
        let formataCPF = cpfRecebido.slice(0, 3) + '.' + cpfRecebido.slice(3, 6) + '.' + cpfRecebido.slice(6, 9) + '-' + cpfRecebido.slice(9, 11);
        return formataCPF;
    }

    console.log(formatarCPF(cpfCliente))

    function exibeMensagem(cpf) {
        if (validaCPF(cpf)) {
            let cpfFormatado = formatarCPF(cpfCliente);
            alert('CPF informado:' + cpfFormatado);
        } else {
            alert('CPF Inválido');
        };
    }

    exibeMensagem(cpfCliente);
}