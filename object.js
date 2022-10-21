// Способы объявления объекта
// Вариант 1
const student = new Object();
student['Name'] = 'Vasya';
student['Age'] = 23;
console.log(student);

// Вариант 2
const firm = {};
firm.CompanyName = 'Audi';
firm.Address = 'Vyazov';
// firm.Phone Number = '+734643693946'; // ошибка, исп. 1 вариант
firm['Phone Number'] = '+734643693946';


// Вариант 3
const novosibirsk = {
    'population': 15000000,
    'mayor': {
        'current': 'Anatoly Lokot',
        'last': 'Timofey Retunskih'
    }
};

// Удаление из объекта
console.log(novosibirsk);
delete novosibirsk['population']; // удаляем ключ значение из объекта
console.log(novosibirsk); // { "mayor": "Anatoly Lokot" }

// Проверка на существование ключа
const exists = 'population' in novosibirsk;
console.log(exists ? 'Exists' : 'not exists'); // 'not exists'

console.log(novosibirsk.mayor.last); //'Timofey Retunskih'


