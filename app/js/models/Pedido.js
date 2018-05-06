class Pedido {

  constructor(data, nome, preco, qtd) {
    this._data = new Date(data.getTime());
    this._nome = nome;
    this._preco = preco;
    this._qtd = qtd;
  }

  get data() {
    return new Date(this._data.getTime());
  }

  get nome() {
    return this._nome;
  }

  get preco() {
    return this._preco;
  }

  get quantidade() {
    return this._qtd;
  }

}
