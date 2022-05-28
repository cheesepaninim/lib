const argsType = require('../js/argsType')

// TODO: 테스트 코드 작성

// test
const args = argsType('a', 'b', null, 'undefined', [], { name: 'Dr.Jones', age : 81 }, 'a', 100, [ 2, 3, 5, 8, 13 ], 'abc', undefined)
console.log(`argsType('a', 'b', null, 'undefined', [], { name: 'Dr.Jones', age : 81 }, 'a', 100, [ 2, 3, 5, 8, 13 ], 'abc', undefined)`)
console.log(args)


test('argsType', () => {
    const input = ''
    const output = 'test_007_A'
    expect(input).toEqual(output)
})