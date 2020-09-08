import { selectionSort } from '../selectionSort.js'

test('选择排序测试', () => {
    const arr = [3, 1, 2, 5, 4]
    let sortArr = selectionSort(arr)
    expect(sortArr.join('')).toBe('12345')
})
