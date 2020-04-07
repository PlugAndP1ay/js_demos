function Description(name, specification, atr) {
    this.name = name;
    this.specification = specification;
    this.atr = atr;

    this.toDescribe = function () {
        console.log(this);
    }
}

const a = new Description('a', 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок', [{titleOfAttr: "href", actionOfAttr: "Задает адрес документа, на который следует перейти."},{titleOfAttr: "rel", actionOfAttr: "Отношения между ссылаемым и текущим документами."}]);
a.toDescribe();

const div = new Description('div', 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.', [{titleOfAttr: "align", actionOfAttr: "Задает выравнивание содержимого тега <div>."},{titleOfAttr: "title", actionOfAttr: "Добавляет всплывающую подсказку к содержимому."}]);
div.toDescribe();