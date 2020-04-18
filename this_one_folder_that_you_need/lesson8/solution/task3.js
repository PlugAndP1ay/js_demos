const btnSave = document.getElementById('btnSave');
const btnBack = document.getElementById('btnBack');
const btnNext = document.getElementById('btnNext');
const textArea = document.getElementById('textarea');

let history = JSON.parse(localStorage.getItem('history')) || [];
let index = history.length !== 0 ? history.length - 1 : -1;

loadFromLocalStorage(index);

textArea.oninput = () => {
    btnSave.disabled = false;
}

console.log(index);
console.log(history);

btnSave.onclick = ev => {

    let value = textArea.value;
    if (!value) {
        const saveOrNot = confirm("Вы хотите сохранить пустой текст?");
        if (!saveOrNot)
            return;
    }
    history.push(value);
    index++;
    localStorage.setItem('history', JSON.stringify(history));
    btnSave.disabled = true;
    alert("Сохранено!");
}

function loadFromLocalStorage(ind) {
    if (ind !== -1) {
        textArea.value = history[ind];
    }
}

btnBack.onclick = ev => {
    if (index > 0) {
        index--;
        loadFromLocalStorage(index);
    }
}

btnNext.onclick = ev => {
    if (index + 1 !== history.length) {
        index++;
        loadFromLocalStorage(index);
    }
}
