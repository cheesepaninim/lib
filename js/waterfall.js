// TODO: argsType 이용해서 Error get 하기 → args[1] 로 체크 X
// TODO: cb 함수에선 error 어떻게 받을지 고민
const interceptor = (task, callback) => (...args) => !(args[1] instanceof Error) ? task.apply(null, args) : callback.apply(null, args.slice(1))

const wf = (tasks, callback) => {
    const interceptedTasks = tasks.map(task => interceptor(task, callback))
    const iterator = [ ...interceptedTasks ].reverse().entries()

    let next = iterator.next()
    let callbackHell

    while(!next.done) {
        callbackHell = next.value[0] === 0 ? next.value[1].bind(null, cb) : next.value[1].bind(null, callbackHell)
        next = iterator.next()
    }

    callbackHell()
}

// TODO: sample → spec.js 로 옮기기
/* sample */
const f1 = (callback, ...args) => {
    console.log('1st')
    console.log(args)
    callback('a')
}
const f2_1 = (callback, ...args) => {
    console.log('2nd-1-1')
    console.log(args)
    setTimeout(function () {
        console.log('2nd-1-2')
        callback('b-1', [1, 3, 5], 100)
    }, 3000)
}
const f2_2 = (callback, ...args) => {
    console.log('2nd-2-1')
    console.log(args)
    setTimeout(function () {
        console.log('2nd-2-2')
        callback('b-2')
    }, 5000)
}
const f2_3 = (callback, ...args) => {
    console.log('2nd-3-1')
    console.log(args)
    setTimeout(function () {
        console.log('2nd-3-2')
        callback('b-3', 9999)
    }, 10)
}
const f2_e = (callback, ...args) => {
    console.log('2nd-e-1')
    console.log(args)
    callback((new Error()), 'b-e')
}
const f3 = (callback, ...args) => {
    console.log('3rd')
    console.log(args)

    callback('c')
}

const tasks1 = [ f1, f2_1, f3 ]
const tasks2 = [ f2_1, f2_2, f2_3 ]
const tasks3 = [ f1, f2_e, f3 ]
const cb = (...args) => console.log(args)

wf(tasks1, cb)
wf(tasks2, cb)
wf(tasks3, cb)
/* // sample */
