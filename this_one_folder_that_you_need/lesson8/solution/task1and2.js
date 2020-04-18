getFromLocalStorage();


let logToLocalStorage = ($) => {
    switch ($.type) {
        case "checkbox":
            localStorage.setItem($.id, $.checked)
            break;
        case "radio":
            const elementsByName = document.getElementsByName($.name);
            if (elementsByName.length > 1) {
                for (const elementByName of elementsByName) {
                    localStorage.setItem(elementByName.id, $.id !== elementByName.id ? "false" : "true");
                }
            }
            break;
        default:
            localStorage.setItem($.id, $.value);
            break;
    }

};

function getFromLocalStorage() {
    if (localStorage.length !== 0) {
        for (let name in localStorage) {
            let val = localStorage.getItem(name);
            let elementById = document.getElementById(name);
            if (elementById) {
                switch (elementById.type) {
                    case "checkbox":
                    case "radio":
                        elementById.checked = JSON.parse(val);
                        break;
                    default:
                        elementById.value = val;
                        break;
                }
            }
        }
    }
}




