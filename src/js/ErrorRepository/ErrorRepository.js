export default class ErrorRepository {
  constructor() {
    this.errors = new Map([
      [1, 'Ошибка №1'],
      [2, 'Ошибка №2'],
      [3, 'Ошибка №3'],
    ]);
  }

  translate(code) {
    return this.errors.has(code) ? this.errors.get(code) : 'Unknown Error';
  }
}
