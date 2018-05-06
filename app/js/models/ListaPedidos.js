class ListaPedidos {

  constructor() {
    this._listaPedidos = [];
  }

  adiciona(pedido) {
    this._listaPedidos.push(pedido);
  }

  get pedidos() {
    return [].concat(this._listaPedidos);
  }
}
