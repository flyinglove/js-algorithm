/*
你有一个带有四个圆形拨轮的转盘锁。每个拨轮都有10个数字： '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' 。每个拨轮可以自由旋转：例如把 '9' 变为  '0'，'0' 变为 '9' 。每次旋转都只能旋转一个拨轮的一位数字。

锁的初始数字为 '0000' ，一个代表四个拨轮的数字的字符串。

列表 deadends 包含了一组死亡数字，一旦拨轮的数字和列表里的任何一个元素相同，这个锁将会被永久锁定，无法再被旋转。

字符串 target 代表可以解锁的数字，你需要给出最小的旋转次数，如果无论如何不能解锁，返回 -1。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/open-the-lock
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

 */
function openLock(deadends, target) {
    let curPoint = '0000'
    if (deadends.includes(curPoint)) {
        return -1
    }
    let queue = [[curPoint, 0]]
    let seen = new Set()
    seen.add(curPoint)
    while(queue.length) {
        let [point, depth] = queue.shift()
        let neighBors = getNeighBors(point)
        neighBors = neighBors.filter(item => !deadends.includes(item))
        for (let neighBor of neighBors) {
            if (seen.has(neighBor)) {
                continue
            }
            if (neighBor === target) {
                return depth + 1
            }
            seen.add(neighBor)
            queue.push([neighBor, depth + 1])
        }
    }
    return -1
}

function getNeighBors(point) {
    let arr = point.split('')
    let res = []
    for (let i = 0; i < arr.length; i++) {
        let item = +arr[i]
        for (let delta of [-1, 1]) {
            let curItem = (item + delta) % 10
            if (curItem < 0) curItem = 9
            let nextItem = arr.slice(0, i).concat([curItem]).concat(arr.slice(i + 1)).join('')
            res.push(nextItem)
        }
    }
    return res
}
