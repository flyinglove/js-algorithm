/*
给定正整数 n，找到若干个完全平方数（比如 1, 4, 9, 16, ...）使得它们的和等于 n。
你需要让组成和的完全平方数的个数最少。
12 = 4 + 4 + 4
13 = 9 + 4
14 = 9 + 4 + 1
15 = 9 + 4 + 1 + 1
16 = 4 ** 4
 */
// num = 1 1 4 6 9
// num = 2 13 = 4 + 9
// num = 3 14 = 1 + 4 + 9
// num = 4 15 = 1 + 1 + 4 + 9

var numSquares = function(n) {
    let count = 0
    let start = Number.parseInt(n ** (1/2))
    if (start ** 2 === n) {
        return 1
    }
    start = n - start ** 2
    count += numSquares(start)
    return count
};


console.log(numSquares(12))
