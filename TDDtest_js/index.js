var assert = require("assert");
function EjerciciosMetodos()
{
	 this.multiplicar = function(arreglo, numero)
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

		this.numerosTelefonicos = function(arreglo, numero)
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

		this.multiplos = function(arreglo, numero)
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

		this.multiplosNumeros = function(arreglo)
				{
					var  resultado = arreglo.map(function (a){
						return  (a * 2) + 1;

							});
					return resultado;
				}

		this.temperaturas = function(array)
		{
			var  resultado = array.map(function (a){
				return  (a * 9) / 5;

					});
			return resultado;
		}

		this.producto = function(arreglos)
		{
				//reduce es como si fuera un for inicializado ya
				var  resultado =arreglos.reduce(function (a,b){
					return a*b;
				});
				return resultado;
		}

		this.edades = function(arreglo)
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
}

var ejercicios = new EjerciciosMetodos();
				//prueba unitaria
			describe("Ejercicios con Metodos", function(){
				describe("ejercicio 1", function(){
					  it("prueba de [2,3] y 10", function(){
					    assert.equal(60,ejercicios.multiplicar([2,3],10));
							});
						it("prueba de [2,3] y hola", function(){
						    assert.equal(6,ejercicios.multiplicar([2,3],"hola"));
					    //assert es un modulo que tiene varios metodos
					    //es una instancia del objeto
					  });
					});

				describe("ejercicio 2", function(){
						it("cuando es[996548333, 934856207], 207", function(){
									assert.deepEqual([934856207],ejercicios.numerosTelefonicos([996548333, 934856207], 207));
									});
						it("cuando es [996548333, 934856207], 207", function(){
										assert.deepEqual([934856207],ejercicios.numerosTelefonicos([996548333, 934856207], 207));
									//assert es un modulo que tiene varios metodos
									//es una instancia del objeto
								});
							});

			 describe("ejercicio 3", function(){
						it("cuando es multplo de siete [7,21,44,80,77,35],7", function(){
								assert.deepEqual([7,21,77,35],ejercicios.multiplos([7,21,44,80,77,35],7));
								});
							});

			 describe("ejercicio 4", function(){
						it("cuando es [2,5,7,2,3,8,10]", function(){
							  assert.deepEqual([5,11,15,5,7,17,21],ejercicios.multiplosNumeros([2,5,7,2,3,8,10]));
								 });
							});

				describe("ejercicio 5", function(){
						it("cuando es [26]", function(){
								 assert.deepEqual([46.8],ejercicios.temperaturas([26]));
								});
							});

				describe("ejercicio 6", function(){
						it("cuando es [5,1,2,3,4]", function(){
								 assert.deepEqual(120,ejercicios.producto([5,1,2,3,4]));
								});
						});

				describe("ejercicio 7", function(){
						it("cuando es [20,16,89,6]", function(){
									assert.deepEqual(1997,ejercicios.edades([20,16,89,6]));
								});
						});
			});
