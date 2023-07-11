let option;
let nombreAlumno;
let nota1;
let nota2;
let promedio;
let inasistencias;


//calculo promedio
function Promediar() {

    nota1 = parseFloat(prompt("Ingresar nota primer periodo: "));
    nota2 = parseFloat(prompt("Ingresar nota segundo periodo: "));
    promedio = (nota1 + nota2) / 2;
    alert(nombreAlumno + " recibe una nota final de: " + promedio);

}

//condicion libre o regular 
function Faltas() {

    let inasistencias = parseFloat(prompt("Ingresar cantidad de faltas: "));
    if (inasistencias > 15) {
        alert(nombreAlumno+ " : Condición libre");
    } else {
        alert(nombreAlumno+ " : Condición regular");
    }
}


//menu con switch

do {
    option = parseInt(prompt(
        "REGISTRO DE ALUMNOS\n" +
        "1. Ingresar nombre de alumno\n" +
        "2. Calcular nota final\n" +
        "3. Condicion final\n" +
        "4. Salir\n" +
        "Ingrese la opción deseada:"
    ));

    switch (option) {

        case 1: nombreAlumno = prompt("Ingresar nombre del alumno");
            break;
        case 2: 
        Promediar();
        if (promedio > 6) {
            alert("Felicitaciones, estás aprobado");
        }
        else {
            alert("Estás desaprobado");
        }
        break;
        case 3:
            Faltas();
            break;
        default:
            break;
    }

} while (option !== 4);



