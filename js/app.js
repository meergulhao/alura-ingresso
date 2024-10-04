function comprar() {
    let tipoIngresso = document.querySelector('#tipo-ingresso').value;
    let quantidade = document.querySelector('#qtd').value;

    // Na aula foi criada uma função pra cada tipo, "comprarPista", etc, e uma condicional que chama essa função com base no tipo
    // Essa função já tem a condicional que verifica se a qtd é maior que o disponível
    // Não sei dizer se é a melhor abordagem, mas o que fiz ficou mais simples, pois implementei uma única variável,
    // usando template string, e fiz o cálculo no final
    let disponivel = document.querySelector(`#qtd-${tipoIngresso}`);

    // Melhoria proposta nos desafios
    if(quantidade <= 0) {
        alert('Digite uma quantidade válida!');
        return;
    }

    if(parseInt(disponivel.textContent) < quantidade) {
        alert(`Quantidade indisponível para ${tipoIngresso}`);
        return;
    }

    disponivel.textContent = disponivel.textContent - quantidade;
    alert(`Compra realizada com sucesso! ${tipoIngresso} x${quantidade}`)
}