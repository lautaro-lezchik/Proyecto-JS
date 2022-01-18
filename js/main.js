let ingredientes = '';


let i=1;

while (i<=5) {
    let ingreso = prompt ("Ingrese el ingrediente " + i + " con el que desea elaborar una comida");
    let valid = ingreso.trim();
    
    if (valid==""){
        ingreso;
    }else {
        ingredientes += ingreso +"\n"
        i++;
    };
};

alert ("Usted va a elaborar una comida con los siguientes ingredientes: \n" + ingredientes);


