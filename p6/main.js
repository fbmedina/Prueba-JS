$(document).ready(function() {

	var size = parseInt(prompt("Ingrese el tamaño del lado del cuadrado"));
	var cuadrado = "";

	for (var i = 1; i <= size; i += 1){
  		for (var j = 1; j <= size; j += 1) {
    		if (j === 1 || i === 1 || j === size || i === size){
    			cuadrado += "*";
    		} else {
    			cuadrado += "&nbsp;&nbsp;";
    		}
    	}
    	cuadrado += '<br>'; 
  	}

  	$("div").html(cuadrado);

});