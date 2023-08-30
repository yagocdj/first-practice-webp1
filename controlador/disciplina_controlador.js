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

    inserirDisciplinaNoHtml(disciplina, elementoDestino) {
        const elementoDisciplina = document.createElement('span');
        elementoDisciplina.textContent = `Código: ${disciplina.codigo} - Nome: ${disciplina.nome}`;
        elementoDisciplina.setAttribute('id', `disciplina-${disciplina.codigo}`);
        
        const botaoDeletar = document.createElement('button');
        botaoDeletar.setAttribute('id', `remover-${disciplina.codigo}`);
        botaoDeletar.textContent = 'X';
        botaoDeletar.addEventListener('click', ev =>
            this.removerDisciplinaDoHtml(ev.target.id.split('-').at(-1)));

        elementoDestino.appendChild(elementoDisciplina);
        elementoDestino.appendChild(botaoDeletar);
    }

    removerDisciplinaDoHtml(codigo) {
        const elementoDisciplinaASerRemovida = document.querySelector(`#disciplina-${codigo}`);
        const elementoBotaoASerRemovido = document.querySelector(`#remover-${codigo}`);

        this.servico.remover(codigo);
        
        elementoBotaoASerRemovido.remove();
        elementoDisciplinaASerRemovida.remove();
        
        // DEBUG - tem que retornar null/undefined
        console.log(this.servico.pesquisarPorCodigo(codigo));
    }
}