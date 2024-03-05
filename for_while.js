// Estructuras iterativas

let lista_alumnos = ["Sara", "Noa", "Jose", "Pau", "Francisco"]

let texto = "Hola"


for(let i = 0; i < texto.length; i++) {
    console.log(texto[i]);
}

for(let i = 0; i < lista_alumnos.length; i++) {
    console.log(lista_alumnos[i]);
}

//Descubrir quien es el alumno con el nombre mas largo
//El mensaje debe ser:
// "XXXX" tiene el nombre mas largo

let lista_alumnos2 = ["Sara", "Ferran", "Jose", "Pau", "Francisco", "Marta"]


let posicion = 0
let maximo = 1
for(let i = 0; i < lista_alumnos2.length; i++) {

    if(lista_alumnos2[i].length >= maximo)
    maximo = lista_alumnos2[i].length
    posicion = i
}

console.log(
    `${lista_alumnos2[posicion]} tiene el nombre más largo con ${maximo} letras`);


//WHILE 
/*
while (condicion) {

    codigo ...
}
*/

let inicio = 1

while (inicio <= 10) {
    console.log(`10 x ${inicio} = ${10 * inicio}`);
    inicio++
    
}
 
let inicio2 = 10

while (inicio2 > 0) {
    console.log(`10 x ${inicio2} = ${10 * inicio2}`);
    inicio2--
    
}

for (let i = 0; i < 4; i++) {
    console.log(`Paso ${i}`);
    i--
}

let passwordReal = "1234"
let passwordUsuario = ""

do {
    
    passwordUsuario = prompt("Introduce tu contraseña:")

} while(passwordReal != passwordUsuario ); 

alert ("Welcome !!")

console.log(3 === "3");

console.log(3 + "3");

console.log(3 !== "3");

