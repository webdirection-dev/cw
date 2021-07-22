// const take = (arr, n) => arr.slice(0, n);
// console.log(take([0, 1, 2, 3, 5, 8, 13], 3));

// function twiceAsOld(dadYearsOld, sonYearsOld) {
//     if (sonYearsOld * 2 > dadYearsOld) return sonYearsOld * 2 - dadYearsOld;
//     else if (sonYearsOld * 2 < dadYearsOld) return dadYearsOld - sonYearsOld * 2;
//     else return 0;
// }
// console.log(twiceAsOld(36, 7));

// function task(w, n, c) {
//     const obj = {
//         Monday: 'James',
//         Tuesday: 'John',
//         Wednesday: 'Robert',
//         Thursday: 'Michael',
//         Friday: 'William',
//     };
//
//     if (obj[w]) return `It is ${w} today, ${obj[w]}, you have to work, you must spray ${n} trees and you need ${n*c} dollars to buy liquid`
// }
// console.log(task('Monday',15,2));

// const arrayDiff = (a, b) => a.filter(i => !b.includes(i));
// function arrayDiff_(a, b) {
//     const out = [];
//
//     for (let i of a) {
//         if (!b.includes(i)) out.push(i);
//     }
//
//     return out;
// }
// console.log(arrayDiff([13, -17, 0, -18, 18, 20, -11, 6, 20, 19, 6, -4, 17, 11, -4, 12, -14],[0, 18, 13, 17, -4]));

// const removeChar = str => str.slice(1, str.length-1);
// console.log(removeChar('eloquent'));

// const disemvowel = str => str.replace(/[aeiou]/gi, '');
// console.log(disemvowel('This website is for losers XAS!'));

// function accum(s) {
//     const out = [];
//
//     s = s.toLowerCase().split('');
//
//     s.forEach((item, index) => {
//         const arr = [];
//         for (let i = 0; i < index+1; i++) {
//             i === 0 ? arr.push(item.toUpperCase()) : arr.push(item);
//         }
//         out.push(arr.join(''));
//     });
//
//     return out.join('-');
// }
// console.log(accum('RqaEzty'));

// const apple = x => Math.pow(+x, 2) > 1000 ? 'It\'s hotter than the sun!!' : 'Help yourself to a honeycomb Yorkie for the glovebox.'
// console.log(apple('50'));


// const wordToBin = str => str.split('').map(i => 0 + i.charCodeAt().toString(2));
// console.log(wordToBin('man'));

// const spinWords = string => string.split(' ').map(item => {return item.length > 4 ? item.split('').reverse().join('') : item;}).join(' ');
// console.log(spinWords('Hey fellow warriors'));

// // const howManyLightsabersDoYouOwn = name => 'Zach' ? 18 : 0;
// const howManyLightsabersDoYouOwn = name => name === 'Zach' ? 18 : 0;
// console.log(howManyLightsabersDoYouOwn('Zach'));

// const average = scores => Math.round(scores.reduce((a,b) => a+b) / scores.length);
// console.log(average([49,3,5,300,7]));

// function cleanString(s) {
//     s = s.split('');
//
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] === '#') i++;
//         if (s[i+1] === '#') {
//             s.splice(i,2);
//             i = -1;
//         }
//     }
//
//     return s.join('').replace(/#/g, '');
// }
// console.log(cleanString('####'));

// const evenLast = n => n.reduce((a, b, i) => i % 2 === 0 ? a+b : a, 0) * n[n.length - 1] || 0
// const evenLast2 = n => n.reduce((a, b, i) => i % 2  !== 0 ? a : a+b, 0) * n[n.length - 1] || 0
// const evenLast3 = n => n.reduce((a, b, i) => i % 2 ? a : a+b, 0) * n[n.length - 1] || 0
// // const evenLast2 = numbers => numbers.length < 1 ? 0 : numbers
// //     .map((j, i) => i%2 === 0 ? j : 0)
// //     .reduce((a,b) => a+b) * numbers[numbers.length-1];
// // function evenLast(numbers) {
// //     let out = 0;
// //
// //     for (let i = 0; i < numbers.length; i++) {
// //         if (i%2 === 0) out += numbers[i];
// //     }
// //
// //     return numbers.length < 1 ? 0 : out * numbers[numbers.length-1];
// // }
// console.log(evenLast([2, 3, 4, 5]));

// const spEng = sentence => /english/i.test(sentence);
// console.log(spEng('asenglisahds'));

// function vowelIndices(word){
//     let out = [];
//
//     word.split('').forEach((item, index) => {
//         if (/[aeiouy]/i.test(item)) out.push(index+1);
//     });
//
//     return out;
// }
// console.log(vowelIndices('MKQyYRRFnjLQZVFQlZ'));

// 5kuy НЕ ЗАКОНЧЕНА!
// function holiday(x, weekDay, month, yearNumber) {
//     let currentWeekDay = 0,
//         currentLeap = 0;
//
//     const monthsLeap = {
//         "January": 0,
//         "February": 3,
//         "March": 4,
//         "April": 7,
//         "May": 9,
//         "June": 12,
//         "July": 14,
//         "August": 17,
//         "September": 20,
//         "October": 22,
//         "November": 25,
//         "December": 27
//         },
//         monthsNormal = {
//         "January": 0,
//         "February": 3,
//         "March": 3,
//         "April": 6,
//         "May": 8,
//         "June": 11,
//         "July": 13,
//         "August": 16,
//         "September": 19,
//         "October": 21,
//         "November": 24,
//         "December": 26
//         },
//         week = {"Monday": 1, "Tuesday": 2, "Wednesday": 3, "Thursday": 4, "Friday": 5, "Saturday": 6, "Sunday": 7};
//
//     const getBeginNumber = (yearNumber - 2013),
//         firstWeekDay = 2,
//         normIndex = [3,3,6,8,11,13,16,19,21,24,26],
//         leapIndex = [3,4,7,9,12,14,17,20,22,25,27];
//
//     for (i = 2017; i <= yearNumber; i+=4) {
//         currentLeap += 1;
//     }
//
//     if (getBeginNumber + firstWeekDay === 7) currentWeekDay = 1;
//     else if (getBeginNumber + firstWeekDay + currentLeap > 7) currentWeekDay = (getBeginNumber + firstWeekDay + currentLeap) % 7;
//     else currentWeekDay = getBeginNumber + firstWeekDay + currentLeap;
//     // console.log(currentWeekDay);
//
//     let index = 0;
//
//     if ((monthsLeap[month] + currentWeekDay) > 7) index = (monthsLeap[month] + currentWeekDay) % 7;
//     if ((monthsLeap[month] + currentWeekDay) % 7 === 7) index = 1;
//     if ((monthsLeap[month] + currentWeekDay) % 7 === 0) index = 7;
//     // console.log(index);
//
//     //суббота - пятн = 1 + 1 + (7 * (3-1)) = 19
//     let out = 1 + ((x - 1) * 7)  + (week[weekDay] - index);
//
//     return out;
// }
// console.log(holiday(5,"Thursday","November",2016));
// const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
//     lengths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
//     week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
// // нояб 2016 начинается со вторника
// // среда - вторник = 1 (разница между 1м вторником и запрашиваемыйм днем)
// // число первой среды === 1е число(вторник) + 1
// // число второй среды === 1 + 1 + 7
// // число третьей среды === 1 + 1 + 7 + 7
// // число четвертой среды === 1 + 1 + 7 + 7 + 7
// // число пятой среды === 1 + 1 + 7 + 7 + 7 + 7
// // или (x - 1) * 7 + (1 + (вторник - среда));
// //3я суббота июля / пятн
// // суббота - пятн = 1 + 1 + (7 * (3-1)) = 19
// // первое число 2013 - вторник
// // первое число 2014 - среда
// // первое число 2015 - четверг
// // первое число 2016(L) - пятница
// // первое число 2017 - воскресенье
// // первое число 2018 - понедельник
// // первое число 2019 - вторник
// // первое число 2020(L) - среда
// // первое число 2021 - пятница
// //если 31 день, то последний день месяца = первый день недели + 2
// //если 30 день, то последний день месяца = первый день недели + 1
// //если 28 день, то последний день месяца = первый день недели - 1
// //если 29 день (високосный), то последний день месяца = первый день недели
// //// индекс 1го дня месяца + текущий индекс = res
// // res > 7 ? res % 7 : res;
// // res % 7 === 7 ? res = 1
// // NORM
// // Ян/Фев 3  //  ФЕВ текущий индекс 3
// // Фев/Март 0  //  МАРТ текущий индекс 3
// // Мар/Апр 3  //  АПР текущий индекс 6
// // Апр/Май 2  //  МАЙ текущий индекс 8
// // Май/Июнь 3  //  ИЮНЬ текущий индекс 11
// // Июнь/Июль 2  //  ИЮЛЬ текущий индекс 13
// // Июль/Авг 3  //  АВГтекущий индекс 16
// // Авг/Сен 3  //  СЕНТ текущий индекс 19
// // Сен/Окт 2  //  ОКТтекущий индекс 21
// // Окт/Нояб 3  //  НОЯБ текущий индекс 24!!!!!
// // Нояб/Дек 2  //  ДЕК текущий индекс 26
// //
// // LEAP
// // Ян/Фев 3  //  ФЕВ текущий индекс 3
// // Фев/Март 1  //  МАРТ текущий индекс 4
// // Мар/Апр 3  //  АПР текущий индекс 7
// // Апр/Май 2  //  МАЙ текущий индекс 9
// // Май/Июнь 3  //  ИЮНЬ текущий индекс 12
// // Июнь/Июль 2  //  ИЮЛЬ текущий индекс 14
// // Июль/Авг 3  //  АВГтекущий индекс 17
// // Авг/Сен 3  //  СЕНТ текущий индекс 20
// // Сен/Окт 2  //  ОКТтекущий индекс 22
// // Окт/Нояб 3  //  НОЯБ текущий индекс 25
// // Нояб/Дек 2  //  ДЕК текущий индекс 27

// const lovefunc = (flower1, flower2) => (flower1 + flower2) % 2 !== 0;
// console.log(lovefunc(2, 4));

// function calculate(str) {
//     let plus = [],
//         minus = [];
//
//     str = str
//         .replace(/[lusin]/g, '')
//         .replace(/[p]/g, '-p-')
//         .replace(/[m]/g, '-m-')
//         .split('-');
//
//     for (let i = 0; i < str.length; i++) {
//         if (str[i-1] === 'p' || str[i-1] === undefined) plus.push(+str[i]);
//         if (str[i-1] === 'm') minus.push(+str[i]);
//     }
//
//     if (plus.length > 0) plus = plus.reduce((a,b) => a+b);
//     if (minus.length > 0) minus = minus.reduce((a,b) => a+b);
//
//     return String(plus-minus);
// }
// console.log(calculate('1minus2minus3minus4'));

// const sumStr = (a, b) => String(+a + +b);
// console.log(sumStr('4', '5'));

// const shorter_reverse_longer = (a,b) => a.length < b.length ? a+b.split('').reverse().join('')+a : b+a.split('').reverse().join('')+b;
// console.log(shorter_reverse_longer("first", "abcde"));

// function count (string) {
//     const out = {};
//
//    string.split('').forEach(i => {
//        out[i] = 0;
//        string.split('').forEach(j => i === j ? out[i] += 1 : 0);
//    });
//
//    return out;
// }
// console.log(count('aba'));

// const removeExclamationMarks = s => s.replace(/!/g, '');
// console.log(removeExclamationMarks('Hello World!'));

// const chessKnight = cell =>
//     (cell[0] === 'a' || cell[0] === 'h') ? [2, 3, 4, 4, 4, 4, 3, 2][cell[1]-1] :
//     (cell[0] === 'b' || cell[0] === 'g') ? [3, 4, 6, 6, 6, 6, 4, 3][cell[1]-1] :
//     [4, 6, 8, 8, 8, 8, 6, 4][cell[1]-1];
// console.log(chessKnight('d4'));

// const getRealFloor = n => n - (n>12 ? 2 : n>0 ? 1 : 0);
// console.log(getRealFloor(13));

// const printerError = s => s.replace(/[a-m]/g, '').length +'/' +s.length;
// // const printerError = s => s.replace(/[abcdefghijklm]/g, '').length +'/' +s.length;
// console.log(printerError('aaaxbbbbyyhwawiwjjjwwm'));

// function sortStringsByVowels(strings){
//     // console.log(strings);
//     const outObj = [],
//         out = [];
//
//     strings.forEach(item => {
//         let count = 0,
//             target = item.match(/[aeiouAEIOU]/g),
//             lenghtQ = 0;
//
//         if (target !== null) lenghtQ = target.length;
//
//         for (let i = 0; i < lenghtQ; i++) {
//             let pos = 0;
//             let posNum = item.indexOf(target[i], pos);
//             if (posNum === -1) break;
//             pos += posNum;
//             count++;
//         }
//
//         outObj.push({name: count, body: item});
//     });
//
//     strings.forEach(item => {
//         let target = item.match(/[aeiouAEIOU]/g),
//             lenghtQ = 0,
//             countObj = 0;
//
//         if (target !== null) lenghtQ = target.length;
//
//         const newArr = item.split('');
//         for (let i = 0; i < newArr.length; i++) {
//             if (newArr[i].match(/[aeiouAEIOU]/g) && newArr[i+1].match(/[aeiouAEIOU]/g)) {
//                 countObj++;
//                 b++
//             }
//         }
//
//         console.log(countObj);
//         // outObj.push({couner: countObj});
//     });
//
//     // console.log(outObj);
//
//     outObj.sort((a, b) => b.name - a.name)
//         .forEach(item => out.push(item.body));
//
//     // return out;
// }
// console.log(sortStringsByVowels(['none', 'uuu', 'Yuuuge!!']));
// // function sortStringsByVowels(strings){
// //     // console.log(strings);
// //
// //     const outObj = [],
// //         out = [];
// //
// //     strings.forEach(item => {
// //         let count = 0,
// //             target = item.match(/[aeiouAEIOU]/g),
// //             lenghtQ = 0;
// //
// //         if (target !== null) lenghtQ = target.length;
// //
// //         for (let i = 0; i < lenghtQ; i++) {
// //             let pos = 0;
// //             let posNum = item.indexOf(target[i], pos);
// //             if (posNum === -1) break;
// //             pos += posNum;
// //             count++;
// //         }
// //
// //         outObj.push({name: count, body: item});
// //     });
// //
// //     outObj.sort((a, b) => b.name - a.name)
// //         .forEach(item => out.push(item.body));
// //
// //     return out;
// // }

// const find_average = array => array.reduce((a,b) => a+b) / array.length;
// console.log(find_average([1,2,3]));

// function lastSurvivor(letters, coords) {
//     letters = letters.split('');
//
//     coords.forEach(item => letters.splice(item, 1));
//
//     return letters.join('');
// }
// console.log(lastSurvivor('foiflxtpicahhkqjswjuyhmypkrdbwnmwbrrvdycqespfvdviucjoyvskltqaqirtjqulprjjoaiagobpftywabqjdmiofpsr', [
//     8, 59, 52, 93, 21, 40, 88, 85, 59, 10, 82, 18,
//     74, 59, 51, 47, 75, 49, 23, 56,  1, 33, 39, 33,
//     34, 44, 25,  0, 51, 25, 36, 32, 57, 10, 57, 12,
//     51, 55, 24, 55, 31, 49,  6, 15, 10, 48, 27, 29,
//     38, 30, 35, 42, 23, 32,  9, 39, 39, 36,  8, 29,
//     2, 33, 14,  3, 13, 25,  9, 25, 18, 10,  1,  2,
//     20,  8,  2, 11,  5,  7,  0, 10, 10,  8, 12,  3,
//     5,  1,  7,  7,  5,  1,  4,  0,  4,  0,  0,  1
// ]));

// function countBy(x, n) {
//     const z = [];
//
//     for (let i = x; i <= x * n; i ++) {
//         if (i % x) continue;
//         else z.push(i);
//     }
//
//     return z;
// }
// console.log(countBy(2, 5));

// const reverseWords = str => str.split(' ').reverse().join(' ');
// console.log(reverseWords('The greatest victory is that which requires no battle'));

// const makeUpperCase = str => str.toUpperCase();
// console.log(makeUpperCase('hello'));

// const digitize = n => n.toString().split('').reverse().map(n => +n);
// console.log(digitize(348597));

// function findLongest(str) {
//     let longest = 0
//     str = str.split(" ");
//
//     for (let i of str) {
//         i.length > longest ? longest = i.length : true
//     }
//     return longest
// }
// console.log(findLongest('The quick white fox jumped around the massive dog'));

// const check = (a, x) => a.includes(x);
// console.log(check([66, 101], 66));

// function sumMix(x){
//     console.log(x);
//     return x.reduce((a, b) => +a + +b);
// }
// console.log(sumMix([9, 3, '7', '3']));

// function insurance(age, size, numofdays){
//     const a = [];
//
//     age < 25 ? a.push(10) : null;
//     size === 'economy' ? a.push(0) : size === 'medium' ? a.push(10) : a.push(15);
//
//     return numofdays >= 0 ? a.reduce((a, b) => a + b, 50) * numofdays : 0;
// }
// console.log(insurance(18, "medium", 7))

// function between(a, b) {
//     let out = [];
//     for (let i = a; i <= b; i++) {
//         out.push(i);
//     }
//
//     return out;
// }
// console.log(between(-1, 4));

// function middleMe(N, X, Y){
//     let out = [];
//
//     for (let i = 0; i < N / 2; i++) {
//         out.push(Y);
//     }
//
//     return N % 2 === 0 ? [...out, X, ...out].join('') : X;
// }
// console.log(middleMe(19, 'z', '#'));