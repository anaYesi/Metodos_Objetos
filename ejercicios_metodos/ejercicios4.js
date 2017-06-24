function multiplos(arreglo)
{
	var  resultado = arreglo.map(function (a){
		return  (a * 2) + 1;
		
			});
	return resultado;
}

document.write(multiplos([2,5,7,2,3,8,10]));
//otra forma para hacer
/*function multiplos(arreglo)
{
	var  resultado = arreglo.map(function (a){
		var valor =  a * 2;
		return valor;
		
		}).map(function(valor)
			{
				return valor +1;
			});
	return resultado;
}

document.write(multiplos([2,5,7,2,3,8,10]));*/
