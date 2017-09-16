export class Vingador {
    id: number;
    nome: string;
    URL: string;
    pessoa: string;

    constructor(id: number, nome: string, URL?: string, pessoa?: string) {
        this.id = id;
        this.nome = nome;
        this.pessoa = pessoa;
        this.URL = URL;
    }
}