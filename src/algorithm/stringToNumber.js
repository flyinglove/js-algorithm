// 非正式内容， 业余练习， 后面迁移出去

function convertStringToNumber(string, radix) {
    // 十进制浮点数
    let strArr = string.split('')
    let number = 0
    let fractionNumber = 0
    let i = 0
    while( i < strArr.length && strArr[i] !== '.') {
        number = number * radix
        number += (strArr[i].charCodeAt(0) - '0'.charCodeAt(0)) / radix
        i++
    }
    if (strArr[i] === '.') {
        i++
    }
    let fraction = 1
    while (i < strArr.length) {
        fraction = fraction / radix
        fractionNumber += (strArr[i].charCodeAt(0) - '0'.charCodeAt(0)) * fraction
        i++
    }
    return number + fractionNumber
}

convertStringToNumber('100.01', 10)
