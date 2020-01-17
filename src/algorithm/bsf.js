// import Queue from './data_structure/queue'

function NodeItem(val) {
    this.val = val
    this.next = null
}
// function BFS(root, target) {
//     let queue = new Queue()
//     let used = new Set()
//     queue.enqueue(root)
//     used.add(root)
//     let step = 0
//     while(!queue.isEmpty()) {
//         step++
//         let size = queue.size()
//         for (let i = 0; i < size; i++) {
//             if (queue.indexItem(i) === target.val) {
//                 return step
//             }
//             const nextItem = root.next
//             nextItem.forEach((item) => {
//                 for (!used.has(item)) {
//                     queue.enqueue(item)
//                     used.add(item)
//                 }
//             })
//             queue.dequeue()
//         }
//     }
//     return -1
// }

/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
const EMPTY = 2147483647
const WALL = -1
const GATE = 0
const DIRECTIONS = [[0, 1], [0, -1], [-1, 0], [1, 0]]
var wallsAndGates = function(rooms) {
    for (let row = 0; row < rooms.length; row++) {
        for (let col = 0; col < rooms[0].length; col++) {
            if (rooms[row][col] === EMPTY) {
                rooms[row][col] = distanceToNearest(rooms, row, col)
            }
        }
    }
    console.log(JSON.parse(JSON.stringify(rooms)))
};
function distanceToNearest(rooms, startRow, startCol) {
    let m = rooms.length
    let n = rooms[0].length
    let distance = [], q = []
    for (let i = 0; i < m; i++) {
        distance[i] = new Array(n).fill(0)
    }
    q.push([startRow, startCol])
    while(q.length > 0) {
        let temp = q.shift()
        let row = temp[0]
        let col = temp[1]
        for (let direction of DIRECTIONS) {
            let r = row + direction[0]
            let c = col + direction[1]
            if (r < 0 || c < 0 || r >= m || c >= n || rooms[r][c] === WALL || rooms[r][c] !== 0) {
                continue;
            }
            distance[r][c] = distance[row][col] + 1
            if (rooms[r][c] === GATE) {
                return distance[r][c]
            }
            q.push([r, c])
        }
    }
    return EMPTY
}
const data = [[2147483647,-1,0,2147483647],[2147483647,2147483647,2147483647,-1],[2147483647,-1,2147483647,-1],[0,-1,2147483647,2147483647]]
wallsAndGates(data)
