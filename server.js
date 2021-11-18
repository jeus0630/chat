const net = require('net');

const server = net.createServer(socket=>{
    process.stdin.on("data",buf=>{
        socket.write(buf);
    })

    socket.on("data",buf=>{
        console.log(buf.toString());
    })
});

server.listen(4000);