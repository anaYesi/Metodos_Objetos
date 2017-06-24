var assert = require("assert");

function multiplicar(arreglo, numero)
{
	var multiResul = 0;
	if(Array.isArray(arreglo))
	{
		multiResul = arreglo.reduce(function(a,b){
		return a*b;
		});
	}else {
		if(!isNaN(arreglo)){
			multiResul = arreglo;
		}
	}
	if(!isNaN(numero)){
		multiResul = multiResul * numero;
	}
	return multiResul;
}
//prueba unitaria
describe("ejercicio 1", function(){
  it("prueba de [2,3] y 10", function(){
    assert.equal(60,multiplicar([2,3],10));
		});
		it("prueba de [2,3] y hola", function(){
	    assert.equal(6,multiplicar([2,3],"hola"));
    //assert es un modulo que tiene varios metodos
    //es una instancia del objeto
  });
});
