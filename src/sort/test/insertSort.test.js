import { insertSort } from '../insertSort.js'

test('插入排序测试', () => {
    const arr = [3, 1, 2, 5, 4]
    let sortArr = insertSort(arr)
    expect(sortArr.join('')).toBe('12345')
})
