function edades(edad)
{
	var arreglo = [];
	edad.forEach(function(_edad)
		{
			if(_edad > 18 && _edad%2 == 0)
			{
				//var resultado = 2017 - _edad;
				var fecha = new Date().getFullYear();
				//tambien puede ser asi 
				//var anio = fecha.getFullYear();
				arreglo.push(anio - _edad);
			}
		});
	return arreglo;

}
document.write(edades([20,44,16,89,6]));