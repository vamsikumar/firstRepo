
//this is the index file

var server=require('./server');
var router=require('./router');

var handle={}
handle["/"]=router.start;
handle["/start"] = router.start;
handle["/upload"] = router.upload;

server.start(router.route, handle);
