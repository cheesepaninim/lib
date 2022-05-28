const {
    getType,
    isNull,
    isUndefined,
    isString,
    isNumber,
    isObject,
    isArray,
    isSymbol
} = require('../js/typeCheck')

// TODO: 테스트 코드 작성

test('typeCheck', () => {
    const input = ''
    const output = 'test_007_A'
    expect(input).toEqual(output)
})