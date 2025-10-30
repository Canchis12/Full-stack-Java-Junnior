const prompt = require("prompt-sync")();

let nombre = "Sebas";
let edad = 21;
let esEstudiante = true;

 //Ejercicio 2

let sinvalor;
let nulo = null;

//Ejercicio 3

let fechanaci = prompt("Su fecha de nacimiento");
let calcular_edad;

calcular_edad = 2025 - Number(fechanaci)

console.log("Su edad es:", calcular_edad)

//Ejercicio 4
let n1 = Number(prompt("Ingrese un número: "));
let n2 = Number(prompt("Ingrese un número: "));

let suma;

suma = n2 + n1;

console.log("La suma es", suma)

//Ejercicio 5

let edadusuario = Number (prompt("Digite su edad"));

if (edad >= 18){
    console.log("Felicidades puedes pasar")
}
else{
    console.log("Ishh lastima pero casi")
}

//Ejercicio 6

let num = Number (prompt("Ingrese un numero"));

if (num > 0){
    console.log("El numero es positivo")
}
else if (num < 0){
    console.log("El numero es negativo")
}
else {
    console.log("El numerillo es 0")
}
//Ejercicio 7

let nume = Number (prompt("Ingrese un numero"));

cont = 0;
while (cont <= nume ){
    console.log(cont)
    cont ++
}

//Ejercicio 8
let password = "1234";
let contraseña = prompt("Ingrese la contraseña")

while (contraseña != password){
    console.log("Lo siento mi pex esa no es la contraseña")
}
console.log("Bien Hecho le has atinado a la primera")

//Ejercicio 9

for ( let repe; repe < 10; repe++){
    console.log(repe)
}

//Ejercicio 10

let ingrenumero = Number(prompt("Ingrese un numero"));
let resultado = int;

for ( let i; i < 10; i++){
    resultado = ingrenumero * 1
    console.log(resultado)
}