// function odds(values){
//     // arrow it
//      return values.filter((el) => el % 2 !== 0);
// }
//
// const print = odds([1,2,3,4,5]); //=> [1,3,5]
//
// console.log(print);

// function descendingOrder(n){
//      let numToString = n.toString();
//      let arrMaxNumber = [];
//
//      function compareNumeric(a, b) {
//           if (a > b) return -1;
//           if (a == b) return 0;
//           if (a < b) return 1;
//      }
//
//      numToString.split('').map(item => {
//           arrMaxNumber.push(item);
//      });
//
//      result = arrMaxNumber.sort(compareNumeric).join('');
//
//      return +result;
// }
// console.log(descendingOrder(145263));

// const solve = (x, y) => x / y;
// console.log(solve(2, 1));

// function duplicateEncode(word){
//     let arr1 = [];
//     word.split('').map(item => {
//         arr1.push(item);
//     })
//
//     const arr2 = arr1;
//     count = 0;
//     arr3 = arr2.map(function(x) {
//         return x.toUpperCase();
//     })
//
//     console.log(arr2.join());
//
//     let test = [];
//     arr1.forEach(item => {
//         test.push(0);
//         for (let i of arr2) {
//             if (item == i) {
//                 test[count] += 1;
//             }
//         }
//
//         for (let i of arr3) {
//             if (item == i) {
//                 test[count] += 1;
//             }
//             if (item == ' ' || item == '@') {
//                 test[count] -= 1;
//             }
//         }
//         count += 1;
//     })
//
//     let output = test.map(function(item) {
//         if (item > 1) {
//             return ')';
//         } else {
//             return '(';
//         }
//     });
//     console.log(test);
//
//     console.log(output);
//
//
//     return output.join('');
// }
//
// console.log(duplicateEncode('CodeWarrior'));

// function findDifference(a, b) {
//     let cubeOne = a.reduce((sum, current) => {
//         return sum * current;
//     })
//
//     let cubeTwo = b.reduce((sum, current) => {
//         return sum * current;
//     })
//
//     if (cubeOne >= cubeTwo) {
//         return cubeOne - cubeTwo;
//     } else {
//         return cubeTwo - cubeOne;
//     }
// }
// console.log(findDifference([2, 2, 3], [5, 4, 1]));

// function firstNonConsecutive (arr) {
//     let template = arr[0];
//     let current;
//
//     for (let i = 0; i < arr.length; i++) {
//         if (template !== arr[i]) {
//             current = arr[i];
//             break;
//         }
//         template ++;
//     }
//     return current !== undefined ? current : null;
// }
// console.log(firstNonConsecutive([1,2,3]));

// const quarterOf = (month) => {
//     if (month >= 1 && month <= 3) {
//         return 1;
//     } else if (month >= 4 && month <= 6) {
//         return 2;
//     } else if (month >= 7 && month <= 9) {
//         return 3;
//     } else if (month >= 10 && month <= 12) {
//         return 4;
//     } else {
//         return false;
//     }
// }
// console.log(quarterOf(12));

// function getAverage(marks){
//     const result = marks.reduce((sum, current) => sum + current, 0);
//     return Math.floor(result / marks.length);
// }
// console.log(getAverage([2,2,2,2]));

// const sumOfDigits = num => num / 10 < 1 ? 1 : 1 + sumOfDigits(num / 10);
// console.log(sumOfDigits(1009));

// const hero = (bullets, dragons) => dragons * 2 <= bullets;
// console.log(hero(100, 40));

// function warnTheSheep(queue) {
//     if (queue[queue.length - 1] === "wolf") {
//         return "Pls go away and stop eating my sheep";
//     } else {
//         let output;
//         queue.forEach((item, index) => {
//             if (item === "wolf") {
//                 return output = `Oi! Sheep number ${queue.length - index - 1}! You are about to be eaten by a wolf!`
//             }
//         });
//         return output;
//     }
// }
// console.log(warnTheSheep(["sheep", "sheep", "sheep", "wolf", "sheep"]));

// const bonusTime = (salary, bonus) => '\u00A3' + (bonus ? salary * 10 : salary);
// console.log(bonusTime(10, true));

// function getGrade (s1, s2, s3) {
//     let amount = (s1 + s2 + s3) / 3;
//
//     if (amount >= 90 && amount <= 100) {
//         return "A";
//     }
//
//     if (amount >= 80 && amount < 90) {
//         return "B";
//     }
//
//     if (amount >= 70 && amount < 80) {
//         return "C";
//     }
//
//     if (amount >= 60 && amount < 70) {
//         return "D";
//     }
//
//     if (amount >= 0 && amount < 60) {
//         return "F";
//     }
// }
// console.log(getGrade(95, 93, 90));

// function maxRedigit (num) {
//     if (num <= 100 || num > 999) {
//         return null;
//     }
//
//     function sortArr(a, b) {
//         return b - a;
//     }
//
//     return  arr = +String(num).split('').sort(sortArr).join('');
// }
// console.log(maxRedigit(123))

// function solution(str){
//     let outArr = [];
//     let newArr = str.split('');
//
//     newArr.length % 2 !== 0 ? newArr.push('_') : true;
//
//     for (let i = 0; i < newArr.length; i += 2) {
//         outArr.push(
//             newArr
//                 .slice(i, i + 2)
//                 .join('')
//         );
//     }
//
//     return outArr;
// }
// console.log(solution('abcdefg'));

// const countBits = function(n) {
//     let output = 0;
//     let count = 0;
//     let newNum = n.toString(2);
//
//     for (let i = 0; i < newNum.length; i++) {
//         let index = newNum.indexOf('1', count);
//
//         if (index !== -1) {
//             output++;
//         }
//
//         if (index == -1) break;
//         count = index + 1;
//     }
//
//     return output;
// };
// console.log(countBits(1234));

// const grow = x => x.reduce((z, i) => z * i);
// console.log(grow([1, 2, 3, 4]));

// const maps = x => x.map(i => i * 2);
// console.log(maps([1, 2, 3]));

// function rentalCarCost(d) {
//     pay = d * 40;
//     if (d >= 3 && d < 7) {
//         pay -= 20;
//     }
//     if (d >= 7) {
//         pay -= 50;
//     }
//
//     return pay;
// }
// console.log(rentalCarCost(7));

// const century = year => Math.ceil(year / 100);
// console.log(century(1705));

// function spoonerize(words) {
//     let out = [];
//     let newArr = words.split(' ');
//     let arrFirst = newArr[0];
//     let arrLast = newArr[newArr.length - 1];
//
//     let out1 = arrFirst.split('');
//     let out2 = arrLast.split('');
//
//     out1.splice(0, 1, arrLast[0]);
//     out2.splice(0, 1, arrFirst[0]);
//
//     out.push(out1.join(''), out2.join(''));
//
//     let returnString = out.join(' ');
//
//     return returnString;
// }
// console.log(spoonerize("nit picking"));

// function preFizz(n) {
//     let output = [];
//     for (let i = 1; i <= n; i++) {
//         output.push(i);
//     }
//
//     return output;
// }
// console.log(preFizz(5));

// const greet = (name, owner) => `Hello ${name === owner ? 'boss' : 'guest'}`;
// const greet = (name, owner) => 'Hello ' + (name === owner ? 'boss' : 'guest');
// const greet = (name, owner) => name === owner ? 'Hello boss' : 'Hello guest';
// const greet = (name, owner) => name === 'Daniel' && owner === 'Daniel' ? 'Hello boss' : 'Hello guest'
// console.log(greet('Daniel', 'Daniel'))

// const multiply = (z, y) => z * y;
// console.log(x(2, 3));

// function switcheroo(x){
//     let output = [];
//     let arr = x.split('');
//     arr.forEach(i => {
//         if (i === 'a') {
//             output.push('b');
//         } if (i === 'b') {
//             output.push('a');
//         } if (i !== 'a' && i !== 'b') {
//             output.push(i);
//         }
//     })
//
//     return output.join('');
// }
// console.log(switcheroo('aabacbaa'))

// function trouble(x, t){
//     for (let i = 0; i < x.length; i++) {
//         if (x[i] + x[i+1] === t) {
//             x.splice(i+1, 1);
//             i--;
//         }
//     }
//     return x;
// }
// console.log(trouble([2, 2, 2, 2, 2, 2], 4));

// function divCon(x){
//     let num = 0;
//     let str = 0;
//
//     x.forEach(item => {
//         if (typeof item === 'number') {
//             num += item;
//         } if (typeof item === 'string') {
//             str += +item;
//         }
//     });
//
//     return num - str;
// }
// console.log(divCon([9, 3, '7', '3']));

// function stringy(size) {
//     let arr = [];
//     for (let i = 0; i < size; i++) {
//         if (i % 2 === 0) {
//             arr.push(1)
//         }
//         if (i % 2 !== 0) {
//             arr.push(0)
//         }
//     }
//     return arr.join('');
// }
// console.log(stringy(6));

// function fakeBin(x){
//     newArr = x.toString().split('');
//     let outArr = newArr.map(item => {
//         if (item < 5) {
//             return '0';
//         } else {
//             return '1';
//         }
//     });
//
//     return outArr.join('');
// }
// console.log(fakeBin(45385593107843568));

// function pipeFix(numbers){
//     let arr = [];
//     x = numbers[0];
//     z = numbers[numbers.length - 1] - x;
//
//     for (i = 1; i <= z + 1; i++) {
//         arr.push(x);
//         x++;
//     }
//
//     return arr;
// }
// console.log(pipeFix([-1,4]));

// const getChar = c => String.fromCharCode(c);
// console.log(getChar(65));

// const invert = array => array.map(item => item - (item * 2));
// console.log(invert([]));

// function getDrinkByProfession(param){
//     param = param.toLowerCase();
//
//     if (param === 'jabroni') return  'Patron Tequila';
//     if (param === 'school counselor') return 'Anything with Alcohol';
//     if (param === 'programmer') return 'Hipster Craft Beer';
//     if (param === 'bike gang member') return 'Moonshine';
//     if (param === 'politician') return 'Your tax dollars';
//     if (param === 'rapper') return 'Cristal';
//
//     else return 'Beer';
// }
// console.log(getDrinkByProfession('Jabroni'));

// function makeNegative(num) {
//     if (Math.sign(num) === -1) {
//         return num;
//     } else return num = num - (num * 2);
// }
// console.log(makeNegative(-3));

// function positiveSum(arr) {
//     arrMath = [];
//     arr.forEach(item => Math.sign(item) === 1 ? arrMath.push(item) : false);
//     return arrMath.length <= 0 ? 0 : arrMath.reduce((prew, next) => prew + next);
// }
// console.log(positiveSum([1,-4,7,12]));

// function bmi(weight, height) {
//     let pov = weight / (Math.pow(height, 2));
//
//     if (pov <= 18.5) return 'Underweight';
//     if (pov <= 25) return 'Normal';
//     if (pov <= 30) return 'Overweight';
//     if (pov > 30) return 'Obese';
// }
// console.log(bmi(80, 1.80));

// let paperwork = (n, m) => n <= 0 || m <= 0 ? 0 : n * m;
// console.log(paperwork(-5, 5));

// function nextId(ids){
//     let out = 0;
//     let double = 0;
//
//     ids = ids.sort((a, b) => a - b);
//     let i = ids[0];
//
//     for (x = 0; x <= ids.length - 1; x++) {
//         if (ids[x] > i) {
//             double = 0;
//             out = i;
//             break;
//         }
//
//         if (ids[x] < i) {
//             double++;
//             i--;
//         }
//
//         i++;
//     }
//
//     if (out === 0) {
//         out = ids.length;
//     }
//
//     if (ids[0] > 0) {
//         out = 0;
//     }
//
//     if (double !== 0) {
//         out = out - double;
//     }
//
//     return out;
// }
// console.log(nextId([3, 2, 7, 2, 3, 9, 4, 5]));

// const problem = x => typeof x === "string" ? "Error" : (x * 50) + 6;
// console.log(problem(1));

// const getAge = inputString => +inputString.split(' ').splice(0, 1);
// console.log(getAge('4 years old'));

// const index = (array, n) => n < 0 || n >= array.length ? -1 : Math.pow(array[n], n);
// console.log(index([2, 1, 4, 3],4));

// function tickets(peopleInLine){
//     let note25 = 0,
//         note50 = 0,
//         note100 = 0;
//
//     for (i = 0; i < peopleInLine.length; i ++) {
//         if (note25 < 0) {
//             break;
//         }
//
//         if (peopleInLine[i] === 25) {
//             note25 = note25 + 1;
//         }
//
//         if (peopleInLine[i] === 50) {
//             note25 = note25 - 1;
//             note50 = note50 + 1;
//         }
//
//         if (peopleInLine[i] === 100) {
//             note100 = note100 + 1;
//             if (note50 >= 1 && note25 >= 1) {
//                 note50 = note50 - 1;
//                 note25 = note25 - 1;
//             } else {
//                 note25 = note25 - 3;
//             }
//         }
//     }
//
//     if (note25 < 0) return "NO";
//     return 'YES';
// }
// console.log(tickets([25,
//     50,
//     25,
//     100,
//     25,
//     25,
//     25,
//     100,
//     25,
//     25,
//     25,
//     100,
//     25,
//     25,
//     25,
//     100,
//     25,
//     50,
//     25,
//     100]));

// function aspectRatio(x,y){
//     return [Math.ceil(y * (16/9)), y];
// }
// console.log(aspectRatio(640, 480));

// function position(letter){
//     let l = letter.toLowerCase();
//     const arr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
//     arr.forEach((item, index) => item === l ? l = `Position of alphabet: ${index + 1}`: true);
//     return l;
// }
// console.log(position('a'));

// function sumOfDifferences(arr) {
//     arr = arr.sort((a, b) => b - a);
//
//     let count = 1;
//     let newArr = []
//
//     if (arr.length < 2) {
//         return 0;
//     }
//
//     for (i = 0; i < arr.length - 1; i++) {
//         newArr.push(arr[i] - arr[count]);
//         count++;
//     }
//
//     return newArr.reduce((prev, next) => prev + next);
// }
// console.log(sumOfDifferences([10, 2, 1]));

// const peopleWithAgeDrink = old => `drink ${old < 14 ? 'toddy' : old < 18 ? 'coke' : old < 21 ? 'beer' : 'whisky'}`;
// console.log(peopleWithAgeDrink(13));

// const arr = N => {
//     let arrN = [];
//     for (i = 0; i < N; i++) {
//         arrN.push(i);
//     }
//     return arrN;
// };
// console.log(arr(5));

// const usdcny = usd => `${(usd * 6.75).toFixed(2)} Chinese Yuan`;
// console.log(usdcny(15));

// const toBinary = n => +n.toString(2);
// console.log(toBinary(5));

// const square = n => Math.pow(n, 2);
// console.log(square(3));

// const formatMoney = amount => `\$${amount.toFixed(2)}`;
// console.log(formatMoney(3.1));

// function enough(cap, on, wait) {
//     const x = cap - on - wait;
//     if (x < 0) return x * -1;
//     else return 0;
// }
// console.log(enough(100, 60, 50));

// const past = (h, m, s) =>
//     (h * 60 * 60 * 1000)
//     + (m * 60 * 1000)
//     + (s * 1000);
// console.log(past(1,1,1));

// function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
//     const myTime = pontoonDistance / youSpeed;
//     let sharkTime = sharkDistance / sharkSpeed;
//
//     if (dolphin) {
//         sharkTime = sharkTime * 2;
//     }
//
//     if (sharkTime - myTime >= 0) {
//         return "Alive!";
//     } else return "Shark Bait!";
// }
// console.log(shark(24, 0, 4, 8, true));

// Sum Numbers
// const sum = numbers => numbers.length === 0 ? 0 : numbers.reduce((prew, next) => prew + next);
// console.log(sum([1, 5.2, 4, 0, -1]));

// const solution = str => str.split('').reverse().join('');
// console.log(solution('world'));

// function multiTable(number) {
//     let arr = [];
//     for (i = 1; i <= 10; i++) {
//         arr.push(`${i} * ${number} = ${i * number}`);
//     }
//
//     return arr.join('\n');
// }
// console.log(multiTable(5));

// function checkExam(array1, array2) {
//     let out = 0;
//
//     for (i = 0; i < array2.length; i++) {
//         if (array2[i] === '') {
//             out += 0;
//             continue;
//         }
//
//         if (array2[i] === array1[i]) {
//             out += 4;
//         }
//
//         if (array2[i] !== array1[i]) {
//             out -= 1;
//         }
//     }
//
//     if (out < 0) return 0;
//     return out;
// }
// console.log(checkExam([ 'c',
//     'b',
//     'b',
//     'b',
//     'c',
//     'b',
//     'c',
//     'c',
//     'c',
//     'a',
//     'a',
//     'a',
//     'b',
//     'c',
//     'b',
//     'c',
//     'c' ], [ 'a',
//     'b',
//     'b',
//     'a',
//     'a',
//     'a',
//     'c',
//     'a',
//     'a',
//     'b',
//     'a',
//     'b',
//     'c',
//     '',
//     'a',
//     'a',
//     '' ]));

// const summation = function (num) {
//     let out = 0;
//     for (let i = 0; i < num; i++) {
//         out += i + 1;
//     }
//
//     return out;
// }
// console.log(summation(8));

// const boolToWord = bool => bool ? 'Yes' : 'No';
// function boolToWord2( bool ){
//     console.log(typeof bool);
// }
// console.log(boolToWord(false));

// function oddOrEven(array) {
//     if (array.length === 0) {
//         return 'even';
//     }
//
//     return (array.reduce((prev, next) => prev + next)) % 2 === 0 ? 'even' : 'odd';
// }
// console.log(oddOrEven([0, 1, 4]));

// function elevatorDistance(array) {
//     let down = 0;
//     let up = 0;
//
//     for (let i = 0; i < array.length; i++) {
//         if (array[i+1] < array[i]) {
//             down = down + (array[i] - array[i+1]);
//         }
//
//         if (array[i+1] > array[i]) {
//             up = up + (array[i+1] - array[i]);
//         }
//     }
//
//     return up + down;
// }
// console.log(elevatorDistance([7,1,7,1]));

// function sequence(x) {
//     let arr = [];
//     for (i = 1; i < x+1; i++) {
//         arr.push(i);
//     }
//     return arr.sort();
// }
// console.log(sequence(16));

// const reverseSeq = n => {
//     let arr = [];
//     for (let i = 1; i <= n; i++) {
//         arr.push(i);
//     }
//     return arr.reverse();
// }
// console.log(reverseSeq(5));

// function switchItUp(number){
//     let dictionary = [
//         'Zero',
//         'One',
//         'Two',
//         'Three',
//         'Four',
//         'Five',
//         'Six',
//         'Seven',
//         'Eight',
//         'Nine',
//     ];
//
//     return dictionary[number];
// }
// console.log(switchItUp(5));

// function longest(s1, s2) {
//     let outTest = [],
//         outArr = [],
//         test = s1 + s2;
//
//     test = test.split('');
//
//     for (i = 0; i < test.length; i++) {
//         outTest.push(test[test.indexOf(test[i])]);
//     }
//
//     outTest = outTest.sort();
//
//     for (i = 0; i < outTest.length; i++) {
//
//         if (outTest[i] !== outTest[i+1]) {
//             outArr.push(outTest[i]);
//         }
//     }
//
//     return outArr.join('');
// }

// function longest(s1, s2) {
//     const arr = (s1 + s2).split('').sort(),
//         out = arr.filter(sortArr).join('');
//
//     function sortArr (item, index, arr) {
//         if (item !== arr[index - 1]) return true;
//     }
//
//     return out;
// }
// console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"));

// function lifePathNumber(dateOfBirth) {
//     const sum = (prev, next) => +prev + +next;
//
//     dateOfBirth = dateOfBirth
//         .split('-')
//         .join('')
//         .split('')
//         .reduce(sum)
//         .toString();
//
//     for (let i = 0; i <= dateOfBirth.length; i++) {
//         if (dateOfBirth.length > 1) {
//             dateOfBirth = dateOfBirth
//                 .split('')
//                 .reduce(sum)
//                 .toString();
//         }
//     }
//
//     return +dateOfBirth;
// }
// console.log(lifePathNumber("1815-12-10"));

// const litres = time => Math.floor(time / 2);
// console.log(litres(11.8));

// function squareSum(numbers){
//     const sum = (prew, next) => prew + next,
//         square = item => Math.pow(item, 2);
//
//     return numbers.map(square).reduce(sum, 0);
// }
// console.log(squareSum([1, 2]));

// const setAlarm = (employed, vacation) => employed === true && vacation === false;
// console.log(setAlarm(true, false));

// const arrayPlusArray = (arr1, arr2) => [].concat(arr1, arr2).reduce(sum),
//     sum = (next, prew) => next + prew;
// console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));

// const greet = name => `Hello, ${name} how are you doing today?`;
// console.log(greet('Name'));

// function generateRange(min, max, step){
//     let out = [];
//
//     for (; min <= max; min += step) {
//         out.push(min);
//     }
//
//     return out;
// }
// console.log(generateRange(2, 10, 2));

// const isDivideBy = (number, a, b) => number % a === 0 && number % b === 0;
// console.log(isDivideBy(-12, 2, -6));

// const toNumberArray = stringarray => stringarray.map(item => +item);
// console.log(toNumberArray(["1.1","2.2","3.3"]));

// function shifter(s){
//     let all = s.split(' '),
//         shifts = ["H", "I", "N", "O", "S", "X", "Z", "M", "W"],
//         wrong = [];
//
//     all = all.filter((item, index) => all.indexOf(item) === index);
//
//     all.forEach(item => {
//         item = item.split('');
//         for (let i = 0; i < item.length; i++) {
//             if (!shifts.includes(item[i])) {
//                 wrong.push(item.join(''));
//             }
//         }
//     });
//
//     wrong = wrong.filter(sortArr);
//
//     function sortArr (item, index, arr) {
//         if (item !== arr[index - 1]) return true;
//     }
//
//     return s === '' ? 0 : all.length - wrong.length;
// }
// console.log(shifter("WHO IS SHIFTER AND WHO IS NO"));

// function hello(name) {
//     if (!name) name = 'World';
//     else {
//         name = name.toLowerCase();
//         name = name[0].toUpperCase() + name.slice(1);
//     }
//
//     return `Hello, ${name}!`;
// }
// console.log(hello(''));

// const capitalizeWord = word => word[0].toUpperCase() + word.slice(1);
// console.log(capitalizeWord('word'))

// const gordon = a => a
//         .split(' ')
//         .map(item => item + '!!!!')
//         .join(' ')
//         .toUpperCase()
//         .replace(/A/g, '@')
//         .replace(/[EIOU]/g, '*');
// console.log(gordon('What feck damn cake'));

// function dbSort(a){
//     let num = [],
//         str = [];
//
//     const sortArr = (a, b) => a - b;
//
//     a.forEach(item => {
//         if (typeof item === 'string') str.push(item);
//         else num.push(item);
//     });
//
//     return num.sort(sortArr).concat(str.sort());
// }
// console.log(dbSort([66, 't', 101, 0, 1, 1]));

// const areaOrPerimeter = (l , w) => l === w ? l*w : (l+w)*2;
// console.log(areaOrPerimeter(6, 10));

// function parseF(s) {
//     const regStr = /\D/g;
//     const regNum = /\d\./g;
//
//     if (regNum.test(s) === true) return +s;
//     if (regStr.test(s) === true) return null;
//     if (typeof s === 'string' && typeof +s === 'number') return +s;
//     else return s;
// }

// function repeatStr (n, s) {
//     let out = s;
//     for (let i = 1; i < n; i++) {
//         out = out + s;
//     }
//     return out;
//     // return s.repeat(n);
// }
// console.log(repeatStr(6, 'I'));

// const solution = (a, b) => a.length < b.length ? a+b+a : b+a+b;
// console.log(solution("1", "22"));

// const isDivisible = (n, x, y) => n % x === 0 && n % y === 0;
// console.log(isDivisible(12,3,4))

// const evensAndOdds = num => num.toString(num % 2 ? 16 : 2);
// // const evensAndOdds = num => num % 2 === 0 ? num.toString(2) : num.toString(16);
// console.log(evensAndOdds(117));

// const sumSquareEvenRootOdd = ns => +ns
//     .map(i => i%2 ? Math.sqrt(i) : Math.pow(i, 2))
//     .reduce((prev, next) => prev + next)
//     .toFixed(2);
// console.log(sumSquareEvenRootOdd([4,5,7,8,1,2,3,0]));

// function calc(x){
//     x = x
//         .split('')
//         .map(i => i.charCodeAt(0))
//         .join('');
//
//     function unit (item, reg = '', replace = '') {
//         return item.replace(reg, replace)
//             .split('')
//             .reduce((p, n) => +p + +n);
//     }
//
//     return unit(x) - unit(x, /7/g, 1);
//
//     // let z;
// // x = x
// //     .split('')
// //     .map(i => i.charCodeAt(0))
// //     .join('');
// //
// // z = x
// //     .replace(/7/g, 1)
// //     .split('')
// //     .reduce((p, n) => +p + +n);
// //
// // x = x
// //     .split('')
// //     .reduce((p, n) => +p + +n);
// //
// // return x - z;
// }
// console.log(calc('aaaaaddddr'));

// function sqInRect(lng, wdth){
//
//     if (lng === wdth) return  null;
//
//     const out = [];
//
//     while (wdth-lng>0 || lng-wdth>0) {
//     // while (wdth-lng<0 || lng-wdth<0) {
//
//         if (lng<wdth && wdth-lng>=0) {
//             wdth = wdth - lng;
//             out.push(lng);
//         } else if (wdth<lng && lng-wdth>=0) {
//             lng = lng - wdth;
//             out.push(wdth);
//         }
//     }
//
//     out.push(lng > wdth ? wdth : lng);
//     // lng > wdth ? out.push(wdth) : out.push(lng);
//     return out;
// }
// console.log(sqInRect(3, 5))

// function findMultiples(integer, limit) {
//     let i = integer,
//         out = [];
//
//     while (integer <= limit) {
//         out.push(integer);
//         integer += i;
//     }
//     return out;
// }
// console.log(findMultiples(4, 27));

// function greet(language = 'english') {
//     if (language === 'IP_ADDRESS_INVALID' ||
//         language === 'IP_ADDRESS_NOT_FOUND' ||
//         language === 'IP_ADDRESS_REQUIRED'
//     ) return 'Welcome';
//
//     const db = {
//         english: 'Welcome',
//         czech: 'Vitejte',
//         danish: 'Velkomst',
//         dutch: 'Welkom',
//         estonian: 'Tere tulemast',
//         finnish: 'Tervetuloa',
//         flemish: 'Welgekomen',
//         french: 'Bienvenue',
//         german: 'Willkommen',
//         irish: 'Failte',
//         italian: 'Benvenuto',
//         latvian: 'Gaidits',
//         lithuanian: 'Laukiamas',
//         polish: 'Witamy',
//         spanish: 'Bienvenido',
//         swedish: 'Valkommen',
//         welsh: 'Croeso'
//     };
//
//     return db[language];
// }
// console.log(greet());

// function getPlanetName(id){
//     var name;
//     switch(id){
//         case 1:
//             name = 'Mercury';
//             break;
//         case 2:
//             name = 'Venus';
//             break;
//         case 3:
//             name = 'Earth';
//             break;
//         case 4:
//             name = 'Mars';
//             break;
//         case 5:
//             name = 'Jupiter';
//             break;
//         case 6:
//             name = 'Saturn';
//             break;
//         case 7:
//             name = 'Uranus';
//             break;
//         case 8:
//             name = 'Neptune';
//             break;
//     }
//
//     return name;
// }
// console.log(getPlanetName(5));

// function SubtractSum(n){
//     const sum = String(n).split('');
//     const minus = sum.reduce((a, b) => +a + +b);
//
//     const fruit = {
//         1: 'kiwi',
//         2: 'pear',
//         3: 'kiwi',
//         4: 'banana',
//         5: 'melon',
//         6: 'banana',
//         7: 'melon',
//         8: 'pineapple',
//         9: 'apple',
//         10: 'pineapple',
//         11: 'cucumber',
//         12: 'pineapple',
//         13: 'cucumber',
//         14: 'orange',
//         15: 'grape',
//         16: 'orange',
//         17: 'grape',
//         18: 'apple',
//         19: 'grape',
//         20: 'cherry',
//         21: 'pear',
//         22: 'cherry',
//         23: 'pear',
//         24: 'kiwi',
//         25: 'banana',
//         26: 'kiwi',
//         27: 'apple',
//         28: 'melon',
//         29: 'banana',
//         30: 'melon',
//         31: 'pineapple',
//         32: 'melon',
//         33: 'pineapple',
//         34: 'cucumber',
//         35: 'orange',
//         36: 'apple',
//         37: 'orange',
//         38: 'grape',
//         39: 'orange',
//         40: 'grape',
//         41: 'cherry',
//         42: 'pear',
//         43: 'cherry',
//         44: 'pear',
//         45: 'apple',
//         46: 'pear',
//         47: 'kiwi',
//         48: 'banana',
//         49: 'kiwi',
//         50: 'banana',
//         51: 'melon',
//         52: 'pineapple',
//         53: 'melon',
//         54: 'apple',
//         55: 'cucumber',
//         56: 'pineapple',
//         57: 'cucumber',
//         58: 'orange',
//         59: 'cucumber',
//         60: 'orange',
//         61: 'grape',
//         62: 'cherry',
//         63: 'apple',
//         64: 'cherry',
//         65: 'pear',
//         66: 'cherry',
//         67: 'pear',
//         68: 'kiwi',
//         69: 'pear',
//         70: 'kiwi',
//         71: 'banana',
//         72: 'apple',
//         73: 'banana',
//         74: 'melon',
//         75: 'pineapple',
//         76: 'melon',
//         77: 'pineapple',
//         78: 'cucumber',
//         79: 'pineapple',
//         80: 'cucumber',
//         81: 'apple',
//         82: 'grape',
//         83: 'orange',
//         84: 'grape',
//         85: 'cherry',
//         86: 'grape',
//         87: 'cherry',
//         88: 'pear',
//         89: 'cherry',
//         90: 'apple',
//         91: 'kiwi',
//         92: 'banana',
//         93: 'kiwi',
//         94: 'banana',
//         95: 'melon',
//         96: 'banana',
//         97: 'melon',
//         98: 'pineapple',
//         99: 'apple',
//         100: 'pineapple'
//     };
//
//     return fruit[n - minus] || 'not in the list';
// }
// console.log(SubtractSum(5914));

// const expressionMatter = (a, b, c) =>
//     [
//         a + b * c,
//         a + b + c,
//         a * b * c,
//         a * (b +c),
//         (a + b) * c,
//     ].sort((x, z) => z - x)[0];
// console.log(expressionMatter(9, 1, 1));

// function timeCorrect(timestring) {
//     // Таймер
//     if (timestring === null) return null;
//     if (timestring === '') return '';
//
//     if (timestring.match(/\d{2}:\d{2}:\d{2}/)) {
//         timestring = timestring.split(':');
//         const horses = timestring[0] * 60 * 60,
//             minutes = timestring[1] * 60,
//             second = +timestring[2],
//             secondAll = second + horses + minutes;
//
//         const out = [
//             getZero(Math.floor(secondAll / (60 * 60) % 24)),
//             getZero(Math.floor(secondAll / 60 % 60)),
//             getZero(Math.floor(secondAll % 60)),
//         ];
//
//         function getZero(num) {
//             if (num >= 0 && num < 10) return `0${num}`;
//             else return num;
//         }
//
//         return out.join(':');
//     } else return null;
// }
// console.log(timeCorrect('19:99:09'))

// function points(games) {
//     let out = 0;
//
//     games.forEach(item => {
//         item.split(':');
//         +item[0] > +item[2] ? out += 3 : +item[0] === +item[2] ? out += 1 : out += 0;
//     });
//
//     return out;
// }
// console.log(points(["3:1", "2:2", "0:1"]));

// function createArrayOfTiers(num) {
//     num = String(num);
//     const out = [num[0]];
//
//     for (let i = 0; i < num.length - 1; i++) {
//         out.push(out[i] + num[i + 1]);
//     }
//
//     return out;
// }
// console.log(createArrayOfTiers(2017));

// function cumulativeTriangle(n) {
//     let a = 0;
//
//     for (let i = 1; i <= n; i++) {
//         a += i;
//     }
//
//     let b = a;
//
//     for (let i = 1; i < n; i++) {
//         b += a - i;
//     }
//
//     return b;
// }
// console.log(cumulativeTriangle(4));

// function abbrevName(name){
//     return name
//         .split(' ')
//         .map(i => i[0])
//         .join('.')
//         .toUpperCase();
// }
// console.log(abbrevName('Sam Harris'));

// var paintLetterboxes = function(start, end) {
//     const out = Array(10).fill(0);
//
//     for (i = start; i <= end; i++) {
//         String(i)
//         .split('')
//         .forEach(item => out[item] += 1)
//     }
//
//     return out;
// }
// console.log(paintLetterboxes(125, 132));

// Не решена!
// function splitOddAndEven(n) {
//     let out = [],
//         even = [],
//         regexp = /k\d/g;
//     n = String(n);
//
//     for (i = 0; i < n.length; i++) {
//         if (n[i+1] === undefined) {
//             break;
//         }
//
//         if ((n[i]%2===0 && n[i+1]%2===0) || (n[i]%2!==0 && n[i+1]%2!==0)) {
//             out.push(`k${n[i]}`);
//             even.push(n[i]);
//             if ((n[i+2]%2===0 && n[i+1]%2!==0) || (n[i+2]%2!==0 && n[i+1]%2===0)) {
//                 out.push(`k${n[i+1]}`);
//                 even.push(n[i+1]);
//                 i++;
//             }
//
//         }
//
//         else out.push(n[i]);
//     }
//
//     out = out.join('');
//     let a = out.replace(regexp, '-');
//     a = a.replace(/-/, 'x');
//     a = a.replace(/-/g, '');
//     a = a.split('');
//
//     const b = a.map(item => {
//         if (item === 'x') return +even.join('');
//         else return +item;
//     });
//
//     return b;
// }
// // https://www.codewars.com/kata/57a2ab1abb994466910003af/train/javascript
// console.log(splitOddAndEven(223));

// function arrayMadness(a, b) {
//     const sum = (x, z) => x + z;
//
//     a = a.map(num => Math.pow(num, 2)).reduce(sum);
//     b = b.map(num => Math.pow(num, 3)).reduce(sum);
//
//     return a > b;
// }
// console.log(arrayMadness([ 5, 6, 7 ], [ 4, 5, 6 ]));

// Классы / конструктор
// class Dinglemouse{
//     constructor ( firstName, lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//
//     getFullName(){
//         if (this.firstName === '') return this.lastName;
//         if (this.lastName === '') return this.firstName;
//         return `${this.firstName} ${this.lastName}`
//     }
// }
//
// let user = new Dinglemouse('firstName', '');
// user.getFullName();
// console.log();

// function unlock(str) {
//     cracker = {
//         a:2, b:2, c:2, d:3, e:3, f:3, g:4, h:4, i:4, j:5, k:5, l:5, m:6, n:6, o:6, p:7, q:7, r:7, s:7, t:8, u:8, v:8, w:9, x:9, y:9, z:9,
//     }
//
//     return str
//         .toLowerCase()
//         .split('')
//         .map(item => cracker[item])
//         .join('');
// }
// console.log(unlock('Nokia'));

// function correctPolishLetters (string) {
//     let polsk = ['ą', 'ć', 'ę', 'ł', 'ń', 'ó', 'ś', 'ź', 'ż'];
//     let eng = ['a', 'c', 'e', 'l', 'n', 'o', 's', 'z', 'z'];
//
//     string = string.split('').map(item => {
//         for (let i = 0; i < string.length; i++) {
//             if (item === polsk[i]) return eng[i];
//         } return item;
//     });
//
//     return string.join('');
// }
// console.log(correctPolishLetters('Jędrzej Błądziński'));

// function strCount(str, letter){
//     let out = 0;
//
//     if (str === ' ') return letter;
//
//     str.split('').forEach(item => {
//         if (item === letter) out++;
//     });
//
//     return out;
// }
// console.log(strCount('Hello', 'o'));

// function alphabetWar(fight) {
//     let lOut = 0,
//         rOut = 0;
//     const left = { w: 4, p: 3, b: 2, s: 1, },
//         right = { m: 4, q: 3, d: 2, z: 1, };
//
//     fight.split('').forEach(item => {
//         if (left[item]) lOut += left[item];
//         if (right[item]) rOut += right[item];
//     });
//
//     return lOut > rOut ? 'Left side wins!' : lOut < rOut ? 'Right side wins!' : 'Let\'s fight again!';
// }
// console.log(alphabetWar('wm'));

// const mouthSize = animal => animal.toLowerCase() === 'alligator' ? 'small' : 'wide';
// console.log(mouthSize('ant bear'));

// function DNAStrand(dna){
//     const out = {
//         A: 'T',
//         T: 'A',
//         G: 'C',
//         C: 'G',
//     }
//
//     return dna
//         .split('')
//         .map(i => out[i])
//         .join('');
// }
// console.log(DNAStrand('ATTGC'));

// function findRoutes(routes) {
//     let count = 0,
//         arrSort = [],
//         arrStart = [],
//         out = [];
//
//     routes.forEach(item => {
//         arrSort.push(item[1])
//     });
//
//     routes.forEach(item => {
//         if (!arrSort.includes(item[0])) {
//             arrStart.push(item);
//         }
//     });
//
//     for (let i of routes) {
//         routes.forEach(item => {
//             if (item[0] === arrStart[count][1]) {
//                 arrStart.push(item);
//                 count++;
//             }
//         });
//     }
//
//     arrStart = arrStart.reduce((prev, next) => prev.concat(next));
//
//     for (let i of arrStart) {
//         if (!out.includes(i)) out.push(i);
//     }
//
//     return out.join(', ');
// }
// console.log(findRoutes([
//     [ 'Chicago', 'Winnipeg' ],
//     [ 'Halifax', 'Montreal' ],
//     [ 'Montreal', 'Toronto' ],
//     [ 'Toronto', 'Chicago' ],
//     [ 'Winnipeg', 'Seattle' ]
// ]));

// const testEven = n => !(n % 2);
// console.log(testEven(0));

// function tapCodeTranslation(text) {
//     const
//         row = [
//             ['a', 'b', 'c', 'k', 'd', 'e'],
//             ['f', 'g', 'h', 'i', 'j'],
//             ['l', 'm', 'n', 'o', 'p'],
//             ['q', 'r', 's', 't', 'u'],
//             ['v', 'w', 'x', 'y', 'z']
//         ],
//         coll = [
//             ['a', 'f', 'l', 'q', 'v'],
//             ['b', 'g', 'm', 'r', 'w'],
//             ['c', 'k', 'h', 'n', 's', 'x'],
//             ['d', 'i', 'o', 't', 'y'],
//             ['e', 'j', 'p', 'u', 'z']
//         ],
//         out = [];
//
//     text.split('').forEach(item => countDots(item));
//
//     function countDots (letter) {
//         row.forEach((item, index) => {
//             let a = '',
//                 b = '';
//
//             if (item.includes(letter)) {
//                 for (let i = 0; i <= index; i++) {
//                     a = a + '.';
//                 }
//
//                 out.push(a);
//
//                 coll.forEach((col, x) => {
//                     if (col.includes(letter)) {
//                         for (let count = 0; count <= x; count++) {
//                             b = b + '.';
//                         }
//                     }
//                 });
//
//                 out.push(b);
//             }
//         });
//     }
//
//     return out.join(' ');
// }
// console.log(tapCodeTranslation('test'));

// const zeroFuel = (distanceToPump, mpg, fuelLeft) => mpg*fuelLeft >= distanceToPump;
// console.log(zeroFuel(33, 12, 5));

// const moveTen = s => s.split('').map(i => abc[i]).join(''),
//     abc = { a: 'k', b: 'l', c: 'm', d: 'n', e: 'o', f: 'p', g: 'q', h: 'r', i: 's', j: 't', k: 'u', l: 'v', m: 'w', n: 'x', o: 'y', p: 'z', q: 'a', r: 'b', s: 'c', t: 'd', u: 'e', v: 'f', w: 'g', x: 'h', y: 'i', z: 'j' };
// console.log(moveTen('qtjeigrm'))
// function moveTen(s){
//     const abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
//         arr = [];
//
//     s.split('').forEach(item => {
//         abc.forEach((i, index) => {
//             if (item === i) {
//                 if (index + 10 === abc.length) {
//                     arr.push(abc[0]);
//                 } else if (index + 10 > abc.length) {
//                     arr.push(abc[index + 10 - abc.length]);
//                 } else {
//                     arr.push(abc[index+10]);
//                 }
//             }
//         });
//     });
//
//     return arr.join('');
// }
// console.log(moveTen('qtjeigrm'))

// const hoopCount = n => n > 9 ? 'Great, now move on to tricks' : 'Keep at it until you get it';
// console.log(hoopCount(6));

// function differenceInAges(ages){
//     ages = ages.sort((a, b) => a - b);
//     return Array.of(ages[0], ages[ages.length-1], ages[ages.length-1] - ages[0]);
// }
// console.log(differenceInAges([82, 15, 6, 38, 35]));

// function getDecimal(n){
//     n = n.toString().split('.');
//     return n.length === 1 ? 0 : +`0.${n[n.length-1]}`;
// }
// console.log(getDecimal(13));

// function makeSentence(parts) {
//     let arr = [], out = [];
//
//     parts.forEach(item => {
//         if (item !== '.') arr.push(item);
//     });
//
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i +1] === ',') {
//             out.push(arr[i] + arr[i+1]);
//             i++;
//         } else out.push(arr[i]);
//     }
//
//     return `${out.join(' ')}.`;
// }
// console.log(makeSentence(['hello', ',', 'my', 'dear', '.']));

// function removeEveryOther(arr){
//     const out = [];
//     for (let i = 0; i < arr.length; i+= 2) {
//         out.push(arr[i]);
//     }
//
//     return out;
// }
// console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']));

// function solution(value){
//     value  = value.toString().split('');
//     const arr = value;
//
//     for (let i = value.length; i < 5; i++) {
//         arr.unshift('0');
//     }
//
//     return `Value is ${arr.join('')}`;
// }
// console.log(solution(104));