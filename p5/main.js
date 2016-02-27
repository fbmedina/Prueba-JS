$(document).ready(function() {
	var segundos = parseInt(prompt("Ingresa el número de segundos"));

	setTimeout(function() {
	    alert("Hola");
	},segundos * 1000);
});