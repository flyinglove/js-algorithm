import MyCircularQueue from './data_structure/MyCircularQueue'

test('测试循环队列', () => {
    let circularQueue = new MyCircularQueue(3)
    expect(circularQueue.enqueue(1)).toBe(true)
    expect(circularQueue.enqueue(2)).toBe(true)
    expect(circularQueue.enqueue(3)).toBe(true)
    expect(circularQueue.enqueue(4)).toBe(false)
    expect(circularQueue.rear()).toBe(3)
    // expect(circularQueue.isFull()).toBe(true)
    // expect(circularQueue.dequeue()).toBe(true)
    // expect(circularQueue.enqueue(4)).toBe(true)
    // expect(circularQueue.rear()).toBe(4)
})