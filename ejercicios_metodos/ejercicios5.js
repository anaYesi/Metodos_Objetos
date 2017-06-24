function temperaturas(arreglo)
{
	var  resultado = arreglo.map(function (a){
		return  (a * 9) / 5;
		
			});
	return resultado;
}

document.write(temperaturas([26]));