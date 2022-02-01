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
            console.log(`Usted comprará un(a) ${producto1.nombre}, marca ${producto1.marca}, color ${producto1.color}, a un precio de $${producto1.precio}`);
            precio = producto1.precio;
            carritoDeCompras.push(producto1);
            precioFinal.push(producto1["precio"]);
            break;
        case "2":
            console.log(`Usted comprará un(a) ${producto2.nombre}, marca ${producto2.marca}, color ${producto2.color}, a un precio de $${producto2.precio}`);
            precio = producto2.precio;
            carritoDeCompras.push(producto2);
            precioFinal.push(producto2["precio"]);
            break;
        case "3":
            console.log(`Usted comprará un(a) ${producto3.nombre}, marca ${producto3.marca}, color ${producto3.color}, a un precio de $${producto3.precio}`);
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

let envio = prompt("Si:\n\n-desea que le enviemos el producto a su domicilio: presione 1 (se aplicará un recargo de $" + costoDeEnvio + ")\n\n-lo va a retirar en la tienda: presione 2");

switch (envio) {
    case "1":
        precioFinal.push(costoDeEnvio);
        console.log(`El precio del envío es de $${costoDeEnvio}`);
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

console.log(`El total del carrito con ${carritoDeCompras.length} producto(s) es de: $${total}`);



// Obtener el día de la semana real para aplicar descuentos

const day = new Date();
let diaDeLaSemana = day.getDay();

let descuento = 0;

switch (diaDeLaSemana) {
    case 0:
        console.log("Hoy es Domingo, tiene un descuento del 10%");
        descuento=10;
        break;
    case 1:
        console.log("Hoy es Lunes, tiene un descuento del 8%");
        descuento=8;
        break;
    case 2:
        console.log("Hoy es Martes, tiene un descuento del 12%");
        descuento=12;
        break;
    case 3:
        console.log("Hoy es Miércoles, tiene un descuento del 7%");
        descuento=7;
        break;
    case 4:
        console.log("Hoy es Jueves, tiene un descuento del 15%");
        descuento=15;
        break;
    case 5:
        console.log("Hoy es Viernes, tiene un descuento del 5%");
        descuento=5;
        break;
    case 6:
        console.log("Hoy es Domingo, tiene un descuento del 18%");
        descuento=18;
        break;
    
};


// Calculo el precio nuevo aplicando el descuento

let precioConDescuento = ((100-descuento)*total)/100;



console.log(`El precio con el descuento aplicado es de $${precioConDescuento}`);


//5- Determinar forma de pago

let formaDePago = prompt ("Indique la forma en la que desea pagar: \n" + "1-Efectivo\n" + "2-Cuotas");

let cuotas = 0;

if (formaDePago==="1") {
    console.log("Dirijase a caja para efectuar el pago");
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
        console.log(`Usted va a pagar ${cuotas} cuotas de $${redondeoCuota}`);
    }else {
        console.log("Disculpe, algo salió mal durante el proceso, por favor recargue la página y vuelva a intentar la compra");
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

console.log(`Ticket de compra\n\nUsted compró:\n`);

for (let cantidad in verificarRepetidos) {

    var i = Object.keys(verificarRepetidos).indexOf(cantidad);

    let obtengoCodigo = arrayCodigos[i];

    let traerProducto = carritoDeCompras.find((el) => el.codigo === obtengoCodigo);

    console.log(
        `${verificarRepetidos[cantidad]} ${traerProducto.nombre}(s) ${traerProducto.marca}`
        );
};


console.log(`El precio total de la compra es de $${precioConDescuento}`);

if (formaDePago==="2") { 
    if((cuotas>0) && (cuotas<=6)) {
        console.log(`Usted va a pagar ${cuotas} cuotas de $${redondeoCuota}`);
        console.log("¡Gracias por su compra!");
    }
} else if (formaDePago==="1") {
    console.log(`Usted va a pagar en efectivo por caja`);
    console.log("¡Gracias por su compra!");
};

