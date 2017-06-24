function Persona(nombre, edad, pasaTiempo)
{
	this.nombre = nombre;
	this.edad = edad;
	this.pasaTiempo = pasaTiempo;

}
var objetoPersona = new Persona("Toni", 10, "leer")
console.log("Hola soy " + objetoPersona.nombre + " tengo " + objetoPersona.edad + " años y me gusta " + objetoPersona.pasaTiempo);
document.write("abre inspeccionar y luego ve a consola");