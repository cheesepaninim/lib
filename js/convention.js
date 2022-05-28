// TODO: 아래 코드 전체 정리
const { isString } =  require('./typeCheck')

// TODO: 입력 값 특수 문자 체크
// undefined / '' / (숫자) 등 예외 처리 확인
const isValidate = s => (isString(s) && s.length)

// TODO: regexp 파일 분리
const upperCaseRegexp = /[A-Z]/g

/**
 * 입력 받은 문자열에 해당하는 character 혹은 word 의 index 목록 반환
 * @param s 문자열
 * @param t 타겟 글자(혹은 단어)
 */
// TODO: index 함수 공통 가능하도록 수정해서 분리
const getIndices = (s, t) => {
    let idx = s.indexOf(t, 0)
    const indices = []

    while (idx !== -1) {
        indices.push(idx)
        idx = s.indexOf(t, ++idx)
    }

    return indices
}

// TODO: 분리
const removeDuplication = arr => arr.reduce((acc, cur) => acc.includes(cur) ? [ ...acc ] : [ ...acc, cur ], [])



const isSnakeCase = s => !isValidate(s) ? false
                        : s.includes('_')
const isPascalCase = s => !isValidate(s) ? false
                        : !!(!isSnakeCase(s) && s[0].match(upperCaseRegexp))
const isCamelCase = s => !isValidate(s) ? false
                        : !!(!isSnakeCase(s) && !isPascalCase(s) && s.match(upperCaseRegexp))
const getCase = s => isSnakeCase(s) ? 'snake'
                    : isPascalCase(s) ? 'pascal'
                    : isCamelCase(s) ? 'camel'
                    : 'none'

const toGeneralCase = s => {
    const parsed = getCase(s) === 'snake'
        ? s.replace(/_/g, '')
        : s.toLowerCase()

    const indices = getCase(s) === 'snake'
        ? getIndices(s, '_').map((v, i) => v - i)
        : removeDuplication(s.match(upperCaseRegexp)).reduce((acc, cur) => [ ...acc, ...getIndices(s, cur) ], [])
            .sort((a, b) => a > b ? 1 : a < b ? -1 : 0)

    return { str: parsed, idx: indices }
}

/**
 *
 * @param s
 * @returns {[ string parsedString, boolean isParsed ]}
 */
exports.toSnake = s => {
    if(!isValidate(s) || getCase(s) === 'snake') return [ s, false ]

    const { str, idx } = toGeneralCase(s)
    if (!idx.length || (idx.length === 1 && idx[0] === 0)) return [ s, false ]

    let parsed = str
    idx.reverse().forEach(v => {
        if (v !== 0) parsed = parsed.slice(0, v) + '_' + parsed.slice(v)
    })

    return [ parsed, true ]
}
exports.toPascal = s => {
    if(!isValidate(s) || getCase(s) === 'pascal') return [ s, false ]

    const { str, idx } = toGeneralCase(s)
    if (!idx.length) return [ s, false ]

    let parsed = str
    idx.forEach(v => parsed = parsed.slice(0, v) + parsed[v].toUpperCase() + parsed.slice(v + 1))
    parsed = parsed[0].toUpperCase() + parsed.slice(1)

    return [ parsed, true ]
}
exports.toCamel = s => {
    if(!isValidate(s) || getCase(s) === 'camel') return [ s, false ]

    const { str, idx } = toGeneralCase(s)
    if (!idx.length || (idx.length === 1 && idx[0] === 0)) return [ s, false ]

    let parsed = str
    idx.forEach(v => {
        if (v !== 0) parsed = parsed.slice(0, v) + parsed[v].toUpperCase() + parsed.slice(v + 1)
    })

    return [ parsed, true ]
}