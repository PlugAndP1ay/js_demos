formAcceptAge = document.forms.formAcceptAge;
let btnAcceptAge = formAcceptAge.btnAcceptAge;
let inputAge = formAcceptAge.age;
btnAcceptAge.onclick = ()=>{
    if(inputAge.value < 18){
        alert("Вы не совершеннолетний!")
        return false;
    }
}




let navBar = document.getElementById("nav-bar");
let menu1 = document.getElementById("menu1");
let menu2 = document.getElementById("menu2");
let menu3 = document.getElementById("menu3");
let menu4 = document.getElementById("menu4");
let isHide = true;
let shownMenu = 0;

let showHideMenu = (menu, interval) =>{
    setTimeout(() =>{
        menu.style.display = isHide ? "block" : "none";
        shownMenu++;
    }, interval);
};


navBar.onclick = function() {
    showHideMenu(menu1, 100);
    showHideMenu(menu2, 200);
    showHideMenu(menu3, 300);
    showHideMenu(menu4, 400);
     if(shownMenu % 4 === 0 && shownMenu!==0) {
         shownMenu = 0;
         isHide = !isHide;
     }
};


////коментарии
let hideShowComment = ($) =>{
    let p = $.parentElement.getElementsByTagName("p").item(0);
    if(p.style.display === "" || p.style.display === "block"){
        p.style.display = "none";
        $.innerText = `Показать коментарий`;
    }
    else {
        p.style.display = "block";
        $.innerText = 'Свернуть коментарий';
    }

};

let divComments = document.getElementById('comments');

const comments = [{title: "DFjhf", body: "DFjhsd kjhf ajshdf jkahsdfj"}, {title: "3h45 jk35", body: "Dsjdf jasdf sdf gjh sdfhg sdhg kdfshg sdjkfhg kfgkjg lhdfg khsdfh sdfjg hsdfjkgh ghghdslhg"},{title: "2342jkh kjh", body: "KJh fhlsd ljkhasdlkfh askldf asdf "},{title: "DFjhf", body: "Dkldhof uysdiou ysuh lfhljksaf dsgsd gsdg"},{title: "oiuo  sdfg", body: "DGhj ahg sdf8g 45h p9284 "},{title: "87234 gfd", body: "s dfsd 7f9a8s da fas fas fa"},{title: "8374 12g  w fwe ", body: "98375 4iuhetr uwht ert wert wert wer twerr twe rtwe wer twert "},{title: "7y3jb4j ", body: "uwoierhjb 9813 4s dkjfh askdfasf"},{title: "yugwjeh", body: "kjhk skfh ashdf hsdkfj "}];

comments.forEach((values)=>{
    let divComment = document.createElement("div");
    divComment.className = "comment";

    divComment.innerHTML = `
        <h3>${values.title}</h3>
        <p>${values.body}</p>
        <button onclick="hideShowComment(this)">Свернуть коментарий</button>
    `;

    divComments.appendChild(divComment);
});




//////////2 форми   5 exercises!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
let text1 = document.form1.text1;
let thisText1;
let onInptText1 = ($)=>{
    thisText1 = $;
}
let text2 = document.form1.text2;
let text3 = document.form2.text3;
let text4 = document.form2.text4;

btnLog = document.getElementById("btnLog");
btnLog.onclick = ()=>{

    // console.log(`text1:${text1}\n text2:${text2}\\n text3:${text3}\\n text4:${text4}\\n`);
    console.log(thisText1.value);
}


//////функція яка генерує таблицю 6 завдання

let generateTable = (row, col, innerDiv) => {
    let divka = document.getElementById(innerDiv);
    console.log(divka);
    let table = document.createElement("table");

    for (let i = 0; i < row; i++){
        let t = table.insertRow(i);
        for(let j = 0; j < col; j++){
            // table.insertRow(i).insertCell(j); не работает так)
            t.insertCell(j).innerText = `[${i+1}][${j+1}]`;
        }
    }

    divka.appendChild(table);

}




generateTable(5,6, "table1");



