import Queue from './data_structure/queue.js'

test('队列测试', () => {
    const queue = new Queue()
    queue.enqueue(1)
    queue.enqueue(2)
    expect(queue.front()).toBe(2)
    queue.dequeue()
    queue.dequeue()
    expect(queue.isEmpty()).toBe(true)
})