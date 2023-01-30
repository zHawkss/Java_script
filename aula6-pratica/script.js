

{
    let termino = true;
    while (termino) {
        let anosdeEscola = prompt('Há quantos anos voce esta vinculado a escola?');

        if (isNaN(anosdeEscola)){
            alert('Voce deve digbitar apenas números para receber o dado correto.')
        }
        let reciclagens = anosdeEscola /2;
        reciclagens=parseInt(reciclagens);

        if (anosdeEscola < 2){
            alert('Voce não tem o tempo minimo de 2 anos para ter reciclagem')
            termino = false;
        
        }else if (reciclagens ){ 
            alert(`Esse piloto particiou de: ${reciclagens} recilagens.`)
            termino = false
        } 
    }


}