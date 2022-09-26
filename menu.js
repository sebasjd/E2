class pizza {
    constructor(ID, nombre, ingredientes, precio, img) {
        this.ID = ID
        this.nombre = nombre
        this.ingredientes = ingredientes
        this.precio = precio
        this.img = img
    }
}

let pizzas = [muzzarella = new pizza(`1`, `Muzzarella`, ingredientes = [`tomate`, `muzzarella`, `oregano`], 800, `muzza.jpg`),
    especial = new pizza(`2`, `Especial`, ingredientes = [`tomate`, `muzzarella`, `jamon`, `huevo`], 1000, `espe.jfif`),
    cuatroQuesos = new pizza(`3`, `Cuatro Quesos`, ingredientes = [`tomate`, `muzzarella`, `parmesano`, `probolone`, `barra`], 1200, `4q.png`),
    palmitos = new pizza(`4`, `Palmitos`, ingredientes = [`tomate`, `muzzarella`, `palmitos`, `salas golf`], 1300, `palmitos.jpg`),
    anana = new pizza(`5`, `Anana`, ingredientes = [`tomate`, `muzzarella`, `anana`, `azucar morena`], 1500, `anana.jpg`),
    sinQueso = new pizza(`6`, `Sin Queso`, ingredientes = [`tomate`, `oregano`], 500, `sinq.jpg`),
]

// guardo el array en el localStorage
const saveLocalStorage = (pizzas) => {
    localStorage.setItem('pizzas2', JSON.stringify(pizzas))
};
saveLocalStorage(pizzas)