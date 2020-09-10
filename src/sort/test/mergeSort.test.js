import { mergeSort, mergeSortFromBottom } from '../mergeSort.js'

// test('自顶向下插入排序测试', () => {
//     let arr = [3, 1, 5, 2, 4, 6]
//     mergeSort(arr, 0, arr.length - 1)
//     expect(arr.join('')).toBe('123456')
// })

test('自底向上插入排序测试', () => {
    // let arr = [6, 5, 4, 3, 2, 1]
    let arr = [6, 5, 4, 3, 2, 1]
    mergeSortFromBottom(arr)
    expect(arr.join('')).toBe('123456')
    arr = [3, 4, 2, 1, 5, 3, 2]
    mergeSortFromBottom(arr)
    expect(arr.join('')).toBe('1223345')
})
