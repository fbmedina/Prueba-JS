/*Se pide agregar un botón a la página que al presionarlo agregue el elemento 6, luego el 7 y así sucesivamente (1 pto)

Se pide agregar un botón que elimine el primer elemento de la lista, al agregar un número nuevo no es necesario contar que se borró uno del principio, o sea si va quedando 3, 4, 5 al agregar uno nuevo este seguirá siendo el 6. (1 pto)

Ademas del botón para agregar, habrá un input, al presionar el botón se debe agregar el contenido del input dentro (1 pto)

Ademas del input hay otro input para ingresar un color, el texto debe aparecer en ese color (1 pto)*/

$(document).ready(function() {
	$("ul").before("<a href='#' id='agregar' class='button'>Boton agregar</a> <a href='#' id='quitar' class='button'>Boton quitar</a>");
	
	$("ul").after("<input class='texto' type='text' value=''> <a href='#' id='agregar_input' class='button'>Agregar textor</a>");

	$(".button").css({
		padding: "3px",
		background: "blue",
		color: "white"
	});


	$("#agregar").click(function() {
		var numero = $("li").length + 1;
		$("ul").append("<li>" + numero + "</li>");
	});

	$("#quitar").click(function() {
		$("li:first").empty();
	});

	$("#agregar_input").click(function() {
		$("ul").append($(".texto").val());
	});

});