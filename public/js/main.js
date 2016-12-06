window.onload = function() {
	ManejadorDeArticulos.load();
	setTimeout(function(){
		ManejadorDeArticulos.render('articulos');
	},1000)
};
