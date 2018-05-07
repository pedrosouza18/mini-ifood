class MensagemView extends View {

    constructor(ele) {
        super(ele);
    }

    template(model) {
        return model.mensagem ? `<p class="toast">${model.mensagem}</p>` : `<p></p>`;
    }
}