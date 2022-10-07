const input = document.getElementById("input");
const h2 = document.getElementById("h2");
const h4 = document.getElementById("h4");
const btn = document.getElementById("btn");
const imgg = document.querySelector("#imgg");
const form = document.querySelector("form");

// Recupero el array de pizzas del localStorage
let getPizzas = JSON.parse(localStorage.getItem('pizzas2'));

//recupero última busqueda
const getLS = JSON.parse(localStorage.getItem('search'))

// Estado inicial del programa
const init = () => {
    input.value = getLS;
    input.value <= pizzas.length && input.value > 0 ? renderPizza(input.value) : input.value == "" ? renderPizza() : error("ID invalido");
    console.log(getLS);
    input.value = "";
}

init();




//  renderizar pizza
function renderPizza(inputID) {
    const laPizza = pizzas.filter((piza) => piza.ID == inputID)
    for (piza of laPizza) {
        h2.innerHTML = `${piza.nombre}`;
        h4.innerHTML = `$ ${piza.precio}`;
        h42.innerHTML = `${piza.ingredientes.join(", ")}`;
        imgg.setAttribute("src", `./images/${piza.img}`);
    }
}

// Función que se ejecuta si el resultado es erroneo
function error(mesage) {
    h2.innerHTML = mesage;
    h4.innerHTML = ``;
    h42.innerHTML = ``;
    imgg.setAttribute("src", `./images/error.png`);
}


//Función que guarda la última busqueda en el localStorage
const saveLS = (searched) => {
    localStorage.setItem('search', JSON.stringify(searched))
};

// acción del boton
btn.addEventListener('click', button)

function button(e) {
    e.preventDefault();
    var inputID = input.value.trim();
    inputID <= pizzas.length && inputID > 0 ? renderPizza(inputID) : inputID == "" ? error("Debe ingresar un ID") : error("ID invalido");
    saveLS(input.value);
    input.value = "";
}