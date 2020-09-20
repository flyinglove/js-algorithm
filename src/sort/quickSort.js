import { less, exchange } from "./utils";

export function quickSort(arr) {
    let lo = 0, hi = arr.length - 1
    sort(arr, lo, hi)
}

function partition(arr, lo, hi) {
    let v = arr[lo]
    let i = lo, j = hi + 1
    while(true) {
        while(less(arr[++i], v)) if (i === hi) break
        while(less(v, arr[--j])) if (j === lo) break
        if (i >= j) {
            break
        }
        exchange(arr, i, j)
    }
    exchange(arr, lo, j)
    return j
}

function sort(arr, lo, hi) {
    if (lo > hi) {
        return
    }
    let j = partition(arr, lo, hi)
    sort(arr, lo, j - 1)
    sort(arr, j + 1, hi)
}

// let arr = [3, 1, 2, 5, 4]
