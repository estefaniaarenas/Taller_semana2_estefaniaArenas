//EJERCICIO #1
/*let nombreUno = prompt("Ingresa tu nombre persona uno");
let edadUno = parseInt(prompt("Ingresa tu edad"));
let nombreDos = prompt("Ingresa tu nombre persona dos");
let edadDos = parseInt(prompt("Ingresa tu edad"));

if (edadUno > edadDos) {
  alert(nombreUno + " Es mayor que " + nombreDos);
} else if (edadDos > edadUno) {
  alert(nombreDos + " Es mayor que " + nombreUno);
} else {
  alert("Las dos personas son de la misma edad");
}*/

//EJERCICIO #2
/*let notas=[];
let limite= 5;
let notasAcumuladas=0;
for(let i=0; i < limite; i++) {
notas[i] =parseInt(prompt(" Digita tu nota del estudiante " + i ));

notasAcumuladas= notasAcumuladas+notas[i];
}
 alert(" El promedio de las notas seria " + notasAcumuladas / limite);
*/

//EJERCICIO #3

/*let usuario = prompt("Digite su usuario");
let contrasenia = "dom";
let contraseniaUsada = prompt("Coloca la contraseña");

if (contrasenia === contraseniaUsada) {
  alert("Bienvenido al nuevo club de los magios");
} else {
  alert("La contraseña es equivocada, no eres bienvenido");
}*/

//EJERCICIO #4

/*let pelicula="batman";
let vacunaCovid="si";
let peliculaSolicitada= prompt("Digite su función");
let vacunaSolicitada= prompt("¿Cuenta con esquema de vacunas?");

if (vacunaCovid === vacunaSolicitada && pelicula===peliculaSolicitada){
    alert("Disfruta tu función");
} else{
    alert("No puedes ingresar a la función, completa tu esquema de vacunas");
}*/
//EJERCICIO #5
/*let anioDeNacimiento= parseInt(prompt("Ingresa tu año de nacimiento"));
let anioActual=parseInt(prompt("Digita el año actual"));

alert("Tu edad es" + (anioDeNacimiento - anioActual));*/

//EJERCICIO #6
/*let pais = prompt("Digite el nombre del país");
switch (pais.toUpperCase()) {
  case "COLOMBIA":
    alert(" el pais es " + pais + " y su capital es bogota ");
    break;

  case "ALEMANIA":
    alert(" el pais es " + pais + " y su capital es berlín ");
    break;

  case "ARGENTINA":
    alert(" el pais es " + pais + " y su capital es buenos aires ");
    break;

  case "JAPÓN":
    alert(" el pais es " + pais + " y su capital es tokio ");
    break;

  case "PERÚ":
    alert(" el pais es " + pais + " y su capital es lima ");
    break;
  default:
    alert("País no encontrado");
}*/

//EJERCICIO #7

/*let tabla = [];
let numeroInicial = 8;
let numeroActual = numeroInicial;
let i = 0;
document.write(" la tabla de multiplicar es del " + numeroInicial + " es :");
while (i < 100) {
  tabla[i] = numeroActual;
  numeroActual = numeroActual + numeroInicial;

  document.write("<br>");
  document.write(numeroInicial + " x " + (i + 1) + " = " + tabla[i]);
  i++;
}*/

//EJERCICIO #8
/*let palabra = prompt("Digite la palabra a traduccir");
switch (palabra.toLowerCase()) {
  case "hola":
    alert(" hola : hello");
    break;

  case "casa":
    alert(" casa : house ");
    break;

  case "perro":
    alert(" perro : dog ");
    break;

  case "gato":
    alert(" gato : cat ");
    break;

  case "amarillo":
    alert(" amarillo : yellow ");
    break;
  default:
    alert("La palabra no esta registrada en nuestro diccionario");
}*/