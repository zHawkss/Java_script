
//Agora você deverá exibir no console utilizando JS quantos elementos filhos temos no body.  
{
const body = document.querySelector('body');
console.log(body.children.length);
}

//Programe uma função em JS que verifique o resultado da captura anterior e exiba true, caso o número de elementos filhos for maior que 5, e, false, caso seja menor ou igual a 5.   
function verificaNumeroDeFilhos() {
    const body = document.querySelector('body');
    const numFilhos = body.children.length;
    return numFilhos > 5;
  }
  
  console.log(verificaNumeroDeFilhos());

//Exiba através do conceito de NodeList tudo que temos com a tag <p>
  const paragrafos = document.querySelectorAll('p');
console.log(paragrafos);