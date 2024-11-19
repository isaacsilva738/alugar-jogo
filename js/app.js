

function contarExibirJogosAlugados() {
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
}


function alterarStatus(id) {


    let gemeClicado = document.getElementById(`game-${id}`);
    let imagem  = gemeClicado.querySelector('.dashboard__item__img');
    let botao  = gemeClicado.querySelector('.dashboard__item__button');


    if (imagem.classList.contains('dashboard__item__img--rented')) {
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';console.log('Iniciando aplicação...');
console.log('Alterando status do jogo...');
console.log('Contando e exibindo jogos alugados...');
console.log('Ordenando números...');let jogosAlugados = 0;

/**
 * Exibe a contagem de jogos alugados no console.
 */
function contarEExibirJogosAlugados() {
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
}


// Altera o status de um jogo (alugado ou não) e atualiza a contagem.
 
function alterarStatus(id) {
    const jogoClicado = document.getElementById(`game-${id}`);
    const imagem = jogoClicado.querySelector('.dashboard__item__img');
    const botao = jogoClicado.querySelector('.dashboard__item__button');

    if (imagem.classList.contains('dashboard__item__img--rented')) {
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
        jogosAlugados--;
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.textContent = 'Devolver';
        botao.classList.add('dashboard__item__button--return');
        jogosAlugados++;
    }
    contarEExibirJogosAlugados();
}

// Inicializa a contagem considerando que os jogos já começam alugados
document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarEExibirJogosAlugados();
});


 //Ordena uma lista de números em ordem crescente.

function ordenarNumeros(a, b, c) {
    const numerosOrdenados = [a, b, c].sort((x, y) => x - y);
    console.log(`Números ordenados: ${numerosOrdenados.join(', ')}`);
}

// Exemplo de uso:
ordenarNumeros(3, 1, 5); // Deve exibir "Números ordenados: 1, 3, 5"
        jogosAlugados --;
    } else {
         imagem.classList.add ('dashboard__item__img--rented');
         botao.textContent = 'Devolver';
         botao.classList.add('dashboard__item__button--return');
         jogosAlugados++;
    }
    contarEExibirJogosAlugados();

}

// Inicializa a contagem considerando que os jogos já começam alugados
document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarEExibirJogosAlugados();
});
function ordenarNumeros(a, b, c) {
    const numerosOrdenados = [a, b, c].sort((x, y) => x - y);
    console.log(`Números ordenados: ${numerosOrdenados.join(', ')}`);
}

// Exemplo de uso:
ordenarNumeros(3, 1, 5); // Deve exibir "Números ordenados: 1, 3, 5"

