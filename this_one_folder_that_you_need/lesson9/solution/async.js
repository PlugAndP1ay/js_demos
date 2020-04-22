const btn = document.createElement("button");
btn.innerText = "Розпочати новий день";
document.body.appendChild(btn);
const alarm = document.getElementById('alarm');
const iqos = document.getElementById('iqos');
const heets = document.getElementById('heets');
const eggs = document.getElementById('eggs');
const socks = document.getElementById('socks');
const fuel = document.getElementById('fuel');
const work = document.getElementById('work');





btn.onclick = ev => {
    btn.disabled = alarm.disabled = iqos.disabled = heets.disabled = eggs.disabled = socks.disabled = fuel.disabled = work.disabled = true;
    wakeUp(alarm.checked)
        .then(value => {
            console.log(value);
            return toSmoke(iqos.checked, heets.value);
        })
        .then(countHeets => {
            console.log("Нікотин попав в організм)");
            console.log(`${countHeets} залишилось в пачці`);
            heets.value = countHeets;
            return haveBreakfast(eggs.value);
        })
        .then(countEggsLeft => {
            console.log(`В холодильнику залишилось ${countEggsLeft}`);
            eggs.value = countEggsLeft;
            return toDressUp(socks.value);
        })
        .then(countSocksLeft => {
            console.log("Ти одягнувся");
            console.log(`${countSocksLeft} носків залишилось чистими`);
            socks.value = countSocksLeft;
            return toGoWork(fuel.value);
        })
        .then(countFuelLeft => {
            console.log("Ти приїхав на роботу");
            console.log(`${countFuelLeft} літрів пального в баку`);
            fuel.value = countFuelLeft;
            return toWork(work.checked);
        })
        .then(value => {
            console.log(value);
            return goHome(fuel.value)
        })
        .then(countFuelLeft=>{
            console.log('Ти приїхав додому');
            console.log(`${countFuelLeft} літрів пального в баку`);
            fuel.value = countFuelLeft;
        })
        .catch(reason => console.log(reason))
        .finally(()=>{
            console.log("_________День закінчено________");
            btn.disabled = alarm.disabled =iqos.disabled = heets.disabled = eggs.disabled = socks.disabled = fuel.disabled = work.disabled = false;
        })

}

function wakeUp(isAlarmWork) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isAlarmWork) {
                resolve("Прокинувся!");
            } else {
                reject("Будильник зламався");
            }
        }, 500);
    })
}

function toSmoke(isIQOSCharged, countHeets) {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            if (isIQOSCharged && countHeets > 0) {
                countHeets--;
                resolve(countHeets);
            } else if (!isIQOSCharged) {
                reject("IQOS розряджений!");
            } else {
                reject("Стіки закінчились!");
            }
        }, 1000);
    }))
}

function haveBreakfast(countEggs) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (countEggs > 2) {
                countEggs -= 3;
                console.log("Яєчня потрапила у шлунок)");
                resolve(countEggs);
            } else {
                reject("Нема яєць - їдь у Мак");
            }
        }, 1500);
    })
}


function toDressUp(countSocks) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (countSocks > 1) {
                countSocks -= 2;
                resolve(countSocks);
            } else {
                reject("No socks!");
            }
        }, 1000);
    })
}

function toGoWork(countFuelInCar) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (countFuelInCar > 5) {
                countFuelInCar -= 5;
                resolve(countFuelInCar);
            } else {
                reject("Нема пального! Йди на метро");
            }
        }, 2000);
    })

}

function toWork(isWorkDone) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(isWorkDone){
                resolve("Робота зроблена!");
            }
            else{
                reject("Тебе звільнили з роботи!");
            }
        },1500);
    })

}

function goHome(countFuelInCar) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (countFuelInCar > 5) {
                countFuelInCar -= 5;
                resolve(countFuelInCar);
            } else {
                reject("Нема пального! Йди на метро");
            }
        }, 2000);
    })

}
