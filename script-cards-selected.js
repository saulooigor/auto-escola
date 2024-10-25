// Funcionalidade para os cards de categorias
$('.card-option').click(function() {
    $('.card-option').removeClass('selected');
    $('.btn-simnao').removeClass('selected-simnao');
    $('.container-itens').empty();
    $(this).toggleClass('selected');

    $('html, body').animate({
        scrollTop: $('#infoAdicional').offset().top
    }, 100);
});

// Funcionalidade para os botões de sim e não
$('.btn-simnao').click(function() {
    $('.btn-simnao').removeClass('selected-simnao');
    $(this).toggleClass('selected-simnao');

    $('html, body').animate({
        scrollTop: $('#itensLista').offset().top
    }, 100);

    var valor = $(this).attr('data-valor');

    var categoria = $('.card-option').filter('.selected').attr('categoria');

    var itensSelecionados = itens.filter(item => item.categoria.includes(categoria));

    if (valor === 'true') {
        itensSelecionados = itensSelecionados.filter(item => item.habilitado === 'true');
    }

    renderizarItens(itensSelecionados, categoria);

    switch (categoria) {
        case 'a':
            mudarCores('green', 'lightgreen');
            break;
        case 'b':
            mudarCores('gold', 'lightyellow');
            break;
        case 'c':
            mudarCores('orange', 'rgba(255, 166, 0, 0.634)');
            break;
        case 'd':
            mudarCores('darkblue', 'lightblue');
            break;
        default:
            break;
    }

    // Oculta todos os itens da lista
    $('.item-list').removeClass('show');
        
    // Mostra os itens da lista um a um com um atraso
    $('.item-list').each(function(index) {
        setTimeout(function() {
            $('.item-list').eq(index).addClass('show');
        }, (index + 1) * 300); // Ajuste o tempo de atraso conforme necessário
    });
});

// Função para mudar as cores da listagem e itens da carteira
mudarCores = function(cor, backgroundColor) {
    $('.icon-list').css({
        color: cor,
        backgroundColor: backgroundColor,
        transition: 'all 0.5s'
    });

    $('.preco-item').css({
        backgroundColor: backgroundColor,
        transition: 'all 0.5s'
    });
}

// Função para renderizar os itens na lista
renderizarItens = function(itens, categoria) {
    const container = $('.container-itens');
    container.empty(); // Limpa o conteúdo existente

    itens.forEach(item => {
        const itemHtml = `
            <div class="row my-1 item-list px-4 py-1" categorias="${categoria}">
                <div class="col-1 d-flex align-items-center justify-content-center">
                    <span class="material-symbols-outlined icon-list">
                        done_outline
                    </span>
                </div>
                <div class="col-8 px-4">
                    <h2>
                        <b class="gabarito">${item.nome}</b>
                        <p><i class="lead">${item.descricao}</i></p>
                    </h2>
                </div>
                <div class="col-md-3 d-flex align-items-center justify-content-center preco-item">
                    <p class="mr-1">R$</p>
                    <h2>
                        <b>${item.preco}</b>
                    </h2>
                </div>
                <hr class="mt-3">
            </div>
        `;
        console.log(itemHtml); 
        container.append(itemHtml);
    });
}

//Classe de Item dos dados
class Item {
    constructor(nome, descricao, preco, categoria, habilitado) {
        this.nome = nome;
        this.descricao = descricao;
        this.preco = preco;
        this.categoria = categoria;
        this.habilitado = habilitado;
    }
}

// Itens de exemplo
const itens = [
    new Item('Taxa de Inscrição', 'Inscrição incial para cadastro no DETRAN', '100,00', 'abcd', 'true'),
    new Item('Exame Psicotécnico', 'Exame realizado em clínica credenciada', '237,00', 'abcd', 'true'),
    new Item('Exame Médico', 'Exame realizado em clínica credenciada', '367,98', 'abcd', 'true'),
    new Item('Curso Didático', '40 aulas teóricas (presencial ou online)', '800,00', 'ab', 'false'),
    new Item('Prova téorica', 'Marcação da prova teórica', '231,46', 'ab', 'false'),
    new Item('Aluguel Veículo', 'Aluguel do veículo das aulas práticas', '420,00', 'abcd', 'true'),
    new Item('Aulas Práticas', '40 Aulas práticas de direção', '680,00', 'abcd', 'true'),
    new Item('Marcação Exame', 'Marcação exame de direção', '330,00', 'abcd', 'true'),
];
