
const fs=require('fs');
const requesthandler=(req,res)=>{
  
  
        if(req.url==='/'){
            // res.setHeader('Content-Type','application/html');
           
            fs.readFile('message.txt','utf8', function(err, data){
                    if(err){
                        console.log(err);
                    }
                // Display the file content
                console.log(data);
                res.write('<html><body>');
                res.write(`<h1>${data}</h1>`);
                res.write('<form action="/data" method="POST"><input type="text" name="text"><button type="submit" >send</button></form>');
                res.write('</body></html>');
                res.end();
            });
           
        }
        if(req.url==='/data' && req.method=='POST'){
            const body = [];
            req.on('data', (chunk) => {
            //   console.log(chunk);
              body.push(chunk);
            });
            req.on('end', () => {
              const parsedBody = Buffer.concat(body).toString();
              const message = parsedBody.split('=')[1];
              fs.writeFileSync('message.txt', message);
            });
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        }
}


// module.exports=requesthandler;
// module.exports={
//     handler:requesthandler,
//     text:"some hard coded text"
// }
// module.exports.handler=requesthandler;
// module.exports.text="some hard cded text";

exports.handler=requesthandler;
exports.text="some hard cded text";