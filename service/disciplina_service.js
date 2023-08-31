class DisciplinaService {
    constructor() {
        this.repositorio = new DisciplinaRepositorio();
    }

    inserir(nome, codigo) {
        const disciplinaPesquisada = this.pesquisarPorCodigo(codigo);
        if (disciplinaPesquisada.length > 0) {
            throw new Error('Disciplina já cadastrada!');
        }
        const novaDisciplina = new Disciplina(codigo, nome);
        this.repositorio.inserir(novaDisciplina);
        return novaDisciplina;
    }

    remover(codigo) {
        this.repositorio.remover(codigo);
    }

    pesquisarPorCodigo(codigo) {
        return this.repositorio.listar().filter(
            disciplina => disciplina.codigo === codigo);
    }

    inserirAlunoNaDisciplina(codigo, aluno) {
        const disciplinaPesquisada = this.pesquisarPorCodigo(codigo);
        if (disciplinaPesquisada.length === 0) {
            throw new Error('Disciplina inexistente!');
        }
        disciplinaPesquisada[0].alunos.push(aluno);
    }

    atualizarNome(codigo, novoNome) {
        const disciplinaPesquisada = this.pesquisarPorCodigo(codigo);
        if (disciplinaPesquisada.length === 0) {
            throw new Error('Disciplina inexistente!');
        }
        disciplinaPesquisada[0].nome = novoNome;
    }
}