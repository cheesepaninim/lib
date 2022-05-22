// module.exports = v => typeof v !== 'object' ? typeof v
//                 : v === null ? 'null'
//                 : v === undefined ? 'null'
//                 : isNaN(Number(v.length)) ? 'object'
//                 : 'array'

exports.getType = v => typeof v !== 'object' ? typeof v
                    : v === null ? 'null'
                    : v === undefined ? 'null'
                    : isNaN(Number(v.length)) ? 'object'
                    : 'array'

exports.isNull = v => v === null
exports.isUndefined = v => v === undefined
exports.isString = v => typeof v === 'string'
exports.isNumber = v => typeof v === 'number'
exports.isObject = v => typeof v === 'object' && isNaN(Number(v.length))
exports.isArray = v => typeof v === 'object' && !isNaN(Number(v.length))
exports.isSymbol = v => typeof v === 'symbol'