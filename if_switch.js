// Estructura condicional
// IF - ELSE IF - ELSE

// let dia_semana = "domingo"

// if (dia_semana.toLowerCase() == "jueves") {
//     console.log("No es viernes");
// } else if (dia_semana == "viernes") {
//     console.log("Es viernes");
// } else {
//     console.log("No es ni jueves ni viernes")
// }

// if (dia_semana == "domingo" || dia_semana =="sabado") {
//     console.log("Fin de semana!!");
// } else {
//     console.log("Toca ir a clase");

// }

/*
lunes : ensalada
martes : sardinas
miecoles : pollo
jueves : paella
viernes : salmon
sabado : pizza
domingo : calçots


El mensaje de salida debe ser:
"Hoy toca ensalada"
*/

let dia_semana = "miercoles";

let mensaje = "Hoy toca ";

if (dia_semana.toLowerCase() == "lunes") {
  console.log(mensaje + "ensalada");
} else if (dia_semana.toLowerCase() == "martes") {
  console.log(mensaje + "sardina");
} else if (dia_semana.toLowerCase() == "miercoles") {
  console.log(mensaje + "pollo");
} else if (dia_semana.toLowerCase() == "jueves") {
  console.log(mensaje + "paella");
} else if (dia_semana.toLowerCase() == "viernes") {
  console.log(mensaje + "salmon");
} else if (dia_semana.toLowerCase() == "sabado") {
  console.log(mensaje + "pizza");
} else if (dia_semana.toLowerCase() == "domingo") {
  console.log(mensaje + "calçots");
} else {
  console.log("No comes sino me dices exactamente que día");
}

//SWITCH

switch (dia_semana.toLowerCase()) {
  case "lunes":
    console.log(mensaje + "ensalada");
    break;
  case "martes":
    console.log(mensaje + "sardinas");
    break;
  case "miercoles":
    console.log(mensaje + "pollo");
    break;
  case "jueves":
    console.log(mensaje + "paella");
    break;
  case "viernes":
    console.log(mensaje + "salmon");
    break;
  case "sabado":
    console.log(mensaje + "pizza");
    break;
  case "domingo":
    console.log(mensaje + "calçots");
    break;
    default:
        console.log("dia incorrecto")
}


switch (dia_semana.toLowerCase()) {
    case "lunes":
    case "martes":
    case "miercoles":
    case "jueves":
    case "viernes":
      console.log("toca ir a clase");
      break;
    case "sabado":
    case "domingo":
      console.log("no tengo clase");
      break;
      default:
          console.log("dia incorrecto")
  }
  