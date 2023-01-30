{
for(let i = 0; i < 5; i++){
    console.log('estou aprendendo java script', i)
}
}


{
    let piloto = prompt('Informe os nomes dos pilotos, separados por virgula: ');

    if (!isNaN(piloto)){
        alert('Voce digitou algo diferente, por favor, escreva os nomes');
        window.location.reload()
    }else {
        let nomePilotos = piloto.split(',');

        let exibirListaPilotos = '';

        for (posicao = 0; posicao < nomePilotos.length; posicao++){
            if (posicao < 3){
                exibirListaPilotos += 'Pódio - ' + (posicao+1) + ' - ' + nomePilotos[posicao]+ '\n';
            }else{
                exibirListaPilotos += posicao+1 + ' - ' + nomePilotos[posicao]+ '\n';
            }
        }
        alert('Lista dos pilotos:\n'+ exibirListaPilotos);
    }
}