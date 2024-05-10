let producto1 = parseInt(prompt("Ingrese la cantidad de productos a llevar: "));
let precio = parseInt(prompt("Ingrese el precio total de su compra: "));

if (isNaN(producto1) || isNaN(precio)) {
    console.log("Por favor, ingrese números válidos para la cantidad de productos y el precio.");
} else if (producto1 < 10 || precio < 20000) {
    console.log("No se superó la cantidad de productos o el precio mínimo.");
} else {
    let descuento = precio * 0.85;
    console.log("Su cantidad de productos es:", pto1, "y el precio total con el descuento aplicado es:", descuento);
}