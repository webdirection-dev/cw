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