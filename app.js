const http = require('http');
const PORT = 3000;

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end("Welcome to my First Page");
    }
    else if(req.url==='/about'){
        res.end("This about My first Page");
    }
    else{
        res.end(`
            <h1>Oops!</h1>
            <p>This is the wrong page</p>
            <p>Head back to home page<a href='/'>HOME</a></p>
            `
        );
    }
})

server.listen(PORT);
console.log(`Server listening at http://localhost:${PORT}`);