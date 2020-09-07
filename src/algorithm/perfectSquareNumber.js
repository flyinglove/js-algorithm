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
// 暴力法
// var numSquares = function(n) {
//     let num = Number.parseInt(n ** (1/2))
//     let squareNums = []
//     for (let i = 1;i <= num; i++) {
//         squareNums.push(i ** 2)
//     }
//     function getMinSquare(k) {
//         if (squareNums.includes(k)) {
//             return 1
//         }
//         let minNum = Infinity
//         for (let square in squareNums) {
//             if (k < square) {
//                 break
//             }
//             let newNum = getMinSquare(k - square) + 1
//             minNum = Math.min(minNum, newNum)
//         }
//         return minNum
//     }
//     return getMinSquare(n)
// };

// dp

var numSquares = function (n) {
    let num = Number.parseInt(n)
    let squareNums = []
    for (let i = 0; i < num; i++) {
        squareNums.push(i ** 2)
    }
    let dp = []
    for (let i = 0;i < n + 1; i++) {
        dp.push(Infinity)
    }
    for (let i = 1; i < n + 1; i ++) {
        for (let square of squareNums) {
            if (i < square) {
                break
            }
            dp[i] = Math.min(dp[i], dp[i - square] + 1)
        }
    }
    return dp[n]
}
