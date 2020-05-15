/**
 * leetcode: 130
 * 给定一个由 '1'（陆地）和 '0'（水）组成的的二维网格，
 * 计算岛屿的数量。一个岛被水包围，并且它是通过水平方向或垂直方向上相邻的陆地连接而成的。
 * 你可以假设网格的四个边均被水包围。
 *
 * 输入:
 11110
 11010
 11000
 00000

 输出: 1


 输入:
 11000
 11000
 00100
 00011

 输出: 3
 */
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let m = grid.length;
    let n = grid[0] ? grid[0].length : 0
    let count = 0
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '1') {
                count++
                dfs(grid, i, j)
            }
        }
    }
};

function dfs(grid, row, col) {
    let m = grid.length
    let n = grid[0] ? grid[0].length : 0
    grid[row][col] = '0'
    let directionArr = [[-1, 0], [1, 0], [0, 1], [0, -1]]
    for (let direction of directionArr) {
        let [nextX, nextY] = direction
        let directionX = row + nextX
        let directionY = col + nextY
        if (directionX < m && directionX >= 0 && directionY < n && directionY >= 0 && grid[directionX][directionY] === '1') {
            bfs(grid, directionX, directionY)
        }
    }
}
function bfs(grid, row, col) {
    let m = grid.length
    let n = grid[0] ? grid[0].length : 0
    let queue = [[row, col]]
    let directionArr = [[-1, 0], [1, 0], [0, 1], [0, -1]]
    while(queue.length) {
        let [stepX, stepY] = queue.shift()
        for (let direction of directionArr) {
            let nextStepX = stepX + direction[0]
            let nextStepY = stepY + direction[1]
            if (nextStepX < m && nextStepX >= 0 && nextStepY < n && nextStepY >= 0 && grid[nextStepX][nextStepY] === '1') {
                grid[nextStepX][nextStepY] = '0'
                queue.push([nextStepX, nextStepY]);
            }
        }
    }
}
