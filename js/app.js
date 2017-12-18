/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
// console.log(data);

var option = document.getElementsByTagName('select');
option[0].addEventListener("change", showDiv);
// console.log(opcion);

function showDiv () {

  var newDiv = document.createElement('div');
  var content = document.createElement('p');
  newDiv.classList.add('data-total-container');
  newDiv.class ='data-total-container';
  content.classList.add('total');
  content.innerHTML = "Total";

  newDiv.appendChild(content);

  var where = document.getElementById('overview');
  where.appendChild(newDiv);


}

var totalByGeneration = document.getElementsByTagName("select");

// function showTotal () {
  alert(totalByGeneration);





// var sede = data["CDMX"]
// var generation = sede["2017-2"]
// var studentsNum = generation.students
// var totalStudents = 0;
//
// totalStudents = Object.keys(studentsNum).length;












// var filtarElementos: funtion(e) {
//   var selectedIndex = e.target.selectedIndex;
//   var sede = e.target[selectedIndex].dataset.sede;
//   var numeroGeneracion = e.target[selectedIndex].dataset.generacion;
//   obtenerDatos(data,sede,numeroGeneracion);
// }
//
// // console.log(obtenerDatos);
//
// var totalStudents = function(generacion,correo,turno){
//     var contenedorCoders = document.getElementById("data");
//     var coder = document.createElement("div");
//     var fotoCoder = document.createElement("img");
//     var nombreCoder = document.createElement("p");
//     var mailCoder = document.createElement("p");
//     var contenedorTurnoGeneracion = document.createElement("div");
//     var generacionCoder = document.createElement("span");
//     var turnoCoder = document.createElement("span");
//
// // var filtrarElementos = function (e) {
// //     var selectedIndex = e.target.selectedIndex;
// //     //manejamos los atributos data
// //     var sede = e.target[selectedIndex].dataset.sede;
// //     var numeroGeneracion = e.target[selectedIndex].dataset.generacion;
// //     obtenerDatos(data,sede,numeroGeneracion)
// // }
