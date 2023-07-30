
let alumnos = [];

function agregarAlumno() {
    let alumno = {
        nombre: prompt("Ingresar nombre del alumno:"),
        nota1: 0,
        nota2: 0,
        promedio: 0,
        inasistencias: 0,
    };
    
    alumno.nota1 = parseFloat(prompt("Ingresar nota primer periodo: "));
    alumno.nota2 = parseFloat(prompt("Ingresar nota segundo periodo: "));
    alumno.promedio = (alumno.nota1 + alumno.nota2) / 2;

    alumno.inasistencias = parseInt(prompt("Ingresar cantidad de faltas: "));
    
    if (alumno.promedio >= 6 && alumno.inasistencias <= 15) {
        console.log(alumno.nombre + " : Condición regular");
    } else {
        console.log(alumno.nombre + " : Condición libre");
    }

    console.log(alumno.nombre + " recibe una nota final de: " + alumno.promedio);
    alumnos.push(alumno);
}

function eliminarAlumno(nombreAlumno) {
    let index = alumnos.findIndex(alumno => alumno.nombre === nombreAlumno);
    if (index !== -1) {
        alumnos.splice(index, 1);
        console.log(`Alumno "${nombreAlumno}" eliminado.`);
    } else {
        console.log("Alumno no encontrado.");
    }
}

function mostrarAlumnos() {
    if (alumnos.length === 0) {
        console.log("No se ha ingresado ningún alumno aún.");
    } else {
        let listaAlumnos = "LISTA DE ALUMNOS INGRESADOS:\n";
        alumnos.forEach((alumno, index) => {
            listaAlumnos += `${index + 1}. ${alumno.nombre}\n`;
        });
        console.log(listaAlumnos);
    }
}

// Menú con switch
let option;
do {
    option = parseInt(prompt(
        "REGISTRO DE ALUMNOS\n" +
        "1. Ingresar nombre de alumno, calcular nota y condicion final\n" +
        "2. Eliminar alumno\n" +
        "3. Consultar lista de alumnos\n" +
        "4. Salir\n" +
        "Ingrese la opción deseada:"
    ));

    switch (option) {
        case 1:
            agregarAlumno();
            break;
        case 2:
            let nombreAlumno = prompt("Ingrese el nombre del alumno a eliminar: ");
            eliminarAlumno(nombreAlumno);
            break;
        case 3:
            mostrarAlumnos();
            break;
        default:
            break;
    }
} while (option !== 4);

