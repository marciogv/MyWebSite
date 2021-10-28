const botao = document.querySelector('.botao');
const caixas = document.querySelectorAll('.caixa');
// const caixaTe = document.querySelector('.te');
const linhaAga = document.querySelector('.linha-aga');
const linhaTe = document.querySelector('.linha-te');
const linhaEme = document.querySelectorAll('.linha-eme-geral');
botao.addEventListener('click', function() {
    caixas[0].style.borderWidth = '0 1rem';
    caixas[1].style.borderWidth = '1rem 0 0 0';
    caixas[2].style.borderWidth = '0 1rem';
    caixas[3].style.borderWidth = '0 0 1rem 1rem';
    linhaAga.style.borderBottom = '1rem solid black'
    linhaTe.style.borderRight = '1rem solid black'
    linhaEme[0].style.display = 'block'
    linhaEme[1].style.display = 'block'
});

const texto = 'Nos dias atuais a internet tem sido local essencial para a divulgação e venda de produtos e serviços, sendo este movimento acelerado pela pandemia da COVID-19.'


let contador = -1;
let descricao = document.querySelector('.descricao');

function pegarLetra() {

    if (contador === (texto.length - 2)) {
    clearInterval(intervalo);
}
contador ++;
descricao.innerHTML += texto[contador];
}


const intervalo = setInterval(pegarLetra, 100);
