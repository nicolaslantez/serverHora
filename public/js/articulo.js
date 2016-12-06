var samePage = false;

function Articulo(title,content,identificador,body){
	this.titulo = title;
	this.contenido = content;
	this.cuerpo = body;
	this.id = identificador;
};

Articulo.prototype.render = function(){
	if(samePage == false){
		return '<article><div class="panel panel-primary"><div class="panel-heading"><h3 class="panel-title">' + this.titulo + '</h3></div><div class="panel-body">' + this.contenido + '<p><a href=noticia' + this.id + '.html> Leer Mas </a></p></div></div></article>';
	}
	// else{
	// 	return '<article><div><h3>' + this.titulo + '</h3></div><div><p>' + this.contenido + '</p></div></article><a href="#" id="noticia' + this.id + '-show" class="showLink" onclick="show(noticia' + this.id + ')">Leer más.</a><div id="noticia"'+ this.id + ' class="more"><p>'+ this.cuerpo + '</p></div>';
	// }
};


