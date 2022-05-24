// const { isNull } = require('../js/typeCheck')
// test('성공 케이스', () => {
//     expect(isNull(null)).toEqual(true)
// })
// test('실패 케이스', () => {
//     expect(isNull('null')).toEqual(true)
//     // expect(isNull('null')).toEqual(false)
// })



// convention.js
const { toSnake, toPascal, toCamel } = require('../js/convention')
const str1 = 'abAbcdDefAgh'     // camelCase
const str2 = 'AbAbbdCx'         // PascalCase
const str3 = 'ab_ab_cdefg_gha'  // snake_case
test('toSnake', () => {
    expect(toSnake(str1)).toEqual([ 'ab_abcd_def_agh', true ])
    expect(toSnake(str2)).toEqual([ 'ab_abbd_cx', true ])
    expect(toSnake(str3)).toEqual([ 'ab_ab_cdefg_gha', false ])
})
test('toPascal', () => {
    expect(toPascal(str1)).toEqual([ 'AbAbcdDefAgh', true ])
    expect(toPascal(str2)).toEqual([ 'AbAbbdCx', false ])
    expect(toPascal(str3)).toEqual([ 'AbAbCdefgGha', true ])
})
test('toCamel', () => {
    expect(toCamel(str1)).toEqual([ 'abAbcdDefAgh', false ])
    expect(toCamel(str2)).toEqual([ 'abAbbdCx', true ])
    expect(toCamel(str3)).toEqual([ 'abAbCdefgGha', true ])
})

// classSample.js
const { Library } = require('../js/classSample')
test('classSample', () => {
    const input = Library('test').addText('_007').addText('_A').get()
    const output = 'test_007_A'
    expect(input).toEqual(output)
})