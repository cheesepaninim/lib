// exports.getType = v => typeof v !== 'object' ? typeof v
//                     : v === null ? 'null'
//                     : v === undefined ? 'null'
//                     : isNaN(Number(v.length)) ? 'object'
//                     : 'array'

module.exports = v => typeof v !== 'object' ? typeof v
                    : v === null ? 'null'
                    : v === undefined ? 'null'
                    : isNaN(Number(v.length)) ? 'object'
                    : 'array'