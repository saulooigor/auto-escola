

$('.card-option').click(function() {
    $('.card-option').removeClass('selected');
    $(this).toggleClass('selected');

    var categoria = $(this).attr('categoria');
    var selector = '.item-list';

    var itensSelecionados = itens.filter(item => item.categoria.includes(categoria));

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
    $(selector).each(function(index) {
        setTimeout(function() {
            $(selector).eq(index).addClass('show');
        }, (index + 1) * 300); // Ajuste o tempo de atraso conforme necessário
    });
});

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

class Item {
    constructor(nome, descricao, preco, categoria) {
        this.nome = nome;
        this.descricao = descricao;
        this.preco = preco;
        this.categoria = categoria;
    }
}

const itens = [
    new Item('Taxa de Inscrição', 'Inscrição incial para cadastro no DETRAN', '100,00', 'abcd'),
    new Item('Exame Psicotécnico', 'Exame realizado em clínica credenciada', '237,00', 'abcd'),
    new Item('Exame Médico', 'Exame realizado em clínica credenciada', '367,98', 'abcd'),
    new Item('Curso Didático', '40 aulas teóricas (presencial ou online)', '800,00', 'ab'),
    new Item('Prova téorica', 'Marcação da prova teórica', '231,46', 'ab'),
    new Item('Aluguel Veículo', 'Aluguel do veículo das aulas práticas', '420,00', 'abcd'),
    new Item('Aulas Práticas', 'Aulas práticas de direção', '680,00', 'abcd'),
    new Item('Marcação Exame', 'Marcação exame de direção', '330,00', 'abcd')
];
