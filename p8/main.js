/* Se pide hacer una página web que tiene un input que permite ingresar un nombre, un input para ingresar un email y un dropdown que permite seleccionar el sexo de un usuario

Al hacer click en enviar se pide:

Validar que el email no sea vacío (1 pto)
Ingresar los datos dentro del objeto persona y acto seguido guardar este objeto dentro de un arreglo llamado personas (1 pto)
*/

$(document).ready(function() {
	$("body").html("<form><label name='nombre'>Nombre:</label> <input name='nombre' type='text' value=''> <br> <label name='mail'>Mail:</label> <input  name='mail' class='mail' type='email' value=''><br><select name='genero'><option value='femenino'>Femenino</option><option value='masculino'>Masculino</option></select><input id='check' type='button' value='Enviar'></form>");
	$("#check").click(function(event) {
		if ($(".mail").val() === "") {
			alert("Pon un mail");
		}
	});
});