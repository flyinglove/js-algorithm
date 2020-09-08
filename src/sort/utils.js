export function exchange(a, i, j) {
	[a[i], a[j]] = [a[j], a[i]]
}

export function less(a, b) {
	return a < b
}