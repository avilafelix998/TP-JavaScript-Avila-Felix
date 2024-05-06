let numero = parseInt(prompt("ingrese un su edad: "))
if(numero <= 12){
    console.log("usted es un niño")
}
else if(numero > 12 && numero < 18){
    console.log("usted es un adolecente")
}
else if(numero >=18 && numero < 60){
    console.log("usted es un adulto")
}
else if(numero >=60){
    console.log("usted es un adulto mayor")
}