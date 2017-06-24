function edades(arreglo)
{
	var resultadoFiltrado = arreglo.filter(function(edad)
		{// filter nos ayudara a filtrar los numeros que pueden pasar
			//que sean mayor de 18 y pares
			if(edad > 18 && edad % 2 == 0)
			{
				return true;
			}
			else 
			{
				return false;
			}
		});
	var resultadoFinal = resultadoFiltrado.map(function(_edad)
		{
			return 2017 - _edad;
		});
	return resultadoFinal;
}

document.write(edades([20,16,89,6]));


