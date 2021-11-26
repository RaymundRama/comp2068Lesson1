// use http module to run in browser
let http = require('http')
const url = require("url")
let accounting = require('accounting')

//start web server
http.createServer((req, res)=>{
    //header w/HTML content-type
    res.writeHead(200,{'Content-Type':'text/html; charset=UTF-8'})

    //write some content
    res.write('<h3> Tax Calculator</h3>')


    //read the url parameter string (the part after the '?')
    let query = url.parse(req.url, true).query
    console.log(query)

    //grab subtotal param from url. Use parseFloat so Js don't treat this as a string
    let subTotal = parseFloat(query.subtotal)

    //calculate tax and total
    let tax = subTotal * 0.13
    let total = subTotal + tax

    //display all three values
    res.write('<h2> Sub total </h2>' + accounting.formatMoney(subTotal) +
    '<br /><h2>Tax:</h2> ' + accounting.formatMoney(tax) +
    '<br/><h2>Total:</h2>' + accounting.formatMoney(total))


    res.end()
}).listen(3000);


console.log('Server running on port 3000')