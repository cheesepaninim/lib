// TODO: 예외처리 및 타입체크 등..

const { isObject } = require("./typeCheck");
const SPLITTER = '/'

const hasSub = keyStrings => !!keyStrings.filter(v => !v.endsWith(SPLITTER)).length
const getSub = (obj, keyStrings) => keyStrings.reduce((acc, keyStr) => {
    let target = obj
    if(keyStr.slice(-1) !== SPLITTER) {
        const keys = keyStr.split(SPLITTER).map(v => [v])
        keys.forEach(v => target = target[v])
    }
    return keyStr.endsWith(SPLITTER) ? [ ...acc, keyStr ] // keyStr which has no sub
        : (Object.keys(target).length && isObject(target))
            ? [ ...acc, ...Object.keys(target).map(subKey => keyStr + SPLITTER + subKey) ]
            : [ ...acc, SPLITTER + keyStr + SPLITTER]
}, [])

/**
 *
 * @param target (Object)
 * @returns ex) [ '/a1/', '/a2/a2_1/a2_1_1', '/a2/a2_1/a2_1_2', '/a2/a2_2/' ]
 */
const getKeyStr = (obj, keyStrings) => hasSub(keyStrings) ? getKeyStr(obj, getSub(obj, keyStrings)) : keyStrings

/**
 *
 * @param obj
 * @param key
 * @returns [ { path : value } (, { path : value } (, { path : value } ... ) )  ]
 */
const getKeyPathAndValue = (obj, key) => {
    const pathList = getKeyStr(obj, Object.keys(obj)).reduce((acc, cur) => {
        const target = SPLITTER + key + SPLITTER // => /key/
        const path = cur.slice(0, cur.indexOf(target) + target.length)
        return cur.includes(target) && !acc.includes(path)
            ? [ ...acc, path ] : [ ...acc ]
    }, [])

    return pathList.map(path => {
        const keys = path.split(SPLITTER).filter(v => v)

        let value = obj
        keys.forEach(v => value = value[v])

        const keyVal = {}
        keyVal[path] = value

        return keyVal
    })
}





// TODO: spec.js 분리
const obj = {
    a1: {
        a1_1: {},
        a1_2: {
            a1_2_1: 'a121',
            a1_2_2: 'a122',
        },
        a1_3: {
            a1_3_1: 'a131',
            a1_3_2: 'a132',
            a1_3_3: 'a133',
            a2_2: '???'
        },
    },
    a2: {
        a2_1: {},
        a2_2: {
            a2_2_1: {
                a2_2_1_1: 'a2211'
            },
            a2_2_2: {
                a2_2_2_1: {
                    a2_2_2_1_1: 'a22211'
                },
                a2_2_2_2: {
                    a2_2_2_2_1: 'a22221',
                    a2_2_2_2_2: 'a22222'
                }
            },
            a2_2_3: ''
        },
        a2_3: {
            a2_3_1: '',
            a2_3_2: 'a232'
        },
        a2_4: {
            a2_4_1: ''
        },
    },
    a3: {

    }
}

const keyStr = getKeyStr(obj, Object.keys(obj))
const keyPathAndValue = getKeyPathAndValue(obj, 'a2_2')

console.log(keyStr)
console.log(keyPathAndValue)