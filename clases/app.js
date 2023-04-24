let firstname = "Adrian";
let surname = "Antonello";
let edad = 30;
let email = "adrian@fsmuni.com";
let casado = false;

let datosAlum = ['joe','Ryan','Marta'];

//let alumnos = [firstname, surname, edad, email, casado];

let alumnos2 = [
    ['Nombre','Apellido'], //primera fila
    ['Tach','Borki'], //segunda fila
    ['Warren','Weiss'] //tercera fila
];

console.log("\n");

console.log(alumnos2[0][0] + alumnos2[1][0]);
//console.log(alumnos3[0][1] + alumnos3[1][1]);

console.log("\n");

const cantMeses = 12;

function chekearCasado(casado) {
    if (casado) {
        return "casado";
    } else {
        return "soltero";
    }
}

console.log(
    "Nombre: " + firstname + 
    "\nApellido: " + surname + 
    "\nEdad: " + edad + 
    "\nEmail: "  + email + 
    "\nEstado civil: " + chekearCasado(casado)
    );
document.writeln(
    "<br>Nombre: " + firstname + 
    "<br>Apellido: " + surname + 
    "<br>Edad: " + edad + 
    "<br>Email: "  + email + 
    "<br>Estado civil: " + chekearCasado(casado)
    );

document.writeln("<br>"+firstname + " " + surname + " " + edad + " " + email + " " +chekearCasado(casado));

let persona =
{
    username: "Tach",
    surname: "Borki",
    email: "anpch@example.com",
    age: 30,
    married: false,
}
console.log(persona.username)

let score = 70;


if (score > 30) {
    console.log("Estas mejorando");
}
else if (score < 15) {
    console.log("necesitas mas practica");
}
else{
    console.log("Tenes que ver este tutorial");
}
document.writeln("<br>");
document.writeln("<br>");

if (edad <18){
    document.write((firstname), " Es menor de edad");
    if (edad>16){
        document.write(" y puede votar.")
    }
}
else{
    document.write((firstname), " Es mayor de edad");
}

document.write("<br>");
document.write("<br>");
let mesactual = 5;
document.write("El mes actual usando if anidado es ");
if (mesactual == 1){
    document.write("es enero");
}
else if (mesactual == 2) {
    document.write("es febrero");
}
else if (mesactual == 3) {
    document.write("es marzo");
}
else if (mesactual == 4) {
    document.write("es abril");
}
else if (mesactual == 5) {
    document.write("es mayo");
}
else if (mesactual == 6) {
    document.write("es junio");
}
else if (mesactual == 7) {
    document.write("es julio");
}
else if (mesactual == 8) {
    document.write("es agosto");
}
document.write("<br>");
document.write("<br>");

document.write("El mes actual usando el switch ");
switch(mesactual) {
    case 1:
        document.write("es enero");
        break;
    case 2:
        document.write("es febrero");
        break;
    case 3:
        document.write("es marzo");
        break;
    case 4:
        document.write("es abril");
        break;
    case 5:
        document.write("es mayo");
        break;
    case 6:
        document.write("es junio");
        break;
    case 7:
        document.write("es julio");
        break;
    case 8:
        document.write("es agosto");
        break;
    case 9:
        document.write("es septiembre");
        break;
    case 10:
        document.write("es octubre");
        break;
    case 11:
        document.write("es noviembre");
        break;
    case 12:
        document.write("es diciembre");
        break;
    default:
        document.write("El mes no es correcto");
        break;
}
document.write("<br>");

function mostrarNombre(nombre,apellido) {
    document.write(`Bienvenido ${nombre} ${apellido}`);
}
mostrarNombre(firstname,surname);