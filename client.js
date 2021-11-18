const net = require("net");

const socket = net.createConnection(4000,"127.0.0.1",()=>{
    console.log("연결 되었습니다");

    process.stdin.on("data",buf=>{
        socket.write(buf);
    })

    socket.on("data",buf=>{
        console.log(buf.toString());
    })
});