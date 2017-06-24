function numerosTelefonicos(arreglo, numero)
{//se le puede poner un nombre a la funcion collback como tambien no
	var numFiltrado = arreglo.filter(function suma(numcelu){

		numcelu = numcelu.toString();
		numero = numero.toString();
		//0 es el indice ,3 es el numero de elemntos
		if(numcelu.substr(0,3) == numero || numcelu.substr(-3) == numero)
			{
				return true;
			}
			else
			{
				return false;
			}
	});
	return numFiltrado;
}

document.write(numerosTelefonicos([938203938, 9287,25938,234,2456],938));