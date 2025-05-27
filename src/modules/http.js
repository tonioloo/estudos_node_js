const http = require('http');

const port = 8080;

const server = http.createServer((req, res) => {
    if (req.url === '/home' ) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Home Page</h1>');
    }
    else if (req.url === '/gabriel') {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.end('<h1>Gabriel Page</h1>');
    }
    else if (req.url ==='/users') {
        const users = [
            {
                name: 'Gabriel',
                age: 25
            },
            {
                name: 'Maria',
                age: 30
            },
            {
                name: 'João',
                age: 28
            }
        ]

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(users));
    }
});

server.listen(port, () => console.log(`Server is running on port ${port}!`));