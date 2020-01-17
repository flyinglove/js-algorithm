class MyCircularQueue {
    constructor(k) {
        this.data = new Array(k)
        this.head = 0
        this.tail = -1
        this.size = 0
    }
    enqueue(val) {
        if (this.isFull()) {
            return false
        }
        this.tail = this.tail + 1
        if (this.tail > this.data.length - 1) {
            this.tail = 0
        }
        this.size++
        this.data[this.tail] = val
        return true
    }
    dequeue() {
        if (this.isEmpty()) {
            return false
        }
        this.size--
        this.head = this.head + 1
        if (this.head > this.data.length - 1) {
            this.head = 0
        }
        return true
    }
    front() {
        if (this.size > 0)
            return this.data[this.head]
        return -1
    }
    rear() {
        if (this.size > 0)
            return this.data[this.tail]
        return -1
    }
    isFull() {
        return this.data.length === this.size
    }
    isEmpty() {
        return this.size === 0
    }
}

export default MyCircularQueue
