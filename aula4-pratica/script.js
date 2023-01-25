{  
    let letra = prompt('Digite uma letra do alfabeto:');
  
    let eNumero = isNaN(letra);
    let letraMinuscula = letra.toLowerCase()

    if (eNumero === false){
        alert('Deve digitar uma letra do alfabeto para obter o resultado');
    }else if(letraMinuscula === 'a' || letraMinuscula === 'e' || letraMinuscula === 'i' || letraMinuscula === 'o' || letraMinuscula === 'u'){
        alert('Letra digitada é uma vogal');
    }else{
        alert('Letra digitada é uma consoante');
    }
}
