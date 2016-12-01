var http = require("http");
var url = require("url");
var fs = require("fs");
var server = http.createServer();

server.on("request",function(req,res){
	var urlData = url.parse(req.url,true);
	if(urlData.pathname = "/"){
		fs.readFile("public/index.html",function(err,html){
			if(err){
				res.writeHead(500);
				res.end("Ha ocurrido algo malo");
			}
			else{
			res.end(html)
			}	
		})
	}
	else{
	var pathname = "public"+ urlData.pathname;
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


 
  