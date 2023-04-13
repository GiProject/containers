export default class ErrorRepository {
  constructor() {
    this.errors = new Map([
      [0, 'Не достатосно HP'],
      [1, 'Недостаточно MP'],
      [2, 'Персонаж уже мертв'],
    ]);
  }

  translate(code) {
    return this.errors.has(code) ? this.errors.get(code) : 'Unknown error';
  }
}
