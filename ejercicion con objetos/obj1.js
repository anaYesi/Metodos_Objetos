function Rectangulo(b, h)
{
	this.base = b;
	this.altura = h;
	this.resultado = function(){

		return this.base * this.altura;
	};
}
var objeto = new Rectangulo(5,6);// instancia de un objeto
console.log(objeto.resultado());
var fecha = new Date().getFullYear();
document.write("abre inspeccionar y luego ve a consola");
/*function ejercicio1(arreglo, numero)
{
	var multiResul = arreglo.reduce(function(a,b){
	return a*b;
});
if(!isNaN(numero)){
  multiResul = multiResul * numero;
}
	return  multiResul * numero;
}*/

