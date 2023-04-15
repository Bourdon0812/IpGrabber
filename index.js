const app = require("express")();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`)
})

io.on('connection', (socket) => {
    console.log("connect");
    ip = socket.request.connection.remoteAddress;
    console.log(ip);

    socket.on('[Anonyme] ', (msg) => {
        io.emit('[Anonyme] ', msg);
    });

});

server.listen(80, () => {
    console.log("port 80 open");
})