var http = require("http");
var url = require("url");
var server = http.createServer();

server.on("request",function(req,res){
	// var d = new Date();
	// var hora = d.getHours();
	// var minutos = d.getMinutes();
	// var segundos = d.getSeconds();

	// var horaActual = hora + ":" + minutos + ":" + segundos;
	// res.end(horaActual);

	var urlData = url.parse(req.url,true);
	res.end(JSON.stringify(urlData.pathname));
});

server.listen(process.env.PORT || 3000);