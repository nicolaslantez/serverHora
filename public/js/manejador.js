var ManejadorDeArticulos = {};

ManejadorDeArticulos.load = function(){
		var articulo1 = new Articulo("Noticia 1","Cuerpo de la Noticia 1","1","El mundo se conmovió con una de las tragedias aéreas más grandes de la historia del fútbol profesional: el avión que transportaba a los futbolistas del Chapecoense de Brasil, que debían disputar hoy la final de la Copa Sudamericana ante el Atlético Nacional, se estrelló cerca de Medellín, en el noroeste de Colombia, en un accidente que dejó 71 de muertos y seis sobrevivientes, la mayoría de ellos con heridas de gravedad. Aunque no hay confirmación sobre los peritajes, la principal hipótesis que manejan las autoridades aeronáuticas colombianas es que hubo una falla en el cálculo de combustible de los pilotos de la aeronave.");
		var articulo2 = new Articulo("Noticia 2","Cuerpo de la Noticia 2","2","Aunque se sigan jugando partidos, el mundo del fútbol está de luto. Luego de que varios de los principales equipos del planeta hicieran pública su solidaridad con el Chapecoense tras la tragedia aérea, ese mismo sentir se palpó en uno de los estadios más emblemáticos. Liverpool recibía en Anfield a Leeds United, por la Carling Cup. Y antes de que el local ganara 2 a 0, hubo un momento para recordar a las víctimas. Un minuto en el cual el estadio enmudeció. Los cantos de aliento en la previa, que bajaban de tribunas colmadas y fervorosas, se transformaron de pronto en el más respetuoso silencio, mientras los jugadores quedaban parados en el círculo central.");
		var articulo3 = new Articulo("Noticia 3","Cuerpo de la Noticia 3","3","El avión debía llegar a Medellín a las 21.33 horas. Pero perdió contacto con la torre de control cuando estaba cerca de un cerro conocido como La Ceja. Dos horas más tarde, lo peor se había confirmado: el avión se había estrellado. Sisy Arias Paravicini era egresada de piloto civil. El vuelo era parte de sus prácticas dentro de uno de los cursos que estaba haciendo dentro de su formación iniciada en Estados Unidos hace dos años.");
		this.articulos = [articulo1,articulo2,articulo3];
		
	};

ManejadorDeArticulos.render = function(element){
		var resultado="";
		for (var i=0;i<this.articulos.length;i++){
			resultado += this.articulos[i].render();
		}
		document.getElementById(element).innerHTML = resultado;
}