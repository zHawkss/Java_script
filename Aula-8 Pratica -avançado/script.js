//a. Crie um array para armazenar a seguinte lista:
//0 - Sem cadastro
//1 - Leite
//2 - Ovo
//3 - Farinha
//4 - Milho
//5 – Café

let produtos = ['Sem Cadastro', 'Leite', 'Ovo', 'Farinha', 'Milho', 'Café']

let codigo = prompt('Digite o código para exibir qual posição está seu produto')

if (codigo>=produtos.length) {
    confirm(`${produtos[0]}. Deseja incluir um novo produto?`)
    if (confirm) {
        let novoProduto = prompt('Digite o nome do novo produto:')
        produtos.push(novoProduto)
        alert(`O novo produto incluído é ${novoProduto}. O código deste novo produto é  ${[(produtos.length-1)]}`)
        window.location.reload()
    } else {

    }
}else{
    alert(`O produto corresponde ao código ${codigo} é ${produtos[codigo]}.`)
} 








