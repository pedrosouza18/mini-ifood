class View {

  constructor(ele) {
    this._ele = ele;
  }

  template() {
    throw new Error('O método template precisa sercriado!');
  }

  //Metodo para atualizar o dom
  update(model) {
    this._ele.innerHTML = this.template(model);
  }
}
