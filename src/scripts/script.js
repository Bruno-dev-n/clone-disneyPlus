// Adiciona um ouvinte de evento que aguarda o carregamento completo do DOM.
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os botões que têm o atributo 'data-tab-button'.
    const buttons = document.querySelectorAll('[data-tab-button]');

    // Itera sobre cada botão encontrado.
    for (let i = 0; i < buttons.length; i++) {
        // Adiciona um ouvinte de evento de clique a cada botão.
        buttons[i].addEventListener('click', function(button) {
            // Obtém o valor do atributo 'data-tab-button' do botão clicado.
            const tabs = button.target.dataset.tabButton;
            // Seleciona a aba correspondente ao valor obtido.
            const tab = document.querySelector(`[data-tab-id=${tabs}]`);
            // Chama a função para desativar todas as abas.
            nonetabs();
            // Adiciona a classe que ativa a visualização da aba selecionada.
            tab.classList.add('shows__list--is-active');
            // Chama a função para remover a classe ativa de todos os botões.
            removeButtonActive();
            // Adiciona a classe ativa ao botão clicado.
            button.target.classList.add('shows__tabs__button--is-active');
        })
    }
})

// Define a função para remover a classe ativa de todos os botões.
function removeButtonActive() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}

// Define a função para remover a classe ativa de todas as abas.
function nonetabs() {
    const containertabs = document.querySelectorAll('[data-tab-id]');
    for (let i = 0; i < containertabs.length; i++) {
        containertabs[i].classList.remove('shows__list--is-active');
    }
}
