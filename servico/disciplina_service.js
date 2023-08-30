class DisciplinaService {
    constructor() {
        this.repositorio = new DisciplinaRepositorio();
    }

    inserir(nome, codigo) {
        const disciplinaPesquisada = this.pesquisarPorCodigo(codigo);
        console.log(`achou ${disciplinaPesquisada}`);
        if (disciplinaPesquisada.length > 0) {
            throw new Error('Disciplina já cadastrada!');
        }
        const novaDisciplina = new Disciplina(codigo, nome);
        this.repositorio.inserir(novaDisciplina);
        return novaDisciplina;
    }

    remover(codigo) {
        this.repositorio.remover(codigo);
        console.log(`removeu a ${codigo}`);
    }

    pesquisarPorCodigo(codigo) {
        return this.repositorio.listar().filter(
            disciplina => disciplina.codigo === codigo);
    }
}