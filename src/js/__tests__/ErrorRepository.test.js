import ErrorRepository from '../ErrorRepository';

test('error repository', () => {
  const errorRepository = new ErrorRepository();

  expect(errorRepository.translate(0)).toBe('Не достатосно HP');
  expect(errorRepository.translate(2)).toBe('Персонаж уже мертв');
  expect(errorRepository.translate(5)).toBe('Unknown error');
});
