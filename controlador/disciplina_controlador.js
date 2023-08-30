class DisciplinaControlador {

    constructor() {
        this.servico = new DisciplinaService();
    }

    inserir() {
        const nome = document.querySelector('#nome-disciplina').value;
        const codigo = Number(document.querySelector('#codigo-disciplina').value);
        const disciplinaASerInserida = this.servico.inserir(nome, codigo);
        const elementoListaDeDisciplinas = document.querySelector('#lista-disciplinas');
        if (disciplinaASerInserida) {
            this.inserirDisciplinaNoHtml(disciplinaASerInserida,
                elementoListaDeDisciplinas);
        }
    }

    inserirDisciplinaNoHtml(disciplina, elementoDestino) {
        const elementoDisciplina = document.createElement('li');
        elementoDisciplina.textContent = `Código: ${disciplina.codigo} - Nome ${disciplina.nome}`;
        elementoDestino.appendChild(elementoDisciplina);
    }
}