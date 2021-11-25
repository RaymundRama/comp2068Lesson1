//reference node's build in http library to run a local webserver
let http = require('http')

// use the http library to start a web server and listen for HTTP request events
http.createServer((req,res) => {
    // write HTTP headers with a 200 ok Status code
    res.writeHead(200,{'Content-Type': 'text-plain'})
    res.write('Hello World - our first node page')
    res.end()
} ).listen(3000)

//print message to console to show server is active
console.log('Node server running on port 3000')