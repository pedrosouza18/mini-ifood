class Mensagem {

    constructor(mgs = '') {
        this._mensagem = mgs;
    }

    get mensagem() {
        return this._mensagem;
    }

    set mensagem(msg) {
        this._mensagem = msg;
    }
}