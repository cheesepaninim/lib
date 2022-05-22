const argsType = (...args) => {
    const it = args.values()
    let iter = it.next()

    const types = new Map()

    while (!iter.done) {
        const val = iter.value
        const type = require('./typeCheck')(val)

        const typeMap = types.get(type) || new Map()
        const valCount = typeMap.get(val) ? typeMap.get(val)+1 : 1
        const typeMapVal = typeMap.set(val, valCount)
        types.set(type, typeMapVal)

        iter = it.next()
    }

    return types
}

// test
const args = argsType('a', 'b', null, 'undefined', [], { name: 'Dr.Jones', age : 81 }, 'a', 100, [ 2, 3, 5, 8, 13 ], 'abc', undefined)
console.log(`argsType('a', 'b', null, 'undefined', [], { name: 'Dr.Jones', age : 81 }, 'a', 100, [ 2, 3, 5, 8, 13 ], 'abc', undefined)`)
console.log(args)