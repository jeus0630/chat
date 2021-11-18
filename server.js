const net = require('net');

const server = net.createServer(socket=>{
    console.log("연결 되었습니다");

    process.stdin.on("data",buf=>{
        socket.write(buf);
    })

    socket.on("data",buf=>{
        console.log(buf.toString());
    })
});

server.listen(4000);