var exec = require("child_process").exec;
var querystring=require("querystring");

function route(handle,pathname,res,postData){
  console.log("about to route request for"+pathname);
  if(typeof handle[pathname]==='function'){
   handle[pathname](res,postData);
  }
  else{
   console.log("No request handler found for " + pathname);
   res.writeHead(404, {"Content-Type": "text/plain"});
    res.write("404 Not found");
    res.end();
  }
}

function start(res,postData) {
  console.log("Request handler 'start' was called.");
 res.writeHead(200, {"Content-Type": "text/plain"});
    var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" method="post">'+
    '<textarea name="text" rows="20" cols="60"></textarea>'+
    '<input type="submit" value="Submit text" />'+
    '</form>'+
    '</body>'+
    '</html>';

    res.writeHead(200, {"Content-Type": "text/html"});
    res.write(body);
    res.end();

}

function upload(res,postData) {
  console.log("Request handler 'upload' was called.");
    res.write("You've sent: " + querystring.parse(postData).text);  
    res.write("from upload");
    res.end();

}

exports.route=route;
exports.start=start;
exports.upload = upload;

