import { less, exchange } from './utils.js'

export function selectionSort(arr) {
    let len = arr.length
    for (let i = 0; i < len; i++) {
        let min = arr[i]
        for (let j = i; j < len; j++) {
            if (less(arr[j], min)) {
                min = j
                exchange(arr, i, j)
            }
        }
    }
    return arr
}
