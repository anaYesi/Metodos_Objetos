function CalcularEdad(nombre, dia, mes, anioNaci)//clace
{
	this.nombre = nombre;
	this.dia = dia;
	this.mes = mes;
	this.anioNaci = anioNaci;
	this.edad = function(){//este es mi metodo
		var fecha = new Date();
		var edadActual=fecha.getFullYear() - this.anioNaci;
		if(this.mes >= (fecha.getMonth() +1))
		{
			edadActual--; 
			if(this.dia <fecha.getDate()&& this.mes == (fecha.getMonth() +1))
				edadActual++;
		}
		
			return edadActual;
		
	}
}
var objeto = new CalcularEdad("su",5,8,1991);//creacion de un objeto
console.log("Tu nombre es: " + objeto.nombre);
console.log("Dia de nacimiento: " + objeto.dia);
console.log("Mes de nacimiento: " + objeto.mes);
console.log("Año en que nacio: " + objeto.anioNaci);
console.log("la edad actual de "+objeto.nombre + " es : "+ objeto.edad());
document.write("abre inspeccionar y luego ve a consola");