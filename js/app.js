function comprar() {
    // Guardando os elementos HTML do tipo de ingresso e quantidade nas variáveis
    let tipoIngresso = document.getElementById('tipo-ingresso');
    let quantidadeInput = parseInt(document.getElementById('qtd').value);

    if(quantidadeInput < 0) {
        alert('Quantidade inválida');
        document.getElementById('qtd'). value = 0;
        return;
    }

    // Verificando o tipo de ingresso que o usuário deseja comprar e invocando a função com a quantidade de ingressos como parâmetro
    if(tipoIngresso.value == 'pista') {
        comprarPista(quantidadeInput);
    } else if(tipoIngresso.value == 'superior') {
        comprarSuperior(quantidadeInput);
    } else {
        comprarInferior(quantidadeInput);
    }

    // Zerando o input da quantidade após comprar o ingresso
    document.getElementById('qtd'). value = 0;
}

function comprarPista(qtd) {
    let quantidadePista = parseInt(document.getElementById('qtd-pista').textContent);

    if(qtd > quantidadePista) {
        alert('Quantidade indisponível para o tipo pista');
    } else {
        quantidadePista -= qtd;
        document.getElementById('qtd-pista').textContent = quantidadePista;
        alert('Compra realizada com sucesso');
    }
}

function comprarSuperior(qtd) {
    let quantidadeSuperior = parseInt(document.getElementById('qtd-superior').textContent);

    if(qtd > quantidadeSuperior) {
        alert('Quantidade indisponível para o tipo superior');
    } else {
        quantidadeSuperior -= qtd;
        document.getElementById('qtd-superior').textContent = quantidadeSuperior;
        alert('Compra realizada com sucesso');
    }
}

function comprarInferior(qtd) {
    let quantidadeInferior = parseInt(document.getElementById('qtd-inferior').textContent);

    if(qtd > quantidadeInferior) {
        alert('Quantidade indisponível para o tipo inferior');
    } else {
        quantidadeInferior -= qtd;
        document.getElementById('qtd-inferior').textContent = quantidadeInferior;
        alert('Compra realizada com sucesso');
    }
}