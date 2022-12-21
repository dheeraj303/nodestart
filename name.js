const http=require('http');

const server=http.createServer(function(req,res){
 
    res.end('<html><body><h1>Dheeraj Kumar</h1></body></html>');
 
});

server.listen(4000,()=>{
    console.log("server start");
})