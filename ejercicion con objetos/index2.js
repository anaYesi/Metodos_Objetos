var assert = require("assert");
//ejercicios 1 calcular el area de un rectangulo con objetos
function Rectangulo(b, h)
{
    this.base = b;
    this.altura = h;
    this.resultado = function(){
        return this.base * this.altura;
      };
}

//pruebas unitarias para el area de un rectangulo
	describe("ejercicios 1", function(){
		it("Base 5 y altura 6 del rectangulo", function(){
      var respuesta = new Rectangulo(5,6);
			assert.equal(30,respuesta.resultado());
								});
						});
//ejercicio 2 Escribir una funcion que reciba como parametros
//nombre, dia, mes y año de nacimiento, asignar los parametros como
//propiedades de un objetos
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

  			return "la edad actual de "+ this.nombre +" es "+ edadActual;

  	}
}
//prueba unitaria del ejercicio 2
describe("ejercicios2 ", function(){
  it("El nombre es: Su, dia nacimiento 5, mes 8, anio 1991", function(){
    var respuesta = new CalcularEdad("su",5,8,1991);
    assert.equal("la edad actual de su es 25",respuesta.edad());
              });
          });

//ejercicio 3
function Persona(nombre, edad, pasaTiempo)
{
	this.nombre = nombre;
	this.edad = edad;
	this.pasaTiempo = pasaTiempo;
  this.mensaje = function()
  {
    return "Hola soy " + this.nombre + " tengo " + this.edad +
    " años y me gusta " + this.pasaTiempo;
  }
}
  //prueba unitaria del ejercicio 3
  describe("ejercicios 3", function(){
    it("Hola soy NOMBRE tengo EDAD años y me gusta PASATIEMPO", function(){
      var respuesta = new Persona("anita",21,"jugar");
      assert.equal("Hola soy anita tengo 21 años y me gusta jugar",respuesta.mensaje());
                });
            });
