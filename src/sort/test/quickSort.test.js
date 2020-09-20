import { quickSort } from '../quickSort.js'

test('快速排序测试', () => {
    let arr = [3, 2, 1, 4, 5]
    quickSort(arr)
    expect(arr.join('')).toBe('12345')
})
