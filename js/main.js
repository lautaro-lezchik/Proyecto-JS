/*-----------------------------------------------------------------------------*/
/*-------------------ELECTRODOMÉSTICOS AL DESCUENTO----------------------------*/
/*-----------------------------------------------------------------------------*/


// Crear una clase constructora 

class Producto {
    constructor (nombre, marca, color, precio) {
        this.nombre = nombre;
        this.marca = marca;
        this.color = color;
        this.precio = precio;
    }
}


//Creación de objetos

const producto1 = new Producto ("Aire Acondicionado", "Samsung", "Gris", 75000 );

const producto2 = new Producto ("Heladera", "Gafa", "Negra", 53000 );

const producto3 = new Producto ("Lavarropas", "LG", "Negro", 60000 );




// Pedir al usuario que elija un producto de la lista ingresando el número correspondiente

let elegir = prompt ("¡Bienvenido a Electrodomésticos al descuento! \n" + "Ingresa el número correspondiente al producto que desea comprar:\n" + "1- " + producto1.nombre + "\n" + "2- " + producto2.nombre + "\n" + "3- " + producto3.nombre);

//2- Imprimir por consola la confirmación de la elección y su precio

let precio=0;

switch (elegir) {
    case "1":
        console.log("Usted comprará un(a) " + producto1.nombre + ", marca " + producto1.marca + ", color " + producto1.color);
        precio = producto1.precio;
        break;
    case "2":
        console.log("Usted comprará un(a) " + producto2.nombre + ", marca " + producto2.marca + ", color " + producto2.color);
        precio = producto2.precio;
        break;
    case "3":
        console.log("Usted comprará un(a) " + producto3.nombre + ", marca " + producto3.marca + ", color " + producto3.color);
        precio = producto3.precio;
        break;

    default:
        alert("No ha elegido un producto. Por favor recarge la página")
        break;
};

console.log("El precio de lista de este producto es: $" + precio);

// 3- Obtener el día de la semana real para aplicar descuentos

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

//4- Calculo el precio nuevo aplicando el descuento

let precioConDescuento = ((100-descuento)*precio)/100;



console.log("El precio con el descuento aplicado es de $" + precioConDescuento );


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

//6- Calculo el valor de cada cuota

function valorCuota (precioConDescuento, cuotas) {
    return (precioConDescuento/cuotas);
};

if ((formaDePago==="2") && (cuotas>0)) {
    console.log("Usted va a pagar " + cuotas + " cuotas de $" + valorCuota (precioConDescuento, cuotas));
    console.log("¡Gracias por su compra!");
}else {
    console.log("Disculpe, algo salió mal durante el proceso, por favor recargue la página y vuelva a intentar la compra");
}

