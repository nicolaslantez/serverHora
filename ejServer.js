var http = require("http");
var url = require("url");
var fs = require("fs");
var server = http.createServer();
var cantidadDeVisitas = 0;


server.on("request",function(req,res){
	var urlData = url.parse(req.url,true);
	var pathname;
	if(urlData.pathname == "/"){
		cantidadDeVisitas++;
		pathname = "public/index.html";
		fs.readFile(pathname,function(err,html){
			if(err){
				res.writeHead(500);
				res.end("Ha ocurrido algo malo");
			}else{
				res.end(html);
			}	
		});
	}
	else if(urlData.pathname == "/stats"){
		if(urlData.query.user == 'ADMIN' || urlData.query.user == 'admin' && urlData.query.password == 'ADMIN' || urlData.query.password == 'admin'){
			res.end("Cantidad de Visitas:" + cantidadDeVisitas);
		}
		else{
			res.end("Usuario o password INCORRECTOS.")
		}
	}else{
	pathname = "public"+ urlData.pathname;
	fs.exists(pathname,function(exists){
		if(exists){
			fs.readFile(pathname,function(err,html){
				if(err){
					res.writeHead(500);
					res.end("Ha ocurrido algo malo");
				}else{
					res.end(html);
				}
		})
		}else{
			res.writeHead(404);
			res.end("No existe!");
		}
	});
	}
});

server.listen(process.env.PORT || 3000);


 
  