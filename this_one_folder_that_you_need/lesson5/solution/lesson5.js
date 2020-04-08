// function Description(name, specification, atr) {
//     this.name = name;
//     this.specification = specification;
//     this.atr = atr;
//
//     this.toDescribe = function () {
//         console.log(this);
//     }
// }
//
// const a = new Description('a', 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок', [{titleOfAttr: "href", actionOfAttr: "Задает адрес документа, на который следует перейти."},{titleOfAttr: "rel", actionOfAttr: "Отношения между ссылаемым и текущим документами."}]);
// a.toDescribe();
//
// const div = new Description('div', 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.', [{titleOfAttr: "align", actionOfAttr: "Задает выравнивание содержимого тега <div>."},{titleOfAttr: "title", actionOfAttr: "Добавляет всплывающую подсказку к содержимому."}]);
// div.toDescribe();



class Descript{
    constructor(name, specification, atr){
        this.name = name;
        this.specification = specification;
        this.atr = atr;
    }
    toDescribe = function () {
        console.log(this);
    }

}

const a = new Descript('a', 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок', [{titleOfAttr: "href", actionOfAttr: "Задает адрес документа, на который следует перейти."},{titleOfAttr: "rel", actionOfAttr: "Отношения между ссылаемым и текущим документами."}]);
a.toDescribe();

let logObj = (obj) => {
    for (const key in obj) {
        if (typeof obj[key] !== typeof Math.sin) {
            if (typeof obj[key] === typeof null) {
                logObj(obj[key]);
            } else {
                console.log(obj[key]);
            }
        }
    }
};

let car = {
    manufacturer: 'Audi',
    model: 'A6',
    year: new Date(2002, 10),
    capacity: 2.5,
    speedLimit: 216,
    drive(){
        console.log(`Взлетаем на скорости ${car.speedLimit} м/с.`);
    },
    info(){
        logObj(car);
        // for(const key in car){
        //
        //     if(typeof car[key] !== typeof Math.sin){
        //         if(typeof car[key] === typeof null){
        //             for(const innerKey in car[key]){
        //                 console.log(car[key][innerKey]);
        //             }
        //         }else{
        //             console.log(`${car[key]}`);
        //         }
        //     }
        // }
        //console.log(`Производитель: ${this.manufacturer}\nМодель: ${this.model}\nГод производства: ${this.year}\nОб'ем двигателя: ${this.capacity}\nМаксимальная скорость: ${this.speedLimit}км/ч`);
        },
    increaseSpeed(speed){
        this.speedLimit += speed;
    },
    changeYear(newYear){   //it is impossible
        this.year = new Date(newYear);
    },
    addDriver(driver){
        this.driver = driver;
    }
};

console.log(`Об'єкт:`);
car.drive();
car.info();
car.increaseSpeed(50);
car.drive();
car.changeYear(Date.now());

let driverSchumacher = {
    firstName: 'Michael',
    secondName: 'Schumaher'
};

car.addDriver(driverSchumacher);

car.info();

console.log(car);

function Car2(manufacturer, model, year, speedLimit, capacity) {
    this.manufacturer = manufacturer;
    this.model = model;
    this.year = new Date(year);
    this.speedLimit = speedLimit;
    this.capacity = capacity;

    this.drive = function () {
        console.log(`Едем едем в соседнее село на дискотеку со скоростю ${this.speedLimit} км/ч.`);
    };
    this.info = function () {
        console.log(`Производитель: ${this.manufacturer}\nМодель: ${this.model}\nГод производства: ${this.year}\nОб'ем двигателя: ${this.capacity}\nМаксимальная скорость: ${this.speedLimit}км/ч`);
    };
    this.increaseSpeed = function (upSpeed) {
        this.speedLimit += upSpeed;
        console.log(`Максимальнаая скорость увеличена до ${this.speedLimit} км/ч`);
    };
    this.changeYear = function (newYear) {
        this.year = new Date(newYear);
    };

    this.addDriver = function (driver) {
        this.driver = driver;
    }

}

car2 = new Car2("BMV", "X6", 2010, 237, 3);
car2.drive();
car2.info();
car2.increaseSpeed(50);
car2.addDriver(driverSchumacher);
console.log(car2);
console.log('Класи:');

class Car3 {
    constructor(manufacturer, model, year, speedLimit, capacity){
        this.manufacturer = manufacturer;
        this.model = model;
        this.year = new Date(year);
        this.speedLimit = speedLimit;
        this.capacity = capacity;
    }

    drive(){
        //здесь будет просто копипаст с функции конструктор
        //так же как и в остальных методах
        //понимаю повторение мать учения
        //но не три раза подрят одно и то же писать
    }

}

let car3 = new Car3("dfd","sdfsf", 2000,500, 5);

class Cinderella {
    constructor(name, age, footSize){
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

class Prince {
    constructor(name, age, sizeShoes){
        this.name = name;
        this.age = age;
        this.sizeShoes = sizeShoes;
    }
}

const prince = new Prince("Люцифер", 518000);
let pimp = [];
pimp.push(new Cinderella("Василиса", 18, 38));
pimp.push(new Cinderella("Светик", 19, 36));
pimp.push(new Cinderella("Нина Матвеевна", 67, 42));
pimp.push(new Cinderella("Саша уборщица", 38, 40));
pimp.push(new Cinderella("Александра соседка", 25, 37));
pimp.push(new Cinderella("Фиона", 20, 39));
pimp.push(new Cinderella("Золушка", 17, 35));
pimp.push(new Cinderella("Борис", 55 , 45));
pimp.push(new Cinderella("Анушка", 21, 36));
pimp.push(new Cinderella("Анастасия", 24, 28));

let size = prompt("Какой размер туфелек?", "42");

prince.sizeShoes = parseInt(size);



for (let i = 0; i < pimp.length; i++){
    if(prince.sizeShoes === pimp[i].footSize){
        console.log(`${prince.name} нашел туфельку ${prince.sizeShoes} размера!\nОна пренадлежит:`);
        console.log(`${pimp[i].name} ${pimp[i].age} лет, ${pimp[i].footSize} размер ноги.`);
        console.log('И жили они долго и счастливо!');
        break;
    }
}
