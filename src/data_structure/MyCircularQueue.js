class MyCircularQueue {
    constructor(k) {
        this.data = new Array(k)
        this.head = 0
        this.tail = -1
    }
    enqueue(val) {
        if (this.data.length === this.size()) {
            return false
        }
        this.tail = this.tail + 1
        if (this.tail > this.data.length - 1) {
            this.tail = 0
        }
        this.data[this.tail] = val
        return true
    }
    dequeue() {
        if (this.head === this.tail) {
            return false
        }
        this.head = this.head + 1
        if (this.head > this.data.length - 1) {
            this.head = 0
        }
    }
    front() {
        if (this.size() > 0)
            return this.data[this.head]
        return -1
    }
    rear() {
        if (this.size > 0)
            return this.data[this.tail]
        return -1
    }
    size() {
        if (this.head <= this.tail) {
            return this.tail - this.head + 1
        } else {
            return this.tail + this.head
        }
    }
    isFull() {
        return this.data.length === this.size()
    }
    isEmpty() {
        return this.size() === 0
    }
}

export default MyCircularQueue