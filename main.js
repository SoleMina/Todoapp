function getInputValue() {
	var inputBox = document.getElementById("inputBox");
	return inputBox.value;
}
function task() {
	var inputBoxValue = getInputValue();
	if (inputBoxValue !== "") {
		doTask(inputBoxValue);
		clean();
	}
}
function doTask(taskText) {
	var task = document.getElementById("tasks");
	//Crear el elemento
	var elemento = document.createElement("div");

	elemento.className = "task";
	elemento.innerHTML = '<input id="tachado" class="check" type="checkbox" value="checkbox"  onclick="tachar()">'+'</input><i id="cero" class="glyphicon glyphicon-trash"></i>'+taskText;
	//Agregar elementos a tasks

	tasks.appendChild(elemento);
	var ex = tasks.lastChild;

	cero.onclick = function(){
		task.removeChild(elemento);
	}
}
function clean() {
	var inputBox = document.getElementById("inputBox");
	inputBox.value = "";
	inputBox.focus();
}
function validate(){
var input = document.getElementById("inputBox");
if(input.value.length < 5) {
alert('Escribe más de 5 carácteres.');
}else{
   document.getElementById(task());
}
}
/*
function tachar(){
	var tachado=document.getElementById("tachado").checked; //Checked: para que funcione la casilla de verificación como true o false.
	if(tachado==true){
		document.getElementById("tachado").strike();
	}
}
function tachar(){
    var element= document.getElementById("tachado").strike();
    return element.value;
}
*/