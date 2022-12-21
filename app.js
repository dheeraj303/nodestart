const http=require('http');
const fs=require('fs');
const server=http.createServer(function(req,res){
    // fs.writeFile('first.txt','DUMMY',(err)=>{
    //     console.log("File Written successfully");
    // });
    // console.log(req.url);
    const url=req.url;
    if(url==='/test'){
        // res.write("test page");
        res.statusCode = 302;
        res.setHeader('Location','/');
        res.end();
    }
    else{
    res.write('<html>');
  res.write('<head><title>node js app</title></head>');
  res.write('<body></h1>First Node js app</h1></body>');
  res.write('</html>');
  res.end();
}
})
server.listen(80,()=>{
    console.log("server start");
})