// function generateShape(integer){
//     const arr = [];
//
//     for (let i = 0; i < integer; i++) {
//         const out = [];
//         for (let i = 0; i < integer; i++) {
//             out.push('+')
//         }
//             arr.push(out.join(''))
//     }
//
//     return arr.join('\n');
// }
// console.log(generateShape(5))

// function sumOrProduct(array, n) {
//     let max = 0, min = 1;
//
//     array = array
//         .sort((a, b) => b - a)
//         .forEach((item, index) => {
//             if (index < n) max += item;
//             if (index > array.length - n - 1) min *= item;
//         });
//
//     return max > min ? 'sum' : min > max ? 'product' : 'same';
// }
// console.log(sumOrProduct([10, 41, 8, 16, 20, 36, 9, 13, 20], 3))

// function maxMultiple(divisor, bound){
//     for (let i = 0; i < divisor; i++) {
//         if (bound % divisor === 0) return bound
//         bound -= 1
//     }
// }
// console.log(maxMultiple(37, 200))

// const isPowerOfTwo = n => Number.isInteger(Math.log2(n))
// console.log(isPowerOfTwo(1))

// const bump = x => x.match(/n/g) === null || x.match(/n/g).length < 16 ? 'Woohoo!' : 'Car Dead'
// console.log(bump('_'))

// function reverseNumber(n) {
//     n = String(n)
//     if (n[0] === '-') {
//         n = n.slice(1)
//         return Number(n.split('').reverse().join('')) * -1
//     }
//
//     return Number(n.split('').reverse().join(''))
// }
// console.log(reverseNumber(-1000))

// function getNames(data){
//     return data.map(function(item){return item.name});
// }
// console.log(getNames([
//     {name: 'Joe', age: 20},
//     {name: 'Bill', age: 30},
//     {name: 'Kate', age: 23}
// ]))

// function isCoprime(x, y) {
//     for (let i = 2; i <= Math.min(x, y); i++) if (x % i === 0 && y % i === 0) return false
//     return true
// }
// function isCoprime(x, y) {
//     let a = [], b = []
//
//     for (let i = 2; i <= Math.min(x, y); i++) {
//         if (!x % i) a.push(i)
//         if (!y % i) b.push(i)
//     }
//
//     for (let i of a) if (b.includes(i)) return false
//
//     return true
// }
// console.log(isCoprime(20, 27))

// function cost (mins) {
//     if (mins + 5 < 60) {
//         return 30
//     } else {
//         if (mins % 60 >= 0 && mins % 60 <= 5) {
//             return  Math.floor((mins / 60 - 1)) * 20 + 30
//         } else if ((mins % 60 >= 30 && mins % 60 <= 35)) {
//             return  Math.floor((mins / 60 - 1)) * 20 + 30 + 10
//         } else if (mins % 60 > 35) {
//             return  Math.floor((mins / 60 - 1)) * 20 + 30 + 20
//         } else {
//             return  Math.floor((mins / 60 - 1)) * 20 + 30 + 10
//         }
//     }
// }
// console.log(cost(156))

// function adjacentElementsProduct(array) {
//     const out = []
//     for (let i = 0; i < array.length -1; i++) out.push(array[i] * array[i+1])
//     return Math.max(...out)
// }
// console.log(adjacentElementsProduct([1, 2, 3]))

// const flyBy = (lamps, drone) => lamps.split('').map((i, x) => x < drone.length ? 'o' : i).join('')
// console.log(flyBy('xxxxxx', '====T'))

// const addExtra = listOfNumbers => [...listOfNumbers, []]
// console.log(addExtra('n'))

function toTime(seconds) {
    const h = Math.trunc(seconds / 60 / 60)
    const m = Math.trunc((seconds / 60) - (h * 60))

    return `${h} hour(s) and ${m} minute(s)`
}

console.log(toTime(3500))