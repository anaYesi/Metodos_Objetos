function multiplos(arreglo, numero)
{
	var  resultado =[];
	//forEach solo recibe un parametro
	arreglo.forEach(function (a){
		if( a%numero == 0)
		{
			//push va mandar los parametros con comas
			resultado.push(a); //push agrega mas elementos al final de un array
		}
	});
	return resultado;
}

document.write(multiplos([7,21,44,80,77,35],7));



