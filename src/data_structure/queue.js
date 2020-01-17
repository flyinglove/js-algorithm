class Queue {
    constructor() {
        this.list = []
        this.index = -1
    }
    enqueue(val) {
        this.list.push(val)
        this.index++
        return true
    }
    dequeue() {
        if (this.isEmpty()) {
            return false
        }
        this.index--
        this.list.shift()
        return true
    }
    isEmpty() {
        return this.index < 0
    }
    front() {
        return this.list[this.index]
    }
}

export default Queue