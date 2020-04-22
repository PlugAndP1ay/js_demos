const allNotes = document.getElementById('allNotes');
const fio = document.getElementById('fio');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const firm = document.getElementById('firm');
const department = document.getElementById('department');
const btnSave = document.getElementById('btnSave');
let index = localStorage.getItem('index') || 0;
console.log(index);

function writeData(){
    let arr = [];
    arr.push(fio.value);
    arr.push(phone.value);
    arr.push(email.value);
    arr.push(firm.value);
    arr.push(department.value);
    localStorage.setItem(index.toString(), JSON.stringify(arr));
    index++;
    localStorage.setItem('index', index);
}

btnSave.onclick = ev => {
    writeData();

}

