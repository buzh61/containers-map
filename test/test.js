import ErrorRepository from '../src/js/ErrorRepository/ErrorRepository';

const error = new ErrorRepository();

const errors = [
  [1, 'Ошибка №1'],
  [2, 'Ошибка №2'],
  [3, 'Ошибка №3'],
  [4, 'Unknown Error'],
];

test.each(errors)('Тестирование возвращаемых ошибок', (code, text) => {
  expect(error.translate(code)).toEqual(text);
});
