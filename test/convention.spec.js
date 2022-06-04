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

// TODO: keyTo(convention, o)
