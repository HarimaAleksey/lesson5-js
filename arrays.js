// Способы объявления
// 1 вариант
const students = new Array(42); // в этой ситуации мы зададим длину(lenght) массива
console.log(students);

// 2 вариант
const firms = [42]; // в этом случае 42 будет под 0 индексом в массиве
console.log(firms);

const cities = ['Moscow', 'St. Petersburg', 'Novosibirsk', 'Omsk', 'Tomsk'];
cities[2]; // Novosibirs
console.log(cities);

// Удаление элемента массива
delete cities[3]; // Удаление элемента массива оставляет дырку
console.log(cities); // ['Moscow', 'St. Petersburg', 'Novosibirsk', empty, 'Tomsk']
// Примечание: .length после удаления не поменяется, т.е. будет = 5. 
// Потому что длина это не кол-во элементов, а индекс + 1

