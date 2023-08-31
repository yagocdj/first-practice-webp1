class Aluno {

    constructor(nome, idade, matricula) {
        this._nome = nome;
        this.idade = idade;
        this.matricula = matricula;
    }

    get nome() {
        return this._nome;
    }

    set nome(novoNome) {
        this._nome = novoNome;
    }

    toString() {
        return `{Nome: ${this._nome}, Idade: ${this.idade}, Matricula: ${this.matricula}}\n`;
    }
}
