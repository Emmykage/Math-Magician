import operate from './operate';

describe('checks arithmethic operation', () => {
  test('check for sum of numbers', () => {
    expect(operate(1, 2, '+')).toBe('3');
  });

  test('Check for substitution', () => {
    expect(operate(5, 2, '-')).toBe('3');
  });

  test('check for multiplication', () => {
    expect(operate(2, 2, 'x')).toBe('4');
  });

  test('check fotr division', () => {
    expect(operate(10, 2, '÷')).toBe('5');
  });

  test('modulus checks', () => {
    expect(operate(10, 2, '%')).toBe('0');
  });

  test('Checks the module of two numbers', () => {
    expect(operate(10, 0, '%')).toBe("Can't find modulo as can't divide by 0.");
  });
});
