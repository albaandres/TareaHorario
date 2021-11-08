window.onload = function () {
    //funciones
    bGrabar.addEventListener("click", adquirirDatos, false);
    //document.querySelector("td").addEventListener("click", mostrarTodosDatos,true);
    
}
//todas las variables
var datos = new Array();
var horario = new Object();
var Profesor;
var Asignatura;
var DiaSemana;
var HoraDelDia;
var contador = 0;
var posicion = 0;
// Declarar el Map
var horarioMap = new Map();


//funcion para crear los objetos 
function datosHorario(Profesor, Asignatura, DiaSemana, HoraDelDia) {
    this.Profesor = Profesor;
    this.Asignatura = Asignatura;
    this.DiaSemana = DiaSemana;
    this.HoraDelDia = HoraDelDia;

    this.guarda = guardadatos;

}
//con esta funcion podemos guardar los datos, es utilizada en la función anterior
function guardadatos() {

    datos[contador] = this;
    contador = contador + 1;
    posicion = contador;
}
//como su propio nombre indica, esta funcion visualiza los datos guardados en 'visualiza'
function visualiza(posicion) {
    horario = new datosHorario();
    horario = datos[posicion];
    if (horario == undefined) { return; }

    document.getElementById("cNombre").value = horario.Profesor;
    document.getElementById("cAsignatura").value = horario.Asignatura;
    document.getElementById("cDias").value = horario.DiaSemana;
    document.getElementById("cHora").value = horario.HoraDelDia;
}
function adquirirDatos() {

    if(document.getElementById("cNombre").value==="Fernando" || document.getElementById("cNombre").value==="Ana Gloria" || document.getElementById("cNombre").value==="Marian" 
    || document.getElementById("cNombre").value==="Daniel" || document.getElementById("cNombre").value==="Gisela"){
        Profesor = document.getElementById("cNombre").value;
    }else{
        alert("NOMBRE INCORRECTO");
    }
    if(document.getElementById("cAsignatura").value==="DWEC" || document.getElementById("cAsignatura").value==="Diseño" || document.getElementById("cAsignatura").value==="DWES" 
    || document.getElementById("cAsignatura").value==="Despliegue" || document.getElementById("cAsignatura").value==="EIE"){
        Asignatura = document.getElementById("cAsignatura").value;  
    }else{
        alert("ASIGNATURA INCORRECTA");
    }
    DiaSemana = document.getElementById("cDias").value;
    HoraDelDia = document.getElementById("cHora").value;

    horario = new datosHorario(Profesor, Asignatura, DiaSemana, HoraDelDia);
    horario.guarda();
    
    //guardo la posicion en la tabla según el ID de la misma 
    posTabla= "c"+HoraDelDia+DiaSemana;
    imprimir(horario);
}

//Esta es la funcion que muestra el nombre de la asignatura en la tabla
function imprimir() {   
        document.getElementById(posTabla).innerHTML = horario.Asignatura;     
}

//esta parte no consigo hacerlas
/** function mostrarTodosDatos(horario){
    alert("parte de mostrar Todos los datos");
    document.getElementById(posTabla).innerHTML= horarioMap.get(posTabla).asign;
    
    alert(datosHorario);
}*/



// Grabar en el MAP
var horario = new datosHorario(Profesor, Asignatura, DiaSemana, HoraDelDia);

/**  Leer del Map por clave
*var key = this.id;
*horariocelda = horarioMap.get(key);
*horarioMap.set("c" + fila + columna, hProfAsig);
*/