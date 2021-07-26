import Stack from '../Stack'

test('栈功能测试', () => {
    const stack = new Stack()
    stack.push(1)
    expect(stack.peek()).toBe(1)
    expect(stack.push(1, 2)).toBe(stack.size())
    expect(stack.pop()).toBe(2)
    expect(stack.size()).toBe(2)
})