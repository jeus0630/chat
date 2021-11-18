const net = require('net');

const socket = net.createConnection(4000,"127.0.0.1",()=>{
    process.stdin.on("data",buf=>{
        socket.write(buf);
    })

    socket.on("data",buf=>{
        console.log(buf.toString());
    })
});