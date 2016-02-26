var suma = 0;
do {
	var ingreso = prompt("ingresa un número");
	suma += parseInt(ingreso);
} while (!isNaN(ingreso));
console.log(suma);