exports.Library = t => new (class MyLibrary {

    constructor(target) {
        // TODO: target 값을 외부에서 임의 수정 불가능하게?
        // TODO 위 내용대로 할 필요가 있는지 부터..?
        this.target = target
        return this
    }

    get() {
        return this.target
    }

    getType() {
        return typeof this.target
    }

    addText(s) {
        if(this.getType() === 'string') {
            this.target += s
            return this
        } else {
            throw new Error('Type Error')
        }
    }

})(t)