import { less } from './utils.js'

export function mergeSort(arr, lo, hi) {
    if (hi <= lo) return
    let mid = lo + Math.floor((hi - lo) / 2)
    mergeSort(arr, lo, mid)
    mergeSort(arr, mid + 1, hi)
    merge(arr, lo, mid, hi)
}

export function mergeSortFromBottom(arr) {
    let N = arr.length
    for (let sz = 1; sz < N; sz += sz) {
       for (let lo = 0; lo < N - sz; lo += 2 * sz) {
           merge(arr, lo, lo + sz - 1, Math.min(lo + 2 * sz - 1, N - 1))
       }
    }
}


function merge(arr, lo, mid, hi) {
    const aux = arr.slice()
    let i = lo, j = mid + 1
    for (let k = lo; k <= hi; k++) {
        if (i > mid) arr[k] = aux[j++]
        else if (j > hi) arr[k] = aux[i++]
        else if (less(aux[j], aux[i])) arr[k] = aux[j++]
        else arr[k] = aux[i++]
    }
    console.log(arr)
}
