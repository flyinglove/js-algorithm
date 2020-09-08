import { less, exchange } from './utils.js'

export function insertSort(arr) {
    let len = arr.length;
    for (let i = 1; i < len; i++) {
        for (let j = i; j >= 0 && less(arr[j], arr[j-1]); j--) {
            exchange(arr, j, j - 1)
        }
    }
    return arr
}
