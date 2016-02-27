function Telefono (numero, marca, color) {
	this.numero = numero;
	this.marca = marca;
	this.color = color;
	this.contador_llamadas = 0;

	this.marcar = function () {
		contador_llamadas += 1;
	};
}

function Arreglos() {
	todos_los_telefonos = [];
	todos_los_telefonos_de_la_marca_apple = [];
	todos_los_telefonos_de_la_marca_samsung = [];
	todos_los_telefonos_de_la_marca_nokia = [];
	todos_los_telefonos_de_la_marca_desconocida = [];

	this.agregar_todos_los_telefonos = function (telefono){
		this.todos_los_telefonos.push(telefono);
		if (telefono.marca === "apple"){
			this.todos_los_telefonos_de_la_marca_apple.push(telefono);	
		} else if (telefono.marca === "samsung"){
			this.todos_los_telefonos_de_la_marca_samsung.push(telefono);	
		} else if (telefono.marca === "nokia"){
			this.todos_los_telefonos_de_la_marca_nokia.push(telefono);	
		} else {
			this.todos_los_telefonos_de_la_marca_desconocida.push(telefono);
		}
	};
}