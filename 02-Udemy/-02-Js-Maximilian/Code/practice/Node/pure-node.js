const http = require('http');

const server = http.createServer((request, response) => {
    let body = [];
    // console.log(request.method, request.url);

    request.on('data', (chunk) => {
        body.push(chunk);
    });
    request.on('end', () => {
        body = Buffer.concat(body).toString();
        // console.log(body);
        console.log(body.split('=')[1]);
        response.setHeader('content-type', 'text/html')
        response.write(`
        <form method="POST" action="/">
            <input type="text" name="username" id="username" />
            <button type="submit">Send</button>
        </form>
    `);
        response.end();
    });

});

server.listen(8080);