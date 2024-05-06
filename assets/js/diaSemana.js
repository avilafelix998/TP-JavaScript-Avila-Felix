let dia = parseInt(prompt("ingrese un numero de la semana: "))
if(dia < 8){
switch(dia){
case 1: 
console.log("lunes");
break;
case 2: 
console.log("martes");
break;
case 3:
console.log("miercoles");
break;
case 4:
console.log("jueves");
break;
case 5:
console.log("viernes");
break;
case 6:
console.log("sabado");
break;
case 7:
console.log("domingo")
break;
}
}
else {
    console.log("el numero ingresado no es valido")
}
