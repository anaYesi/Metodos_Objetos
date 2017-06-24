function producto(arreglo)
{
	//reduce es como si fuera un for inicializado ya
	var  resultado =arreglo.reduce(function (a,b){
		return a*b;
	});
	return resultado;
}

document.write(producto([5,1,2,3,4]));
