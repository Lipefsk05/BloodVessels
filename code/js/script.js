// Seleciona todos os labels do grupo de botões
const labels = document.querySelectorAll('#btnGroup label');

// Adiciona um evento de clique a cada label
labels.forEach(label => {
    label.addEventListener('click', () => {
        // Obtém o valor do input associado
        const input = document.getElementById(label.htmlFor);
        console.log(input.value); // Imprime o valor no console

        // Seleciona todos os elementos de preenchimento e vazio
        const selectors = {
            opos: { full: document.querySelector('#opos .perFull'), empty: document.querySelector('#opos .perEmpty') },
            oneg: { full: document.querySelector('#oneg .perFull'), empty: document.querySelector('#oneg .perEmpty') },
            abpos: { full: document.querySelector('#abpos .perFull'), empty: document.querySelector('#abpos .perEmpty') },
            abneg: { full: document.querySelector('#abneg .perFull'), empty: document.querySelector('#abneg .perEmpty') },
            apos: { full: document.querySelector('#apos .perFull'), empty: document.querySelector('#apos .perEmpty') },
            aneg: { full: document.querySelector('#aneg .perFull'), empty: document.querySelector('#aneg .perEmpty') },
            bpos: { full: document.querySelector('#bpos .perFull'), empty: document.querySelector('#bpos .perEmpty') },
            bneg: { full: document.querySelector('#bneg .perFull'), empty: document.querySelector('#bneg .perEmpty') },
        };

        // Função para definir a visibilidade dos elementos usando classes
        const setVisibility = (group, fullVisible) => {
            const { full, empty } = selectors[group];
            
            if (fullVisible) {
                full.classList.add('perFull-show');
                full.classList.remove('perFull-hide');
                empty.classList.add('perEmpty-hide');
                empty.classList.remove('perEmpty-show');
            } else {
                full.classList.add('perFull-hide');
                full.classList.remove('perFull-show');
                empty.classList.add('perEmpty-show');
                empty.classList.remove('perEmpty-hide');
            }
        };
        

        // Função para gerenciar a seleção de tipos sanguíneos
        const handleSelection = {
            'o+': () => {
                setVisibility('opos', true);
                setVisibility('oneg', false);
                setVisibility('abpos', true);
                setVisibility('abneg', false);
                setVisibility('apos', true);
                setVisibility('aneg', false);
                setVisibility('bpos', true);
                setVisibility('bneg', false);
            },
            'o-': () => {
                setVisibility('opos', true);
                setVisibility('oneg', true);
                setVisibility('abpos', true);
                setVisibility('abneg', true);
                setVisibility('apos', true);
                setVisibility('aneg', true);
                setVisibility('bpos', true);
                setVisibility('bneg', true);
            },
            'ab+': () => {
                setVisibility('opos', false);
                setVisibility('oneg', false);
                setVisibility('abpos', true);
                setVisibility('abneg', false);
                setVisibility('apos', false);
                setVisibility('aneg', false);
                setVisibility('bpos', false);
                setVisibility('bneg', false);
            },
            'ab-': () => {
                setVisibility('opos', false);
                setVisibility('oneg', false);
                setVisibility('abpos', true);
                setVisibility('abneg', true);
                setVisibility('apos', false);
                setVisibility('aneg', false);
                setVisibility('bpos', false);
                setVisibility('bneg', false);
            },
            'a+': () => {
                setVisibility('opos', false);
                setVisibility('oneg', false);
                setVisibility('abpos', true);
                setVisibility('abneg', false);
                setVisibility('apos', true);
                setVisibility('aneg', false);
                setVisibility('bpos', false);
                setVisibility('bneg', false);
            },
            'a-': () => {
                setVisibility('opos', false);
                setVisibility('oneg', false);
                setVisibility('abpos', true);
                setVisibility('abneg', true);
                setVisibility('apos', true);
                setVisibility('aneg', true);
                setVisibility('bpos', false);
                setVisibility('bneg', false);
            },
            'b+': () => {
                setVisibility('opos', false);
                setVisibility('oneg', false);
                setVisibility('abpos', true);
                setVisibility('abneg', false);
                setVisibility('apos', false);
                setVisibility('aneg', false);
                setVisibility('bpos', true);
                setVisibility('bneg', false);
            },
            'b-': () => {
                setVisibility('opos', false);
                setVisibility('oneg', false);
                setVisibility('abpos', true);
                setVisibility('abneg', true);
                setVisibility('apos', false);
                setVisibility('aneg', false);
                setVisibility('bpos', true);
                setVisibility('bneg', true);
            }
        };

        // Executa a função correspondente com base no valor do input
        if (handleSelection[input.value]) {
            handleSelection[input.value]();
        }
    });
});

// Seleciona todos os elementos 'perFull' e 'perEmpty' e define seus estados iniciais
document.addEventListener('DOMContentLoaded', () => {
    const selectors = {
        opos: { full: document.querySelector('#opos .perFull'), empty: document.querySelector('#opos .perEmpty') },
        oneg: { full: document.querySelector('#oneg .perFull'), empty: document.querySelector('#oneg .perEmpty') },
        abpos: { full: document.querySelector('#abpos .perFull'), empty: document.querySelector('#abpos .perEmpty') },
        abneg: { full: document.querySelector('#abneg .perFull'), empty: document.querySelector('#abneg .perEmpty') },
        apos: { full: document.querySelector('#apos .perFull'), empty: document.querySelector('#apos .perEmpty') },
        aneg: { full: document.querySelector('#aneg .perFull'), empty: document.querySelector('#aneg .perEmpty') },
        bpos: { full: document.querySelector('#bpos .perFull'), empty: document.querySelector('#bpos .perEmpty') },
        bneg: { full: document.querySelector('#bneg .perFull'), empty: document.querySelector('#bneg .perEmpty') },
    };

    // Função para definir a visibilidade dos elementos ao iniciar a página
    Object.keys(selectors).forEach(group => {
        const { full, empty } = selectors[group];
        full.classList.add('perFull-hide'); // Inicia invisível
        empty.classList.add('perEmpty-show'); // Inicia visível
    });
});
