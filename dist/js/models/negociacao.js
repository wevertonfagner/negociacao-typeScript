/*
    Poderia ser assim:

    export class Negociacao {

    constructor(
        private readonly data: Date,
        public readonly quantidade: number,
        public readonly valor: number
        ) {}

    get volume(): number {
        return this._quantidade * this._valor
    }
}
*/
export class Negociacao {
    constructor(data, quantidade, valor) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
    get volume() {
        return this._quantidade * this._valor;
    }
}
