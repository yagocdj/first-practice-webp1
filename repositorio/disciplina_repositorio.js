class DisciplinaRepositorio {

    constructor() {
        this.disciplinas = [];
    }

    inserir(disciplina) {
        this.disciplinas.push(disciplina);
    }

    remover(codigo) {
        const indexDisciplinaARemover = this.disciplinas.findIndex(
            disciplina => disciplina.codigo === codigo);
        if (indexDisciplinaARemover > -1) {
            this.disciplinas.splice(indexDisciplinaARemover, 1);
        }
    }

    listar() {
        return this.disciplinas;
    }
}