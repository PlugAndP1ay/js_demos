function nextExercise(numberOfExercise) {
    alert(`Нажмите ОК\n для перехода к следующему заданию(${numberOfExercise})! `);
    console.clear();
}

const mas = [];

for (let i = 0; i < 10; i++) {
    mas.push(Math.floor(Math.random() * (200)-100));
}
console.log(mas.toString());

console.log(`Just Sort(): ${mas.sort()}`);

console.log(`Sort and CallBack: ${mas.sort((x, y) => y - x)}`);


console.log('Filter(кратные 3): ' + mas.filter(value => value % 3 === 0));

const filterMod10 = mas.filter(value=>value % 10 === 0);
console.log(`Filter(кратные 10):  ${filterMod10.length !== 0 ? filterMod10 : 'Нету!'}`);

console.log('ForEch:');
mas.forEach((value, i) => console.log(`${i + 1} елемент массива: ${value}`));

const tripleMas = mas.map(value => value * 3);
console.log(`Масив * 3: ${tripleMas}`);


//----------------------------------------------------------
nextExercise(2);


const masWord = ["Мама", "Папа", "Дед", "Бабушка", "Внучка", "Жучка", "Внук", "Сын", "Отец", "Брат", "Сват", "Зять нечего взять", "Свекровь", "Шурин","Сестра"];
console.log(masWord.toString());

console.log("Sort(по возростанию):\n" + masWord.sort((a, b) => a > b ? 1 : -1).toString());
console.log("Sort(по убиванию):\n" + masWord.sort((a, b) => a > b ? -1 : 1).toString());

console.log(`Слова больше 4 символов:\n${masWord.filter(value => value.length > 4)}`);

const masWordMap = [];
masWord.map(value => masWordMap.push(value + "!"));
console.log("Map(+!): " + masWordMap.toString());


nextExercise(3);

let users = [ {name: 'vasya', age: 31, status: false}, {name: 'petya', age: 30, status: true}, {name: 'kolya', age: 29, status: true}, {name: 'olya', age: 28, status: false}, {name: 'max', age: 30, status: true}, {name: 'anya', age: 31, status: false}, {name: 'oleg', age: 28, status: false}, {name: 'andrey', age: 29, status: true}, {name: 'masha', age: 30, status: true}, {name: 'olya', age: 31, status: false}, {name: 'max', age: 31, status: true} ];

console.log(users);

console.log(users.sort((a, b) => a.age > b.age ? 1: -1));
console.log(users.sort((a, b) => a.age > b.age ? -1: 11));
