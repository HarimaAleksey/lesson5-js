// Работа с массивом объектов

// filter - создаёт новый массив со всеми элементами, 
// прошедшими проверку, задаваемую в передаваемой функции.
const cart = [
    { name: 'Drink', price: '11.12$' },
    { name: 'Food', price: '10.12 руб.' },
    { name: 'Alcohol', price: '15.12$' },
];

let foodOrders = cart.filter(function(obj) {
    return obj.name === 'Food';
});
console.log(foodOrders); // [{name: 'Food', price: 10.12}]

foodOrders = cart.filter(obj => obj.name === 'Food');
console.log(foodOrders); // [{name: 'Food', price: 10.12}]

// Примечание: 
//есть метод схожий с filter, но который возвращает один объект, а не массив
// это метод find()
// пример:
foodOrders = cart.find(x => x.name === 'Food');
console.log(foodOrders); // {name: 'Food', price: 10.12}

// оба варианта поиска выпивки больше 10 сработает, 
// но первый способ гораздо предпочтительнее
let drinkOverTenOrders = cart.filter(x => x.name === 'Drink' && parseInt(x.price) > 10);
console.log(drinkOverTenOrders);
drinkOverTenOrders = cart.filter(x => x.name === 'Drink').filter(x => parseInt(x.price) > 10);
console.log(drinkOverTenOrders);

// метод map - перебирает массив, возвращая новый массив
const data = [
    { id: 1, name: "Soda", price: 7.12, cost: 1.04, size: "4oz", },
    { id: 2, name: "Beer", price: 6.50, cost: 2.45, size: "8oz" },
    { id: 3, name: "Margarita", price: 12.99, cost: 4.45, size: "12oz" }
];

let drinkMenu = data.map(x => ({ name: x.name, price: x.price, size: x.size }));
console.log(drinkMenu);
// [
//     {
//         "name": "Soda",
//         "price": 3.12,
//         "size": "4oz"
//     },
//     {
//         "name": "Beer",
//         "price": 6.5,
//         "size": "8oz"
//     },
//     {
//         "name": "Margarita",
//         "price": 12.99,
//         "size": "12oz"
//     }
// ]

console.log(drinkMenu.sort((a,b) => a.price - b.price));