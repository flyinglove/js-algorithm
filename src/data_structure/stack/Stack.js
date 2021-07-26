class Stack {
    constructor() {
        this.data = []
    }
    push(...args) {
        this.data.push(...args)
        return this.data.length
    }
    pop() {
        return this.data.pop()
    }
    peek() {
        let len = this.data.length
        if (len > 0) {
            return this.data[len - 1]
        } else {
            return null
        }
    }
    isEmpty() {
        return !this.data.length
    }
    size() {
        return this.data.length
    }
    clear() {
        this.data = []
    }
}

export default Stack