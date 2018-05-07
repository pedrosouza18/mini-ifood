class PedidosView extends View {

  constructor(ele) {
    super(ele);
  }

  template(model) {
    return `<table class="section-form__table">
              <thead>
                <tr>
                  <th>Data</th>
                  <th>Nome do produto</th>
                  <th>Preço</th>
                  <th>Quantidade</th>
                </tr>
              </thead>
              <tbody>
                ${
                  model.pedidos.map(item => {
                    return `<tr>
                              <td>${DateHelper.dateForText(item.data)}</td>
                              <td>${item.nome}</td>
                              <td>${item.preco}</td>
                              <td>${item.quantidade}</td>
                            </tr>`;
                  })
                }
              </tbody>
              <tfoot>
                <td colspan="3">Total:</td>
                <td>
                  ${
                    model.pedidos.reduce((prev, item) => {
                      return prev + parseInt(item.preco);
                    }, 0)
                  }
                </td>
              </tfoot>
            </table>`;
  }
}
