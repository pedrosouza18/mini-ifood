class PedidosController {

  constructor() {

    let $ = document.querySelector.bind(document);

    this._data = $('#data');
    this._nome = $('#nome');
    this._preco = $('#preco');
    this._quantidade = $('#qtd');

    this._listaPedidos = new ListaPedidos();
    this._pedidosView = new PedidosView($('#listanegociacoes'));
    this._pedidosView.update(this._listaPedidos);

    this._mensagem = new Mensagem();
    this._mensagemView = new MensagemView($('#toast-message'));
    this._mensagemView.update(this._mensagem);
  }

  adicionar(event) {
    event.preventDefault();
    this._listaPedidos.adiciona(this._criarPedido());
    this._pedidosView.update(this._listaPedidos);
    this._mensagem.mensagem = 'Pedido cadastrado com sucesso!';
    this._mensagemView.update(this._mensagem);
    setTimeout(() => {
      this._mensagem.mensagem = '';
      this._mensagemView.update(this._mensagem);
    }, 3000);
    this._limparForm();
  }

  _criarPedido() {
    return new Pedido(
      DateHelper.textForDate(this._data.value),
      this._nome.value,
      this._preco.value,
      this._quantidade.value
    );
  }

  _limparForm() {
    this._data.value = '';
    this._nome.value = '';
    this._preco.value = '';
    this._quantidade.value = '0';
  }
}
