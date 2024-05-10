let nota_promedio = parseInt(prompt("ingrese su nota de examen"));
let nota_promedio2 = parseInt(prompt("ingrese su segunda nota de examen"));
let nota_promedio3 = parseInt(prompt("ingrese su tercer nota de examen"));

let promedio = parseInt((nota_promedio + nota_promedio2 + nota_promedio3) / 3)

switch (true) {
    case promedio>=1 && promedio<4:
        nota_fin="insuficiente"
        break;
    case promedio>=4 && promedio<6:
        nota_fin="regular"
        break;
    case promedio>=6 && promedio<8:
        nota_fin="nota buena"
        break;
    case promedio>=7 && promedio<9:
        nota_fin="nota muy buena"
        break;
    case promedio==10:
        nota_fin="sobresaliente";
        break;
    
    default:
        nota_fin = "ingrese un numero valido"
        break;
}
console.log("su nota final es: ", nota_fin);