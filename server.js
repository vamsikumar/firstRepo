var http=require('http');
var url=require('url');
function start(route,handle){
	http.createServer(function(req,res){
          var postData="";
          var pathname=url.parse(req.url).pathname;
	  console.log("request for"+pathname+"recieved");
	    req.setEncoding("utf8");

    req.addListener("data", function(postDataChunk) {
      postData += postDataChunk;
      console.log("Received POST data chunk '"+
      postDataChunk + "'.");
    });

    req.addListener("end", function() {
      console.log(postData);
      route(handle, pathname, res, postData);
    });
	}).listen(8080);
}

exports.start=start;


