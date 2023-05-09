const http = require('http')
const server = http.createServer((req, res) => {
    console.log(req);
    //    res.write('welcome to HTTP Homepage');
    //    res.end();
    if (req.url === '/about') { res.end('welocome to About page') }
    if (req.url === '/') { res.end('welocome to Home page') }
    if (req.url === '/contact') { res.end('welocome to Contact page') }
    res.end(
        `<h1>OOPS</h1>
    <p> Can't looking for the page you're looking for </p>
    `
    )
})
server.listen(5000);