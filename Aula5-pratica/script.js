{

    let animal = prompt ('informe o animal');
    animal = animal.toLowerCase();

    switch (animal) {
        
        case 'cachorro':
        case 'gato':
        case 'coelho':
            alert(`Oferecemos para ${animal}: banho, tosa e ração.`);
        break

        case 'cavalo':
        case 'cabra':
        case 'jumento':
            alert(`Oferecemos para ${animal}: veterinario especializado em animais de grande porte e ração`);

            break

        case 'rato':
            alert(`Oferecemos para ${animal}: Gaiolas e ração e brinquedos.`)
            break

          case 'passarinho':
          alert(`Oferecemos para ${animal}: Alpiste, inplante de rastreador.`);
        break

        default:
            alert(`Nao atendemos o animal:  ${animal}`);


        }



}