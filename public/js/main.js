// var meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
// var mes = prompt('Ingrese un mes');
window.onload = function() {
	// alert('Hola Mundo');
	ManejadorDeArticulos.load();
	setTimeout(function(){
		ManejadorDeArticulos.render('articulos');
	},1000)
};

// function show(shID) {
// 	if (document.getElementById(shID)) {
// 			document.getElementById(shID+'-show').style.display = 'none';
// 			document.getElementById(shID).style.display = 'block';
			
// 	}
// };

// window.onmousemove = function(){
// 	var numero = parseInt(Math.random()*10);
// 	// document.getElementById('test').innerHTML = "El factorial de" + numero  + "es:"  + factorial(numero);
// 	document.getElementById('test').innerHTML = "<h1>" + meses[parseInt(mes)-1] + "</h1>";
// };

// var factorial = function(numero){
// 	var numeroFinal = 1;
// 	for(i=1;i<= numero;i++){
// 		numeroFinal = numeroFinal*i;
// 	}
// 	return numeroFinal;
// }


/*
2 clases
Manejador de articulos
-load() --> cargar 3 articulos en memoria 
-render (elemento ) -> ej:render("articulos")


Articulo
-Titulo
-Contenido
-Render() ---> Devolver <article><div><h3>Titulo</h3></div><div><p>Contenido</p></div></article>

*/