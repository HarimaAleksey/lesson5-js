// function discountPrices(prices, discount) {
//     const discounted = [];

//     for(let i = 0; i < prices.length; i++) {
//         var discountPrice = prices[i] * ( 1 - discount);
//         let finalPrice = Math.round(discountPrice * 100) / 100;
//         discounted.push(finalPrice);
//     }
//     console.log(discountPrice);

//     return discounted;
// }

// console.log(discountPrices([2.2, 4, 1, 19], 0.25))

// const _person = {
//     2: 'Timofey'
// };
// _person.name = 'Andrey';
// console.log(_person.name);

// global
//     local function
//         local

// const -> let -> var

// function getArguments() {
//     console.log(arguments); // arguments - это объект, позволяющий получить доступ к параметрам передаваемых в функцию         
// }

// console.log(getArguments([1, 2, 3]));
// console.log(getArguments('test'));


// ЗАМЫКАНИЕ - замыкание это функция, у которой есть доступ к своей 
// внешней функции по области видимости, даже после того, как внешняя функция завершилась
// т.е. замыкание может хранить и получать доступ к переменным, и аргументам своей внешней ф-и даже после завершения

// Пример 1
// function createCalc(n) {
//     return function() { // ф-я замыкание
//         console.log(1000 * n);
//     }
// }

// const calc = createCalc(42);
// console.log(calc);
// calc();
// console.log('--------------------');
// let x = 2;
// const calc2 = createCalc(x);
// calc2();
// console.log('--------------------');
// x = 3;
// calc2();


// Пример 2
// function createIncerementor(n) {
//     return function(num) {
//         return n + num;
//     }
// }

// const addOne = createIncerementor(1);
// const addTen = createIncerementor(10);
// console.log(addOne(10)); // 11
// console.log(addTen(40)); // 50


// Пример 3
// function urlGenerator(domainZone) {
//     return function(url) {
//         return `https://${url}.${domainZone}`;
//     }
// }

// const comUrl = urlGenerator('com');
// const ruUrl = urlGenerator('ru');

// console.log(comUrl('google'));
// console.log(ruUrl('yandex'));