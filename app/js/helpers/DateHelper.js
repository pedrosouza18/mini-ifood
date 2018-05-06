class DateHelper {

  constructor() {
    throw new Error('DateHelper não pode ser instanciada');
  }

  static dateForText(text) {
    return `${text.getDate()}/${text.getMonth() + 1}/${text.getFullYear()}`;
  }

  static textForDate(date) {
    return new Date(...date.split('-').map((d, idx) => d - idx % 2));
  }

}
