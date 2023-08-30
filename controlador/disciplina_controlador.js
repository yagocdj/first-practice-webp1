class DisciplinaControlador {

    constructor() {
        this.servico = new DisciplinaService();
    }

    inserir() {
        const nome = document.querySelector('#nome-disciplina').value;
        const codigo = Number(document.querySelector('#codigo-disciplina').value);
        const disciplinaASerInserida = this.servico.inserir(nome, codigo);
        const elementoListaDeDisciplinas = document.querySelector('#listagem-disciplinas');
        if (disciplinaASerInserida) {
            this.inserirDisciplinaNoHtml(disciplinaASerInserida,
                elementoListaDeDisciplinas);
        }
    }

    remover(codigo) {
        this.servico.remover(Number(codigo));
        this.removerDisciplinaDoHtml(codigo);
    }

    inserirDisciplinaNoHtml(disciplina, elementoDestino) {
        const elementoDisciplina = document.createElement('li');
        elementoDisciplina.textContent = `Código: ${disciplina.codigo} - Nome: ${disciplina.nome}`;
        elementoDisciplina.setAttribute('id', `disciplina-${disciplina.codigo}`);
        
        const botaoDeletar = document.createElement('button');
        botaoDeletar.setAttribute('id', `remover-${disciplina.codigo}`);
        botaoDeletar.textContent = 'X';
        botaoDeletar.classList.add('cursor-pointer', 'default-button');
        botaoDeletar.addEventListener('click', ev => {
            const codigoDaDisciplina = ev.target.id.split('-').at(-1);
            this.remover(codigoDaDisciplina);
        });

        elementoDestino.appendChild(elementoDisciplina);
        elementoDestino.appendChild(botaoDeletar);
    }

    removerDisciplinaDoHtml(codigo) {
        const elementoDisciplinaASerRemovida = document.querySelector(`#disciplina-${codigo}`);
        const elementoBotaoASerRemovido = document.querySelector(`#remover-${codigo}`);
        elementoBotaoASerRemovido.remove();
        elementoDisciplinaASerRemovida.remove();
    }
}