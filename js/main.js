// VARIABLES
// Crear una clase constructora 

class Producto {
    constructor (nombre, marca, color, precio,codigo, categoria, img) {
        this.nombre = nombre;
        this.marca = marca;
        this.color = color;
        this.precio = precio;
        this.codigo = codigo;
        this.categoria = categoria;
        this.img = img;
    }
}


//Creación de objetos

let listaProductos = [];

const producto1 = new Producto ("Aire Acondicionado 6700W INVERTER", "Samsung", "Blanco", 137000, "aa1", "Aires Acondicionados", "multimedia/product-image-aa1.jpeg");
listaProductos.push(producto1);

const producto2 = new Producto ("Heladera No Frost 409 Litros Acero NO FROST DuoCooling", "KOH-I-NOOR", "Gris", 53000, "he1", "Heladeras", "multimedia/product-image-he1.jpeg" );
listaProductos.push(producto2);

const producto3 = new Producto ("Lavarropas 10.8 1000RPM 8K", "Drean Gold Blue", "Plata", 93000, "la1", "Lavarropas", "multimedia/product-image-la1.jpeg");
listaProductos.push(producto3);

const producto4 = new Producto ("Heladera No Frost Inverter", "LG", "Gris", 110000, "he2", "Heladeras", "multimedia/product-image-he2.jpeg");
listaProductos.push(producto4);

const producto5 = new Producto ("Lavarropas 10Kg 1200RPM", "LG", "Blanco", 110000, "la2", "Lavarropas", "multimedia/product-image-la2.jpeg");
listaProductos.push(producto5);

const producto6 = new Producto ("Smart Tv 60\" UHD LED ThinQ 4K", "LG", "negro", 142000, "te1", "Televisores", "multimedia/product-image-te1.jpeg");
listaProductos.push(producto6);

const producto7 = new Producto ("Notebook 14\" Athl 4GB-1TB", "Acer", "Gris", 75900, "no1", "Notebooks", "multimedia/product-image-no1.jpeg");
listaProductos.push(producto7);

const producto8 = new Producto ("Smart Tv Led 55\" 4K", "Samsung", "negro", 91300, "te2", "Televisores", "multimedia/product-image-te2.jpeg");
listaProductos.push(producto8);

const producto9 = new Producto ("Aire Acondicionado Split 6450W Frio Calor COOL INVERTER", "LG", "negro", 205500, "aa2", "Aires Acondicionados", "multimedia/product-image-aa2.jpeg");
listaProductos.push(producto9);

//Variables DOM

let grillaProductos = document.getElementById("grillaProductos")
let contenedorResumen = document.getElementById("contenedorResumen")


//EVENTOS


//FUNCIONES
let carritoDeCompras = [];
muestroProductos();

function muestroProductos() {
    listaProductos.forEach (function (producto){
        const tarjetaProducto = document.createElement("div");
        tarjetaProducto.className= "tarjetaProductos col-md-3";

        const imagenProducto = document.createElement("img");
        imagenProducto.className= "imgProductos";
        imagenProducto.src = producto.img;

        const nombreProducto = document.createElement("h5");
        nombreProducto.textContent = producto.nombre;

        const marcaProducto = document.createElement("p");
        marcaProducto.textContent = producto.marca

        const precioProducto = document.createElement("p");
        precioProducto.textContent = `$${Number(producto.precio)}`

        const btnAddToCart = document.createElement("button");
        btnAddToCart.className= "addToCartButton";
        btnAddToCart.textContent = "Agregar al carrito"
        btnAddToCart.onclick = ()=> {
            agregarAlCarrito(producto.codigo)
        }


        tarjetaProducto.appendChild(imagenProducto);
        tarjetaProducto.appendChild(nombreProducto);
        tarjetaProducto.appendChild(marcaProducto);
        tarjetaProducto.appendChild(precioProducto);
        tarjetaProducto.appendChild(btnAddToCart);

        grillaProductos.appendChild(tarjetaProducto)
    })
}

function agregarAlCarrito(codigo){
    const productoAgregado = listaProductos.find(producto=> producto.codigo ===codigo)
    carritoDeCompras.push(productoAgregado)
    mostrarProductoAgregado(carritoDeCompras)
}

function mostrarProductoAgregado (carritoDeCompras) {
    carritoDeCompras.forEach (function (carritoDeCompras, index){
        const tarjetaProducto = document.createElement("div");
        tarjetaProducto.className= "tarjetaProductosCart";
        tarjetaProducto.id = `tarjetaProductosCard-${carritoDeCompras.codigo}` 
//contenedor Imagen
        const imgProductoCart = document.createElement("div");
        imgProductoCart.className= "contenedorImagenCart";

        const imagenProducto = document.createElement("img");
        imagenProducto.className= "imgProductosCarrito";
        imagenProducto.src = carritoDeCompras.img;

        imgProductoCart.appendChild(imagenProducto);
//Contenedor nombre y marca

        const descripcionProductoCart = document.createElement("div");
        descripcionProductoCart.className= "contenedorNombreMarca";

        const nombreProducto = document.createElement("h5");
        nombreProducto.textContent = carritoDeCompras.nombre;

        const marcaProducto = document.createElement("p");
        marcaProducto.textContent = carritoDeCompras.marca

        descripcionProductoCart.appendChild(nombreProducto)
        descripcionProductoCart.appendChild(marcaProducto)

// Contenedor Cantidad
        const cantidadProductoCart = document.createElement("div");
        cantidadProductoCart.className= "contenedorCantidad";

        const labelCantidad = document.createElement("p");
        labelCantidad.textContent = "Cantidad: ";

        const cantidadProducto = document.createElement("input");
        cantidadProducto.className = "inputCantidad"
        cantidadProducto.type = "number";
        cantidadProducto.value= 5

        cantidadProductoCart.appendChild(labelCantidad);
        cantidadProductoCart.appendChild(cantidadProducto);
//contenedor Precio
        const precioProductoCart = document.createElement("div");
        precioProductoCart.className= "contenedorPrecio";

        const precioProducto = document.createElement("p");
        precioProducto.textContent = `$${Number(carritoDeCompras.precio)}`
        
        precioProductoCart.appendChild(precioProducto);

//boton borrar elemento

        const delProductoCart = document.createElement("div");
        delProductoCart.className= "contenedorDelete";

        const delProducto = document.createElement("button");
        delProducto.className = "delProductoButton"
        delProducto.textContent = `Borrar Elemento`
        delProducto.onclick = ()=> {
            eliminarDelCarrito(index)
            borrarProducto(tarjetaProducto)
        }
        console.log(index);
        delProductoCart.appendChild(delProducto);
///
        
        tarjetaProducto.appendChild(imgProductoCart);
        tarjetaProducto.appendChild(descripcionProductoCart);
        tarjetaProducto.appendChild(cantidadProductoCart)
        tarjetaProducto.appendChild(precioProductoCart);
        tarjetaProducto.appendChild(delProductoCart);

        
        contenedorResumen.appendChild(tarjetaProducto);
        console.log(carritoDeCompras);
    })
}

function eliminarDelCarrito(index){
    carritoDeCompras.splice(index, 1);
}; 

function borrarProducto (tarjetaProducto) {
    contenedorResumen.removeChild(tarjetaProducto)
}