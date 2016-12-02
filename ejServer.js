var http = require("http");
var url = require("url");
var fs = require("fs");
var mu  = require('mu2');
var server = http.createServer();
mu.root = __dirname + '/templates';

server.on("request",function(req,res){
	var urlData = url.parse(req.url,true);
	var pathname;
	if(urlData.pathname == "/"){
		pathname = "public/index.html";
		fs.readFile(pathname,function(err,html){
			if(err){
				res.writeHead(500);
				res.end("Ha ocurrido algo malo");
			}else{
				res.end(html);
			}	
		});
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


 
  