
const { getResult } = require('./calculate');

test('adds 1 + 2 to equal 3', () => {
    expect(getResult(1.0, 2.0, '+')).toBe(3);
});
test('minus 1 + 2 to equal -1', () => {
    expect(getResult(1, 2, '-')).toBe(-1);
});
test('multiple 4 + 2 to equal 8', () => {
    expect(getResult(4, 2, '*')).toBe(8);
});
test('divide 4 / 2 to equal 2', () => {
    expect(getResult(4, 2, '/')).toBe(2);
});
test('adds 0.1 + 0.2 to equal 0.3', () => {
    expect(getResult(0.1, 0.2, '+')).toBe(0.3);
});
test('adds NaN + 2 to match = error', () => {
    expect(getResult(NaN, 2, '+')).toMatch(/Error! input not a number/);
});
test('divide by 0 :  4 / 0 to match = error', () => {
    expect(getResult(4, 0, '/')).toMatch(/Error! Divide by 0/);
});
