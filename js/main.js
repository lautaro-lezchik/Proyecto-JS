/*-----------------------------------------------------------------------------*/
/*-------------------ELECTRODOMÉSTICOS AL DESCUENTO----------------------------*/
/*-----------------------------------------------------------------------------*/


// Crear una clase constructora 

class Producto {
    constructor (nombre, marca, color, precio, codigo) {
        this.nombre = nombre;
        this.marca = marca;
        this.color = color;
        this.precio = precio;
        this.codigo = codigo;
    }
}


//Creación de objetos

const producto1 = new Producto ("Aire Acondicionado", "Samsung", "Gris", 75000, "aa1" );

const producto2 = new Producto ("Heladera", "Gafa", "Negra", 53000, "he1" );

const producto3 = new Producto ("Lavarropas", "LG", "Negro", 60000, "la1" );



// Creación del carrito de compras y de precio final

const carritoDeCompras = [];

const precioFinal = [];


// Creo bucle para agregar productos al carrito

function elegir() {
    return (prompt ("Ingresa el número correspondiente al producto que desea comprar:\n" + "1- " + producto1.nombre + "\n" + "2- " + producto2.nombre + "\n" + "3- " + producto3.nombre));
};

let precio=0;

function continuarAgregando() {
    return (prompt ("¿Desea agregar más productos al carrito?\nSi: Presione 1\nNo: Presione 2 "));
};

do {
    switch (elegir()) {
        case "1":
            precio = producto1.precio;
            carritoDeCompras.push(producto1);
            precioFinal.push(producto1["precio"]);
            break;
        case "2":
            precio = producto2.precio;
            carritoDeCompras.push(producto2);
            precioFinal.push(producto2["precio"]);
            break;
        case "3":
            precio = producto3.precio;
            carritoDeCompras.push(producto3);
            precioFinal.push(producto3["precio"]);
            break;
    
        default:
            alert("No ha elegido un producto. Por favor recarge la página")
            break;
    };
    
} while (continuarAgregando()=="1");


// Si el producto debe ser enviado a domicilio se le aplica un recargo

let costoDeEnvio = 750;

let envio2 = prompt("Si:\n\n-desea que le enviemos el producto a su domicilio: presione 1 (se aplicará un recargo de $" + costoDeEnvio + ")\n\n-lo va a retirar en la tienda: presione 2");

switch (envio2) {
    case "1":
        precioFinal.push(costoDeEnvio);
        break;
    
    case "2":
        console.log("El producto está listo para retirar en la tienda");
        break;

        default:
            alert("No ha elegido una opción válida. Por favor recarge la página y vuelva a comenzar")
            break;
}

// Calculo la suma de todos los elementos del array precioFinal

let total = precioFinal.reduce((a, b) => a + b, 0);

// Obtener el día de la semana real para aplicar descuentos

const day = new Date();
let numDiaDeLaSemana = day.getDay();
let diaDeLaSemana = "";

let descuento = 0;

switch (numDiaDeLaSemana) {
    case 0:
        diaDeLaSemana = "Domingo";
        descuento=10;
        break;
    case 1:
        diaDeLaSemana = "Lunes";
        descuento=8;
        break;
    case 2:
        diaDeLaSemana = "Martes";
        descuento=12;
        break;
    case 3:
        diaDeLaSemana = "Miércoles";
        descuento=7;
        break;
    case 4:
        diaDeLaSemana = "Jueves";
        descuento=15;
        break;
    case 5:
        diaDeLaSemana = "Viernes";
        descuento=5;
        break;
    case 6:
        diaDeLaSemana = "Sábado";
        descuento=18;
        break;
    
};

// Muestro el día y el porcentaje de descuento en la pantalla principal

let diaDescuento = document.getElementById("descuentoDelDia");

let muestroDia = document.createElement("div");

muestroDia.innerHTML = `<h3 class="text-warning text-center"> ${diaDeLaSemana} </h3>
<h3 class="text-success text-center"> ${descuento}% </h3>`

diaDescuento.appendChild(muestroDia);

// Calculo el precio nuevo aplicando el descuento

let precioConDescuento = ((100-descuento)*total)/100;

//5- Determinar forma de pago

let formaDePago = prompt ("Indique la forma en la que desea pagar: \n" + "1-Efectivo\n" + "2-Cuotas");

let cuotas = 0;

if (formaDePago==="1") {
    
}else if (formaDePago==="2") {
    cuotas=parseInt(prompt("Ingrese la cantidad de cuotas en las que desea pagar (Máximo 6)"));
} else {
    console.log("Disculpe, algo salió mal durante el proceso, por favor recargue la página y vuelva a intentar la compra");
};

// Calculo el valor de cada cuota

function valorCuota (precioConDescuento, cuotas) {
    return (precioConDescuento/cuotas);
};

let redondeoCuota = (valorCuota (precioConDescuento, cuotas)).toFixed(2)

if (formaDePago==="2") { 
    if((cuotas>0) && (cuotas<=6)) {
        
    }else {
        alert("Disculpe, algo salió mal durante el proceso, por favor recargue la página y vuelva a intentar la compra");
    } 
}


//Ordeno los productos para mostrar en el carrito

let carritoOrdenado = carritoDeCompras.sort((a, b) => {
    if (a.nombre > b.nombre) {
        return 1;
    }
    if (a.nombre < b.nombre) {
        return -1;
    }
    // a es igual a b
    return 0;
});


// Muestro resumen (factura) de compra (Esto se mostraría en la pantalla final, como confirmación y resumen de la compra)


// Creo array con los códigos para luego verificar productos repetidos

const nombresDeProductos = carritoOrdenado.map((el) => el.codigo)


//Verifico productos repetidos
const verificarRepetidos = {};
nombresDeProductos.forEach(function (x) { verificarRepetidos[x] = (verificarRepetidos[x] || 0) + 1; });


//creo array solo con los códigos de producto
arrayCodigos = Object.keys(verificarRepetidos);


// Imprimo ticket de Compra


for (let cantidad in verificarRepetidos) {

    var i = Object.keys(verificarRepetidos).indexOf(cantidad);

    let obtengoCodigo = arrayCodigos[i];

    let traerProducto = carritoDeCompras.find((el) => el.codigo === obtengoCodigo);


    //IMPRIMIR PRODUCTOS EN LA PÁGINA DEL CARRITO

    let tablaProductos = document.getElementById("tablaResumen")

    let fila = document.createElement("tr");

    fila.innerHTML = `<td class="colCart alignCenter">${verificarRepetidos[cantidad]}</td>
                        <td class="colCart">${traerProducto.nombre}(s), marca: ${traerProducto.marca} </td>
                        <td class="colCart alignCenter">$${traerProducto.precio}</td>`

    tablaProductos.appendChild(fila);

};

//agrego fila envio

switch (envio2) {
    case "1":
        let tablaProductos = document.getElementById("tablaResumen")

        let fila = document.createElement("tr");
    
        fila.innerHTML = `<td></td>
                            <td>Envío a Domicilio</td>
                            <td class="colCart alignCenter">$${costoDeEnvio}</td>`
    
        tablaProductos.appendChild(fila);
        break;
}

//agrego fila descuento
    tablaProductos = document.getElementById("tablaResumen")

    fila = document.createElement("tr");
    let valorDescuento = total-precioConDescuento;
    fila.innerHTML = `<td></td>
                        <td>Descuento del día (${descuento}%)</td>
                        <td class="colCart alignCenter">$-${valorDescuento}</td>`

    tablaProductos.appendChild(fila);

//agrego fila Precio Final
tablaProductos = document.getElementById("tablaResumen")

fila = document.createElement("tr");

    fila.innerHTML = `<td></td>
                        <td class="precioTotal">Precio Final</td>
                        <td class="precioTotal colCart alignCenter">$${precioConDescuento}</td>`

    tablaProductos.appendChild(fila);

//agrego fila cuotas
tablaProductos = document.getElementById("tablaResumen")

fila = document.createElement("tr");

if (formaDePago==="2") { 
    if((cuotas>0) && (cuotas<=6)) {
        fila.innerHTML = `<td class="pagoEnCuotas colCart alignCenter">${cuotas}</td>
                        <td class="pagoEnCuotas">Cuotas</td>
                        <td class="pagoEnCuotas colCart alignCenter">$${redondeoCuota}</td>`
    }
} else if (formaDePago==="1") {
    fila.innerHTML = `<td></td>
                        <td class="precioTotal">Pago en Efectivo o Débito</td>
                        <td></td>`
};

tablaProductos.appendChild(fila);



