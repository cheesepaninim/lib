const { isNull } = require('../js/typeCheck');

test('성공 케이스', () => {
    expect(isNull(null)).toEqual(true);
});

test('실패 케이스', () => {
    expect(isNull('null')).toEqual(true);
    // expect(isNull('null')).toEqual(false);
});