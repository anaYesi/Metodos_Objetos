function multiplicar(arreglo, numero)
{
	var multiResul = arreglo.reduce(function suma(a,b){
	return a*b;
});
	var resultado = multiResul * numero;
	return resultado;
}

document.write(multiplicar([4,4,5,12],9));
