{ // Exercicio aula 10
    // a
    let apartamento = {
        tamanho: '150mt',
        mobiliado: 'sim',
        suites: 2,
        quartos: 4,
        vagaGaragem: 2,
        banheiroSocial: 2,
        outrosComodos: {
            sala: 'sim',
            lavabo: 'sim',
            cozinha: 'sim',
            lavanderia: 'sim'
        },
        aguaAquecida: 'sim',
        preco: 300.000
    };

    // b
    console.log(apartamento);
    console.log(apartamento.outrosComodos);

    // c
    console.log(apartamento.outrosComodos.lavanderia);
    console.log(apartamento['preco']);
}