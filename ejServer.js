var http = require("http");
var server = http.createServer();

server.on("request",function(req,res){
	var d = new Date();
	var hora = d.getHours();
	var minutos = d.getMinutes();
	var segundos = d.getSeconds();

	var horaActual = hora + ":" + minutos + ":" + segundos;
	res.end(horaActual);
});
server.listen(3000);